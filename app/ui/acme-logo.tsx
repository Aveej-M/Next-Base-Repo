import { lusitana } from '../ui/font';
// import Image from 'next/image';
export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <Image className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="text-[44px]">Acme</p>
    </div>
  );
}