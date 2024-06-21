'use client';

import { Button } from '@headlessui/react';
import Link from 'next/link';

export const PushPressCal = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden rounded-xl">
      <iframe
        title="iBall247 Training Calendar"
        src="https://jh07ylh.pushpress.com/open/calendar?framed=0"
        // style={{ width: '500px', height: '400px' }}
        className="h-[600px] w-[560px]" // Corrected the style object syntax
      >
        {/* Removed the <noframes> tag */}
        {/* Consider providing alternative content here if necessary */}
      </iframe>
    </div>
  );
};

export const PushPressButton = () => {
  return (
    <Button
      className="m-4 rounded-md bg-[#0070f3] px-8 py-4 font-bold text-white shadow-[0_4px_14px_0_rgb(0,118,255,60%)] transition duration-200 ease-linear hover:bg-orange-700 hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]"
      as={Link}
      href="/contact"
    >
      Book Here
      {/* // TODO: change href to domain when received from client */}
    </Button>
  );
};
