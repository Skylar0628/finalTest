import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Context from './AdminPdcContext';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function AdminPdcGrid(){

    const MyContext= React.useContext(Context);

    React.useEffect(()=>{
     console.log('this',MyContext.data)
    },[MyContext.data])

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'category',
          headerName: '分類',
          width: 120,
          editable: true,
        },
        {
          field: 'title',
          headerName: '名稱',
          width: 150,
          editable: true,
        },
        {
          field: 'origin_price',
          headerName: '售價',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'is_enabled',
          headerName: '啟用狀態',
          sortable: false,
          width: 160,
          valueGetter: (value, row) => row.is_enabled === 1 ? '啟用' : '停用',
        },
        {
            field: 'edit',
            headerName: '編輯',
            sortable: false,
            width: 160,
            renderCell: (params) => {
                return (
                    <Stack spacing={2} direction="row" >
                    <Button variant="contained">編輯</Button>
                    <Button variant="contained">刪除</Button>
                  </Stack>
                );
            },
          },
    ];
    const rows = MyContext.data
    return(<>
     <Box sx={{ height: 400, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
    
    </>)
}