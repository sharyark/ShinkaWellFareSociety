import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto max-w-4xl px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2 text-center">Contact Numbers:</h3>
                        <p className="text-lg text-center">
                            General Inquiries: <a href="tel:+1234567890" className="text-blue-500 hover:text-blue-700">03009786788</a><br />
                            Support: <a href="tel:+1987654321" className="text-blue-500 hover:text-blue-700">03312006300</a>
                        </p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2 text-center">Email Addresses:</h3>
                        <p className="text-lg text-center">
                            General Inquiries: <a href="mailto:info@example.com" className="text-blue-500 hover:text-blue-700">info@example.com</a><br />
                            Support: <a href="mailto:support@example.com" className="text-blue-500 hover:text-blue-700">support@example.com</a>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-center">Follow Us:</h3>
                        <div className="flex justify-center space-x-4">
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-110">YouTube</a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-110">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
