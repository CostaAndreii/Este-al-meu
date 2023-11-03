import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Container = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '45px',
  height: '40px',
}));

function MyLeave() {
  const totalDays = 50;
  const takenDays = 10;
  const plannedDays = 15;
  const availableDays = totalDays - (takenDays + plannedDays);

  return (
    <div className="MyLeave">
      <div className="absolute top-[185px] left-[1130px] text-xl tracking-[0.04em]">
        My Leave
      </div>
          <div className=" center middle absolute top-[223px] left-[1071px] rounded-3xs bg-white box-border w-[215px] h-11 border-[0.1px] border-solid border-black ">
        <p>{totalDays} Days</p>
      </div>
      <div className="absolute top-[276px] left-[1071px] rounded-3xs w-[80px] h-[42px]">
        <Stack direction="row" spacing={2}>
          <div>
            <Container style={{ backgroundColor: 'red' }}>
              {takenDays} Taken
            </Container>
          </div>
          <div>
            <Container style={{ backgroundColor: 'yellow' }}>
              {plannedDays} Planned
            </Container>
          </div>
          <div>
            <Container style={{ backgroundColor: 'green' }}>
              {availableDays} Available
            </Container>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default MyLeave;