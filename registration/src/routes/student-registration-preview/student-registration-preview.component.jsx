import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import  StudentsRegistrationGrid  from '../../components/students-registration-grid/students-registration-grid.component';


export default function StudentRegistrationPreview() {

  return (
    <Box 
      sx={{ 
        p: 3,
        backgroundColor: '#f5f5f5',
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <StudentsRegistrationGrid />
    </Box>
  );
}