import Image from "next/image";
import Card1 from "@/components/Card1";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
   <>
   <Card1 immagine=" bg-[url(/images/Card1.jpg)]" sottotitolo="" titolo="Studio Orrizzonti" bottone="Chi siamo" colore=" text-black" coloreb=" text-black"/>
   <Navbar></Navbar>
   </>
  );
}
