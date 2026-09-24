// 'use client';

import { Button } from '@/components/ui/button';
import { navigationData } from '@/constant/navigation-data';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="custom-container flex-between h-16 md:h-21">
        {/* image logo */}
        <Image
          alt="logo"
          width={158}
          height={36}
          className="max-md:h-9 max-md:w-39.5"
          src="/images/logo.svg"
        />
        {/* nav */}
        <nav className="hidden lg:block">
          <ul className="flex-start gap-3">
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link href={data.href} className="hover:text-primary-200">
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* button */}
        <Button asChild className="hidden lg:flex">
          <Link href="#contact">Get Started</Link>
        </Button>

        {/* hamburger menu */}
      </div>
    </header>
  );
};

export default Navbar;
