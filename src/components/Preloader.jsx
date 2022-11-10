
const Preloader = () => {
    return (
        <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center mb-[14rem]">
                <img className="sm:w-[37.5rem] sm:h-[13.125rem] w-[14.375rem] h-20" src="/img/big_logo.png" alt="" />
            </div>
            <div 
            className="sm:w-[29.375rem] h-[2.5rem] w-[23.438rem] bg-[#a6a6a6] rounded-[20px] before:rounded-[20px] relative before:content-[''] before:absolute before:bg-lime-400 before:h-full before:animate-[preload_1s]"></div>
        </div>
    );
}

export default Preloader;
