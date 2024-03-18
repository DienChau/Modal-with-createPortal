import { useState } from "react";
import LoginModal from "./components/LoginModal";
import { RegistrationForm } from "./components/LoginForm";

export default function Home() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <RegistrationForm />
            <button onClick={() => setShow(true)}>Show login modal</button>
            {show && <LoginModal onClose={() => setShow(false)} />}
        </div>
    );
}
