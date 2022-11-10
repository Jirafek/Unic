

const AdvMenuPhone = () => {
    return (
        <div className="w-full bg-[#F3F7FF] justify-center lg:h-[9rem] h-20 xl:hidden flex items-center lg:mt-[9.375rem] mt-16">
            <div className="gap-[1.25rem] flex h-full items-center">
                <button className="h-[1.875rem] lg:w-[6.25rem] lg:h-[3.125rem] w-[3.75rem] flex justify-center items-center text-white lg:text-[0.688rem] text-[0.438rem] lg:font-bold font-semibold bg-[#2A73FF] rounded-[3px]">
                    Меню
                </button>
                <div className='flex lg:h-[3.125rem] h-[1.875rem] lg:text-[0.688rem] text-[0.375rem]'>
                    <div className='bg-white flex items-center justify-end border-[0.5px] border-[#2B73FF] lg:w-[17.5rem] w-[9.375rem] rounded-l-[5px]'>
                        <img className='lg:h-4 h-[0.625rem]' src="/img/search.png" alt="" />
                        <input className='bg-white border-0 outline-none text-center lg:w-[15.313rem] w-[8.125rem] h-full' placeholder='Введите название программы' type="text" />
                    </div>
                    <button className='bg-[#2B73FF] rounded-r-[5px] text-center align-middle font-bold lg:w-[6.25rem] w-[3.125rem] text-white'>
                        найти
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AdvMenuPhone;
