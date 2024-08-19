"use client";

export default function MyButton({
    style, 
    handleClick,
    children
}: { style: string, handleClick: () => void, children?: React.ReactNode }) {
    return (
        <button className={`${style} rounded-lg hover:opacoty-80`} onClick={handleClick}>
            {children}
        </button>
    )
}