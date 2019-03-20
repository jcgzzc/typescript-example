import * as React from 'react';

declare module 'react' {
    export interface OlHTMLAttributes<T> extends React.HTMLAttributes<T> {
        type?: "1" | "a" | "A" | "i" | "I";
    }
}