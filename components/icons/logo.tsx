import Image from 'next/image';

export default function LogoIcon() {
  return (
    <>
      <Image src="/iball-logo.svg" alt="iBall247 logo" height={100} width={100} className="h-8" />
    </>
  );
}
