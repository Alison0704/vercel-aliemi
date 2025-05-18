import style from '@/pages/Contact/Contact.module.css';
import Button from '@/components/Button';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();


        if (!form.current) return;


        emailjs
            .sendForm(
                'service_34grrgc',     // Replace with your EmailJS service ID
                'template_3bl47wf',    // Replace with your EmailJS template ID
                form.current,
                'IZtdWXTnKtjul7Myb'      // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log('Message sent:', result.text);
                    alert('Message sent!');
                    form.current?.reset();
                },
                (error) => {
                    console.error('Send failed:', error.text);
                    alert('Failed to send message.');
                }
            );
    };


    return (
        <div id="contact">
            <section>
                <div className={style.contactContent}>
                    <h2>Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} >
                    <div className={style.content}>
                        <label>Name</label>
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className={style.content}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="from_email"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className={style.content}>
                        <label>Message</label>
                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Your Message..."
                            style={{ resize: "none" }}
                            required
                        ></textarea>
                    </div>
                    <Button label="Send Message" type="submit" onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }} />
                </form>
                </div>
            </section>
        </div>
    );
};


export default Contact

