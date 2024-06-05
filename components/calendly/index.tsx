const CalendlyWidget = () => {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/galyenbrian/30min"
        style={{ minWidth: 320, height: 700 }}
        suppressHydrationWarning
      />
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </>
  );
};

export default CalendlyWidget;
