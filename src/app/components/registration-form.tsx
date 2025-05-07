import React from "react";
import Paper from "@mui/material/Paper";

interface registrationFormProps {
    children: React.ReactNode;
}

const RegistrationForm = ({ children }: registrationFormProps) => {
    return (
        <>
            <Paper
                elevation={8}
                className="mx-auto mt-36 p-5 flex flex-col gap-10 items-center w-2xl h-68"
                sx={{ backgroundColor: "#f2f2f2" }}
            >
                {children}
            </Paper>
        </>
    );
};

export default RegistrationForm;
