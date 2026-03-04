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
      email: 'maiik@gmail.com',
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
  const comeedia = await prisma.genero.create({ data: { nombre: 'Comedia' } });
   const fantasia = await prisma.genero.create({ data: { nombre: 'Fantasía' } });

  // --- 3. CREAR PELÍCULAS ---
  console.log('Creando películas...');
  
  const coco = await prisma.pelicula.create({
    data: {
      titulo: 'Coco',
      descripcion: 'Un joven aspirante a músico llamado Miguel se embarca en un viaje extraordinario a la mágica tierra de sus ancestros. Allí, el encantador embaucador Héctor se convierte en su inesperado amigo y le ayuda a descubrir los misterios detrás de las historias y tradiciones de su familia.',
      fechaLanzamiento: new Date('2017-10-27'),
      duracion: 109, // Minutos
      rutaCaratula: 'https://image.tmdb.org/t/p/w600_and_h900_face/vwsFGblLYxWBNjg9pdWN1Mm5YfW.jpg',
      rutaVideo: 'https://youtu.be/4o4ovPKvTOI', // Tráiler de YouTube
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
      rutaVideo: 'https://youtu.be/sz3PpqUAjGE', // Tráiler de YouTube
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
      duracion: 47,
      rutaCaratula: 'https://www.themoviedb.org/t/p/w600_and_h900_face/5oYpDom6T7c1YiL2j5IImKklws7.jpg',
      rutaVideo: 'https://youtu.be/MldbTQFVE6c', // Tráiler de YouTube
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
      rutaVideo: 'https://youtu.be/9c44MV4vw9c', // Tráiler de YouTube
      generos: {
        connect: [{ id: animacion.id }, { id: comeedia.id }, { id: familia.id }, { id: fantasia.id }]
      }
    }
  });

  console.log('✅ Base de datos poblada con éxito:');
  console.log(`- Usuarios: ${usuario1.email}, ${usuario2.email}`);
  console.log(`- Películas: ${coco.titulo}, ${maxsteelam.titulo}, ${prometeo.titulo}, ${hoteltransilvania3.titulo}`);
}

main()
  .catch((e) => {
    console.error('❌ Error al poblar la base de datos:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });