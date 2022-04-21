import order1 from '../order-1.svg';
import order2 from '../order-2.svg';
import order3 from '../order-3.svg';


const Menu = () => {
    return (
        <section className="bg-[#fd9d3e] pt-16 pb-32">
            <div className="container mx-auto px-8 flex flex-col md:flex-row gap-4 justify-center">
                <div className=" flex flex-col  md:w-1/2 justify-center text-center">
                    <img className='h-24' src={order1} />
                    <h1 className="font-extrablod text-gray-900 py-2 uppercase text-2xl">ORDER YOUR FOOD</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-</p>
                </div>

                <div className=" flex flex-col  md:w-1/2 justify-center text-center">
                    <img className='h-24' src={order2} />
                    <h1 className="font-extrablod text-gray-900 py-2 uppercase text-2xl">DELIVERY OR PICK UP</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-</p>
                </div>

                <div className=" flex flex-col  md:w-1/2 justify-center text-center">
                    <img className='h-24' src={order3} />    
                    <h1 className="font-extrablod text-gray-900 py-2 uppercase text-2xl">DELICIOUS RECEIPE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-</p>
                </div>
            </div>
        </section>
    )
}


export default Menu