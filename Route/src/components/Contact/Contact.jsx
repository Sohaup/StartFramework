import React from 'react'

export default function Contact() {
  return (
    <section className='contact d-flex flex-column gap-4 align-items-center justify-content-center py-5 '>
        <div className="details">
        <h1 className='header display-5 fw-bolder'>
            conatct section
            <i className='fa fa-star fs-5'></i>
        </h1>
        </div>
        <div className="forms w-50 mx-auto d-flex flex-column gap-5 ">
            <input className='form-control' placeholder='user name'/>
            <input className='form-control' placeholder='user age'/>
            <input className='form-control' placeholder='user email'/>
            <input className='form-control' placeholder='user password'/>
            <div className="form-btn mt-2">
              <button className='btn-terquise'>send message</button>
            </div>
        </div>
    </section>
  )
}
