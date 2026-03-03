"use client";

import { useState } from "react";
import { Input } from "../components/ui/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (!form.email || !form.password) {
            setError("Email y contraseña son obligatorios");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("http://localhost:4000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Error al iniciar sesión");
            }

            localStorage.setItem("token", data.token);
            router.replace("/peliculas");

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
                <h1 className="text-3xl font-bold text-white text-center mb-2">
                    StreamHub
                </h1>

                <p className="text-gray-400 text-center mb-6">
                    ¡Bienvenido de nuevo! Inicia sesión para continuar
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                    <Input
                        label="Correo"
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <Input
                        label="Contraseña"
                        type="password"
                        name="password"
                        placeholder="Ingresa tu contraseña"
                        value={form.password}
                        onChange={handleChange}
                    />

                    {error && (
                        <p className="text-sm text-red-400 text-center">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition-colors"
                    >
                        {loading ? "Ingresando..." : "Iniciar sesión"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-400 mt-6">
                    ¿No tienes cuenta?{" "}
                    <Link
                        href="/register"
                        className="text-indigo-400 hover:underline"
                    >
                        Crear cuenta
                    </Link>
                </p>
            </div>
        </div>
    );
}