import bannerBackgroundImg from '../assets/banner.png'
import bannerLogo from '../assets/banner-logo.png'

function Banner() {
  return (
    <div
      className="hidden md:block md:w-full md:h-full bg-gray-200 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerBackgroundImg})` }}
    >
      <div className="flex justify-center items-center h-full">
        <img
            src={bannerLogo}
            alt="Just Cook Logo"
            className='w-80'
          />
      </div>
    </div>
  )
}

export default Banner