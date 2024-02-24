import { useEffect } from "react";
import { useState } from "react";
import Marquree from "./Marquree";
import Marquee from "react-fast-marquee";


const Testimonial = () => {
    const [reviews ,setReviews] = useState([])

    useEffect(()=>{
        fetch('review.json')
         .then(res=>res.json())
         .then(data =>setReviews(data))
    },[])
    return (
        <>
            <div className="text-center mt-20">
                <h4 className="text-2xl text-red-400">Testimonial</h4>
                <h2 className="text-4xl font-semibold">What Customer Says</h2>
                <div className="text-1xl px-4 mt-3"> the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</div>
            </div>
            
            <Marquee className="mt-6 gap-4">
               {
               reviews.map(rev=><Marquree
               key={rev._id}
               rev={rev}
               ></Marquree>)
              
               }
            </Marquee>
            
        </>
    );
};

export default Testimonial;