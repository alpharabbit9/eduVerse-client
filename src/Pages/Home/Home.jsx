import About from "./About/aBOUT.JSX";
import Banner from "./Banner/Banner";
import HotCourses from "./Hot Courses/HotCourses";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <About></About>
                <HotCourses></HotCourses>
            </div>
        </div>
    );
};

export default Home;