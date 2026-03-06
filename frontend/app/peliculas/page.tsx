"use client";

import { useRouter } from "next/navigation";

export default function PeliculasPage() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.replace("/login");
    };

    return (
        <div className="min-h-screen p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Películas</h1>

                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition"
                >
                    Cerrar sesión
                </button>
            </div>

            {/* Aquí irá tu contenido después */}
        </div>
    );
}