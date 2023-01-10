import React from 'react'
import headImg from '../img/headimg.png';
import '../style/Feature.css';

const Feature = () => {
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-6xl text-4xl font-medium title-font mb-4 text-gray-900 mb-5">Save more and get your<br /> finances right</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Orci molestie nam vulputate nunc habitant gravida. Interdum <br /> vitae vivamus ipsum aliquet consectetur aliquam.</p>
                        </div>
                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{ backgroundColor: "#9D0AFF", borderRadius: "12px" }}>Request a demo</button>
                    </div>
                    <img src={headImg} alt="" />
                </div>
            </section>
        </>
    )
}

export default Feature;