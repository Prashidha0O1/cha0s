import Spline from '@splinetool/react-spline';

const About = () => {
  return (
    <div className='relative'>
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" className='absolute'/>
      <div className='absolute bg-black w-36 h-10 bottom-4 right-4 rounded-xl'></div>
      <div className="text-white flex flex-col items-center z-20 gap-8 py-20 px-10 p-5 rounded-xl md:px-20 lg:px-36 xl:gap-16 xl:px-52 xl:py-40">
        <h3 className="font-lexend text-4xl xl:text-5xl backdrop-blur-xl bg-neutral-50/20 px-4 py-2 rounded-2xl">About</h3>
        <p className="font-lexend text-justify md:text-lg lg:text-xl xl:text-2xl backdrop-blur-xl bg-neutral-50/10 p-6 rounded-2xl">
          Welcome to Crypto Chaos, where we've taken the wild west of crypto and turned it into a digital thunderdome! Because what's better than watching the crypto market crash? Watching it crash while arguing about it with strangers on the blockchain, of course!

          Here, your most chaotic crypto takes and market predictions aren't just lost in the void of the internet – they're permanently chiseled into the blockchain. Think of it as WallStreetBets' rebellious cousin who discovered blockchain and never looked back.

          Whether you're here to share your latest "to the moon" predictions, debate whether Bitcoin is actually just a Ponzi scheme (it's not... probably), or just want to watch the crypto world burn from the comfort of your keyboard, Crypto Chaos is your digital playground. Just remember: what happens on the blockchain stays on the blockchain... forever. No take-backsies!

          So grab your favorite conspiracy theory, your most controversial crypto opinion, and your digital wallet – it's time to make some digital history that can never be deleted. Because in the immortal words of crypto traders: "This is fine, I'm still holding."
        </p>
      </div>
    </div>

  )
}
export default About
