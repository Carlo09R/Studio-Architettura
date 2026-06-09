import Image from "next/image";

import Navbar from "@/components/navbar";
import Card2progetti from "@/components/Card2progetti";
export default function Progetti() {
  return (
   <>
  
   <Navbar></Navbar>
   <div className="container mx-auto flex flex-wrap flex-col lg:flex-row gap-2 justify-center items-center  ">
  <Card2progetti eccolo="Residenza unifamiliare caratterizzata da ampie vetrate e integrazione con il paesaggio lacustre." titolo="Lago di como" testo="Villa Luce" immagine=" bg-[url(/images/progetto1.jpg)]"/>
  <Card2progetti eccolo="Riconversione di un ex spazio industriale in uffici creativi open-space." titolo="Berlino" testo="Urban Loft" immagine=" bg-[url(/images/progetto2.jpg)]"/>
   <Card2progetti eccolo="Padiglione temporaneo realizzato interamente in legno riciclato e materiali naturali." titolo="Madrid" testo="Green Pavillion" immagine=" bg-[url(/images/progetto3.jpg)]"/>
  <Card2progetti  eccolo="Un'antica stalla quasi in rovina, tra pietre logore e travi marcite, rinata come la casa del relax." titolo="Cortina" testo="Casa Bianca" immagine=" bg-[url(/images/progetto4.jpg)]"/>
  </div>
   </>
  );
}
