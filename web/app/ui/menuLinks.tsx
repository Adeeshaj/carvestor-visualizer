'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
    { name: 'Price Lookup', href: '/lookup/price' },
    { name: 'Car Lookup', href: '/lookup/car'},
  ];


export default function MenuLinks() {
    const pathname = usePathname();
    return (
        <>
        {links.map((link) => {
            return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'w-[223px] h-[110px] rounded-[90px]  border-[5px] border-[#9139ba] flex items-center justify-center',
                    {
                      'bg-[#9139ba]': pathname === link.href,
                    },
                  )}
                >

                <p className={clsx(
                    "text-3xl font-bold text-center",
                    {
                        'text-white': pathname === link.href,
                        'text-[#9139ba]': pathname !== link.href,
                    },
                    )}>
                {link.name}
                </p>
                </Link>
              );
        })}
        </>
    );
}
