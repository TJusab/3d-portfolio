import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles'
import { TreeCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

import { github } from '../assets';
import { linkedin } from '../assets';
import { artstation } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_3dnfpih", 
      "template_eijx9ib", 
      {
        from_name: form.name,
        to_name: 'Tayba',
        from_email: form.email,
        to_email: 'contact.taybajusab@gmail.com',
        message: form.message,
      },
      "Tuuc1T27lLzxkLzaT"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. Your email was sent successfully.");
        
        setForm({
          name: '',
          email: '',
          message: '',
        }, (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.")
        })
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-white-100`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-primary text-white rounded-lg outlined-none border-none font-medium"

            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-primary text-white rounded-lg outlined-none border-none font-medium"
              
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-primary text-white rounded-lg outlined-none border-none font-medium"
              
            />
          </label>

          <div className='flex flex-row gap-10'>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-full text-white font-bold shadow-md shadow-secondary rounded-xl"
            >
              {loading ? "Sending...": "Send"}
            </button>
            <a href="https://github.com/TJusab" target='_blank'>
              <img src={ github } alt="github-icon" className="w-[100px]"/>
            </a>

            <a href="https://www.linkedin.com/in/taybajusab/" target='_blank'>
              <img src={ linkedin } alt="linkedin-icon" className="w-[100px]"/>
            </a>

            <a href="https://www.artstation.com/thaijuice" target='_blank'>
              <img src={ artstation } alt="artstation-icon" className="w-[100px]"/>
            </a>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <TreeCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");