import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl"><Link href="https://www.youtube.com/@IntegratorDima">@IntegratorDima</Link></h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            <Link href="/gravatar">Gravatar - simple avatar integration</Link>
          </li>
          <li className="mb-2">
            <Link href="/flags">5 ways to add flag icons to your app</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
