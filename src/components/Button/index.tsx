// /components/Button/index.tsx
import React from 'react';
import styles from './Button.module.css';

// Props interface
interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           onClick,
                                           disabled = false,
                                           type = 'button',
                                       }) => {
    return (
        <button
            type={type}
            className={styles.fillButton}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};


export default Button;
