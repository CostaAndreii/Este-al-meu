import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRange } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
//import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import BB from './but';

dayjs.extend(utc);
dayjs.extend(customParseFormat)
dayjs.extend(localizedFormat);

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BCard() {

    const [value, setValue] = React.useState<DateRange<Dayjs>>([
        //dayjs.format('YYYY-MM-DD'),
        //dayjs('21-05-2018', 'DD-MM-YYYY'),
        dayjs().utc(),
        dayjs().utc(),
    ]);

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
        //console.log(event.target.value as string);
    };

    const [firstName, setFirstName] = React.useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const er = JSON.stringify(value)
        const temp = er.substring(2, 12)
        const temp2 = er.substring(29, 39)

        console.log(temp + ' <-> ' + temp2);
        //console.log(er);

        console.log(age);

        console.log(firstName);
    };

    return (
        <Card sx={{ minWidth: 100 }}>
            
            <CardActions>
                <CardContent>
                    <form onSubmit={handleSubmit}>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateRangePicker', 'DateRangePicker']} sx={{ minWidth: 55 }}>
                                <DemoItem component="DateRangePicker">
                                    <DateRangePicker
                                        value={value}
                                        onChange={(newValue) => setValue(newValue)}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                        <CardContent />
                        <Box sx={{ minWidth: 80 }}>
                            <FormControl fullWidth>
                                <InputLabel id="typeLeave">Leave type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="select"
                                    value={age}
                                    label="Leave type"
                                    onChange={handleChange}
                                //onInputChange={handleInputChange}
                                // input={<BootstrapInput />}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Bereavement Leave</MenuItem>
                                    <MenuItem value={20}>Blood Donation Leave</MenuItem>
                                    <MenuItem value={40}>Care Taker's Leave</MenuItem>
                                    <MenuItem value={50}>Child Raising Leave</MenuItem>
                                    <MenuItem value={60}>Civic Duty Leave</MenuItem>
                                    <MenuItem value={70}>Leave Without Pay</MenuItem>
                                    <MenuItem value={80}>Marriage Leave</MenuItem>
                                    <MenuItem value={90}>Maternity Leave</MenuItem>
                                    <MenuItem value={100}>Paternity Leave</MenuItem>
                                    <MenuItem value={110}>Professional Training Leave</MenuItem>
                                    <MenuItem value={120}>Sick Leave</MenuItem>
                                    <MenuItem value={130}>Time Off in lieu</MenuItem>
                                    <MenuItem value={140}>Transfer Leave</MenuItem>
                                    <MenuItem value={150}>Vacation Leave</MenuItem>
                                    <MenuItem value={160}>Volunteer Time Off</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <CardContent />
                        <Box
                component="form"
            sx={{
                width: 500,
                maxWidth: '100%',
                }}
                noValidate
                autoComplete="off"
        >
                            <TextField defaultValue="Hello world" type="text"
                                id="firstName"
                                name="firstName"
                                value={firstName}
                                onChange={(event) =>
                                    setFirstName(event.target.value)}
                                label="Reason" variant="outlined"
                            /> 
                        </Box>
                        <CardContent />
            <BB />
                    </form>
                </CardContent>
            </CardActions>
        </Card>
    );
}