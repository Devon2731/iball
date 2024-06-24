export const PushPressCal = () => {
  return (
    <div className="my-4 flex items-center justify-center overflow-hidden">
      <div className="rounded-md border-8 border-white">
        <iframe
          title="iBall247 Training Calendar"
          src="https://iball247.pushpress.com/open/calendar?framed=0"
          // style={{ width: '500px', height: '400px' }}
          className="h-[600px] w-[370px] max-w-[560px] md:w-[560px]"
          // height={500}
          // width={560}
        >
          {/* Removed the <noframes> tag */}
          {/* Consider providing alternative content here if necessary */}
        </iframe>
      </div>
    </div>
  );
};
