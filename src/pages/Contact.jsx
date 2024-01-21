import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox'
import Loader from '../components/Loader';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null); 
  const [form, setForm] = useState({name:'', email:'', message:''})
  //when page is loading, dont show form
  const [isLoading, setIsLoading] = useState(false)
  //animation states
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  //alerts
  const {alert, showAlert, hideAlert} = useAlert();

  //functions for event handling
  //updates form
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    //prevents page from resetting after form submission
    e.preventDefault();
    //while user sending email
    setIsLoading(true);
    //make fox run when submitting form
    setCurrentAnimation('hit');

    //lets user send email to you
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Inez",
        from_email: "form.email",
        to_email: "inezchong7@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      //after email is sent, no longer loading
      setIsLoading(false);
      //TODO: SHOW SUCCESS MESSAGE
      showAlert({show:true, text:'Message sent successfully!', type:'success'})

      //stop fox running after sent
      setTimeout(() => {
        //TODO: HIDE AN ALERT
        hideAlert();
        setCurrentAnimation('idle');
        setForm({name:'', email:'', message:''});
      }, [3000])

      //clear form after sent
      setForm({name: '', email: '', message: ''});
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.log(error);
      //TODO: ERROR MSG
      showAlert({show:true, text:'Message not received', type:'danger'})
    })
  };

  //for form interaction with fox
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {/* alert */}
      {/* if alert.show is true, pass Alert component */}
      {alert.show && <Alert {...alert}/>}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>
          Get in Touch
        </h1>

        <form
          className='w-full flex flex-col gap-7 mt-14'
          //handle emails
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='john@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Your message
            <textarea
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how I can help!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            className='btn'
            //if isLoading is true, button is disabled
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {/* if page is loading/ message is sending, text = 'sending...', if not text = 'send my message' */}
            {isLoading ? 'Sending your message...' : 'Send my message'}
          </button>
        </form>
      </div>

      {/* lg = on large devices
      md = on medium devices */}
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0,0,5],
            //fov= field of view
            fov: 75,
            near: 0.1,
            far:1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]}/>
          <ambientLight intensity={0.5}/>
          {/* loads fox in */}
          <Suspense fallback={<Loader/>}>
            <Fox 
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6,-0.6,0]}
              scale={[0.5,0.5,0.5]}
            />
          </Suspense>

        </Canvas>
      </div>

    </section>
  )
}

export default Contact