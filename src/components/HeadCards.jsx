import { cards_data } from '../data/headcardhelper';
import uuid from 'react-uuid';

const HeadCards = () => {
    function CreateCards() {
        let newArr = cards_data.map((el, i) => {
            return (
                <div 
                key={uuid()}
                className="relative lg:h-[12.5rem] h-[9.375rem] lg:w-[20.625rem] w-[17.5rem] lg:text-[0.688rem] text-[0.5rem] flex flex-col justify-end duration-500 hover:-translate-y-[10px]">
                    <div 
                    style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)', transform: 'translate(-50%)' }} 
                    className='lg:w-[17.5rem] w-[15rem] lg:h-10 h-[1.875rem] bg-[#E6FFCD] rounded-[5px] flex justify-center items-center absolute top-0 left-1/2 z-10'>
                        {el.name}
                    </div>
                    <div
                    style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)' }} 
                    className='lg:h-[11.25rem] h-[8.438rem] w-full bg-[#F3F7FF] rounded-[5px] align-bottom lg:pt-[3.125rem] pt-[2.188rem] lg:pl-[1.875rem] pl-[1.25rem] relative'>
                        <ul className='lg:text-[0.688rem] text-[0.5rem] flex flex-col text-[#3C517B] lg:mb-10 mb-[0.938rem]'>
                            {el.items.map(itm_el => {
                                return (
                                    <li key={uuid()} className='flex items-center'><div className='w-[2px] h-[2px] rounded-[50%] bg-[#3C517B] mr-2'></div> {itm_el}</li>
                                );
                            })}
                        </ul>
                        <button className='bg-white lg:text-[0.688rem] text-[0.5rem] font-bold flex lg:h-[1.875rem] h-[1.563rem] head-group_btn'>
                            <div className='flex items-center justify-center rounded-l-[5px] lg:w-[8.75rem] w-[7.5rem] h-full bg-[#2B73FF] text-white'>
                                Перейти
                            </div>
                            <div className='lg:w-10 w-[1.875rem] h-full flex items-center justify-center border border-[#2B73FF] rounded-r-[3px] '>
                                <img className='lg:w-[15px] w-[0.625rem] duration-500 bg-white head-arrow' src="/img/arrow.png" alt="" />
                            </div>
                        </button>
                        <img className='absolute right-0 bottom-0' style={ window.innerWidth >= 1024 ? { width: el.image.width, height: el.image.height } : { width: '80px', height: '100px' } } src={el.image.src} alt="" />
                    </div>
                </div>
            );
        })

        return newArr;
    }

    return (
        <div className="flex flex-wrap lg:flex-row flex-col items-center lg:justify-between justify-center mid:m-0 m-[0_auto] mid:max-w-[90.625rem] max-w-[44rem] gap-y-[1.875rem]">
            <CreateCards />
        </div>
    );
}

export default HeadCards;
