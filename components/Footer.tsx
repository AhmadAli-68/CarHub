import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-200'>
      <div className='flex flex-wrap max-md:flex-col justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image
            src='/logo.svg'
            alt='footer-logo'
            width={118}
            height={18}
            className='object-contain'
          />
          <p className='text-base text-gray-700'>
            CarHub 2026 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className='footer__links'>
          {footerLinks.map(({ id, title, links }) => (
            <div
              key={id}
              className='footer__link'
            >
              <h3 className='font-bold'>
                {title}
              </h3>
              {links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className='text-gray-500'
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10'>
        <p>@2026 CarHub. All Rights Reserved.</p>

        <div className='footer__copyrights-link'>
          <Link
            href='/'
            className='text-gray-500'
          >
            Privacy Policy
          </Link>
          <Link
            href='/'
            className='text-gray-500'
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer