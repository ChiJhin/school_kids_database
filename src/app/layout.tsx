import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "База даних",
    description: "База даних для управління даними про дітей",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <body>{children}</body>
        </html>
    );
}
