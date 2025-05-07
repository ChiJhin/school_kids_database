import Link from "next/link";
import React from "react";

interface layoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: layoutProps) => {
    return (
        <div className=" flex">
            <div className="w-96 h-screen bg-gray-800">
                <Link href="/" className=" text-blue-100">
                    Назад
                </Link>
            </div>
            <div className="w-full h-screen bg-amber-500 ">{children}</div>
        </div>
    );
};

export default Layout;
