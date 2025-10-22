import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="/eie-cover.jpg"
          alt="Next.js logo"
          width={280}
          height={138}
          priority
        />
        
      </main>
      <footer className="row-start-3 flex flex-col  items-center justify-center">
        <h1>The wait is now over, we are launching soon!</h1>
        <h2 className="text-xs">Let's make November Happening!</h2>
      </footer>
    </div>
  );
}
