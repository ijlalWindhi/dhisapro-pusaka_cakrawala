import Map from "@/components/shared/map";
export default function Home() {
  return (
    <main className="flex flex-col justify-center relative items-center min-h-screen w-full bg-black text-white">
      <h1 className="font-semibold text-5xl text-[#ff0000] absolute top-14">
        Pusaka Cakrawala
      </h1>
      <div className="w-[80%]">
        <Map />
      </div>
    </main>
  );
}
