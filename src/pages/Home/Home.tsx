import { useState } from "react";
import LoginModal from "./components/LoginModal";

export default function Home() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(true)}>Show login modal</button>
            {show && <LoginModal onClose={() => setShow(false)} />}
        </div>
    );
}
