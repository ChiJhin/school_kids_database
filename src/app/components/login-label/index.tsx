import React from "react";
import TextField from "@mui/material/TextField";

const LoginLable = ({ label }: { label: string }) => {
    return (
        <>
            <TextField
                id="outlined-basic"
                label={label}
                variant="outlined"
                className="w-full"
            />
        </>
    );
};

export default LoginLable;
