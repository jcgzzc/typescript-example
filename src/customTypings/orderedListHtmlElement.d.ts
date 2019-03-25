import * as React from 'react';

declare module 'react' {
    interface OlHTMLAttributes<T> {
        type?: "1" | "a" | "A" | "i" | "I";
    }
}