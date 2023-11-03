import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import BB from './but';
import { Link } from "react-router-dom";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BCard() {

    const [User, setUser] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setUser(event.target.value as string);
        //console.log(event.target.value as string);
    };

    const [Email, setEmail] = React.useState('');
    const [Pass, setPass] = React.useState('');
    const [CkPass, setCkPass] = React.useState('');
    const [SapID, setSapID] = React.useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(Email);
        console.log(Pass);
        console.log(CkPass);
        console.log(SapID);

        console.log(User);
    };

    return (
        <Card sx={{ minWidth: 100 }}>
            
            <CardActions>
                <CardContent>
                    <CardContent>
                            <Typography sx={{ fontSize: 35 }} variant="h5" >
                                Sign Up
                            </ Typography >
                            <Typography sx={{ fontSize: 12 }} variant="h5" >
                            You have an account ? No problem, Login <Link to='/'>here</Link>.
                            </ Typography >
                    </ CardContent>
                    
                    <form onSubmit={handleSubmit}>

                        <Box
                            component="form"
                            sx={{
                                width: 300,
                                maxWidth: '100%',
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField defaultValue="Hello world" type="text"
                                id="firstName"
                                name="firstName"
                                sx={{ width: 300 }}
                                value={Email}
                                onChange={(event) =>
                                    setEmail(event.target.value)}
                                label="Email" variant="outlined"
                            />
                        </Box>
                        <CardContent />
                        <Box
                            component="form"
                            sx={{
                                width: 300,
                                maxWidth: '100%',
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField defaultValue="Hello world" type="text"
                                id="firstName"
                                name="firstName"
                                sx={{ width: 300 }}
                                value={Pass}
                                onChange={(event) =>
                                    setPass(event.target.value)}
                                label="Password" variant="outlined"
                            />
                        </Box>
                        <CardContent />
                        <Box
                            component="form"
                            sx={{
                                width: 300,
                                maxWidth: '100%',
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField defaultValue="Hello world" type="text"
                                id="firstName"
                                name="firstName"
                                sx={{ width: 300 }}
                                value={CkPass}
                                onChange={(event) =>
                                    setCkPass(event.target.value)}
                                label="Check Password" variant="outlined"
                            />
                        </Box>
                        <CardContent />
                        <Box
                            component="form"
                            sx={{
                                width: 300,
                                maxWidth: '100%',
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField defaultValue="Hello world" type="text"
                                id="firstName"
                                name="firstName"
                                sx={{ width: 300 }}
                                value={SapID}
                                onChange={(event) =>
                                    setSapID(event.target.value)}
                                label="Employee ID" variant="outlined"
                            />
                        </Box>
                        <CardContent />
                        <Box sx={{ minWidth: 80 }}>
                            <FormControl fullWidth>
                                <InputLabel id="typeLeave">Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="select"
                                    value={User}
                                    label="Leave type"
                                    onChange={handleChange}
                                //onInputChange={handleInputChange}
                                // input={<BootstrapInput />}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Employee'}>Employee</MenuItem>
                                    <MenuItem value={'Manager'}>Manager</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <CardContent />
                        <Link
                            to={{
                                pathname: `/MyProfile/${Email}`
                            }}
                        >
                            <BB />
                        </ Link>
                    </form>
                </ CardContent>
            </CardActions>
        </Card>
    );
}