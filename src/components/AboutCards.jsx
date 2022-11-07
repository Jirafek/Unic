import uuid from 'react-uuid';
import { data_cards } from '../data/AboutCardsData';

const AboutCards = () => {
    function CreateAboutCardElements() {
        let items = data_cards.map((el, i) => {
            return (
                <div key={uuid()} className='w-[20.313rem] h-[40rem]  relative flex'>
                    <div style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)' }} className='w-[18.75rem] rounded-[5px] pb-[1.875rem] h-full flex flex-col items-center bg-[#F3F7FF]'>
                        <div className='bg-[#E6FFCD] w-full h-[4.688rem] flex justify-center items-center rounded-t-[5px] mb-5'>
                            <p className='text-center'>
                                {el.greenText}
                            </p>
                        </div>
                        <img className='w-[16.875rem]' src={el.src} alt="" />
                        <p className='max-w-[16.25rem] my-[1.875rem]'>
                            {el.mainText}
                        </p>
                        <button className='bg-[#2A73FF] head-group_btn text-[#FFFFFF] font-semibold flex items-center justify-center w-[16.25rem] h-10 rounded-[5px]'>
                            {el.btnText}
                        </button>
                    </div>

                    <div className='mt-[20.813rem] w-[1.563rem] h-[3.125rem] head-group_btn' style={{ backgroundImage: 'url(/img/go_next.png)' }}>
                        <img className='mt-[18px] ml-[5px] head-arrow' src="/img/miniArrow.png" alt="" />
                    </div>
                </div>
            );
        });

        return items;
    }

    return (
        <div className='flex justify-between text-[#3C517B] text-[0.688rem] mb-[6.25rem]'>
            <div className='w-[20.313rem] h-[40rem] relative flex'>
                <div style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)' }} className='w-[18.75rem] rounded-[5px] pt-5 pb-[1.875rem] h-full flex flex-col items-center bg-[#F3F7FF]'>
                    <img className='w-[16.875rem]' src="/img/aboutcards.png" alt="" />
                    <p className='max-w-[16.25rem] my-[1.875rem]'><span className='text-[#2B73FF]'>АНО ДПО МУИТ</span> — это научное учреждение, совместившее в себе образовательный инженерный и медицинский центры, имеет множество стратегических планов и принимает участие в образовательных проектах федерального значения. Динамика развития и большой научный потенциал позволяют организовать качественный учебный процесс в различных форматах обучения, в том числе с применением дистанционных технология (СДО).</p>
                    <button className='bg-[#2A73FF] head-group_btn text-[#FFFFFF] font-semibold flex items-center justify-center gap-x-5 w-[16.25rem] h-10 rounded-[5px]'>
                        Образовательный приоритет
                        <img className='w-5 head-arrow' src="/img/arrow_white.png" alt="" />
                    </button>
                </div>

                <div className='mt-[20.813rem] w-[1.563rem] h-[3.125rem] head-group_btn' style={{ backgroundImage: 'url(/img/go_next.png)' }}>
                    <img className='mt-[18px] ml-[5px] head-arrow' src="/img/miniArrow.png" alt="" />
                </div>
            </div>
            <CreateAboutCardElements />
        </div>
    );
}

export default AboutCards;
