const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { faker } = require('@faker-js/faker');

const NUMBER_OF_USERS = 100;

const createUser = async () => {
	const user = await prisma.user.upsert({
		where: {
			email: faker.internet.email(),
		},
		update: {},
		create: {
			email: faker.internet.email(),
			name: faker.name.findName(),
			password: faker.internet.password(),
		},
	});
	return user;
};

async function main() {
	await Promise.all([...Array(NUMBER_OF_USERS)].map(() => createUser()));
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
