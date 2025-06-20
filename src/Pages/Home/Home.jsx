import BeTeacher from "./BeTeacher.jsx/BeTeacher";
import About from "./About/aBOUT.JSX";
import Banner from "./Banner/Banner";
import HotCourses from "./Hot Courses/HotCourses";
import SponsorPartner from "./SponsorPartner/SponsorPartner";
import Review from "./Review/Review";
import Stats from "./Stats/Stats";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <About></About>
                <SponsorPartner></SponsorPartner>
                <HotCourses></HotCourses>
                <BeTeacher></BeTeacher>
                <Stats></Stats>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;