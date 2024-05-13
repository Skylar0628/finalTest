import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import { login } from '../API/0101Api';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    React.useEffect(()=>{
     // 取出token
      const token = document.cookie
      .split('; ')
      .find((row)=>row.startsWith('myToken='))
      ?.split('=')[1];
    axios.defaults.headers.common['Authoruzation'] = token;
    },[])

    const paperStyle = { 
        padding:20,
        width:220, 
        height:'55vh', 
        margin:'75px auto'
    }

    const [ data,setData ] = React.useState({
        username:'',
        password:''
    });

    const handleChange = (e)=>{
     const {name, value} = e.target
     setData({...data, [name]:value})
    }

    const handleSubmit = ()=> {
        login(data,navigate)
    }

   return(<div>
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                  <h2>login</h2>
                </Grid>
                <TextField name='username' label='username' variant='standard' placeholder='使用者帳號' fullWidth sx={{marginBottom:'1.2rem'}}  onChange={handleChange}/>
                <TextField name='password' label='password' variant='standard' placeholder='密碼' fullWidth onChange={handleChange}/>

                <Grid  sx={{ textAlign:'center', marginTop:'2rem'}} >
                  <Button variant="contained" fullWidth onClick={handleSubmit}>登入</Button>
                </Grid>

            </Paper>
        </Grid>
   </div>)
}

export default Login;