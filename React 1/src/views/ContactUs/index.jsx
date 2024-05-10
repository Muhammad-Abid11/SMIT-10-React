import CustomBtn from '../../components/CustomBtn'
import { useNavigate } from "react-router-dom";

function ContactUs() {
    const navigate = useNavigate();

    return <div style={{ width: '100vw', height: 300, background: 'blue' }}>
        <h1>Contact Us</h1>
        <button onClick={() => navigate("/")}>GO to Home</button>

        <CustomBtn text='Contact Us' bgColor='green' />
    </div>
}

export default ContactUs