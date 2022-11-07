import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import uuid from 'react-uuid';
import { gerbs_data } from '../data/AboutCardsData';

const breakpoints = {
  750: {
    slidesPerView: 2,
    // spaceBetween: 10,
    // slidesPerGroup: 1,
    // Autoplay
  },
  1450: {
    slidesPerView: 4,
    // spaceBetween: 10,
    // slidesPerGroup: 1,
    // Autoplay
  },
};

const Gerbs = () => {
    function CreateItems() {
        let items = gerbs_data.map((el, i) => {
            return (
                <SwiperSlide key={uuid()} style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)' }} className='w-[13.75rem] h-[8.125rem] rounded-[5px] bg-[#F3F7FF] relative pb-[0.938rem] flex justify-center items-end'>
                    <img className='absolute left-1/2 -translate-x-1/2 -top-10' src={el.src} alt="" />
                    <p className='text-[#3C517B] max-w-[12.5rem] text-[0.688rem] text-center'>
                        {el.text}
                    </p>
                </SwiperSlide>
            );
        });

        return items;
    }

    return (
        <Swiper
            className='mb-[6.25rem]'
            initialSlide={2}
            centeredSlides
            breakpoints={breakpoints}
        >
            <div className='flex justify-between'>
                <CreateItems />
            </div>
        </Swiper>
    );
}

export default Gerbs;
