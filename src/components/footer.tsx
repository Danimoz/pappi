export default function Footer(){
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="bg-orange-300 py-6 md:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <p className="text-xl leading-7 tracking-widest">Bonanza & Sons Mart</p>
            <p>24 Umuahia Rd. Ikot Ekpene</p>
            <p className="mt-4 leading-loose">All Rights Reserved &copy; {year} </p>
          </div>
        </div>
      </div>        
    </footer>
  )
}