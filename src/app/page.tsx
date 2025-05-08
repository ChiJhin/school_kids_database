import Link from "next/link";
import LoginLable from "./components/login-label";
import LoginForm from "./components/login-fofm";
import LoginButton from "./components/login-button";

export default function Home() {
    return (
        <main>
            <LoginForm>
                <LoginLable label="Логін" />
                <LoginLable label="Пароль" />
                <LoginButton />
                <Link href="/dashboard" className="outline-solid p-1">
                    Умовно увійти
                </Link>
            </LoginForm>
        </main>
    );
}
