'use client'

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import styles from "./header.module.css";

export default function Contact() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 700px)');
        const handleMediaQueryChange = (mediaQuery) => {
            setIsMobile(mediaQuery.matches);
        };

        handleMediaQueryChange(mediaQuery); 
        mediaQuery.addListener(handleMediaQueryChange); 

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange); 
        };
    }, []);


    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_98t0arv', 'template_497qyiy', form.current, 'F90y2jauO5TdVD3iN')
            .then((result) => {
                console.log('Success');
                setIsSent(true);
                setTimeout(() => {
                    setIsSent(false);
                }, 3000); 
                form.current.reset(); 
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact' className="mt-10 text-white max-w-5xl mx-auto p-4">
            <h1 className="text-4xl mb-5 font-semibold">Contact</h1>
            <blockquote className="italic mb-5">
            &quot;People around you influence you personally. Just as the places you work influence you professionally. 
                Great people, great projects, great work.&quot;
            </blockquote>
            <form ref={form} onSubmit={sendEmail}>
            <div className=' bg-gray-800 flex flex-col justify-center items-center p-10 rounded-lg'>
                    <div>
                        <h2 className="text-xl mb-3 font-semibold">Send me a message and lets work together</h2>
                    </div>
                    <div className="flex mb-3">
                        <div className='flex flex-col mr-5' style={{ width: '40%' }}>
                            <label htmlFor="from_name" className="block text-white mb-1">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="from_name"
                                name="from_name"
                                required
                                className="border border-blue-900 rounded px-3 py-2 white text-blue-900 mb-2"
                                style={{ width: '100%' }} 
                            />        
                        </div>

                        <div className='flex flex-col' style={{ width: '60%' }}>
                            <label htmlFor="user_email" className="block text-white mb-1">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                required
                                className="border border-blue-900 rounded px-3 py-2 white text-blue-900 mb-2"
                                style={{ width: '100%' }} 
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mb-3" style={{ width: isMobile ? '100%' : '50%' }}>
                        <label htmlFor="message" className="block text-white mb-1">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="border border-blue-900 rounded px-3 py-2 white text-blue-900 mb-2"
                            style={{ width: '100%' }} 
                        ></textarea>
                    </div>

                    <button 
                        id='btnSend'                       
                        type="submit"
                        value="Send"
                        onClick={sendEmail}
                        className="flex items-center justify-center text-blue-900 bg-white px-4 py-2 rounded"
                    >
                        <p className='mr-3 font-semibold'>Send</p>
                        <Image width={22}  height={22} className={styles.image} src="/send.png" alt="send" />                        
                    </button>
                    {isSent && <p className='bg-green-900 text-white p-5 rounded-lg mt-2 font-semibold mt-5'>Email sent successfully!</p>}
                </div>
            </form>
                
        </section>
    );
}
