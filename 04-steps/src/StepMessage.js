export function StepMessage({ step, children }) {
    return (
        // <p className="message">
        <div className="message">
            <h3>Step {step}</h3>
            {children}
        </p>
    );
}
