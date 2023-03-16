import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


const Contact = () => {
  
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container" id="contact">
       { showModal && <Text show={showModal} close={handleClose}/>}

      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>You only one chance to make a first impression, Let's make it an amazing one!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <a className='social_links_url' style={{ color: '#E27900', margin: '5px' }} href={socialIcon.url} target="_blank" rel="noreferrer" key={index} >
                {socialIcon.icon}
              </a>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last name'/>
          </div>
          <div className="row">
            <input type="text" placeholder='Phone' />
            <input type="email" placeholder='Email' />
          </div>
          <div className="row">
            <textarea placeholder='message'></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn">
            <a onClick={handleShow}>Send</a>
            
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}


function Text({show, close}) {
  return (
    <div
      className="modal"
      style={{ display: show ? "block" : "none" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Feedback!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Your message was sent.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={close} variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}


export default Contact
