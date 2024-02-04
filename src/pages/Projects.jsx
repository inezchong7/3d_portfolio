import { Link } from 'react-router-dom';
import { projects } from '../constants';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>These are the projects I've worked on so far. I'm looking forward to more to come! Feel free to explore my codebases, and contribute ideas for further improvements. I would really appreciate it!</p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              {/* self-closing div for background button */}
              <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img 
                    src={project.iconUrl}
                    alt='Project Icon'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              {/* mt: margin-top */}
              <p className='mt-2 text-slate-500'>
                {project.description}
              </p>

              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  //target: where to open the link
                  //_blank: opens the link in a new browsing context or a new tab
                  target='_blank'
                  //rel: relationship between the current document and the linked document
                  //noopener: security measure that prevents the new page from having access to the window.opener property of the opening window (helps protect against certain types of security vulnerabilities, such as tabnabbing).
                  //noreferrer: prevents the browser from sending the referring page's address when requesting the linked document
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                Live Link
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200'/>

      <CTA />
    </section>
  )
}

export default Projects