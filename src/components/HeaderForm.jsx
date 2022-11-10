import { useState } from 'react';

const HeaderForm = () => {
    const [btnState, setBtnState] = useState(false);

    function ChangerDocsAgreement() {
        if (btnState) setBtnState(false)
        else setBtnState(true)
    }

    return (
        <form className="lg:px-[3.125rem] p-[1.25rem] lg:py-[1.875rem] lg:text-[0.625rem] text-[0.438rem] flex flex-col lg:gap-y-[1.875rem] gap-y-[1.25rem] text-[#8D8D8D] rounded-b-[5px]">

            <div className='bg-[#FFFFFF] rounded-[5px]'>
            <select 
            style={{
                background: 'url(/img/select_arrow.png) no-repeat right',
                backgroundPositionX: 'calc(100% - 18px)'
            }}
            className="w-full h-[1.875rem] pl-5 outline-none appearance-none font-medium" 
            name="facl" 
            id="hf1">
                <option value="null">Выберите факультет</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            </div>

            <div className='bg-[#FFFFFF] rounded-[5px]'>
            <select 
            style={{
                background: 'url(/img/select_arrow.png) no-repeat right',
                backgroundPositionX: 'calc(100% - 18px)'
            }}
            className="w-full lg:h-[1.875rem] h-[1.875rem] pl-5 outline-none appearance-none font-medium" 
            name="cafedr" 
            id="hf2">
                <option value="null">Выберите кафедру</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            </div>

            <div className='bg-[#FFFFFF] rounded-[5px]'>
            <select 
            style={{
                background: 'url(/img/select_arrow.png) no-repeat right',
                backgroundPositionX: 'calc(100% - 18px)'
            }}
            className="w-full lg:h-[1.875rem] h-[1.875rem] pl-5 outline-none appearance-none font-medium" 
            name="program" 
            id="hf3">
                <option value="null">Выберите образовательную программу</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            </div>

            <div className="flex justify-between w-full lg:flex-row flex-col gap-y-[1.25rem]">
                
                <div className='bg-[#FFFFFF] rounded-[5px]'>
                <select
                style={{
                    background: 'url(/img/select_arrow.png) no-repeat right',
                    backgroundPositionX: 'calc(100% - 18px)'
                }}
                className="lg:w-[20.75rem] w-full lg:h-[1.875rem] h-[1.875rem] pl-5 outline-none appearance-none font-medium" 
                name="program" 
                id="hf3">
                    <option value="null">Выберите предпочтительный способ связи</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                </div>

                <input className="lg:w-[15.5rem] w-full font-medium lg:h-[1.875rem] h-[1.875rem] rounded-[5px] bg-[#FFFFFF] lg:text-center lg:pl-0 pl-[1.25rem] outline-none" placeholder="Укажите контакт" type="text" />
            </div>
            <input className="w-full lg:h-[1.875rem] h-[1.875rem] rounded-[5px] bg-[#FFFFFF] pl-5 outline-none" placeholder="Как специалист комиссии может к вам обращаться?" type="text" />
            <div className="flex justify-between lg:mt-5 mt-[5px] lg:flex-row flex-col gap-y-[1.563rem]">
                <div className='flex gap-x-[10px] items-center'>
                    <div onClick={ChangerDocsAgreement} className='lg:w-[40px] lg:h-[20px] w-[30px] h-[15px] bg-[white] rounded-[10px]'>
                        <div style={{ backgroundColor: btnState ? '#2A73FF' : '#84AEFF', transform: `translateX(${btnState ? (window.innerWidth >= 1024 ? '20px' : '15px') : '0'})` }} className='h-full duration-500 lg:w-[20px] w-[15px] rounded-[50%]'></div>
                    </div>
                    <p className='font-medium'>Согласие на обработку персональных данных</p>
                </div>
                <button className='bg-[#2A73FF] rounded-[5px] text-white lg:text-[0.6875rem] text-[0.5rem] flex items-center justify-center w-60 lg:h-[1.875rem] h-[1.875rem] font-semibold'>
                    Узнать стоимость обучения
                </button>
            </div>
        </form>
    );
}

export default HeaderForm;
