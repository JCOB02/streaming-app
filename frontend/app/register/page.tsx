"use client";

import { useState } from "react";
import { Input } from "../components/ui/Input";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
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

        // 🔹 Validación campos vacíos
        if (!form.name || !form.email || !form.password) {
            setError("Todos los campos son obligatorios");
            return;
        }

        // 🔹 AQUÍ va la validación del email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(form.email)) {
            setError("Ingresa un email válido");
            return;
        }

        if (form.password.length < 8) {
            setError("La contraseña debe tener mínimo 8 caracteres");
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
            <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-xl">
                <h1 className="text-3xl font-bold text-white text-center">
                    Crear cuenta
                </h1>
                <p className="text-gray-400 text-center mt-2 mb-6">
                    Regístrate para comenzar
                </p>

                {error && (
                    <p className="text-sm text-red-400 text-center">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <Input
                        label="Nombre"
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="correo@ejemplo.com"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <Input
                        label="Contraseña"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-lg transition-colors"
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