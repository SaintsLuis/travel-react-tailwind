/* eslint-disable react/prop-types */
// componente que muestra la imagen y el nombre de los lugares seleccionados

const SelectsCard = ({ img, title }) => {
  return (
    <div className='relative'>
      <img className='w-full h-full object-cover' src={img} />
      <div className='absolute bg-gray-900/30 top-0 left-0 w-full h-full'>
        <p className='absolute left-4 bottom-4 text-2xl font-bold text-white'>
          {title}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;
