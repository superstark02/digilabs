import React from 'react'
import headImg from '../img/headimg.png';
import '../style/Feature.css';

const Feature = () => {
    return (
        <>
            <section className="">
                <div>
                    <div>
                        <div className="main-heading">
                            <h1 className="sm:text-6xl text-4xl font-medium title-font mb-4 text-gray-900 mb-5">Save more and get your<br /> finances right</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Orci molestie nam vulputate nunc habitant gravida. Interdum <br /> vitae vivamus ipsum aliquet consectetur aliquam.</p>
                        </div>
                        <div className='wrap' style={{marginBottom:"60px"}} >
                            <button className="login-btn" style={{ backgroundColor: "#9D0AFF", borderRadius: "12px" }}>Request a demo</button>
                        </div>
                    </div>
                    <img src={headImg} alt="" />
                </div>
            </section>
        </>
    )
}

export default Feature;