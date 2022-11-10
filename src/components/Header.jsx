import { m } from 'framer-motion';
import { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
          <header className='fixed top-0 left-0 z-[100] w-full xl:bg-[#F3F7FF] bg-[#E7EEFF] mid:h-[120px] lg:h-[150px] h-[4.063rem] flex items-center lg:border-b border-[#E0E0E0] lg:text-[0.688rem] text-[0.375rem] pr-[100px] xl:justify-start justify-around'>
            <div className='lg:w-[20rem] lg:h-full flex items-center justify-center xl:border-r border-[#E0E0E0]'>
                <img className='lg:w-[14.375rem] w-[8.125rem] lg:h-20 h-[2.813rem]' src="/img/logo.png" alt="" />
            </div>

        <div className='flex items-center h-full mid:justify-start justify-around mid:w-auto xl:w-[calc(100%-20rem)]'>

            <div className='flex mid:flex-row flex-col items-center gap-[1.685rem]'>
                <a className='cursor-pointer flex items-center mid:ml-[3.125rem] gap-x-[0.938rem]' href='tel:+74954812221'>
                    <img className='lg:h-[1.875rem] lg:w-[1.875rem] w-[0.625rem] h-[0.625rem]' src="/img/phone.png" alt="" />
                    <p className='text-[#3C517B] font-medium tracking-[0.042em] leading-[140%]'>Приемная комиссия: +7 (495) 481-22-21</p>
                </a>
                <a className='cursor-pointer flex items-center gap-x-[0.938rem]' href="mailto:info@muit-msk.ru">
                    <img className='lg:h-[1.875rem] lg:w-[1.875rem] w-[0.625rem] h-[0.625rem]' src="/img/mail.png" alt="" />
                    <p className='text-[#3C517B] font-medium tracking-[0.042em] leading-[140%]'>Приемная комиссия: +7 (495) 481-22-21</p>
                </a>
            </div>

            <div className='xl:flex hidden gap-y-[1rem] mid:flex-row flex-col items-center mid:h-full'>

            <div className='flex h-[3.125rem] ml-[3.125rem]'>
                <div className='bg-white flex items-center justify-end border-[0.5px] border-[#2B73FF] w-[17.5rem] rounded-l-[5px]'>
                    <img className='h-4' src="/img/search.png" alt="" />
                    <input className='bg-white border-0 outline-none text-center w-[15.313rem] h-full' placeholder='Введите название программы' type="text" />
                </div>
                <button className='bg-[#2B73FF] rounded-r-[5px] text-center align-middle font-bold w-[6.25rem] text-white'>
                    найти
                </button>
            </div>
            <div className='flex gap-x-5 ml-[3.125rem]'>
                <button className='w-[11.25rem] h-[3.125rem] rounded-[5px] border border-[#2B73FF] text-[#2B73FF] bg-[#FFFFFF]'>
                    Проверить лицезию
                </button>
                <button className='w-[11.25rem] h-[3.125rem] bg-[#3C517B] rounded-[5px] font-bold text-white'>
                    Учебный портал
                </button>
            </div>
            </div>
        </div>
          </header>
        </Fragment>
    );
}

export default Header;
