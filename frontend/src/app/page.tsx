import { Navbar } from "@/components";
import Canvas from "@/components/Canvas";
import { Room } from "./Room";

export default function Home() {
  return (
    <Room>
      <main className="h-screen overflow-hidden bg-[#0E1015]">
        <Navbar />
        <Canvas />
      </main>
    </Room>
  );
}