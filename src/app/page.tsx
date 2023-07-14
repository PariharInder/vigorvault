import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-semibold"> Vigor Vault</h1>
      <Link href={""} className="p-2 my-5 rounded-md bg-black text-white font-bold">Log-in</Link>
    </main>
  )
}
