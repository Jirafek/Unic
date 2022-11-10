import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import uuid from 'react-uuid';

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

const diploms_data = [
    {
        src: '/img/diplom1.png',
        text: 'Свидетельство о государственной регистрации Университета'
    },
    {
        src: '/img/diplom2.png',
        text: 'Санитарно-эпидемиологическое заключение СЭЗ'
    },
    {
        src: '/img/diplom3.png',
        text: 'Лицензия на право ведения образовательной деятельности'
    },
    {
        src: '',
        text: 'Аккредитация в Министерстве труда и социальной защиты'
    },
    {
        src: '',
        text: 'Сертификат СМК на соответствие ГОСТ Р ИСО 9001-2015'
    },
    {
        src: '',
        text: 'Уведомление о включении в Федеральную систему ФРДО'
    },
]

const Diploms = () => {
    function CreateSlides() {
        let items = diploms_data.map(el => {
            let current_el

            if (el.src) {
                current_el = <SwiperSlide key={uuid()} style={{ width: '12.5rem' }} className='flex flex-col gap-y-[1.875rem] group'>
                    <img style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)' }} className='w-[12.5rem] h-[18.438rem] rounded-[5px] duration-500 group-hover:scale-110' src={el.src} alt="" />
                    <p className='text-[#3C517B] text-[0.625rem] text-center max-w-[12.5rem]'>
                        {el.text}
                    </p>
                </SwiperSlide>
            } else {
                current_el = <SwiperSlide key={uuid()} style={{ width: '12.5rem' }} className='flex flex-col gap-y-[1.875rem]'>
                    <div className='w-[12.5rem] h-[18.438rem] bg-white border-dashed border-[2px] rounded-[5px] flex justify-center items-center text-[#3C517B] text-[0.625rem] border-[#2A73FF]'>
                        <p className='text-center max-w-[200px]'>Скоро здесь появится обновленный документ</p>
                    </div>
                    <p className='text-[#3C517B] text-[0.625rem] text-center max-w-[12.5rem]'>
                        {el.text}
                    </p>
                </SwiperSlide>
            }

            return current_el;
        })

        return items;
    }

    return (
        <div className="flex flex-col gap-y-[4.375rem] mt-[6.25rem] mb-[6.25rem]">
            <h2 className='text-[0.875rem] font-medium tracking-[0.05rem]'>
               <span className="text-[#2A73FF]">РАЗРЕШИТЕЛЬНАЯ ДОКУМЕНТАЦИЯ</span> УНИВЕРСИТЕТА
            </h2>
            <Swiper
                style={{ height: '22.188rem' }}
                className='flex mid:w-full w-[43.75rem]'
                breakpoints={breakpoints}
                allowTouchMove={false}
                autoplay={autoplay}
                loop
                speed={2000}
                modules={modules}
            >
                {CreateSlides()}
            </Swiper>
        </div>
    );
}

export default Diploms;
