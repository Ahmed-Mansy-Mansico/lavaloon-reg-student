
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";


export const StudentRegistrationContext = createContext({
    studentRegistrationRows: [],
    studentRegistrationColumn: [],
});

export const StudentRegistrationProvider = ({ children }) => {

    const [studentRegistrationRows, setStudentRegistrationRows] = useState([]);
    const [studentRegistrationColumn, setStudentRegistrationColumn] = useState([]);
    
    const value = {
        studentRegistrationRows,
        studentRegistrationColumn,
    };
    
    return (
        <StudentRegistrationContext.Provider value={value}>
        {children}
        </StudentRegistrationContext.Provider>
    );
    }