
const Hero = () => {
    return (
        <section className="body">
            <div className="container flex flex-col md:flex-row items-center px-6 mx-auto space-y-0 md:space-y-0">
                <div className="flex flex-col text-white text-4xl text-center w-full justify-center items-center">
                    <p className="text-[#fd9d3e] font-bold md:pt-56 pt-32">RESTAURANT / CAFE</p>
                    <h1 className="text-left text-4xl md:text-8xl md:text-center font-extrabold ">Quality foods</h1>
                    <a href="" className="mt-8 mb-28 px-4 py-2 text-base border-[#fd9d3e] border rounded-full bg-[#82b440] uppercase  hover:bg-transparent hover:border-[#fd9d3e] transition ease-in-out duration-300">place your order</a>
                </div>
            </div>
        </section>
    )

}

export default Hero