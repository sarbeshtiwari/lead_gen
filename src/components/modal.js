import React, { useState } from 'react';
import './modal.css'; // You need to create a CSS file for styling

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [text, setText] = useState('');

    if (!isOpen) return null;

    const handleSubmit = () => {
        onSubmit(text);
        setText('');
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Enter Text</h2>
                <textarea
                    rows="4"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
