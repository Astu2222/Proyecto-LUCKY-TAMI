import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>

    <h1 className='text-red-900 text-bold text-5xl'>Pagina Principal</h1>
    
    <Link href="/">
    <button>Sobre Nosotros</button>
    </Link>

    </>
  )
}
