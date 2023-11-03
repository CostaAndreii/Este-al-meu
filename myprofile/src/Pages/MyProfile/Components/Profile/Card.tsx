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

    const [Email, setEmail] = React.useState('');
    const [Pass, setPass] = React.useState('');
    const [Emp, setEmp] = React.useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(Email);
        console.log(Pass);
        console.log(Emp);
    };

    return (
        <Card sx={{ minWidth: 100 }}>
            
            <CardActions>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Box
                component="form"
            sx={{
                width: 500,
                maxWidth: '100%',
                }}
                noValidate
                autoComplete="off"
        >
                            <TextField disabled defaultValue="Hello world" type="text"
                                id="firstName"
                                name="firstName"
                                value={Email}
                                onChange={(event) =>
                                    setEmail(event.target.value)}
                                label="elena@hcl.com" variant="outlined"
                            /> 
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
                                value={Pass}
                                onChange={(event) =>
                                    setPass(event.target.value)}
                                label="New Password" variant="outlined"
                            />
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
                            <TextField disabled defaultValue="Hello world" type="text"
                                id="firstName"
                                name="firstName"
                                value={Emp}
                                onChange={(event) =>
                                    setEmp(event.target.value)}
                                label="E0.1" variant="outlined"
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