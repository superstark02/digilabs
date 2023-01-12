import React from 'react'
import one from '../img/manage1.png';
import two from '../img/manage2.png';
import three from '../img/manage3.png';
import firstTik from '../img/firsttik.png';
import secondTik from '../img/secondtik.png';
import thiredTik from '../img/thiredtik.png';
import "../style/Manage.css"

const manage = () => {
    return (
        <div className='wrap'>
            <div className='workflow'>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="object-cover object-center rounded" alt="hero" src={one} />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Manage and Track
                                <br className="hidden lg:inline-block" />Your Projects
                            </h1>
                            <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Suspendisse varius enim in eros elementum tristique.</p>
                            <div className="flex justify-center align-items-center">
                                <img src={firstTik} alt="thiredTik" className='ticks' />
                                Create posts, reels and stories.
                            </div>
                            <div className="cnt-publish align-items-center">
                                <img src={firstTik} alt="thiredTik" className="ticks" />
                                Publish your Facebook posts dynamically.
                            </div>
                            <div className="flex justify-center align-items-center">
                                <img src={firstTik} alt="thiredTik" className='ticks' />
                                Schedule any Twitter posts.
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Easily manage
                                <br className="hidden lg:inline-block" />your team's tasks
                            </h1>
                            <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Suspendisse varius enim in eros elementum tristique.</p>
                            <div className="flex justify-center align-items-center">
                                <img src={secondTik} alt="thiredTik" className='ticks' />
                                Create posts, reels and stories.
                            </div>
                            <div className="flex justify-center align-items-center">
                                <img src={secondTik} alt="thiredTik" className='ticks' />
                                Publish your Facebook posts dynamically.
                            </div>
                            <div className="flex justify-center align-items-center">
                                <img src={secondTik} alt="thiredTik" className='ticks' />
                                Schedule any Twitter posts.
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="object-cover object-center rounded" alt="hero" src={two} />
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="object-cover object-center rounded" alt="hero" src={three} />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Simple financial
                                <br className="hidden lg:inline-block" />overview for you
                            </h1>
                            <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Suspendisse varius enim in eros elementum tristique.</p>
                            <div className="flex justify-center align-items-center">
                                <img src={thiredTik} alt="thiredTik" className='ticks' />
                                Create posts, reels and stories.
                            </div>
                            <div className="flex justify-center align-items-center">
                                <img src={thiredTik} alt="thiredTik" className='ticks' />
                                Publish your Facebook posts dynamically.
                            </div>
                            <div className="flex justify-center align-items-center">
                                <img src={thiredTik} alt="thiredTik" className='ticks' />
                                Schedule any Twitter posts.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default manage