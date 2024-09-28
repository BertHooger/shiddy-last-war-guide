"use client";

import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import LoadingSpinner from "../theme/LoadingSpinner";

export function Providers({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);

        }, 1000)

        return () => clearTimeout(timer);
    }, []);

    return (
        <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {isLoading ? <LoadingSpinner /> : children}
            </ThemeProvider>
        </SessionProvider>
    );
}