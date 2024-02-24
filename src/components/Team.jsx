import person1 from '../assets/images/team/1.jpg'
import person2 from '../assets/images/team/2.jpg'
import person3 from '../assets/images/team/3.jpg'
import fb from '../assets/social/facebook.svg'
import insta from '../assets/social/instagram.svg'
import linkedin from '../assets/social/linkedin.svg'
import twiter from '../assets/social/twitter.svg'

const Team = () => {
    
    return (
        <>
            <div className="text-center mt-20">
                <h4 className="text-2xl text-red-400">Team</h4>
                <h2 className="text-4xl font-semibold">Meet Our Team</h2>
                <div className="text-1xl px-4 mt-3"> the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-3 my-4">
                <div className="card w-96 bg-base-100 border-2 border-green-300">
                    <figure className="px-10 pt-10">
                        <img src={person1} alt="Shoes" className="rounded border-2 border-red-300 w-60 h-72 bg-red-100 px-2 py-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className='flex gap-1 '>
                        <img src={insta} className='w-6 h-5' alt="" />
                        <img src={fb} className='w-6 h-5' alt="" />
                        <img src={linkedin} className='w-6 h-5' alt="" />
                        <img src={twiter} className='w-6 h-5' alt="" />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 border-2 border-green-300">
                    <figure className="px-10 pt-10">
                        <img src={person2} alt="Shoes" className="rounded border-2 border-red-300 w-60 h-72 bg-red-100 px-2 py-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Air Filter</h2>
                        <p>Engine Expert</p>
                        <div className='flex gap-1 '>
                        <img src={insta} className='w-6 h-5' alt="" />
                        <img src={fb} className='w-6 h-5' alt="" />
                        <img src={linkedin} className='w-6 h-5' alt="" />
                        <img src={twiter} className='w-6 h-5' alt="" />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 border-2 border-green-300">
                    <figure className="px-10 pt-10">
                        <img src={person3} alt="Shoes" className="rounded border-2 border-red-300 w-60 h-72 bg-red-100 px-2 py-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cools Led Light</h2>
                        <p>Engine Expert</p>
                        <div className='flex gap-1 '>
                        <img src={insta} className='w-6 h-5' alt="" />
                        <img src={fb} className='w-6 h-5' alt="" />
                        <img src={linkedin} className='w-6 h-5' alt="" />
                        <img src={twiter} className='w-6 h-5' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;