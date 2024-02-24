import Banner from "../components/Banner";
import Features from "../components/Features";
import PopularProduct from "../components/PopularProduct";
import Section from "../components/Section";
import Service from "../components/Service";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Time from "../components/Time";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Section></Section>
            <Service></Service>
            <Time></Time>
            <PopularProduct></PopularProduct>
            <Team></Team>
            <Features></Features>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;