"use client";

import { useEffect, useMemo, useState } from "react";

type Slide = {
  title: string;
  meta: string;
  description: string;
  background: string;
};

export default function HeroCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        title: "Coco",
        meta: "2017 • Animación • Pixar",
        description: "Un viaje increíble entre música, familia y recuerdos.",
        background:
          "https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
      },
      {
        title: "Avengers",
        meta: "2012 • Acción • Marvel",
        description: "Los héroes se unen para salvar el mundo.",
        background:
          "https://static01.nyt.com/images/2017/07/14/arts/14WARPLANET/14WARPLANET-videoSixteenByNineJumbo1600.jpg",
      },
      {
        title: "Minions",
        meta: "2015 • Animación • Comedia",
        description: "Caos y diversión con los minions.",
        background:
          "https://media.revistagq.com/photos/5f5f50fa09c89c3fca562703/16:9/w_2560%2Cc_limit/leonardo-dicaprio-el-lobo-de-wall-street.jpg",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);

    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative mb-10 h-[75vh] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.background})` }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c15] via-transparent to-transparent" />

      <div className="absolute bottom-20 left-10 max-w-xl text-white">
        <h1 className="mb-4 text-5xl font-bold">{slides[index].title}</h1>
        <p className="mb-4 text-[#aeb4c0]">{slides[index].meta}</p>
        <p className="mb-6">{slides[index].description}</p>
        <button className="rounded-full bg-[#3a86ff] px-6 py-3 font-semibold">
          ▶ Ver ahora
        </button>
      </div>
    </section>
  );
}