'use client';
import { Button } from '@headlessui/react';
import Link from 'next/link';

export const PushPressButton = () => {
  return (
    <Button
      className="m-4 rounded-md bg-[#0070f3] px-8 py-4 font-bold text-white shadow-[0_4px_14px_0_rgb(0,118,255,60%)] transition duration-200 ease-linear hover:bg-orange-700 hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]"
      as={Link}
      href="https://iball247.pushpress.com/open/calendar"
      target="_blank"
    >
      Book Here
    </Button>
  );
};
