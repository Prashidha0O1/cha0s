import { BackgroundBeamsWithCollision } from "@/components/ui/bg-beam-explode";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className='flex flex-col gap-6 items-center bg-black py-10 select-none'>
        <h2 className='font-lexend text-white text-2xl max-md:text-xl'>Made with <FontAwesomeIcon icon={faHeart} /> by</h2>
        <div className='flex flex-row gap-12'>
          <a href="https://github.com/Prashidha0O1" target="_blank">
            <div className='flex flex-row gap-2 items-center'>
              <img src="https://avatars.githubusercontent.com/u/89299485?s=400&u=e95da27e897cfbe873dfc944501f66cd8450f56c&v=4" alt="" className='h-10 rounded-lg'/>
              <h3 className='text-white font-lexend'>Prashidha0O1</h3>
            </div>
          </a>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Footer