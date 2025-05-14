import Link from "next/link"
import Image from "next/image"
import mchsLogo from '../../public/mchs-logo.jpeg'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white sticky top-0">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-secondary-200 transition-colors">
            <Image src={mchsLogo} alt="mchs logo" width={50} height={50} />
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-secondary-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary-200 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-secondary-200 transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-200 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-secondary-200 transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

