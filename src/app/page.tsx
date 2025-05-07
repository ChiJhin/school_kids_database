import Link from "next/link";
import RegistrationForm from "./components/registration-form";
import RegistrationLable from "./components/registration-lable";
import Button from "@mui/material/Button";

export default function Home() {
    return (
        <main>
            <RegistrationForm>
                <RegistrationLable label="Логін" />
                <RegistrationLable label="Пароль" />
                <Button variant="outlined" className="w-24">
                    Увійти
                </Button>
                <Link href="/dashboard" className="outline-solid p-1">
                    Умовно увійти
                </Link>
            </RegistrationForm>
        </main>
    );
}
