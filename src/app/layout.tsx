import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainProvider } from "@/modules/core/providers/MainProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Michi Place",
    description: "A simple Next auth login tutorial",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={inter.className}>
                <MainProvider>
                  {children}
                </MainProvider>
            </body>
        </html>
    );
}
