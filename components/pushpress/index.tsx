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
    <>
      <button className="relative p-[3px]">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
        <div className="group relative  rounded-[6px] bg-black  px-8 py-2 text-white transition duration-200 hover:bg-transparent">
          Lit up borders
        </div>
      </button>
    </>
  );
};
