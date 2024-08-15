import { useState } from "react";

export default function ToolbarController() {
    const [isOpen, setIsOpen] = useState<boolean|null>(null);

    const toggle = () => setIsOpen(!isOpen);
    return { isOpen, toggle };
}