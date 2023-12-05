import pic1 from '@/images/storepic1.jpg';
import pic2 from '@/images/storepic2.jpg';
import pic3 from '@/images/storepic3.jpg';
import pic4 from '@/images/storepic4.jpg';
import pic5 from '@/images/storepic5.jpg';
import pic6 from '@/images/storepic6.jpg';
import Image from 'next/image';


export default function Gallery(){
  const storePics = [pic6, pic4, pic3, pic2, pic5, pic1]

  return(
    <main>
      <section className='py-12 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
        {storePics.map((pic, idx) => (
          <div className='h-full' key={idx}>
            <Image src={pic} alt='Store Pictures' className='shadow-xl w-[730px] h-[644px] rounded-2xl hover:scale-95' />
          </div>
        ))}        
      </section>
    </main>
  )
}