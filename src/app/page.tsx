import Image from 'next/image'
import shop from '@/images/shop.jpg';
import hero from  '@/images/pexels-photo-12081286.jpeg';
import Link from 'next/link';
import { TbShoppingBagCheck } from 'react-icons/tb';

const features = [
  { title: 'Hassle-free Shopping', description: 'Enjoy a seamless and stress-free shopping experience. We strive to make your shopping journey easy and convenient.' },
  { title: 'Save More', description: 'Save big on your purchases with our competitive prices and exclusive discounts. Your savings matter to us!' },
  { title: 'Discover Quality Products', description: 'Explore a curated selection of high-quality products. From fresh produce to everyday essentials, we ensure top-notch quality for your satisfaction.' }
]

export default function Home() {
  return (
    <main>
      <section className='relative h-screen py-8 md:py-16 bg-orange-100'>
        <div className='container mx-auto flex items-center justify-between flex-col md:flex-row text-center md:text-left'>
          <div className='md:px-8 mb-8 md:mb-0'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Your One-Stop Supermarket for Quality Products
            </h1>
            <p className="text-md md:text-lg lg:text-xl mb-8">
              Explore our diverse selection of fine wines, delicious food stuffs, and essential general items.
            </p>
            <Link href='/gallery' className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 md:px-9 md:py-4 rounded-full text-md md:text-lg font-semibold transition duration-300">
              View Our Collections
            </Link>
          </div>

          <div className='mx-6 md:mx-0'>
            <Image src={hero} alt='Supermarket Hero' width={600} height={400} className='rounded-3xl shadow-xl'/>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden transform">
          <svg viewBox="0 0 1440 320">
            <path fill="white" fillOpacity="1" d="M0,160L26.7,149.3C53.3,139,107,117,160,128C213.3,139,267,181,320,218.7C373.3,256,427,288,480,293.3C533.3,299,587,277,640,256C693.3,235,747,213,800,224C853.3,235,907,277,960,293.3C1013.3,309,1067,299,1120,266.7C1173.3,235,1227,181,1280,170.7C1333.3,160,1387,192,1413,208L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>            
          </svg>
        </div>
      </section>

      <section className='py-16 container mx-auto flex gap-6 flex-col md:flex-row items-center'>
        {features.map((feature, idx) => (
          <div key={feature.title} className={`mx-8 pb-8 md:pr-8  ${idx === features.length - 1 ? '': 'border-b-4 md:border-r-4 md:border-b-0 border-green-100'}`}>
            <div className='flex gap-x-6'>
              <TbShoppingBagCheck size={40} color='green' />
              <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className='py-16 bg-orange-200'>
        <div className='container mx-auto'>
          <h2 className="text-3xl px-8 font-bold mb-12">Contact Us</h2>
          <div className='mx-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
            <form>
              <div className='mb-4'>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">Your Name</label>
                <input 
                  type='text' 
                  id='name' 
                  name='name' 
                  className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500'
                  placeholder='Enter Your Name'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">Your Email</label>
                <input 
                  type='email' 
                  id='email' 
                  name='email' 
                  className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500'
                  placeholder='Enter Your Email'
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                  placeholder="How can we assist you?"
                  required
                />
              </div>
              <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Submit</button>
            </form>

            <div className='px-6 md:px-12'>
              <h3 className="text-xl font-semibold mb-4">Our Contact Information</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Address:</span> 23 Umuahia Rd, Ikot Ekpene Akwa Ibom
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Phone:</span> (555) 123-4567
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Email:</span> info@supermarket.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Image src={shop} alt='Supermarket Hero' className='shadow-xl' style={{ objectFit: 'cover' }}/>
      </section> 
    </main>
  )
}
