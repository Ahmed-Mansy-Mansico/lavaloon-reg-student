import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddStudentRegistrationButton  from '../../components/add-student-registration/add-student-registration.component';
import { Fragment } from 'react';


const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  // ... other rows
];

const columns = [
  { 
    field: 'firstName', 
    headerName: 'First name', 
    width: 150,
    headerClassName: 'header-style',
  },
  { 
    field: 'lastName', 
    headerName: 'Last name', 
    width: 150,
    headerClassName: 'header-style',
  },
  // Add age column if needed
];


export default function StudentsRegistrationGrid() {
    return (
        <>
              <Box 
                sx={{ 
                  flex: 1, // Takes remaining space
                  width: '100%',
                  maxWidth: 'lg',
                  mx: 'auto', // Center horizontally
                  backgroundColor: 'white',
                  boxShadow: 3,
                  borderRadius: 2,
                  overflow: 'hidden',
                  '& .header-style': {
                    backgroundColor: '#f0f0f0',
                    fontWeight: 'bold',
                  },
                  '& .MuiDataGrid-cell': {
                    borderBottom: '1px solid #f0f0f0',
                  },
                  '& .MuiDataGrid-row:hover': {
                    backgroundColor: '#fafafa',
                  },
                }}
              >
                <DataGrid 
                  slots={{ toolbar: AddStudentRegistrationButton }}
                  rows={rows} 
                  columns={columns} 
                  sx={{
                    '& .MuiDataGrid-virtualScroller': {
                      backgroundColor: 'white',
                    },
                    '& .MuiDataGrid-columnHeaders': {
                      borderBottom: '2px solid #e0e0e0',
                    },
                    '& .MuiDataGrid-footerContainer': {
                      borderTop: '2px solid #e0e0e0',
                    },
                  }}        
                  />
              </Box>
              </>
    );
};