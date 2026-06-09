export default function Card1(C1) {
  return (
    <>
      <div className={"h-full aspect-12/6 bg-no-repeat bg-cover flex items-end" + C1.immagine}>
        <div className= "ml-8 mb-20 flex-col gap-3 flex">

            <h5 className={"font-bold" + C1.colore}>{C1.sottotitolo}</h5>
            <h1 className={"text-5xl font-extrabold" + C1.colore}>
              {C1.titolo}
              </h1>

            <div className="flex justify-start z-10">
          <a href="/progetti"
          className={"mt-8 bg-white hover:bg-gray-300 border-2 border-black font-semibold text-md px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300" + C1.coloreb}>
            {C1.bottone}
          </a>
          </div>
        </div>
      </div>
    </>
  );
}