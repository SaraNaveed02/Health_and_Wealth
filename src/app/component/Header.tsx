import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between mx-auto max-w-screen-lg text-white  sticky top-0 bg-[#e4a800] py-5 px-3">
      {/* LOGO */}
      <div className="font-bold space-x-1 inline-flex">
        <Image src="/image/logo.png" alt="Logo" width={24} height={24} />
        <h2>W&H</h2>
      </div>
      {/* NAVIGATION BAR */}
      <ul className="flex font-semibold space-x-4">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
