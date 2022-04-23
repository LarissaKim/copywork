import Image from 'next/image';
import Link from 'next/link';

import Select from 'react-select';

import DestinationCard from '@/design/components/DestinationCard';

const terrains = [
  { value: 'mountain', label: 'Mountain' },
  { value: 'ocean', label: 'Ocean' },
  { value: 'lake', label: 'Lake' },
  { value: 'urbans', label: 'Urban' },
  { value: 'plains', label: 'Plains' },
  { value: 'forest', label: 'Forest' },
  { value: 'river', label: 'River' },
  { value: 'all', label: 'All' },
];

function LonelyPlanet() {
  return (
    <div>
      <h1 className='text-center mt-20 text-6xl font-light'>Find the perfect destination</h1>
      <div className=' bg-pink-600 w-5 h-0.5 mx-auto my-5 rounded-full'></div>
      <div className='flex items-center gap-4 mt-20 max-w-6xl mx-auto'>
        <label className='uppercase text-sm font-medium text-gray-400 w-1/3 mt-2 mb-4'>
          Select terrain
          <Select options={terrains} className='w-full' />
        </label>
        <label className='uppercase text-sm font-medium text-gray-400 w-1/3'>
          Select style
          <Select options={terrains} className='w-full' />
        </label>
        <label className='uppercase text-sm font-medium text-gray-400 w-1/3'>
          Select activity
          <Select options={terrains} className='w-full' />
        </label>
        <button className='relative w-6 h-6'>
          <Image src='/icon-refresh.svg' alt='refresh' layout='fill' className='' />
        </button>
      </div>
      <section className='flex items-center flex-nowrap max-w-6xl mx-auto'>
        <DestinationCard
          href='https://source.unsplash.com/random/?italy,canal'
          gradient='brownLight'
          title='rio canal'
          subtitle='italy'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
'
        />
        <DestinationCard
          href='https://source.unsplash.com/random/?cappadocia,balloon'
          gradient='brownDark'
          title='cappadocia'
          subtitle='turkey'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <DestinationCard
          href='https://source.unsplash.com/random/?machu'
          gradient='olive'
          title='machu picchu'
          subtitle='peru'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <DestinationCard
          href='https://source.unsplash.com/random/?hawaii'
          gradient='indigo-400'
          title='oahu'
          subtitle='hawaii'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </section>
      <Link href='https://dribbble.com/shots/3244008-Lonely-Planet-HP-Destination-Selector'>
        Original Dribble
      </Link>
    </div>
  );
}

export default LonelyPlanet;
