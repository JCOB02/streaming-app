import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = ({
    label,
    error,
    className = "",
    ...props
}: InputProps) => {
    return (
        <div className="w-full space-y-1">
            {label && (
                <label className="text-sm text-gray-300">
                    {label}
                </label>
            )}

            <input
                {...props}
                className={`
                    w-full px-4 py-2.5 rounded-lg mt-2
                    bg-gray-900 text-white
                    border border-gray-700
                    placeholder:text-gray-500
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${error ? "border-red-500 focus:ring-red-500/40" : ""}
                    ${className}
                `}
            />

            {error && (
                <p className="text-xs text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
};