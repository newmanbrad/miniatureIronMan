import React from 'react';

const Message = ({ type }) => {
    const messages = {
        saved: 'Save Successful',
        updated: 'Update Successful',
        deleted: 'Delete Successful'
    };

    return (
        <div className={`app-message ${type}`}>
            <p className="container">
                <strong>{messages[type]}</strong>
            </p>
        </div>
    );
}

export default Message;