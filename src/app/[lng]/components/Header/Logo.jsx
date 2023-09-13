import Link from "next/link";

const Logo = ({ lng }) => {
  return (
    <Link href={`/${lng}`}>
      {/* <Image src="/images/edweb.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority /> */}
      <p className="text-black dark:text-white text-[1.5rem] font-semibold">LOGO</p>
    </Link>
  );
};

export { Logo };
