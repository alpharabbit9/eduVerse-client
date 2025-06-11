import React from 'react';

const Newsletter = () => {
    return (
        <div className='flex justify-evenly bg-[#1C2A44] text-white py-12 px-12'>

            <div>
                <h3 className='text-3xl font-bold'>
                    Subscribe to our newsletter
                </h3>

                <h3 className='text-3xl'>
                    Get updates to news and events.
                </h3>
            </div>

            <form className=' '>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="w-80">
                    <label>Enter your email address</label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn bg-[#2ED47D] join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>

        </div>
    );
};

export default Newsletter;