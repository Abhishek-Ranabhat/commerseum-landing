import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="card">
                    <h1>Computer says no! 😭</h1>
                    <h2>
                        <span className="pre">⚠️ {this.state.error.message}</span>
                    </h2>

                    <details>
                        <summary>
                            <span style={{ cursor: "pointer" }}>more info</span>
                        </summary>
                        <p>
                            route:
                            <span className="pre">
                                {window?.location?.pathname ?? "unknown"}
                            </span>
                        </p>
                        <p>
                            browser:
                            <span className="pre"> {navigator?.userAgent ?? "unknown"}</span>
                        </p>
                    </details>

                    <p>
                        <a href="/">Go Home</a>
                    </p>
                    <p>
                        <button>Go Back</button>
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
