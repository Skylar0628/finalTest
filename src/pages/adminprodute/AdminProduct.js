import Box from '@mui/material/Box';
import  {Typography, Button, Stack} from '@mui/material';
import React from 'react';
import { getProductAll } from '../../API/0101Api';
import AdminPdcGrid from './AdminPdcGrid';
import Context from './AdminPdcContext';



export default function AdminProduct(){
    const MyContext = React.useContext(Context);

    React.useEffect(()=>{
        getProductAll(MyContext);
    },[])

    
    return(<>
     <Box width="100%">
        <Stack direction="row" justifyContent="space-between" marginBottom={3}>
           <Typography variant='h5'> 產品列表 </Typography>
           <Button variant="contained">建立新商品</Button>
        </Stack>
    
        <AdminPdcGrid/>
     </Box>
    
    </>)
}