import {
    GridToolbarContainer
  } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


function AddStudentRegistrationButton() {
    return (
      <GridToolbarContainer>
        <Button color="primary" variant="contained" startIcon={<AddIcon />} onClick={handleClick}>
          Add Student Registration
        </Button>
      </GridToolbarContainer>
    );
  }

export default AddStudentRegistrationButton;