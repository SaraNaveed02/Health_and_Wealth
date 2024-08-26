import Image from "next/image";
import React from "react";
import logo2 from "../../../public/image/logo2.png";
import Link from "next/link";

const Footer = () => {
  return (
    <section className=" max-w-screen-lg mx-auto">
      <div className="bg-black w-auto h-full  text-white">
        <div className="flex items-center text-center justify-center pt-4">
          <Image src={logo2} width={24} height={24} alt="logo" />
          <h1 className="text-2xl font-bold">H&W</h1>
        </div>
        <div className="p-2">
          <p className="text-center p-4 text-lg font-semibold">Contact</p>
          <div className="flex justify-center gap-4 items-center pb-5">
            <Link href={"www.youtube.com/@SaraNaveed-dp7gm"}>
              <Image
                src={"/image/you.png"}
                alt="youtube"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"https://www.facebook.com/"}>
              <Image
                src={"/image/fb.png"}
                alt="facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"https://www.linkedin.com/in/sara-naveed-2102a42b6/"}>
              <Image
                src={"/image/link.png"}
                alt="linkdin"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"https://www.instagram.com/sara_naveed4/"}>
              <Image
                src={"/image/ins.png"}
                alt="instagram"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="bg-[#e4a800] w-auto h-full flex justify-between items-center p-4">
          <h3 className="text-xl font-semibold ">
            H&W <span className="text-sm">All rigths reserved</span>
          </h3>
          <p className="text-sm font-medium ">Terms of Service</p>
          <p className="text-sm font-medium ">Privacy</p>
          <p className="text-sm font-medium ">Cookies</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
