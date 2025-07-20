import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className='bg-layout d-flex flex-column py-5 justify-content-center align-items-center '>
        <div className="details w-75 d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-3">
            <div className="location text-light" style={{flexBasis:"30%"}} >
                <h2>LOCATION</h2>
                <p className='d-flex flex-column gap-2'>
                    <span>2215 John Daniel Drive</span>
                    <span>Clark, MO 65243</span>
                </p>
            </div>
            <div className="web text-light text-center " style={{flexBasis:"30%"}}>
                <h2>Around The Web</h2>
                <div className="icons d-flex gap-2 justify-content-center">
                    <span className='icon'>
                      <i className='fa fa-facebook-f'></i>
                    </span>
                    <span className='icon'>
                        <i className='fa fa-twitter'></i>
                    </span>
                    <span className='icon'>
                        <i className='fa fa-linkedin'></i>
                    </span>
                    <span className='icon'>
                       <i class="fa fa-solid fa-globe"></i>
                    </span>
                </div>
            </div>
            <div className="about text-light text-center d-flex flex-column align-items-center" style={{flexBasis:"30%"}}>
                <h2 className='fw-semibold '>About Freelancer</h2>
                <p>
                Freelance is a free to use, licensed Bootstrap theme created by Route
                </p>
            </div>
        </div>
       
    </footer>
    <div className="foot text-light bg-foot p-3">
         <div className="copy-rights text-center">
             <p>Copyright © Your Website 2021</p>
        </div>
    </div>
    </>
  )
}
