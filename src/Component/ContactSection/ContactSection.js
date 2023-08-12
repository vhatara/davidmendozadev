import React from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cy7nrqw', 'template_01sx63e', e.target, 'eAZDucNjzFfG7hdWS')
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!")
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <section id='contact'>
      <div className='contact-wrapper'>
        {/* <h5 className='section-title'> Contact Me </h5> */}

        <div className='d-flex flex-lg-row justify-content-around contact-section my-auto flex-sm-column'>
          <div className='contact-desc px-5'>
            <h3>Got Feedbacks<span>?</span></h3>
            <div className='contact-desc-para'>
            <p> I would love to hear from you!</p>
            <p> 
              Please share your feedbacks and evaluations on my portfolio website <br />
              and projects to help me improve and grow as a Front-End Web Developer.
            </p>
            <p>
            Please take a moment to share your thoughts and insights with me <br />
            so that I can continue refining my work.
            </p>
            </div>

            <h3 className='mt-4'> Let's Connect<span>!</span></h3>
            <div className='contact-desc-para'>
            <p>Are you looking for a dedicated and creative individual to join your team?</p>
            <p>Let's connect and discuss how my skills can contribute to your success.</p>
            <p>You can reach me at my socials below:</p>

            <div className='social-icons'>
              <a className='fa-2xl socials-link' href='https://www.facebook.com/decimodcm' target='_blank' rel='noreferrer'>
                <i class="fa-brands fa-facebook"></i>
              </a>

              <a className='fa-2xl socials-link' href='https://www.linkedin.com/in/mendoza-david-cinco/' target='_blank' rel='noreferrer'>
                <i class="fa-brands fa-linkedin"></i>
              </a>

              <a className='fa-2xl socials-link' href='https://www.messenger.com/t/decimodcm' target='_blank' rel='noreferrer'>
                <i class="fa-brands fa-facebook-messenger"></i>
              </a>

              <a className='fa-2xl socials-link' href='mailto:davidmndza98@gmail.com' target='_blank' rel='noreferrer'>
              <i class="fa-solid fa-envelope"></i>
              </a>

            </div>
            </div>


          </div>

          <div className='px-5 contact-form-div'>
          <div className='contact-form'>
              <form onSubmit={sendEmail}>

                  <div className='formInput'>
                  <label for="sendername"> Full Name: </label>
                  <input type="text" id="sendername" name='sendername' required autocomplete="off" title='Please enter your full name.'/>
                  </div>
                  
                  <div className='formInput'>
                  <label for="senderemail"> Email Address: </label>
                  <input type="email" id="senderemail" name='senderemail' required autocomplete="off" title='Please enter a valid email address.'/>
                  </div>

                  <div className='formInput'>
                  <label for="messagesubject"> Subject: </label>
                  <input type="text" id="messagesubject" name='messagesubject' required autocomplete="off" title='Please enter a message title.'/>
                  </div>
                  
                  <div className='formInput'>
                  <label for="messagebody"> Message: </label>
                  <textarea type="text" id="messagebody" name='messagebody' required autocomplete="off" title='Please enter your message/feedback'/>
                  </div>

                  <div className='sendBtn_div'>
                  <input className="sendBtn" type="submit" value="Send" />
                  </div>

              </form>
          </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection