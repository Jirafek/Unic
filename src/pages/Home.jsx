import Layout from '../components/Layout';
import HeadCards from '../components/HeadCards';
import HeaderForm from '../components/HeaderForm';

const Home = () => {
    return (
        <Layout>
            <section className='mt-[7.5rem] p-[3.125rem] ml-80 pr-[100px]'>
                <div className='flex justify-between'>
                    <div className='bg-[#D9D9D9] w-[44rem] h-[28.125rem]'>
                        <div className='bg-[#E6FFCD] w-full h-10 text-[0.688rem] flex items-center justify-center'>
                            Дополнительное образование и профессиональное обучение в АНО ДПО МУИТ
                        </div>
                    </div>
                    <div className='bg-[#F3F7FF] w-[44rem] h-[28.125rem]'>
                        <div className='bg-[#E6FFCD] w-full h-10 text-[0.688rem] flex items-center justify-center'>
                            Выберите нужную программу и рассчитайте стоимость обучения
                        </div>
                        <HeaderForm />
                    </div>
                </div>
                <p className='font-semibold text-[#3C517B] mt-[3.75rem] mb-[3.125rem]'>
                    <a className='text-[#2A73FF]' href="#">Образовательные направления </a>
                    по видам профессиональной деятельности
                </p>
                <HeadCards />
            </section>
        </Layout>
    );
}

export default Home;
