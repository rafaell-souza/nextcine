import { useState } from "react";

export default function StateCondition() {
    const [isTrue, setIsTrue] = useState<boolean|null>(null);

    const toggle = () => setIsTrue(!isTrue);
    return { isTrue, toggle };
}