export default function Navbar() {
  return (
    <>
      <div className="flex justify-center border bg-gray-400 fixed w-full z-100 border-gray-300">
        <div className="flex justify-around gap-2">
          <div>
            <img
              src="/images/Yamaha/Yamaha_logo.png"
              alt=""
              className="w-30 mt-2"
            />
          </div>
          <div>
            <img
              src="/images/Yamaha/70_anniversary.png"
              alt=""
              className="w-10 mt-4 mr-5"
            />
          </div>
        </div>

        <div className="justify-evenly gap-10 mt-5 hidden lg:flex ">
          <div>
            <h1 className="font-bold"></h1>
          </div>
          <div>
            <h1 className="font-bold">Home page</h1>
          </div>
          <div>
           <a href="/progetti"
          className="mt-8 bg-white hover:bg-gray-300 border-2 border-black font-semibold text-md px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300" >
          </a>  
            <h1 className="font-bold">Progetti</h1>
          </div>
          <div>
            <a href="/Chisiamo"
          className="mt-8 bg-white hover:bg-gray-300 border-2 border-black font-semibold text-md px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300" >
          </a> 
            <h1 className="font-bold">Chisiamo</h1>
          </div>
          <div>
            <h1 className="font-bold">Contatti</h1>
          </div>
        </div>

        <div className="flex justify-evenly gap-2 mt-2 ml-5">
          <div>
            <img src="/images/Yamaha/lente.webp" alt="" className="w-10" />
          </div>
          <div>
            <img src="/images/Yamaha/ping.webp" alt="" className="w-10" />
          </div>
          <div>
            <img src="/images/Yamaha/Carrello.png" alt="" className="w-10" />
          </div>
          <div>
            <img src="/images/Yamaha/account.png" alt="" className="w-10" />
          </div>

          <div>
            <img src="/images/Yamaha/bandiera.png" alt="" className="w-10" />
          </div>
        </div>
      </div>
    </>
  );
}