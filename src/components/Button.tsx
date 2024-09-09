import {ButtonHTMLAttributes} from "react";

export const Button = ({title, onClick, className}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >{title}</button>
    );
};