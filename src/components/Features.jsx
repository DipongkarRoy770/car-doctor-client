import team from '../assets/icons/person.svg'
import ima1 from '../assets/icons/deliveryt.svg'
import ima2 from '../assets/icons/check.svg'
import ima3 from '../assets/icons/Wrench.svg'
import ima4 from '../assets/icons/group.svg'
import ima5 from '../assets/icons/person.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()

const Features = () => {
    return (
        <>
            <div className="text-center mt-20">
                <h4 className="text-2xl text-red-400">Core Features</h4>
                <h2 className="text-4xl font-semibold">Why Choose Us</h2>
                <div className="text-1xl px-4 mt-3"> the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</div>
            </div>
            <div className='grid md:grid-cols-4 lg:grid-cols-6 gap-4 px-6 md:-3 my-8 '>
                <div className='w-[170] h-[150] border-2 border-rose-300 py-3' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                    <img src={team} className='mx-auto ' alt="" />
                    <h3 className='text-xl font-medium text-center'>24/7 Support</h3>
                </div>
                <div className='w-[170] h-[150] border-2 border-rose-300 py-3' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                    <img src={ima1} className='mx-auto ' alt="" />
                    <h3 className='text-xl font-medium text-center'>Timely Delivery</h3>
                </div>
                <div className='w-[170] h-[150] border-2 border-rose-300 py-3'data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                    <img src={ima2} className='mx-auto ' alt="" />
                    <h3 className='text-xl font-medium text-center'>100% Guranty</h3>
                </div>
                <div className='w-[170] h-[150] border-2 border-rose-300 py-3'data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                    <img src={ima3} className='mx-auto ' alt="" />
                    <h3 className='text-xl font-medium text-center'>Best Equipment</h3>
                </div>
                <div className='w-[170] h-[150] border-2 border-rose-300 py-3'data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                    <img src={ima4} className='mx-auto ' alt="" />
                    <h3 className='text-xl font-medium text-center'>Expert Team</h3>
                </div>
                <div className='w-[170] h-[150] border-2 border-rose-300 py-3'data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                    <img src={ima5} className='mx-auto ' alt="" />
                    <h3 className='text-xl font-medium text-center'>Timely Delivery</h3>
                </div>
            </div>
        </>
    );
};

export default Features;