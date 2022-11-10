import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import uuid from 'react-uuid';
import { gerbs_data } from '../data/AboutCardsData';

const breakpoints = {
  1000: {
    slidesPerView: 3
  },
  1920: {
    slidesPerView: 6,
  },
};

const modules = [Autoplay]

const autoplay = {
  delay: 2000
};

const Gerbs = () => {
    function CreateItems() {
        let items = gerbs_data.map((el, i) => {
            return (
                <SwiperSlide key={uuid()} style={{ width: '13.75rem', height: '10.625rem' }} className='relative flex items-end'>
                    <div style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)' }} className='h-[8.125rem] w-[13.75rem] pb-[0.938rem] flex justify-center items-end rounded-[5px] bg-[#F3F7FF]'>
                        <img className='absolute left-1/2 -translate-x-1/2 top-0' src={el.src} alt="" />
                        <p className='text-[#3C517B] max-w-[12.5rem] text-[0.688rem] text-center'>
                            {el.text}
                        </p>
                    </div>
                </SwiperSlide>
            );
        });

        return items;
    }

    return (
        <Swiper
            style={{ height: '10.625rem' }}
            breakpoints={breakpoints}
            className='mb-[6.25rem] flex justify-between mid:w-full w-[44.688rem]'
            autoplay={autoplay}
            allowTouchMove={false}
            loop
            speed={2000}
            modules={modules}
        >
            {CreateItems()}
        </Swiper>
    );
}

export default Gerbs;
