import Navbar from "../components/ui/Navbar";
import Link from "next/link";

const MOVIES = [
  { title: "Hotel Transilvania 3", year: "2018", genre: "Animación", img: "/assets/postersaprobados/hoteltransilvania3.jpg" },
  { title: "La Sirenita", year: "2023", genre: "Animación", img: "/assets/postersaprobados/lasirenita.jpg" },
  // agrega las que tengas en assets (sin inventar rutas)
];

export default function Peliculas() {
  return (
    <>
      <Navbar />
      <main className="movies-main">
        <section className="az-section">
          <h2 className="az-header">A</h2>

          <div className="movies-grid">
            {MOVIES.map((m) => (
              <Link key={m.title} href="/peliculas" className="movie-card">
                <div className="card-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.title} />
                  <div className="card-overlay">
                    <button className="play-btn" type="button">▶ Reproducir</button>
                  </div>
                </div>
                <div className="card-info">
                  <h3>{m.title}</h3>
                  <p>{m.year} • {m.genre}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}