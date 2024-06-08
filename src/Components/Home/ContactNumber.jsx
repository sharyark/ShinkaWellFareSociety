import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const ContactNumber = () => {
    return (
        <div className="flex flex-col items-center py-8 bg-gray-200 mx-4 my-6">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-600">Reach Us Any Time for Any Help</h2>
            <div className="flex flex-row items-center space-x-6">
                <a href="tel:+1234567890" className="text-green-500 text-lg font-bold flex items-center">
                    <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                    Emergency # : 03009786788
                </a>
                <a href="https://wa.me/00923265652667" target="_blank" rel="noopener noreferrer" className="text-green-500 text-lg font-bold flex items-center">
                    <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                    Emergency # : 03312006300
                </a>
            </div>
        </div>
    );
};

export default ContactNumber;
