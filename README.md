This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Use `docker compose` to get the database running (Be sure to first [install Docker](https://docs.docker.com/get-docker/))

```
docker compose up
```

Optionally, add the flag `--detach` to start it in the background and leave it running


Install dependencies

```
npm i
```

Build the tables and seed with data

```
npx prisma db push
npx prisma db seed
```

Now run the development server:  

```bash
npm run dev
```

Optionally, you can use Prisma Studio to see your data/models  

```
npx prisma studio
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
