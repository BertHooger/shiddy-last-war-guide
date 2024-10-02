// File: src/lib/browserToken.ts

import { v4 as uuidv4 } from 'uuid';

export function getBrowserToken(): string {
    if (typeof window !== 'undefined') {
        let token = localStorage.getItem('browserToken');
        if (!token) {
            token = uuidv4();
            localStorage.setItem('browserToken', token);
        }
        return token;
    }
    return '';
}