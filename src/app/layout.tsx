import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Netimóveis",
    description: "Desafio Frontend para o processo seletivo da Netimóveis.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
