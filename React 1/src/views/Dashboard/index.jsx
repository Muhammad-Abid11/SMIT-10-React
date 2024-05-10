import CustomBtn from '../../components/CustomBtn'
import FbPost from '../../components/FbPost'
// import './index.css'


import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    return <div className='container'>

        <h1>Dashboard</h1>

        <p>kjdklasjfdslaknfjkalndflkas</p>
        <div className='fb'>

            <FbPost />
        </div>
        <div style={{ background: "yellow", padding: 10 }}>

            <button onClick={() => navigate("/aboutUs")}>GO to About Page</button>
            <button onClick={() => navigate("/contactUs")}>GO to Contact Page</button>

        </div>
        <CustomBtn text='Submit' bgColor='red' />
    </div>
}

export default Dashboard
