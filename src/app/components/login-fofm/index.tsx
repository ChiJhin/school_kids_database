import React from "react";
import Paper from "@mui/material/Paper";

interface loginFormProps {
    children: React.ReactNode;
}

const LoginForm = ({ children }: loginFormProps) => {
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

export default LoginForm;
