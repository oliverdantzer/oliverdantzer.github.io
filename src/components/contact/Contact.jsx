import { useRef, useState } from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  [window.sent, window.setSent] = useState('false');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_6whnw1f","template_t37t4pq", form.current, 'aKMZliHPPkWzPQb5K')
      .then((result) => {
          console.log(result.text);
          window.setSent('true');
      }, (error) => {
          console.log(error.text);
          window.setSent('error')
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
            <a href="mailto:oliver.dantzer@queensu.ca" rel="noreferrer" target="_blank">oliver.dantzer@queensu.ca</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className="form__text" type="text" name='user_name' placeholder='Your Full Name' required />
          <label>Email</label>
          <input className="form__text" type="email" name='user_email' placeholder='Your Email' required />
          <label>Message</label>
          <textarea className="form__text" name='message' rows="7" placeholder='Your Message' required></textarea>

          <div className='submit'>
            <input type='submit' className='btn btn-primary submit__btn' value="Send"/>
            <AiFillCheckCircle className={window.sent === 'true' ? 'submit__check--true' : 'submit__check'}/>
            <h5 className={window.sent === 'true' ? 'submit__sent--true' : 'submit__sent'}>Sent.</h5>
            <h5 className={window.sent === 'error' ? 'submit__error--true' : 'submit__error'}>Error.</h5>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact