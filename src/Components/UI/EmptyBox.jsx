import { Link } from 'react-router-dom';
import Box from '../../assets/emptyBox.svg'

const EmptyBox = ({url,title}) => {
  return (
    <>
      <section className="flex flex-col justify-center items-center mx-auto">
        <img src={Box} alt="no image" />
        <h2 className="text-[48px] mt-[28px] mb-[13px] font-bold">
          Здесь пусто!
        </h2>
        <Link to={url} className="text-[32px] font-medium text-blue-400">{title}</Link>
      </section>
    </>
  );
};

export default EmptyBox;