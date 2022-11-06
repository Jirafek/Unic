import { cards_data } from '../data/headcardhelper';
import uuid from 'react-uuid';

const HeadCards = () => {
    function CreateCards() {
        let newArr = cards_data.map((el, i) => {
            return (
                <div 
                key={uuid()} 
                style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)' }} 
                className="relative h-[12.5rem] w-[20.625rem] text-[0.688rem] flex flex-col justify-end duration-500 hover:-translate-y-[10px]">
                    <div 
                    style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)', transform: 'translate(-50%)' }} 
                    className='w-[17.5rem] h-10 bg-[#E6FFCD] rounded-[5px] flex justify-center items-center absolute top-0 left-1/2 z-10'>
                        {el.name}
                    </div>
                    <div className='h-[11.25rem] w-full bg-[#F3F7FF] rounded-[5px] align-bottom pt-[3.125rem] pl-[1.875rem] relative'>
                        <ul className='text-[0.6875rem] flex flex-col text-[#3C517B] mb-10'>
                            {el.items.map(itm_el => {
                                return (
                                    <li key={uuid()} className='flex items-center'><div className='w-[2px] h-[2px] rounded-[50%] bg-[#3C517B] mr-2'></div> {itm_el}</li>
                                );
                            })}
                        </ul>
                        <button className='bg-white text-[0.6875rem] font-bold flex h-[1.875rem] head-group_btn'>
                            <div className='flex items-center justify-center rounded-l-[5px] w-[8.75rem] h-full bg-[#2B73FF] text-white'>
                                Перейти
                            </div>
                            <div className='w-10 h-full flex items-center justify-center border border-[#2B73FF] rounded-r-[3px] '>
                                <img className='w-[15px] duration-500 bg-white head-arrow' src="/img/arrow.png" alt="" />
                            </div>
                        </button>
                        <img className='absolute right-0 bottom-0' style={{ width: el.image.width, height: el.image.height }} src={el.image.src} alt="" />
                    </div>
                </div>
            );
        })

        return newArr;
    }

    return (
        <div className="flex flex-wrap justify-between">
            <CreateCards />
        </div>
    );
}

export default HeadCards;
