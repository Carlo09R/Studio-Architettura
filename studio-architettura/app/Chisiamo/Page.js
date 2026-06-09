import Image from "next/image";

import Navbar from "@/components/navbar";
import Card2progetti from "@/components/Card2progetti";
export default function Chisiamo() {
  return (
   <>
  
   <Navbar></Navbar>
   <div className="container mx-auto flex flex-wrap flex-col lg:flex-row gap-2 justify-center items-center  ">
  <Card2progetti titolo="Lago di como" testo="Villa Luce" immagine=" bg-[url(/images/progetto1.jpg)]"/>
  <Card2progetti titolo="Berlino" testo="Urban Loft" immagine=" bg-[url(/images/progetto2.jpg)]"/>
   <Card2progetti titolo="Madrid" testo="Green Pavillion" immagine=" bg-[url(/images/progetto3.jpg)]"/>
  <Card2progetti titolo="Cortina" testo="Casa Bianca" immagine=" bg-[url(/images/progetto4.jpg)]"/>
  </div>
   </>
  );
}