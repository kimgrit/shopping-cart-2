// src/app/layout.js
'use client';
import React from 'react';
import { CartProvider } from '../context/CartContext';
import '../styles/index.css'; // 글로벌 스타일
import '../styles/reset.css';
import '../styles/fonts.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <CartProvider>{children}</CartProvider>
            </body>
        </html>
    );
}
