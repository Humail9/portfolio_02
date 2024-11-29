import Image from "next/image";
export default function Home() {
  return (
    <main className="h-[100vh] w-full bg-black text-white pt-14 flex flex-col md:flex-row justify-center 
    items-center">
      <div className="w-full md:w-2/4 flex justify-center mb-10 md:mb-0">
        <Image 
          src={'/humail.jpg'} 
          height={250} 
          width={250} 
          alt="Huail Khan" 
          className="rounded-full  max-w-full h-64 w-64 md:h-80 md:w-80" 
        />
      </div>
      <div className="w-full md:w-2/4 p-5 md:p-10">
        <h2 className=" text-accent text-2xl text-center md:text-left">{`Hello it's me`}</h2>
        <h3 className="text-4xl text-center md:text-left">Humail Khan</h3>
        <p className="mt-2 text-center md:text-left">
          I am a front-end developer from Karachi, Pakistan. I am passionate about crafting engaging and responsive 
          web experiences. Check out my portfolio to see my latest projects.
        </p>
      </div>
    </main>
  );
};