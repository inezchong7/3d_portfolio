import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null); 
  const [form, setForm] = useState({name:'', email:'', message:''})
  //when page is loading, dont show form
  const [isLoading, setIsLoading] = useState(false)

  //functions for event handling
  //updates form
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleFocus = () => {};
  const handleBlur = () => {};


  const handleSubmit = (e) => {
    //prevents page from resetting after form submission
    e.preventDefault();
    //while user sending email
    setIsLoading(true);

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
      //TODO: HIDE AN ALERT

      //clear form after sent
      setForm({name: '', email: '', message: ''});
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      //TODO: ERROR MSG
    })
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
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
    </section>
  )
}

export default Contact