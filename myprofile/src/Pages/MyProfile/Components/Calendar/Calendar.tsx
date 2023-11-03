import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

const orderedDates = [
  { date: '2023-03-10', status: 'done' },
  { date: '2023-03-11', status: 'done' },
  { date: '2023-03-12', status: 'done' },
  { date: '2023-06-20', status: 'undone' },
  { date: '2023-06-21', status: 'undone' },
  { date: '2023-06-22', status: 'done' },
  { date: '2023-04-23', status: 'done' },
  { date: '2023-04-24', status: 'done' },
  { date: '2023-04-25', status: 'done' },
  { date: '2023-06-10', status: 'pending' },
  { date: '2023-06-11', status: 'pending' },
  { date: '2023-06-12', status: 'pending' },
  { date: '2023-06-13', status: 'pending' },
  { date: '2023-06-14', status: 'pending' },
  { date: '2023-06-15', status: 'pending' },
];

type BadgeColors = {
  [key: string]: string;
};

const badgeColors: BadgeColors = {
  done: 'green',
  undone: 'red',
  pending: 'yellow',
};

function fakeFetch(date: Dayjs, { signal }: { signal: AbortSignal }) {
  return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysToHighlight = orderedDates
        .filter((orderedDate) => date.format('YYYY-MM') === dayjs(orderedDate.date).format('YYYY-MM'))
        .map((orderedDate) => dayjs(orderedDate.date).date());

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}

const initialValue = dayjs('2023-06-15');

function ServerDay(props: PickersDayProps<Dayjs>) {
  const { day, outsideCurrentMonth, ...other } = props;
  const dateStr = day.format('YYYY-MM-DD');
  
  const status = orderedDates.find((orderedDate) => orderedDate.date === dateStr)?.status;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={undefined} 
      style={{
        backgroundColor: status ? badgeColors[status] : 'white', 
        color: 'white', 
      }}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

export default function DateCalendarServerRequest() {
  const requestAbortController = React.useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchHighlightedDays = (date: Dayjs) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    return () => {
      if (requestAbortController.current) {
        requestAbortController.current.abort();
      }
    };
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    fetchHighlightedDays(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
      />
    </LocalizationProvider>
  );
}
