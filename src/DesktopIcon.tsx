import { Bat } from "@react95/icons";
import './DesktopIcon.css';
import { useEffect, useRef, useState } from "react";

export function DesktopIcon() {
    const iconRef = useRef<HTMLDivElement>(null);
    const [highlighted, setHighlighted] = useState(false);
    const iconClassName = "icon " + (highlighted ? 'icon-selected' : '');

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    
    const handleClickOutside = (event : MouseEvent) => {
        if (iconRef.current && !iconRef.current.contains(event.target as Node)) {
            setHighlighted(false);
        }
    }

    return (
        <div ref={iconRef} className={iconClassName} onClick={() => setHighlighted(true)}>
            <Bat variant="32x32_4"/>
            <span className='icon-label'>Resume</span>
        </div>
    )
}