import Image from 'next/image';
const Quote = () => {
  return (
    <div className="flex flex-col bg-green-400 p-4">
      <Image src="/unseen-hours.png" height={500} width={500} alt="unseen hours:" quality={70} />
      <p className="m-3 border-t-2">
        WE INSPIRE ATHLETES THROUGH ELITE TRAINING AND SHARING THE DETAILS OF THE GAME. OUR TRAINING
        SPECIALIZES IN HELPING PROGRAMS AND PLAYERS TO SCORE AND PLAYER DEVELOPMENT SKILLS NEEDED TO
        BE SUCCESSFUL IN GAME SITUATIONS. WE HAVE THE ABILITY TO WORK WITH ALL LEVELS AND AGES. WE
        ARE THE BEST AT PROVIDING THE APPROPRIATE “STARTER PACK” FOR NEW INSPIRING PLAYERS.
      </p>
      {/* <CalendlyWidget /> */}
    </div>
  );
};

export default Quote;
