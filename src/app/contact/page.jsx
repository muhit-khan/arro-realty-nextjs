"use client"
import React, { useState } from 'react';

const Page = () => {
    const [formStatus, setFormStatus] = useState('');
    const [formMessage, setFormMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormStatus('');
        setFormMessage('');

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormMessage('Your message has been sent successfully!');
            } else {
                setFormStatus('error');
                setFormMessage('There was an issue sending the message. Please try again.');
            }
        } catch (error) {
            setFormStatus('error');
            setFormMessage('There was an issue sending the message. Please try again.');
        }
    };

    return (
        <main className='bg-blue-950 h-full min-h-screen flex justify-center items-center pt-28'>
            <div className='container mt-10 mb-20'>
                <h2 className='text-4xl font-bold text-center text-amber-500 mb-8'>Get in Touch</h2>
                <p className="text-center text-lg text-gray-50 mb-10">
                    We&apos;re proud to support our clients with a dedicated and experienced team ready to assist you with all your real estate needs. Whether you&apos;re looking for information, support, or verification of employment, our team is here to provide prompt and professional service. Reach out to us and discover how we can help make your real estate journey a success.
                </p>

                <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 md:grid-cols-2'>
                    <div className="bg-gray-900 text-gray-300 p-8 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Points of contact</h3>
                        <div className='flex flex-col justify-center h-full'>
                            <div className="mb-6">
                                <h3 className="font-semibold">Canada Office</h3>
                                <p className='font-extralight'>5333 Avenue Casgrain #1201, Montréal, QC H2T 1X3</p>
                            </div>
                            <div className="mb-4 ml-10">
                                <h3 className="font-semibold">Information & Sales</h3>
                                <a href="mailto:sales@example.com" className="text-blue-400">sales@example.com</a>
                            </div>
                            <div className="mb-4 ml-10">
                                <h3 className="font-semibold">Support</h3>
                                <a href="mailto:support@example.com" className="text-blue-400">support@example.com</a>
                            </div>
                            <div className="mb-10 ml-10">
                                <h3 className="font-semibold">Verification of Employment</h3>
                                <a href="mailto:hr@example.com" className="text-blue-400">hr@example.com</a>
                            </div>
                            <h2 className="text-lg font-bold mb-4">Our offices around the world</h2>
                            <div className="mb-4 ml-10">
                                <h3 className="font-semibold">U.S.</h3>
                                <p className='font-extralight'>11350 McCormick Rd, EP III, Suite 200, Hunt Valley, MD 21031</p>
                            </div>
                            <div className="mb-4 ml-10">
                                <h3 className="font-semibold">Germany</h3>
                                <p className='font-extralight'>Neue Schönhauser Str. 3-5, 10178 Berlin</p>
                            </div>
                            <div className='ml-10'>
                                <h3 className="font-semibold">France</h3>
                                <p className='font-extralight'>266 Place Ernest Granier, 34000 Montpellier</p>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <h3 className="text-xl font-bold mb-4">Leave us a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <input type="hidden" name="access_key" value={process.env.WEB3_FORMS_ACCESS_KEY} />

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-300">First Name</label>
                                    <input type="text" id="firstName" name='first_name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John" required />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-300">Last Name</label>
                                    <input type="text" id="lastName" name='last_name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Doe" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                                    <input type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-300">Phone Number</label>
                                    <input type="tel" id="phone" name='phone' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="123-456-7890" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
                                <input type="text" id="subject" name='subject' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400">Your message</label>
                                <textarea id="message" name='message' rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <p className='text-gray-300'>By submitting this form you agree to our terms and conditions and our privacy policy which explains how we may collect, use and disclose your personal information including to third parties.</p>
                            <button type="submit" className="bg-amber-500 font-semibold text-gray-300 py-2 px-6 rounded-full hover:bg-amber-600 active:bg-amber-500">Send message</button>
                            {formStatus && (
                                <p className={`mt-4 text-sm ${formStatus === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                    {formMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page;
