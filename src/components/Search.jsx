// component search
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-6 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis
            ullamcorper adipiscing efficitur mattis blandit platea. Dis posuere
            porttitor dapibus volutpat, nascetur hac. Placerat sem ultrices eu
            dis ornare dolor volutpat eget. Praesent massa aenean tellus enim
            leo feugiat platea. Facilisis ullamcorper pulvinar dolor ad tortor
            eget.consectetuer adipiscing elit. Mattis ullamcorper adipiscing
            efficitur mattis blandit platea. Dis posuere porttitor dapibus
            volutpat.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-10 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING TRAVEL</h3>
              <p className='p-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      {/* formulario */}
      <div>
        <div className='border text-center '>
          <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
          <p className='py-4'>12 HOURS LEFT</p>
          <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>

        <form className='w-full'>
          <div className='flex flex-col my-2'>
            <label htmlFor='destination'>Destination</label>
            <select className='border rounded-md p-2'>
              <option value=''>Punta Cana</option>
              <option value=''>Samaná</option>
              <option value=''>Cayo Levantado</option>
              <option value=''>Bahia de las Águilas</option>
            </select>
          </div>
          <div className='flex flex-col my-4'>
            <label htmlFor=''>Check-In</label>
            <input className='border rounded-md p-2' type='date' />
          </div>
          <div className='flex flex-col my-2'>
            <label htmlFor=''>Check-Out</label>
            <input className='border rounded-md p-2' type='date' />
          </div>
          <button className='w-full my-4'>Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
