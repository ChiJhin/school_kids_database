import React from "react";

const Page = () => {
    return (
        <>
            <h1 className="text-4xl">Список класу 1-А</h1>
            <p>А далі буде таблиця зі списком</p>
            <table>
                <thead>
                    <tr>
                        <th>Ім&apos;я</th>
                        <th>Прізвище</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Іван</td>
                        <td>Іванов</td>
                    </tr>
                    <tr>
                        <td>Петро</td>
                        <td>Петров</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Page;
