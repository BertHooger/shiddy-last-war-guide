import React, { Component, ErrorInfo } from "react";

import { Props, State } from "@/lib/interfaces/security/errorBoundary";

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="text-center p-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <h1 className="text-2xl font-bold mb-2">Oops, there was an error!</h1>
                    <p>Something went wrong. Please try refreshing the page or contact support if the problem persists.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;