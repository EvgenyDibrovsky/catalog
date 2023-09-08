import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      {/* <Image src="/images/edweb.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority /> */}
      <p className="font-bold">LOGO</p>
    </Link>
  );
};

export { Logo };
