import { useState } from 'react';

const HeaderForm = () => {
    const [btnState, setBtnState] = useState(false);

    function ChangerDocsAgreement() {
        if (btnState) setBtnState(false)
        else setBtnState(true)
    }

    return (
        <form className="px-[3.125rem] py-[1.875rem] text-[0.625rem] flex flex-col gap-y-[1.875rem] text-[#8D8D8D] rounded-b-[5px]">

            <div className='bg-[#FFFFFF] rounded-[5px]'>
            <select 
            style={{
                background: 'url(/img/select_arrow.png) no-repeat right',
                backgroundPositionX: 'calc(100% - 18px)'
            }}
            className="w-full h-[1.875rem] pl-5 outline-none appearance-none" 
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
            className="w-full h-[1.875rem] pl-5 outline-none appearance-none" 
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
            className="w-full h-[1.875rem] pl-5 outline-none appearance-none" 
            name="program" 
            id="hf3">
                <option value="null">Выберите образовательную программу</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            </div>

            <div className="flex justify-between w-full">
                
                <div className='bg-[#FFFFFF] rounded-[5px]'>
                <select
                style={{
                    background: 'url(/img/select_arrow.png) no-repeat right',
                    backgroundPositionX: 'calc(100% - 18px)'
                }}
                className="w-[20.75rem] h-[1.875rem] pl-5 outline-none appearance-none" 
                name="program" 
                id="hf3">
                    <option value="null">Выберите предпочтительный способ связи</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                </div>

                <input className="w-[15.5rem] h-[1.875rem] rounded-[5px] bg-[#FFFFFF] text-center outline-none" placeholder="Укажите контакт" type="text" />
            </div>
            <input className="w-full h-[1.875rem] rounded-[5px] bg-[#FFFFFF] pl-5 outline-none" placeholder="Как специалист комиссии может к вам обращаться?" type="text" />
            <div className="flex justify-between mt-5">
                <div className='flex gap-x-[10px] items-center'>
                    <div onClick={ChangerDocsAgreement} className='w-[40px] h-[20px] bg-[white] rounded-[10px]'>
                        <div style={{ backgroundColor: btnState ? '#2A73FF' : '#84AEFF', transform: `translateX(${btnState ? '20px' : '0'})` }} className='h-full duration-500 w-[20px] rounded-[50%]'></div>
                    </div>
                    <p>Согласие на обработку персональных данных</p>
                </div>
                <button className='bg-[#2A73FF] rounded-[5px] text-white text-[0.6875rem] flex items-center justify-center w-60 h-[1.875rem] font-bold'>
                    Узнать стоимость обучения
                </button>
            </div>
        </form>
    );
}

export default HeaderForm;
