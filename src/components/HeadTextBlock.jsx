import uuid from 'react-uuid';
import { text_block_Data } from '../data/AboutCardsData';

const HeadTextBlock = () => {
    function CreateImagedItems() {
        let items = text_block_Data.map(el => {
            return (
                <div  key={uuid()} className='relative text-[#3C517B]'>
                    <div className='px-[0.625rem] rounded-[5px] bg-[#E6FFCD] text-center text-[0.625rem] flex justify-center items-center absolute left-1/2 -translate-x-[50%] -top-[1.563rem] w-[17.5rem] h-[3.125rem]'>
                        {
                            el.text
                        }
                    </div>
                    <img style={{ boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)' }} className='w-80' src={el.src} alt="" />
                </div>
            );
        });

        return items;
    }

    return (
        <div className='flex justify-between text-[#3C517B] mid:flex-row flex-col mid:items-start items-center'>
            <div className='flex flex-col gap-y-[4.688rem] max-w-[37.5rem] relative mid:mb-0 mb-[40px]'>
                <img className='absolute bottom-0 -left-[50px] mid:block hidden' src="/img/bg_gerb_left.png" alt="" />
                <div className=''>
                    <h2 className='mb-[2.344rem] text-[0.875rem] font-medium tracking-[0.05rem]'>
                        <span className='text-[#2A73FF]'>ОЧНОЕ ОБУЧЕНИЕ</span> В ОБРАЗОВАТЕЛЬНОМ КЛАСТЕРЕ
                    </h2>
                    <div className='flex flex-col gap-y-[1.25rem] text-[0.688rem]'>
                        <p>Уникальная методика преподавания и система авторизации учебного процесса – позволяют успешно организовывать и проводить очное обучение. Экспертный преподавательский состав реализует для слушателей более 700 курсов по разным направлениям, как для начинающих, так и для профессионалов. </p>
                        <p>Под руководством опытных преподавателей, в классах, оснащенных самым современным оборудованием, Вы освоите интересные для себя направления подготовки и приобретете необходимые практические знания и навыки. Абсолютным преимуществом очного обучения является гарантированное расписание. Занятия проходят регулярно в выходные и рабочие дни. Вы всегда сможете заранее спланировать для себя обучение и заниматься в удобном для вас графике. </p>
                        <p>Состав преподавателей работает на результат и гарантирует нашим слушателям высочайшее качество обучения. Мы постоянно поднимаем планку требований, которые предъявляем к себе — к нашим преподавателям, менеджерам, классам, организации учебного процесса. Наша цель – подготовка высококлассных сотрудников для организаций различного профиля.</p>
                    </div>
                </div>
                <div>
                    <h2 className='mb-[2.344rem] text-[0.875rem] font-medium tracking-[0.05rem]'>
                        РЕГИСТРАЦИЯ ДОКУМЕНТОВ В <span className='text-[#2A73FF]'>ФИС ФРДО</span>
                    </h2>
                    <div className='text-[0.688rem]'>
                        <p>Многопрофильный университет инновационных технологий зарегистрирован в Федеральной информационной системе «Федерального реестра сведений о документах об образовании и о квалификации, документах об обучении» (ФИС «ФРДО»). Через доступ к электронной базе данных можно оперативно получить достоверные сведения о документах устанавливающих и подтверждающих ученую степень, уровень образования, полученную квалификацию, данные о сроках и периоде обучения. Система позволяет быстро проверить подлинность документов.</p>
                        <p className='my-[1.25rem]'>Основные функции и задачи ФИС ФРДО:</p>
                        <div className='flex items-start'>
                            <div className='w-[2px] h-[2px] rounded-[50%] bg-[#3C517B] mr-2 ml-[0.625rem] mt-[7px]'></div>
                            <p>Борьба с нелегальными или поддельными документами об образовании, пресечение их распространения и использования;</p>
                        </div>
                        <div className='flex items-start'>
                            <div className='w-[2px] h-[2px] rounded-[50%] bg-[#3C517B] mr-2 ml-[0.625rem] mt-[7px]'></div>
                            <p>Выявление коррупционной составляющей в работе образовательных учреждений;</p>
                        </div>
                        <div className='flex items-start'>
                            <div className='w-[2px] h-[2px] rounded-[50%] bg-[#3C517B] mr-2 ml-[0.625rem] mt-[7px]'></div>
                            <p>Улучшение качества обучения специалистов, за счет открытости и доступности достоверной информации об уровне образования квалификации выпускников высших и средних образовательных учреждений.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-x-[4.5rem] gap-y-[4.688rem] justify-end mid:flex-row flex-col'>
                <CreateImagedItems />
            </div>
        </div>
    );
}

export default HeadTextBlock;
