// /components/Button/index.tsx
import React from 'react';
import styles from './Button.module.css';

// Props interface
interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
