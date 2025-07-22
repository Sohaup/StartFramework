import React from 'react'

export default function About() {
  return (
     <section className='d-flex flex-column align-items-center justify-content-center gap-1   w-75 mx-auto '>            
            <div className="details text-light text-center ">
                <h1 className='header display-5 fw-bolder'>
                    about component
                    <i className='fa fa-star fs-5'></i>
                </h1>
                <p className='fs-6 fw-bold d-flex flex-column flex-lg-row gap-5 py-3 text-start'>
                    <span>
                    Freelancer is a free bootstrap theme created by Route. The download includes
                    the complete source files including HTML, CSS, and JavaScript as well as 
                    optional SASS stylesheets for easy customization.
                    </span>
                    <span>
                    Freelancer is a free bootstrap theme created by Route. The download includes 
                    the complete source files including HTML, CSS, and JavaScript as well as
                    optional SASS stylesheets for easy customization.
                    </span>
                </p>
            </div>
    </section>
  )
}
