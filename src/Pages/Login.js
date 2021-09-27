import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Login() {
    return (
        <div>
            <h3 style = {{textAlign: 'center'}}>Welcome Back!</h3>
            <h1 style = {{textAlign: 'center'}}>Please, Log In</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            style={{alignSelf: 'center'}}
            >
            <TextField style = {{textAlign: 'center'}} label="Outlined secondary" color="secondary" focused />
            </Box>
        </div>
    )
}

export default Login