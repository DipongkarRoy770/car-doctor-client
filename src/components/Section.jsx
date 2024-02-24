import person from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'
const Section = () => {
    return (
        <div className="hero min-h-screen bg-base-200 pt-4">
            <div className="hero-content flex-col lg:flex-row">

                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-3 top-1/2 rounded-lg shadow-2xl border-4 border-red-300" alt="" />
                </div>
                <div className='lg:w-1/2 mt-5'>
                    <h4 className='mt-5 text-2xl font-semibold text-red-400'>About Us</h4>
                    <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className="py-3">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn btn-secondary">Get Mor Info</button>
                </div>
            </div>
        </div>
    );
};

export default Section;