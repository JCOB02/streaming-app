"use client";

import { useState } from "react";
import { Input } from "../components/ui/Input";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (!form.name || !form.email || !form.password) {
            setError("Todos los campos son obligatorios");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(form.email)) {
            setError("Ingresa un email válido");
            return;
        }

        if (form.password.length < 8) {
            setError("La contraseña debe tener mínimo 8 caracteres");
            return;
        }

        if(form.password !== form.confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        try {
            setLoading(true);

            const res = await fetch("http://localhost:4000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Error al registrar");
            }

            router.push("/peliculas");

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="w-full max-w-xl border-gray-700 rounded-2xl p-8 shadow-xl">
                <h1 className="text-3xl font-bold text-white text-center">
                    Crear cuenta
                </h1>
                <p className="text-gray-400 text-center mt-2 mb-6">
                    Regístrate para comenzar
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                    {error && (
                        <div className="border border-red-400 text-red-400 px-4 py-3 rounded text-sm relative" role="alert">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    <Input
                        label="Primer nombre y apellido"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <Input
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <Input
                        label="Contraseña"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <Input
                        label="Repite tu contraseña"
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />


                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 font-bold disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-lg transition-colors"
                    >
                        {loading ? "Registrando..." : "Registrarse"}
                    </button>
                </form>

                <p className="text-sm text-gray-400 text-center mt-6">
                    ¿Ya tienes cuenta?{" "}
                    <a
                        href="/login"
                        className="text-indigo-400 hover:underline"
                    >
                        Inicia sesión
                    </a>
                </p>
            </div>
        </div>
    );
}