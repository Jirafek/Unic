import { useReducer, Fragment, useState } from 'react';

let new_arr = [
    'Главная страница', 
    'Факультет дополнительного образования и профобучения',
    'Факультет производственной безопасности и охраны труда',
    'Факультет рабочих профессий и подготовки к аттестации в НАКС',
    'Факультет непрерывного медицинского образования',
    'Сведения и вакансии',
    'Контакты Университета'
]

let pages_data = [
    'Главная страница', 
    'Факультет дополнительного образования и профобучения',
    'Факультет производственной безопасности и охраны труда',
    'Факультет рабочих профессий и подготовки к аттестации в НАКС',
    'Факультет непрерывного медицинского образования',
    'Сведения и вакансии',
    'Контакты Университета'
]

const Aside = () => {
    const [currentPage, setCurrentPage] = useState(1);
    function assembleData() {
        pages_data = pages_data.map((el, i) => {
            let color = currentPage === i+1 ? '#2B73FF' : '#3C517B'
            return (
                <div onClick={() => {changePage(i)}} key={i} className='flex h-10 items-center cursor-pointer'>
                    <p style={ {color: color} } className='w-[1.875rem] duration-500 text-xs font-semibold mr-[0.938rem] ml-[1.875rem]'>0{i+1}</p>
                    <p style={ {color: color} } className='text-xs duration-500 font-semibold w-[15rem]'>{new_arr[i]}</p>
                </div>
            );
        });

        return pages_data;
    }

    function changePage(num) {
        setCurrentPage(num+1)
    }

    return (
        <Fragment>
            <aside className='w-80 fixed mt-[7.5rem] bg-[#F3F7FF] py-[3.125rem]'>
                <div className='flex flex-col gap-y-[1.875rem]'>
                    <div style={ {top: 50 + (currentPage-1)*40 + (currentPage-1)*30 + 'px'} } className='absolute duration-500 left-0 h-10 w-[0.625rem] rounded-r-[20px] bg-[#2B73FF] justify-self-start'></div>
                    {assembleData()}
                </div>
                <div className='h-[16.25rem] px-5 pt-[3.125rem] text-[0.688rem] text-[#3C517B] relative w-60 mt-[3.75rem] mx-auto' style={{ backgroundImage: 'url(/img/faq.png)' }}>
                    <div className='absolute w-[6.25rem] h-[6rem] left-1/2 -top-[1.875rem]' style={{ backgroundImage: 'url(/img/green_sqr.png)', transform: 'translate(-50%)' }}></div>
                    <div className='absolute w-[20px] h-[20px] left-1/2 -top-[12px]' style={{ backgroundImage: 'url(/img/quest.png)', transform: 'translate(-56%)' }}></div>
                    <h2 className='font-bold text-center mb-[1.875rem]'>Учебный департамент</h2>
                    <p className='font-normal text-center'>Задайте свой вопрос и специалист комиссии проконсультирует Вас!</p>
                    <button className='w-full h-10 bg-white rounded-[5px] mt-10 shadow-[0px_5px_10px_0px_rgba(0, 0, 0, 0.5)]'>Задать вопрос</button>
                </div>
            </aside>
        </Fragment>
    );
}

export default Aside;
