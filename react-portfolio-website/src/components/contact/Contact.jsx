import { useRef} from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_6whnw1f","template_t37t4pq", form.current, 'aKMZliHPPkWzPQb5K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:oliver.dantzer@queensu.ca" target="_blank">oliver.dantzer@queensu.ca</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea type="message" rows="7" placeholder='Your Message' required> </textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact