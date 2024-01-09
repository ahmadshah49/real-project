import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="bgImg  relative h-screen">
      <div className="absolute w-full h-screen bg-black/90">
        <Navbar />
        <div className="w-full  h-full text-white flex flex-col items-center justify-center">
          <h1 className="font-semibold my-2 space-x-8 text-9xl ">Galaxy</h1>
          <p className="text-sm">Catv & Internet Service Provider Company.</p>
          <h2 className="text-4xl text-transparent  h font-medium my-4">
            Galaxy ISP(Pvt) Limited.
          </h2>
          <p className="text-center text-sm w-[32%] p">
            " Race Online Limited, One of the fastest growing ISP in the
            industry to provide Catv & internet connectivity to various grades
            of customers "
          </p>
          <div className="my-6  font-bold rounded-2xl bg-black/40 animate-bounce wow py-4 px-2">
            <button>Coming soon</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
