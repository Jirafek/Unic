import uuid from 'react-uuid';
let cards_data2 = [
    {
        miniImg: '/img/minic1.png',
        backImg: '/img/bgBig1.png',
        text: 'Внесение документов об образовании в Федеральную информационную систему'
    },
    {
        miniImg: '/img/minic2.png',
        backImg: '/img/bgBig2.png',
        text: 'Посещение комфортных аудиторий, предназначенных для проведения лекций'
    },
    {
        miniImg: '/img/minic3.png',
        backImg: '/img/bgBig3.png',
        text: 'Дистанционное обучение без отрыва от профессиональной деятельности'
    },
    {
        miniImg: '/img/minic4.png',
        backImg: '/img/bgBig4.png',
        text: 'Соответствие учебных программ Федеральным образовательным стандартам'
    },
    {
        miniImg: '/img/minic5.png',
        backImg: '/img/bgBig5.png',
        text: 'Регулярное участие в онлайн-лекциях, прямых эфирах и учебных дискуссиях'
    },
    {
        miniImg: '/img/minic6.png',
        backImg: '/img/bgBig6.png',
        text: 'Назначение личного куратора, который ответит на вопросы и поможет с заданиями'
    },
]
const NumericCards = () => {
    function CreateNumericItems() {
        let items = cards_data2.map((el, i) => {
            return (
                <div key={uuid()} className='w-[21.875rem] h-[9.375rem] relative flex items-center justify-start gap-x-5 text-[#3C517B]'>
                    <img className='h-[5.875rem] absolute left-1/2 -translate-x-1/2' src={el.backImg} alt="" />
                    <img className='w-[3.125rem] z-10' src={el.miniImg} alt="" />
                    <p className='text-[0.688rem] max-w-[17.5rem] z-10'>
                        {el.text}
                    </p>
                </div>
            );
        });

        return items;
    }

    return (
        <div className='flex mid:flex-row flex-col items-center gap-[4.375rem] relative'>
            <div className='flex gap-x-[4.375rem] gap-y-[1.875rem] max-w-[48.125rem] flex-wrap'>
                <CreateNumericItems />
            </div>
            <div className='relative'>
                <div className='absolute w-full h-[4px] bg-[#fcfcfc] left-0 top-0'></div>
                <img className='w-[38.125rem]' src="/video/prof.gif" alt="" />
            </div>
        </div>
    );
}

export default NumericCards;
