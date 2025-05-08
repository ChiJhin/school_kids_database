"use client";

import React from "react";
import Button from "@mui/material/Button";

const LoginButton = () => {
    return (
        <Button
            variant="outlined"
            className="w-24"
            type="submit"
            onClick={() => alert("Button clicked!")}
        >
            Увійти
        </Button>
    );
};

export default LoginButton;
