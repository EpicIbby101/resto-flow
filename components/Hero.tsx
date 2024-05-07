import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="relative max-w-full mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-5 py-8 lg:py-32">
      <div className="absolute inset-0 lg:w-full">
        <Image
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="Product Demo"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start z-10">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 text-white">
          Your online businesses simplified!
        </h1>
        <p className="text-lg opacity-80 leading-relaxed text-white">
          The CMS boilerplate with all you need to build your ecommerce business. <br /> From idea to deployment in less than an hour.
        </p>
        <button className="btn btn-primary btn-wide">
          Get {config.appName}
        </button>

        <TestimonialsAvatars priority={true} />
      </div>
    </section>
  );
};

export default Hero;