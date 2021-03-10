import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="">
      <div className="logo">
        <Image src="/pokeball.png" height={70} width={80} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/pokemon">
        <a>Pokemon Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
