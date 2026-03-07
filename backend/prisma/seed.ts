import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando el sembrado de la base de datos...');

  // --- 1. CREAR USUARIOS DE PRUEBA ---
  console.log('Creando usuarios...');
  const usuario1 = await prisma.user.create({
    data: {
      name: 'Maverick',
      email: 'maverick@gmail.com',
      password: 'maverick123' // Contraseña de prueba
     
    }
  });

  const usuario2 = await prisma.user.create({
    data: {
      name: 'Maik',
      email: 'maik@gmail.com',
      password: 'maik123',
      
    }
  });

  // --- 2. CREAR GÉNEROS ---
  console.log('Creando géneros...');
  const animacion = await prisma.genero.create({ data: { nombre: 'Animación' } });
  const familia = await prisma.genero.create({ data: { nombre: 'Familia' } });
  const musica = await prisma.genero.create({ data: { nombre: 'Música' } });
  const accion = await prisma.genero.create({ data: { nombre: 'Acción' } });
  const cienciaFiccion = await prisma.genero.create({ data: { nombre: 'Ciencia Ficción' } });
  const aventura = await prisma.genero.create({ data: { nombre: 'Aventura' } });
  const misterio = await prisma.genero.create({ data: { nombre: 'Misterio' } });
  const terror = await prisma.genero.create({ data: { nombre: 'Terror' } });
  const comedia = await prisma.genero.create({ data: { nombre: 'Comedia' } });
  const fantasia = await prisma.genero.create({ data: { nombre: 'Fantasía' } });
  const romance = await prisma.genero.create({ data: { nombre: 'Romance' } });
  const drama = await prisma.genero.create({ data: { nombre: 'Drama' } });
  const belica = await prisma.genero.create({ data: { nombre: 'Bélica' } });
  const crimen = await prisma.genero.create({ data: { nombre: 'Crimen' } });

  // --- 3. CREAR PELÍCULAS ---*
  console.log('Creando películas...');
  
  const coco = await prisma.pelicula.create({
    data: {
      titulo: 'Coco',
      descripcion: 'Un joven aspirante a músico llamado Miguel se embarca en un viaje extraordinario a la mágica tierra de sus ancestros. Allí, el encantador embaucador Héctor se convierte en su inesperado amigo y le ayuda a descubrir los misterios detrás de las historias y tradiciones de su familia.',
      fechaLanzamiento: new Date('2017-10-27'),
      duracion: 109, // Minutos
      rutaCaratula: 'https://image.tmdb.org/t/p/w600_and_h900_face/vwsFGblLYxWBNjg9pdWN1Mm5YfW.jpg',
      rutaVideo: 'coco.mp4',
      rutaImagenFondo: 'https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg',
      rutaTrailer: 'https://youtu.be/4o4ovPKvTOI',
      generos: {
        connect: [{ id: animacion.id }, { id: familia.id }, { id: musica.id }, { id: aventura.id }]
      }
    }
  });

  const maxsteelam = await prisma.pelicula.create({
    data: {
      titulo: 'Max steel vs la amenaza mutante',
      descripcion: 'Tras ser reconstruido, Cytro se convierte en compañero de misión de Max, pero ahora ambos están bajo las órdenes directas de Forge Ferrous, un nuevo comandante de campo de N-Tek, en lugar de Jefferson. Este nuevo jefe es un control extraño con una actitud agresiva y de equipo, lo que contrasta con el espíritu libre de Max, lo que provoca varios conflictos entre ellos. En respuesta a una llamada de emergencia, Max y Cytro son enviados a un laboratorio subterráneo antártico que también es una prisión para un agente inestable de N-Tek que sufre una mutación debido a la fuerte exposición a la contaminación química.',
      fechaLanzamiento: new Date('2009-06-11'),
      duracion: 47,
      rutaCaratula: 'https://www.themoviedb.org/t/p/w600_and_h900_face/1j6Aa39ErfBQaCvHTYOlTJDxrSz.jpg',
      rutaVideo: 'max-steel-vs-la-amenaza-mutante.mp4',
      rutaImagenFondo: 'https://i.ytimg.com/vi/-U1m_4BU0dg/maxresdefault.jpg',
      rutaTrailer: 'https://youtu.be/sz3PpqUAjGE',
      generos: {
        connect: [{ id: accion.id }, { id: cienciaFiccion.id }, { id: animacion.id }, { id: aventura.id }]
      }
    }
  });

  const prometeo = await prisma.pelicula.create({
    data: {
      titulo: 'Prometeo',
      descripcion: 'Un grupo de científicos y exploradores emprende un viaje espacial a un remoto planeta, en el que sus límites físicos y mentales serán puestos a prueba. El motivo de la misión es que los humanos creen que allá podrán encontrar las respuestas a las preguntas más profundas y al mayor de los misterios: el origen de la vida en la Tierra.',
      fechaLanzamiento: new Date('2012-06-15'),
      duracion: 124,
      rutaCaratula: 'https://www.themoviedb.org/t/p/w600_and_h900_face/5oYpDom6T7c1YiL2j5IImKklws7.jpg',
      rutaVideo: 'prometeo.mp4', 
      rutaImagenFondo: 'https://media.revistagq.com/photos/62a9b84f95ef49f9257c92c1/16:9/w_2560%2Cc_limit/Prometheus-sci-fi-movie_2880x1800.jpg',
      rutaTrailer: 'https://youtu.be/MldbTQFVE6c',// Tráiler de YouTube
      generos: {
        connect: [{ id: misterio.id }, { id: cienciaFiccion.id }, { id: terror.id }]
      }
    }
  });

  const hoteltransilvania3 = await prisma.pelicula.create({
    data: {
      titulo: 'Hotel Transilvania 3: Unas vacaciones monstruosas',
      descripcion: 'Nuestra familia de monstruos favorita se embarca en un crucero de lujo para que por fin Drac pueda tomarse un descanso de proveer de vacaciones al resto en el hotel. Es una navegación tranquila para la pandilla de Drac, ya que los monstruos se entregan a toda la diversión a bordo que ofrece el crucero, desde el voleibol de monstruos y las excursiones exóticas, a ponerse al día con sus bronceados de luna. Pero las vacaciones de ensueño se convierten en una pesadilla cuando Mavis se da cuenta de que Drac se ha enamorado de la misteriosa capitana de la nave, Ericka, quien esconde un peligroso secreto que podría destruir a todos los monstruos.',
      fechaLanzamiento: new Date('2018-07-13'),
      duracion: 90,
      rutaCaratula: 'https://www.themoviedb.org/t/p/w600_and_h900_face/r69lcBWIqjN1wU0sKuxyubbtyF.jpg',
      rutaVideo: 'hotel-transilvania-3.mp4', 
      rutaImagenFondo: 'https://i.blogs.es/0473f4/transilvania-hotel-3-cartel/1366_2000.jpg',
      rutaTrailer: 'https://youtu.be/9c44MV4vw9c',// Tráiler de YouTube
      generos: {
        connect: [{ id: animacion.id }, { id: comedia.id }, { id: familia.id }, { id: fantasia.id }]
      }
    }
  });

  const jumanjiBJ = await prisma.pelicula.create({
    data: {
      titulo: 'Jumanji: Bienvenidos a la jungla',
      descripcion: 'Cuatro estudiantes de secundaria se quedan atrapados en la selva dentro de un videojuego, donde viven una aventura convertidos en avatares adultos arquetípicos.',
      fechaLanzamiento: new Date('2017-12-21'),
      duracion: 118,
      rutaCaratula: 'https://www.themoviedb.org/t/p/w1280/1uQaSgtHyTN3r2fecL0mSs6geQO.jpg',
      rutaVideo: 'jumanji.mp4', 
      rutaImagenFondo: 'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfScdYEnEI_xFBPhl_YUFwv3Frs-IHIL77zy0gWoVd0kwmUG5-NOxGBys2RkIo_SLXudQT02T4GmvQU3LbnvhePVFYHNq1VDwoWu.jpg?r=1fe',
      rutaTrailer: 'https://youtu.be/leIrosWRbYQ',// Tráiler de YouTube
      generos: {
        connect: [{ id: aventura.id }, { id: comedia.id }, { id: accion.id }, { id: fantasia.id }]
      }
    }
  });

  const ciguenias = await prisma.pelicula.create({
    data: {
      titulo: 'Cigüeñas',
      descripcion: 'En Montaña Cigüeña, viven las cigüeñas que hace tiempo enviaban bebés a los padres de todo el mundo. Ahora distribuyen los paquetes de una compañía mundial de Internet. Junior, la mejor cigüeña repartidora de la compañía, está a punto de conseguir un ascenso, pero accidentalmente activa la Máquina de Producción de Bebés y el resultado es una adorable niña ilegal. Para evitar que su jefe se entere, Junior y su amiga Tulip, el único ser humano de Montaña Cigüeña, se apresuran a entregar el bebé en un viaje salvaje que podría afectar a la integridad de más de una familia y restablecer la verdadera misión de las cigüeñas en el mundo. Debut en el largometraje de Doug Sweetland, responsable del corto de Pixar "Presto" (2008).',
      fechaLanzamiento: new Date('2016-09-23'),
      duracion: 89,
      rutaCaratula: 'https://www.themoviedb.org/t/p/w1280/eEyLLrcUAvmAn6OoZwEvzCUG6Z6.jpg',
      rutaVideo: 'ciguenias.mp4', 
      rutaImagenFondo: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/a8b36b0b-5644-4179-84a7-cce257ff8205/13c58693244ae002cf2a4c302eab3e27464e9afd.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom',
      rutaTrailer: 'https://youtu.be/_2DO65R2Kds',// Tráiler de YouTube
      generos: {
        connect: [{ id: aventura.id }, { id: animacion.id }, { id: comedia.id }, { id: familia.id }]
      }
    }
  });

  const maleficamaestradelmal = await prisma.pelicula.create({
    data: {
      titulo: 'Maléfica: Maestra del mal',
      descripcion: 'Maléfica: Maestra del mal, de Disney, es una aventura de fantasía que retoma la historia de Maléfica varios años más tarde —en la que se dieron a conocer los hechos que endurecieron el corazón de la villana más emblemática de Disney y la llevaron a arrojar una maldición sobre la princesa recién nacida: Aurora. La película continúa explorando la compleja relación entre el hada de enormes cuernos y la futura reina, mientras forjan nuevas alianzas y se enfrentan a nuevos adversarios en su lucha por proteger el páramo y las criaturas mágicas que lo habitan.',
      fechaLanzamiento: new Date('2019-10-18'),
      duracion: 119,
      rutaCaratula: 'https://www.themoviedb.org/t/p/w1280/eZOkXqHXWCKytd78TggAtJ0M3gU.jpg',
      rutaVideo: 'malefica-maestra-del-mal.mp4', 
      rutaImagenFondo: 'https://sm.ign.com/t/ign_es/screenshot/default/blob_3q2v.1280.jpg',
      rutaTrailer: 'https://youtu.be/KyoDGNYUimM',// Tráiler de YouTube
      generos: {
        connect: [{ id: fantasia.id }, { id: aventura.id }, { id: familia.id }]
      }
    }
  });

  const misperegrine = await prisma.pelicula.create({
    data: {
      titulo: 'El hogar de Miss Peregrine para niños peculiares',
      descripcion: 'Una horrible tragedia familiar lleva a Jacob, de 16 años, a viajar por la costa de Gales, donde descubre las ruinas del hogar para niños especiales de Miss Peregrine. Mientras explora los destartalados cuartos y pasillos, se da cuenta que los niños que vivieron allí (uno de los cuales fue su abuelo) eran excepcionales. Quizá eran peligrosos, quizá había una buena razón para ponerlos en cuarentena en una isla desierta; incluso podría ocurrir que todavía estuvieran vivos.',
      fechaLanzamiento: new Date('2016-09-30'),
      duracion: 127,
      rutaCaratula: 'https://www.themoviedb.org/t/p/w1280/b4585PS4VZEqvwvVZiqeYZkpxhC.jpg',
      rutaVideo: 'miss-pregrine-y-los-ninios-peculiares.mp4', 
      rutaImagenFondo: 'https://m.media-amazon.com/images/S/pv-target-images/0a8d2e7dcb0d71d5a71829e5f453c5fc66870bd06900894216e475938e04ca5b.jpg',
      rutaTrailer: 'https://youtu.be/6WgCZWiCkOg',// Tráiler de YouTube
      generos: {
        connect: [{ id: fantasia.id }, { id: aventura.id }, { id: familia.id }, { id: drama.id }]
      }
    }
  });

  const laguerrapds = await prisma.pelicula.create({
    data: {
      titulo: 'La guerra del planeta de los simios',
      descripcion: 'César y sus monos son forzados a encarar un conflicto mortal contra un ejército de humanos liderado por un brutal coronel. Después de sufrir pérdidas enormes, César lucha con sus instintos más oscuros en una búsqueda por vengar a su especie. Cuando finalmente se encuentren, Cesar y el Coronel protagonizarán una batalla que pondrá en juego el futuro de ambas especies y el del mismo planeta. Tercera película de la nueva saga de El Planeta de los Simios.',
      fechaLanzamiento: new Date('2017-07-27'),
      duracion: 140,
      rutaCaratula: 'https://m.media-amazon.com/images/M/MV5BZDFiNTc4ZDktOTI5YS00NGI0LWJlZjYtNzFhMDgxZWNmMjQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      rutaVideo: 'el-planeta-de-los-simios-la-guerra.mp4', 
      rutaImagenFondo: 'https://m.media-amazon.com/images/S/pv-target-images/354a24e271f93a2287ac6a36518d86f98475752af42f18b4ffad1dabdee2775c.jpg',
      rutaTrailer: 'https://youtu.be/3d3rAJ8R0Fg',// Tráiler de YouTube
      generos: {
        connect: [{ id: drama.id }, { id: cienciaFiccion.id }, { id: belica.id }]
      }
    }
  });

  const ellobodewallstreet = await prisma.pelicula.create({
    data: {
      titulo: 'El lobo de Wall Street',
      descripcion: 'Película basada en hechos reales del corredor de bolsa neoyorquino Jordan Belfort. A mediados de los años 80, Belfort era un joven honrado que perseguía el sueño americano, pero pronto en la agencia de valores aprendió que lo más importante no era hacer ganar a sus clientes, sino ser ambicioso y ganar una buena comisión. Su enorme éxito y fortuna le valió el mote de "El lobo de Wall Street". Dinero. Poder. Mujeres. Drogas. Las tentaciones abundaban y el temor a la ley era irrelevante. Jordan y su manada de lobos consideraban que la discreción era una cualidad anticuada; nunca se conformaban con lo que tenían.',
      fechaLanzamiento: new Date('2014-01-10'),
      duracion: 180,
      rutaCaratula: 'https://www.themoviedb.org/t/p/w1280/uthRoUeTtiep5HCoySlOjQSPCbJ.jpg',
      rutaVideo: 'el-lobo-de-wall-street.mp4', 
      rutaImagenFondo: 'https://media.revistagq.com/photos/5f5f50fa09c89c3fca562703/16:9/w_2560%2Cc_limit/leonardo-dicaprio-el-lobo-de-wall-street.jpg',
      rutaTrailer: 'https://youtu.be/DEMZSa0esCU',// Tráiler de YouTube
      generos: {
        connect: [{ id: drama.id }, { id: comedia.id }, { id: crimen.id }]
      }
    }
  });

  console.log('Base de datos poblada con éxito:');
  console.log(`- Usuarios: ${usuario1.email}, ${usuario2.email}`);
  console.log(`- Películas: ${coco.titulo}, ${maxsteelam.titulo}, ${prometeo.titulo}, ${hoteltransilvania3.titulo}, ${jumanjiBJ.titulo}, ${ciguenias.titulo}, ${maleficamaestradelmal.titulo}, ${misperegrine.titulo}, ${laguerrapds.titulo}, ${ellobodewallstreet.titulo}`);
}

main()
  .catch((e) => {
    console.error('❌ Error al poblar la base de datos:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });