import uuid from 'react-uuid';

const footer_data = [
    {
        firstText: 'Справочный центр',
        tel: '+74954812221',
        telText: '+7 (495) 481-22-21',
        secondText: 'По вопросам учебного процесса:',
        mail: 'info@muit-msk.ru',
        src: '/img/footerBlock1.png'
    },
    {
        firstText: 'Коммерческий департамент',
        tel: '+74954812221',
        telText: '+7 (495) 481-22-21 добавочный 100',
        secondText: 'По вопросам сотрудничества:',
        mail: 'prorector@muit-msk.ru',
        src: '/img/footerBlock2.png'
    }
]

const Footer = () => {
    function CreateFooterBlocks() {
        let items = footer_data.map((el, i) => {
            return (
                <div key={uuid()} style={{ marginRight: i == 0 ? '20px' : '0', boxShadow: '0px 20px 20px rgba(0, 0, 0, 0.1)' }} className="flex duration-500 hover:-translate-y-[10px] relative flex-col pl-[20px] bg-white w-[18.75rem] h-[6.25rem] rounded-[5px] pt-[20px] pb-[15px] text-[#3C517B] text-[0.625rem]">
                    <div className="flex flex-col">
                        <p>
                            {
                                el.firstText
                            }
                        </p>
                        <a className="text-[#2A73FF]" href={`tel:${el.tel}`}>
                            {
                                el.telText
                            }
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <p>
                            {
                                el.secondText
                            }
                        </p>
                        <a className="text-[#2A73FF]" href={`mailto:${el.mail}`}>
                            {
                                el.mail
                            }
                        </a>
                    </div>
                    <img className="w-[4.375rem] right-[10px] bottom-0 absolute" src={el.src} alt="" />
                </div>
            );
        })

        return items;
    }

    return (
        <footer className="h-40 bg-[#F3F7FF] pl-[3.125rem] pr-[6.25rem] ml-[19.938rem] border-l border-[#E0E0E0]">
            <div className="flex items-center h-full">
                <img className="h-20 mr-[1.875rem]" src="/img/footer_gerb.png" alt="" />
                <div className="flex flex-col text-[0.625rem] text-[#3C517B] max-w-xs h-20 justify-between mr-[1.5rem]">
                    <p>Лицензия на право ведения образовательной деятельности № Л035-01298-77/00622306 выдана Департаментом образования и науки города Москвы</p>
                    <div className="flex justify-between">
                        <p>ОГРН 1227700027796</p>
                        <p>ИНН 9715412922</p>
                        <p>КПП 771501001</p>
                    </div>
                </div>
                <img className="w-[5.625rem] mr-10" src="/img/vtb.png" alt="" />
                <div className="flex flex-col justify-between h-20 text-[0.625rem] text-[#3C517B] mr-[1.875rem]">
                    <div className="flex flex-col">
                        <p>Р/С 40703810624710000001</p>
                        <p>К/С 30101810145250000411</p>
                        <p>БИК 044525411</p>
                    </div>
                    <p>Банк филиал «Центральный» Банка ВТБ</p>
                </div>
                <CreateFooterBlocks />
            </div>
        </footer>
    );
}

export default Footer;
