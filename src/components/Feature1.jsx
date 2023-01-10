import React from 'react'
import img from '../img/slider.png';
import display from '../img/display.png';


const Feature1 = () => {
    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Trusted and loved by the world’s best teams</p>
                    </div>
                    <img className="ml-auto mr-auto mb-8" src={img} alt="slider" />
                    <br />
                    <img className="ml-auto mr-auto mt-9" src={display} alt="display" />
                </div>
            </section>
        </>
    )
}

export default Feature1