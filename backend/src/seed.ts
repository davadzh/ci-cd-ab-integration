import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.paymentType.findFirstOrThrow()
    await prisma.restaurant.findFirstOrThrow()
    await prisma.foodGroup.findFirstOrThrow()
    await prisma.food.findFirstOrThrow()
  } catch (e) {
    // 1. Платёжные методы
    await prisma.paymentType.createMany({
      data: [
        { code: 'CARD', title: 'Bank Card' },
        { code: 'SBP', title: 'SBP' },
      ],
      skipDuplicates: true,
    });

    // 2. Рестораны
    await prisma.restaurant.createMany({
      data: [
        { name: 'Show Cafe', path: 'show-cafe' },
        { name: 'StandUp Cafe', path: 'standup-cafe' },
      ],
      skipDuplicates: true,
    });

    const restaurantRecords = await prisma.restaurant.findMany();

    for (const restaurant of restaurantRecords) {
      // 3. Для каждого ресторана создаём 3 группы
      for (let g = 1; g <= 3; g++) {
        const group = await prisma.foodGroup.create({
          data: {
            name: `Group ${g} (${restaurant.name})`,
            restaurantId: restaurant.id,
          },
        });

        // 4. Для каждой группы создаём 9 блюд
        const foods = Array.from({ length: 9 }).map((_, i) => ({
          name: `Food ${i + 1} (Group ${g})`,
          quantity: 100 + i * 50, // 100, 150, 200...
          unit: 'g',
          price: new Prisma.Decimal((10 + i) * 10), // 100, 110, 120...
          description: `Delicious food ${i + 1}`,
          photoUrl: 'https://via.placeholder.com/150', // заглушка
          groupId: group.id,
        }));

        await prisma.food.createMany({
          data: foods,
          skipDuplicates: true,
        });
      }
    }

    console.log('✅ Сидер успешно выполнен');
  }
}

main()
  .catch((e) => {
    console.error('🔥 Ошибка в сидере:', e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
