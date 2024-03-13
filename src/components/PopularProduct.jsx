import product1 from '../assets/images/products/1.png'
import product2 from '../assets/images/products/2.png'
import product3 from '../assets/images/products/3.png'
import product4 from '../assets/images/products/4.png'
import product5 from '../assets/images/products/5.png'
import product6 from '../assets/images/products/6.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()

const PopularProduct = () => {
    return (
        <>
            <div className="text-center mt-20">
                <h4 className="text-2xl text-red-400">Popular Products</h4>
                <h2 className="text-4xl font-semibold">Browse Our Products</h2>
                <div className="text-1xl px-4 mt-3"> the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-3 my-4" >
                <div data-aos="zoom-in-up">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product6} alt="Shoes" className="rounded-xl w-60 h-52 bg-red-100 px-2 py-2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-cyan-500">Car Engine Plug</h2>
                            <p>price : $30.00</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product3} alt="Shoes" className="rounded-xl w-60 h-52 bg-red-100 px-2 py-2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Air Filter</h2>
                            <p>price : $20.00</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product1} alt="Shoes" className="rounded-xl w-60 h-52 bg-red-100 px-2 py-2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Cools Led Light</h2>
                            <p>price : $60.00</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product2} alt="Shoes" className="rounded-xl w-60 h-52 bg-red-100 px-2 py-2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>price : $40.00</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product5} alt="Shoes" className="rounded-xl w-60 h-52 bg-red-100 px-2 py-2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>price : $50.00</p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-up">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product4} alt="Shoes" className="rounded-xl w-60 h-52 bg-red-100 px-2 py-2" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p>price : $65.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularProduct;