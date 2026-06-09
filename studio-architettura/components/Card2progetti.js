export default function Card2progetti(C2) {
  return (
    <>
      <div
        className={
          "aspect-16/8 bg-no-repeat bg-cover flex items-end w-2/5 mt-10 object-cover text-black " + C2.immagine
        
        }
         >
        <div className="text-white font-extrabold ml-5">
          <h4 className=" mb-1 lg:text-xl  xs:text-xs">{C2.titolo}</h4>
          <h1 className=" mb-5 lg:text-3xl xs:text-lg">{C2.testo}</h1>
        </div>
      </div> 
      <h1>{C2.eccolo}</h1>
    </>
  );
}