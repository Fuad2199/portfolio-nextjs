import React from 'react';
import { Button } from '../ui/button';
import { ModeToggle } from '../ModeToggle';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import DownloadCV from '../DownloadCV';

export const menuItems = [
  { id: 1, label: 'Home', href: '#home' },
  { id: 2, label: 'About me', href: '#about' },
  { id: 3, label: 'Services', href: '#services' },
  { id: 4, label: 'Projects', href: '#projects' },
  { id: 5, label: 'Testimonials', href: '#testimonials' },
  { id: 6, label: 'Contact', href: '#contact' },
];

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full bg-background fixed top-0 left-0 border z-50">
        <div className="max-w-6xl mx-auto py-4 px-4 flex items-center justify-between">
          <div className="font-bold text-xl">
            MY{' '}
            <span className="text-amber-500">
              PORTFOLIO
            </span>
          </div>

          <nav className="hidden md:flex space-x-6 font-medium">
            {menuItems.map(item => (
              <Link href={item.href} key={item.id}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex bg-amber-500 hover:bg-amber-600 text-white cursor-pointer">
              <DownloadCV />
            </Button>
            <ModeToggle />
            <div className="block lg:hidden">
              <MobileMenu/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
