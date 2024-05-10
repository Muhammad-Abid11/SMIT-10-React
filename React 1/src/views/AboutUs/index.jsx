import CustomBtn from '../../components/CustomBtn'
import { useNavigate } from "react-router-dom";
import getAllProducts from '../../config/firebase';
import { useEffect } from 'react';
function AboutUs() {
    const navigate = useNavigate();



    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        console.log("hi")
        getAllProducts()
    }

    return <div style={{ width: '100vw', height: 300, background: 'green' }}>
        <h1>About Us</h1>

        <button onClick={() => navigate("/")}>GO to Home</button>

        <CustomBtn text='Click Here' bgColor='purple' />
    </div>
}

export default AboutUs