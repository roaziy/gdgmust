import Link from 'next/link'
import Image from 'next/image';

// Import Navbar Item Route
import { useNavItems } from "@/components/navbar/navItems";
 
export default function NotFound() {
  const navItems = useNavItems();
  const homeItem = navItems[0];
  return (
    <div className='min-h-screen w-full flex items-center justify-center px-4' draggable="false">
      <div className='py-12 flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-center justify-center select-text' draggable="false">
        <Image
          src="/images/notfound/notfound.jpg"
          alt="404 Not Found"
          width={150}
          height={150}
          className="select-none w-24 md:w-32 lg:w-40 h-auto"
          draggable="false"
        />
        <div className='flex flex-col items-center md:items-start justify-center text-center md:text-left' draggable="false">
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2'>404 - Not Found!</h1>
          <p className='mb-6 text-gray-600'>Could not find requested resource</p>
          <Link 
            href={homeItem.anchor}
            draggable="false" 
            className='px-6 py-3 bg-white select-none hover:bg-gray-100 transition-colors rounded-full border border-black text-center'
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}