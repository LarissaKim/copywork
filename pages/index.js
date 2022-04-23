import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen max-w-lg mx-auto'>
      <Link href='/lonely-planet' passHref>
        <a className='underline decoration-2 decoration-sky-400 hover:decoration-sky-600 transition'>
          Lonely Planet Destination Selector
        </a>
      </Link>
    </div>
  );
}
