import { m } from 'framer-motion';
import { useReducer, Fragment, useState } from 'react';

const Header = () => {
    return (
        <Fragment>
          <header className='fixed top-0 left-0 z-10 w-full bg-[#F3F7FF] h-[120px] flex items-center border-b border-[#E0E0E0] text-[0.688rem] pr-[100px]'>
            <div className='w-[20rem] h-full flex items-center justify-center border-r border-[#E0E0E0]'>
                <img className='w-[14.375rem] h-20' src="/img/logo.png" alt="" />
            </div>
            <div className='flex items-center gap-x-[1.685rem]'>
                <a className='cursor-pointer flex items-center ml-[3.125rem] gap-x-[0.938rem]' href='tel:+74954812221'>
                    <img className='h-[1.875rem] w-[1.875rem]' src="/img/phone.png" alt="" />
                    <p className='text-[#3C517B] font-normal tracking-[0.042em] leading-[140%]'>Приемная комиссия: +7 (495) 481-22-21</p>
                </a>
                <a className='cursor-pointer flex items-center gap-x-[0.938rem]' href="mailto:info@muit-msk.ru">
                    <img className='h-[1.875rem] w-[1.875rem]' src="/img/mail.png" alt="" />
                    <p className='text-[#3C517B] font-normal tracking-[0.042em] leading-[140%]'>Приемная комиссия: +7 (495) 481-22-21</p>
                </a>
            </div>
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
                <button className='w-[11.25rem] h-[3.125rem] rounded-[5px] border border-[#2B73FF] text-[#2B73FF]'>
                    Проверить лицезию
                </button>
                <button className='w-[11.25rem] h-[3.125rem] bg-[#3C517B] rounded-[5px] font-bold text-white'>
                    Учебный портал
                </button>
            </div>
          </header>
        </Fragment>
    );
}

export default Header;
