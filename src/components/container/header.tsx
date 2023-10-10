import Image from "next/legacy/image";
import logo from "../../../public/img/logo-cedro-azul.png";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="absolute top-0 right-0 md:right-2/3">
      <Link href={"/"}>
        <Image src={logo} layout="intrinsic" height={80} width={220} />
      </Link>
    </div>
  );
};
