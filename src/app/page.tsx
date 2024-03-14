import { type User } from "@prisma/client";
import { db } from "~/server/db";

async function getUsersFromTurso(): Promise<User[]> {
  const users = await db.user.findMany();

  return users;
}

export default async function HomePage() {
  const users = await getUsersFromTurso();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Welcome to Turso + T3 App
      </h1>

      <p className="mt-3 text-xl">Users from Turso: {JSON.stringify(users)}</p>
    </main>
  );
}
