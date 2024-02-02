import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        {/* sm:block hidden = on small devices, block display; if not on small device, hide it */}
        <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden'/> 
        Let's build something together
        </p>
        {/* route to contact page */}
        <Link to="/contact" className='btn'>
            Contact
        </Link>
    </section>
)
}

export default CTA