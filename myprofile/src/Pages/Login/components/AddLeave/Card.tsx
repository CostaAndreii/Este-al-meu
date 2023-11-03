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




export default function BCard() {

    const [Email, setEmail] = React.useState('');
    const [Pass, setPass] = React.useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(Email);
        console.log(Pass);
    };

    return (
        <Card sx={{ minWidth: 100 }}>
            
            <CardActions>
                <CardContent>
                    <CardContent>
                            <Typography sx={{ fontSize: 35 }} variant="h5" >
                                Login
                            </ Typography >
                            <Typography sx={{ fontSize: 12 }} variant="h5" >
                            You don't have an account ? No problem, sign up <Link to='/SignUp'>here</Link>.
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
                        <Link
                            to={{
                                pathname: `/MyProfile/${Email}`
                            }}
                        >
                            <BB />
            </ Link>
                    </form>
                </CardContent>
            </CardActions>
        </Card>
    );
}