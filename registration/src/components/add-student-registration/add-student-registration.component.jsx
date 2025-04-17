import { GridToolbarContainer } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function AddStudentRegistrationButton() {
  return (
    <GridToolbarContainer 
      sx={{ 
        justifyContent: 'flex-end',
        p: 2, // More standard padding than p: 3 (24px → 16px)
        gap: 2, // Adds spacing between elements if you add more later
        borderBottom: '1px solid',
        borderColor: 'divider', // Uses theme's divider color
        backgroundColor: 'background.paper' // Uses theme's paper color
      }}
    >
      <Button 
        color="primary" 
        variant="contained" 
        startIcon={<AddIcon />} 
        onClick={() => alert('Add Student Registration')}
        sx={{
          textTransform: 'none', // Prevents uppercase transformation
          fontWeight: 'medium', // Medium weight instead of bold
          boxShadow: 'none', // Removes default shadow
          '&:hover': {
            boxShadow: 'none', // Ensures no shadow on hover
            transform: 'translateY(-1px)' // Subtle lift effect
          }
        }}
      >
        Add Student Registration
      </Button>
    </GridToolbarContainer>
  );
}

export default AddStudentRegistrationButton;