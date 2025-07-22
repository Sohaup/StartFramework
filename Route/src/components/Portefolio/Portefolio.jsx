import React from 'react'
import home from "./imgs/imgi_1_poert1.png"
import cake from "./imgs/imgi_2_port2.png"
import circus from "./imgs/imgi_3_port3.png"

export default function Portefolio() {
  return (
    <section className='portefolio d-flex flex-column gap-4 align-items-center justify-content-center py-5 '>
    <div className="details">
    <h1 className='header display-5 fw-bolder'>
        Portefolio
        <i className='fa fa-star fs-5'></i>
    </h1>
    </div>
    <div className="gallery">
        <div className="container">
            <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                    <ImageCard path={home}/>
                </div>
                <div className="col-md-6 col-lg-4">
                    <ImageCard path={cake}/>
                </div>
                <div className="col-md-6 col-lg-4">
                    <ImageCard path={circus}/>
                </div>
                <div className="col-md-6 col-lg-4">
                    <ImageCard path={home}/>
                </div>
                <div className="col-md-6 col-lg-4">
                    <ImageCard path={cake}/>
                </div>
                <div className="col-md-6 col-lg-4">
                    <ImageCard path={circus}/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}


function ImageCard({path}) {
    return (
        <div className="img">
            <img src={path} alt='wood home' className='w-100 d-block rounded-2'/>
            <div className="wrapper rounded-2">
                <i className='fa fa-plus'></i>
            </div>
        </div>
    )
}