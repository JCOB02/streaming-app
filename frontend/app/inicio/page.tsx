import Link from "next/link";
import Navbar from "../components/ui/Navbar";
import HeroCarousel from "../components/ui/HeroCarousel";

const NEW_MOVIES = [
  {
    title: "Coco",
    year: "2017",
    genre: "Animación",
    img: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
  },
  {
    title: "Big Hero 6",
    year: "2014",
    genre: "Animación",
    img: "https://image.tmdb.org/t/p/w500/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
  },
  {
    title: "Minions",
    year: "2015",
    genre: "Animación",
    img: "https://image.tmdb.org/t/p/w500/dr02BdCNAUPVU07aOodwPYv6HCf.jpg",
  },
  {
    title: "Night at the Museum",
    year: "2006",
    genre: "Comedia",
    img: "https://image.tmdb.org/t/p/w500/3LShl6EwqptKLuQzM1Q6hE8YQnR.jpg",
  },
  {
    title: "Avengers",
    year: "2012",
    genre: "Acción",
    img: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
  },
];

const CONTINUE_WATCHING = [
  {
    title: "Avengers",
    year: "2012",
    genre: "Acción",
    img: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    progress: 65,
  },
  {
    title: "Coco",
    year: "2017",
    genre: "Animación",
    img: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
    progress: 30,
  },
  {
    title: "Minions",
    year: "2015",
    genre: "Animación",
    img: "https://image.tmdb.org/t/p/w500/dr02BdCNAUPVU07aOodwPYv6HCf.jpg",
    progress: 80,
  },
];

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="border-l-4 border-[#3a86ff] pl-4 text-[1.45rem] font-bold text-white drop-shadow-[0_0_10px_rgba(58,134,255,0.4)] md:text-[1.8rem]">
      {title}
    </h2>
  );
}

function MovieCard({
  title,
  year,
  genre,
  img,
}: {
  title: string;
  year: string;
  genre: string;
  img: string;
}) {
  return (
    <Link
      href="/peliculas"
      className="group block w-[160px] shrink-0 transition hover:-translate-y-2 sm:w-[180px] md:w-[200px]"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition group-hover:opacity-100">
          <button
            type="button"
            className="translate-y-5 rounded-full bg-[#3a86ff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(58,134,255,0.45)] transition group-hover:translate-y-0"
          >
            ▶ Reproducir
          </button>
        </div>
      </div>

      <div className="pt-3">
        <h3 className="truncate text-base font-semibold text-white">{title}</h3>
        <p className="text-sm text-[#aeb4c0]">
          {year} • {genre}
        </p>
      </div>
    </Link>
  );
}

function ContinueCard({
  title,
  year,
  genre,
  img,
  progress,
}: {
  title: string;
  year: string;
  genre: string;
  img: string;
  progress: number;
}) {
  return (
    <div className="group w-[160px] shrink-0 sm:w-[180px] md:w-[200px]">
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
          <div
            className="h-full bg-[#3a86ff] shadow-[0_0_10px_#3a86ff]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition group-hover:opacity-100">
          <button
            type="button"
            className="translate-y-5 rounded-full bg-[#3a86ff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(58,134,255,0.45)] transition group-hover:translate-y-0"
          >
            ▶ Reanudar
          </button>
        </div>
      </div>

      <div className="pt-3">
        <h3 className="truncate text-base font-semibold text-white">{title}</h3>
        <p className="text-sm text-[#aeb4c0]">
          {year} • {genre}
        </p>
      </div>
    </div>
  );
}

export default function InicioPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0b0c15] pb-10 text-white">
        <HeroCarousel />

        <div className="relative z-10 px-5 md:px-10">
          <section className="mb-12">
            <div className="mb-5 flex items-center justify-between">
              <SectionTitle title="Lo Nuevo" />
            </div>

            <div className="flex gap-5 overflow-x-auto pb-5 [&::-webkit-scrollbar]:hidden">
              {NEW_MOVIES.map((movie) => (
                <MovieCard key={movie.title} {...movie} />
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="mb-5 flex items-center justify-between">
              <SectionTitle title="Continuar viendo" />
            </div>

            <div className="flex gap-5 overflow-x-auto pb-5 [&::-webkit-scrollbar]:hidden">
              {CONTINUE_WATCHING.map((movie) => (
                <ContinueCard key={movie.title} {...movie} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}