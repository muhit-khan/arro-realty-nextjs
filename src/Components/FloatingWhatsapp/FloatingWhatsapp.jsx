"use client"

import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const FloatingWhatsapp = () => {
    return (
        <FloatingWhatsApp {
            ...{
                phoneNumber: '1234567890',
                accountName: 'Arro Realty',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
                chatMessage: 'Hello there! How can we help you today?',
                darkMode: true,
                backgroundColor: '#25d366',
                iconColor: '#fff',
                chatButtonColor: '#25d366',
                chatButtonBackgroundColor: '#fff',
                showChat: true,
                showPopup: true,
                autoOpen: 0,
                greetingMessage: 'Hello there! How can we help you today?',
                greetingDelay: 2000,
                greetingTime: 10000,
                messagePlaceholder: 'Type a message...',
                sendButton: 'Send',
                showSendButton: true,
                styles: {},
                onMessageSent: () => {
                    console.log('Message sent')
                },
                onPopupOpen: () => {
                    console.log('Popup opened')
                },
                onPopupClose: () => {
                    console.log('Popup closed')
                }
            }
        } />
    )
}

export default FloatingWhatsapp