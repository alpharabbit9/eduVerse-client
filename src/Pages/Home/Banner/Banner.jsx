
import img from '../../../assets/images/boy-studying-university-library.jpg'

const Banner = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src={img}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center  px-10 md:px-20">
        <div className='border border-l-8 border-t-8 border-b-0 border-r-0 border-amber-400 text-left p-6'>
            <h1 className="text-white text-3xl md:text-5xl font-bold  mb-3">Learn from the best.</h1>
            <h1 className="text-white text-3xl md:text-5xl font-bold  mb-3">Learn on your schedule</h1>
            <p className="text-white mb-3">Discover thousands of online courses from top universities around world.</p>
            <p className="text-white mb-3">anywhere  , anytime enjoy and learn risk free with 30 days money back guarantee</p>
            <button className='btn bg-blue-500 text-white px-6 mt-6 mr-4'>Sign UP</button>
            <button className='btn btn-outline text-white px-6 mt-6'>How it works</button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
