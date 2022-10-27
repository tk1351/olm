import { Movie, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const moviesData: Movie[] = [
  {
    id: 'fa119cb6-9135-57f5-8a5a-54f28d566d0e',
    title: '東京物語',
    imageSrc: 'https://example.com',
    year: '1953',
  },
  {
    id: '545d5237-15ee-169c-13a2-30f8748e3d6e',
    title: '黄金の馬車',
    imageSrc: 'https://example.com',
    year: '1953',
  },
  {
    id: '95daa18f-90d0-390c-fb96-0d152312936c',
    title: 'ドイツ零年',
    imageSrc: 'https://example.com',
    year: '1948',
  },
];

const doSeed = async () => {
  const movies = [];
  for (const movie of moviesData) {
    const createPosts = prisma.movie.create({
      data: movie,
    });
    movies.push(createPosts);
  }
  return await prisma.$transaction(movies);
};

const main = async () => {
  console.log('Start seeding ...');
  await doSeed();
  console.log('Start finished.');
};

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
