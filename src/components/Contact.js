// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
        return (
            <div>
                    <div className='contact-card'>
                        <img src={props.data.photo} alt="" className='contact-img'/>
                        <div className='contact-detail'>
                            <div>

                        {props.data.name}
                            </div>
                            <div>

                        {props.data.phone}
                            </div>
                            <div>

                        {props.data.email}
                            </div>

                        </div>
                    </div>
                
            </div>
        )
}

export default Contact;