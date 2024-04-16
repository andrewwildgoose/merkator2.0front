import React from'react';
import { Toast } from 'react-bootstrap';

export function Notification(message, { toggle }) {
    return (
        <Toast onClose={() => toggle(false)} show={true} delay={3000} autohide>
            <Toast.Header>
                <strong className="mr-auto">Notification</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </ Toast>
    )
}