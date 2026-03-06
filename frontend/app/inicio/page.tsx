import Navbar from "../components/ui/Navbar";
import HeroCarousel from "../components/ui/HeroCarousel";
import Link from "next/link";

const NEW_MOVIES = [
  { title: "Coco", year: "2017", genre: "Animación", img: "/assets/posters/coco.webp" },
  { title: "Grandes Héroes", year: "2014", genre: "Animación", img: "/assets/posters/grandesheroes.jpg" },
  { title: "Minions", year: "2015", genre: "Animación", img: "/assets/posters/minions.webp" },
  { title: "Una Noche en el Museo", year: "2006", genre: "Comedia", img: "/assets/posters/unanocheenelmuseo.webp" },
  { title: "Avengers", year: "2012", genre: "Acción", img: "/assets/posters/vengadores.webp" },
];

export default function Inicio() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />

        <div className="main-sections">
          <section className="category-section">
            <div className="section-header">
              <h2 className="glow-text">Lo Nuevo</h2>
            </div>

            <div className="carousel-container" style={{ gap: 18, flexWrap: "wrap" }}>
              {NEW_MOVIES.map((m) => (
                <Link key={m.title} href="/peliculas" className="movie-card">
                  <div className="card-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.img} alt={m.title} />
                    <div className="card-overlay">
                      <button className="play-btn" type="button">
                        ▶ Reproducir
                      </button>
                    </div>
                  </div>
                  <div className="card-info">
                    <h3>{m.title}</h3>
                    <p>
                      {m.year} • {m.genre}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Si ya agregaste "Continuar viendo", va aquí abajo */}
        </div>
      </main>
    </>
  );
}