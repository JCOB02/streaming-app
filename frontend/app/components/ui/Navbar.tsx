"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button
          className="hamburger-btn"
          aria-label="Menú"
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <Link href="/inicio" className="logo-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo3.png" alt="StreamHub Logo" className="logo-img" />
        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link href="/inicio" className={pathname === "/inicio" ? "active" : ""}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/peliculas" className={pathname === "/peliculas" ? "active" : ""}>
              Películas
            </Link>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Series
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-center">
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Buscar..." />
        </div>
      </div>

    <div className="nav-right">
        <Link href="/login" className="btn-primary nav-login-btn">
        <svg
            className="user-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M20 21a8 8 0 0 0-16 0" />
            <circle cx="12" cy="7" r="4" />
        </svg>
        <span>Iniciar sesión</span>
        </Link>
    </div>
    </nav>
  );
}