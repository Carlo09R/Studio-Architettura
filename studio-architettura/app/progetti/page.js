import Image from "next/image";
import Card1 from "@/components/Card1";
import Navbar from "@/components/navbar";
import Card2progetti from "@/components/Card2progetti";
export default function Progetti() {
  return (
   <>
   <Card1 immagine=" bg-[url(/images/Card1.jpg)]" sottotitolo="fgggggg" titolo="Studio Orrizzonti" bottone="Chi siamo" colore=" text-black" coloreb=" text-black"/>
   <Navbar></Navbar>
   <div className="container mx-auto flex flex-wrap flex-col lg:flex-row gap-2 justify-center items-center  ">
  <Card2progetti titolo="Lago di como" testo="Villa Luce" immagine=" bg-[url(/images/progetto1.jpg)]"/>
  <Card2progetti titolo="Berlino" testo="Urban Loft" immagine=" bg-[url(/images/progetto2.jpg)]"/>
  </div>
   </>
  );
}
