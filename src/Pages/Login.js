import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
    return (
        <div>
            <h3 style = {{textAlign: 'center'}}>Welcome Back!</h3>
            <h1 style = {{textAlign: 'center'}}>Please, Log In</h1>
            {/* <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            style={{alignSelf: 'center'}}
            > */}
            <TextField style = {{textAlign: 'center', position: 'absolute', left: '50%', top: '20%',
            transform: 'translate(-50%, -50%)'}} label="Username: "  focused />
            <TextField style = {{textAlign: 'center', position: 'absolute', left: '50%', top: '30%',
            transform: 'translate(-50%, -50%)'}} label="Password: " color="secondary" focused />
            <Button variant="contained" style = {{textAlign: 'center', position: 'absolute', left: '50%', top: '40%',
            transform: 'translate(-50%, -50%)'}} size="large">Submit</Button>
            {/* </Box> */}
        </div>
    )
}

export default Login