import './Contact.css'
import React from 'react'
import HeroHeader from "../components/HeroHeader/HeroHeader";
import Navbar from "../components/Navbar/Navbar";

const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <>
            <HeroHeader />
            <Navbar />
            <div className="container mt-5">
                <h1 className="form-label"> Contact Me !</h1>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">

                        <input placeholder='Your Name' className="form-control" type="text" id="name" required />
                    </div>
                    <div className="mb-3">

                        <input placeholder='Your E-mail' className="form-control" type="email" id="email" required />
                    </div>
                    <div className="mb-3">

                        <textarea placeholder='Your Message' className="form-control" id="message" required />
                    </div>
                    <button className=" button  btn-danger" type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
        </>
    )
}


export default Contact;