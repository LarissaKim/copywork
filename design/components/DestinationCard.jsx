import Image from 'next/image';

function DestinationCard({ title, subtitle, content, href, gradient }) {
  const overlayGradient = [
    'absolute bottom-0 l-0 r-0 w-full h-1/4 group-hover:h-full z-10 bg-gradient-to-t',
    gradient && `from-${gradient} hover:to-${gradient}`,
    'transition duration-700 ease-in overflow-hidden',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <div className='relative w-1/4 h-[55vh] overflow-hidden group cursor-pointer'>
      <div className={overlayGradient}>
        <div className='absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-white text-center transition duration-700 ease-in overflow-hidden px-3'>
          <h2 className='capitalize font-medium'>{title}</h2>
          <h3 className='capitalize italic'>{subtitle}</h3>
          <p className='pt-4 hidden group-hover:block opacity-80'>{content}</p>
        </div>
      </div>
      <Image src={href} alt='' layout='fill' objectFit='cover' />
    </div>
  );
}

export default DestinationCard;
