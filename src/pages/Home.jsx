import Layout from '../components/Layout';
import HeadCards from '../components/HeadCards';
import HeaderForm from '../components/HeaderForm';
import NumericCards from '../components/NumericCards';
import AboutCards from '../components/AboutCards';
import Gerbs from '../components/Gerbs';
import HeadTextBlock from '../components/HeadTextBlock';
import Diploms from '../components/Diploms';

const Home = () => {
    return (
        <Layout>
            <section className='mid:mt-[7.5rem] xl:mt-[9.375rem] lg:p-[3.125rem] pb-0 xl:ml-[19.938rem] pr-[10px] xl:border-l xl:border-b border-[#E0E0E0] relative'>
                <div className='max-w-[1450px]'>
                <div className='flex justify-between mid:items-start items-center cent:flex-row flex-col lg:gap-y-[20px]'>
                    <div className='lg:w-[43.938rem] w-[20rem] lg:h-[28.125rem] h-[17.5rem]'>
                        <div className='bg-[#E6FFCD] w-full h-10 lg:text-[0.688rem] text-[0.5rem] lg:px-0 px-[1.875rem] text-center flex items-center justify-center'>
                            Дополнительное образование и профессиональное обучение в АНО ДПО МУИТ
                        </div>
                        <video className='w-full' loop autoPlay src="/video/page1_sicle.mp4"></video>
                    </div>
                    <div className='bg-[#F3F7FF] lg:w-[44rem] w-[17.5rem] lg:h-[28.125rem] h-[28.438rem]'>
                        <div className='bg-[#E6FFCD] w-full h-10 lg:text-[0.688rem] text-[0.5rem] flex items-center justify-center lg:px-0 px-[1.563rem] text-center rounded-t-[5px]'>
                            Подберите нужную программу и рассчитайте стоимость обучения
                        </div>
                        <HeaderForm />
                    </div>
                </div>
                <p className='font-semibold text-[#2A73FF] mt-[3.75rem] mb-[3.125rem] lg:text-[0.875rem] text-[0.5rem] text-center'>
                    Образовательные направления по видам профессиональной деятельности
                </p>
                <HeadCards />
                <p className='font-semibold text-[#2A73FF] mt-[3.75rem] mb-[3.125rem] lg:text-[0.875rem] text-[0.5rem] text-center'>
                    Что получают слушатели в процессе изучения образовательных программ
                </p>
                <NumericCards />
                <p className='font-semibold text-[#2A73FF] mt-[3.75rem] mb-[3.125rem] lg:text-[0.875rem] text-[0.5rem] text-center'>
                    Образовательная и научная деятельность на факультетах Университета
                </p>
                <AboutCards />
                <div className='flex gap-[5.188rem] mid:items-start items-center text-[#3C517B] relative mb-[6.25rem] mid:flex-row flex-col'>
                    <img className='h-[43.75rem] absolute z-[1] -right-[6.25rem] -top-24' src="/img/bg_gerd_right.png" alt="" />
                    <video controls className='w-[42.688rem] h-[31.25rem] rounded-[10px] z-10' src="/video/dist_obr.mp4"></video>
                    <div className='flex flex-col z-10'>
                        <h2 className='text-[#2A73FF] lg:text-[0.875rem] text-[0.5rem] font-medium tracking-[0.05rem] mb-[1.875rem]'>ЗАОЧНОЕ ОБУЧЕНИЕ С ПРИМЕНЕНИЕМ ДИСТАНЦИОННЫХ ТЕХНОЛОГИЙ</h2>
                        <div className='text-[0.688rem] gap-y-[1.25rem] flex flex-col max-w-[42.75rem]'>
                            <p>Дистанционное обучение - это обучение с использованием информационных и телекоммуникационных технологий, а именно сети Интернет. Таким образом данное обучение можно назвать электронным.</p>
                            <p>Дистанционные образовательные технологии закреплены в Федеральном законе «Об образовании» от 29.12.2012 года № 273-ФЗ (ред. от 29.12.2017 года) и Приказе Министерства образования и науки РФ от 23 августа 2017 года № 816 «Об утверждении порядка применения организациями, осуществляющими образовательную деятельность, электронного обучения, дистанционных образовательных технологий при реализации образовательных программ» (Зарегистрировано в Минюсте России 18.09.2017 года № 48226).</p>
                            <p className='text-[#2A73FF]'>Почему дистанционное обучение востребовано?</p>
                            <div className='flex flex-col gap-y-[1.25rem]'>
                                <div className='flex items-center'>
                                    <div className='w-[2px] h-[2px] rounded-[50%] bg-[#3C517B] mr-2 ml-[0.625rem]'></div>
                                    <p>Слушатель осваивает учебные программы без посещения учебного заведения - это удобно для жителей отдалённых регионов страны или людей, не имеющих возможности оформить учебную командировку.</p>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-[2px] h-[2px] rounded-[50%] bg-[#3C517B] mr-2 ml-[0.625rem]'></div>
                                    <p>Учебный материал представлен и доступен круглосуточно в электронном виде, а доступ к этим материалам обеспечивается техническими и программными средствами сети Интернет. Все обучение проходит на образовательном портале Университета, где размещены учебные материалы и проходят онлайн-лекции.</p>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-[2px] h-[2px] rounded-[50%] bg-[#3C517B] mr-2 ml-[0.625rem]'></div>
                                    <p>Слушатель изучает учебный материал, выполняет задания, сдает онлайн-тесты и квалификационные экзамены. Это можно делать в любое удобное для слушателя время.</p>
                                </div>
                            </div>
                            <p>Согласно приказу Министерства образования РФ № 4452, от 18 декабря 2002 года дистанционное обучение является образовательной технологией. Таким образом, можно пройти обучение как в очной, так и в заочной форме с применением дистанционных технологий. В документах об образовании форма обучения не указывается.</p>
                        </div>
                    </div>
                </div>
                <Gerbs />
                <HeadTextBlock />
                <Diploms />
                </div>
            </section>
        </Layout>
    );
}

export default Home;
