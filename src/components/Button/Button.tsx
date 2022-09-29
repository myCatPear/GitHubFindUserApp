import styles from './Button.module.scss';
import React from "react";

interface ButtonProps {
    children: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({onClick, children}: ButtonProps) => (
    <button className={styles.button} onClick={onClick}>
        {children}
    </button>
);
