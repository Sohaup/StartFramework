import React from 'react'
import personal from "./imgs/imgi_1_avataaars.svg"

export default function Home() {
  return (
    <section className='d-flex flex-column align-items-center gap-2  py-5'>
        <div className="img d-flex justify-content-center ">
            <img src={personal} alt='personal image' className='w-75 rounded-circle d-block'/>
        </div>
        <div className="details text-light text-center">
            <h1 className='header display-5 fw-bolder'>
                Start Framework
                <i className='fa fa-star fs-5'></i>
            </h1>
            <p className='fs-6 fw-bold'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </section>
  )
}
