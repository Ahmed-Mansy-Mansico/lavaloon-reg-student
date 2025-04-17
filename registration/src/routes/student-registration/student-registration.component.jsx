
import { Routes, Route } from 'react-router-dom'

import StudentRegistrationPreview from '../student-registration-preview/student-registration-preview.component';

const StudentRegistration = ()=>{
    return (
        <Routes>
            <Route index element={<StudentRegistrationPreview/>} />
            <Route path='new' element={<h1>new student-registration</h1>} />
            <Route path=':student-registration' element={<h1>student-registration</h1>} />
        </Routes>
    )
};

export default StudentRegistration;