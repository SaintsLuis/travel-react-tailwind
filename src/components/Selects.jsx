// componente Selects
import BoraBora from '../assets/borabora.jpg';
import KeyWest from '../assets/keywest.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <SelectsCard
        img={BoraBora}
        title='Punta Cana'
        alt='Imagen de Punta Cana'
      />
      <SelectsCard
        img={KeyWest}
        title='Punta Cana'
        alt='Imagen de Punta Cana'
      />
      <SelectsCard
        img={BoraBora2}
        title='Punta Cana'
        alt='Imagen de Punta Cana'
      />
      <SelectsCard
        img={Maldives}
        title='Punta Cana'
        alt='Imagen de Punta Cana'
      />
      <SelectsCard
        img={Maldives2}
        title='Punta Cana'
        alt='Imagen de Punta Cana'
      />
      <SelectsCard
        img={Maldives3}
        title='Punta Cana'
        alt='Imagen de Punta Cana'
      />
    </div>
  );
};

export default Selects;
