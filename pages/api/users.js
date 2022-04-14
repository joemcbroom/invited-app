import prisma from '../../lib/prisma';

const handler = async (_req, res) => {
	const users = await prisma.user.findMany();
	res.json(users);
};

export default handler;
