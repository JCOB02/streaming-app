"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SLIDES = [
  {
    title: "Thor: Ragnarok",
    meta: "2017 • Acción",
    desc:
      "Thor está encarcelado en el otro lado del universo y corre una carrera contra el tiempo. Debe detener el Ragnarok.",
    // pon aquí la imagen exacta que uses en tu diseño (en /public/assets/...)
    // Si en tu CSS ya lo maneja por background, puedes dejarlo vacío.
    bg: "/assets/postersaprobados/thor.jpg",
  },
  // agrega los 2 slides que ya trae el HTML si quieres que sea 1:1
];

export default function HeroCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setI((v) => (v + 1) % SLIDES.length);

  return (
    <section className="hero-banner">
      <div className="banner-slide active" style={{ backgroundImage: `url(${SLIDES[i].bg})` }}>
        <div className="banner-content">
          <h1 className="banner-title">{SLIDES[i].title}</h1>
          <div className="banner-meta">
            <span className="highlight">{SLIDES[i].meta}</span>
          </div>
          <p className="banner-description">{SLIDES[i].desc}</p>

          <div className="banner-buttons">
            <Link href="/peliculas" className="btn-primary">
              <span>▶</span> Reproducir
            </Link>
            <Link href="/peliculas" className="btn-secondary">
              <span>ℹ</span> Más Información
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-controls">
        <button id="hero-prev" className="hero-btn" aria-label="Anterior" type="button" onClick={prev}>
          &lt;
        </button>
        <button id="hero-next" className="hero-btn" aria-label="Siguiente" type="button" onClick={next}>
          &gt;
        </button>
      </div>

      <div className="hero-indicators">
        {SLIDES.map((_, idx) => (
          <span
            key={idx}
            className={`indicator ${idx === i ? "active" : ""}`}
            data-slide={idx}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  );
}