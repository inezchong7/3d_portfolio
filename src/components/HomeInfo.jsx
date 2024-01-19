import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

//instantly returns whatever's inside (without the 'return' keyword)
//template for the 2, 3, 4 info boxes
const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>

)

//change pop-up content at different stages
const renderContent = {
    1: (
        //sm = on small devices
        //mx = margin
        //py = padding top + bottom
        //px = padding right + left
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi! I'm <span className='font-semibold'>Inez</span> 👩🏻‍💻
            <br />
            A Master of IT student in NZ 🌏
        </h1>
        ),
    2: (
        <InfoBox
            text="On my learning journey and open to new experiences"
            link="/about"
            btnText="Learn more!"
        />
        ),
    3: (
        <InfoBox
            text="Actively challenging myself with projects and courses!"
            link="/projects"
            btnText="View my portfolio"
        />
        ),
    4: (
        <InfoBox
            text="Keen to connect? I'm just a few keystrokes away!"
            link="/contact"
            btnText="Let's talk"
        />
        ),
}



const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo