import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Maldives from '../assets/maldives.jpg';
import BoraBora from '../assets/borabora.jpg';
import Maldives2 from '../assets/maldives2.jpg';

const sliderData = [
  {
    url: Maldives,
  },
  {
    url: BoraBora,
  },
  {
    url: Maldives2,
  },
];

const Corousel = () => {
  return (
    <div className='max-w-[768px] mx-auto px-4 py-16 relative'>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
      >
        {sliderData.map((item, index) => (
          <div key={index}>
            <img
              className='w-full h-auto object-cover rounded-md'
              src={item.url}
              alt='/'
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Corousel;
