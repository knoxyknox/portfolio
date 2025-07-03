import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import './Contact.css'
import { contactList } from '../../assets/assets'

const Contact = () => {
  return (
    
      <section className="contact">
        <div className="contact-container">
          <div className="contact-box">
            <h2 className='contact-header'>Let's Work Together</h2>
            {contactList.map((contact, index)=>(
              <div  key={contact.id}className="contact-detail">
                <i className={contact.contact_icon}></i>
                <div className="detail">
                  <p>{contact.contact_name}</p>
                  <p>{contact.contact_value}</p>
                </div>
              </div>
            ))}
          </div>
          <ContactForm/>
        </div>
        
      </section>
    
  )
}

export default Contact
