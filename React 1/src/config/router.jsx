import Dashboard from "../views/Dashboard";
import AboutUs from "../views/AboutUs";
import ContactUs from "../views/ContactUs";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "./firebase";


// Mine Router

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/aboutUs",
        element: <AboutUs />,
    },
    {
        path: "/contactUs",
        element: <ContactUs />,
    },
    {   //dynamic route
        // path: "/detail/:id",//colon k bad id k mtlb id me kuch dynamice value ayegi
        // element: <details />,

        /* 
        import {useParams}from 'react-router-dom'

        
        const {id}=useParams()
        
        */
    },
]);

// first check this link for nested Route and usage of <Outlet/>
// https://codesandbox.io/p/sandbox/react-router-dom-outlet-5zdtkx?file=%2Fsrc%2FApp.js%3A13%2C40

/* 
//Nested Routing
//Public and Private Routes //22-Jan-2024 //ye code sir sy copy kiya hai but ye sahi hai 
const routerSir = createBrowserRouter([ //routerSir -> router hai just 
    //yhn chezen different hai q k hum nested Routing kr rhy hen yhn per
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/contactUs",
                element: <ContactUs />,
            },
            {
                path: "/aboutUs",
                element: <AboutUs />,
            },
            {
                path: "/detail/:adId",
                element: <Detail />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ]
    }
]);


const Layout = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {// sb sy pehly user ly ao jb tk me Loader dikha rha hn
        onAuthStateChanged(auth, (user) => {
            setUser(user)//user agaya
            setLoading(false)//loader off krdo
        });
    }, [])


    useEffect(() => {
        const path = window.location.pathname//user kis URL per hai malum kro
        if (user) { //agar user "Login" hai or or wo "login/register" k page pe hai too "dashboard" pe ly jao
            if (path === '/register' || path === "/login") {
                navigate('/')
            }
        } else {//or user nhi hai to "login "k page pe ly jao
            if (path === '/' || path === '/contactUs') {
                navigate('/login')
            }
        }
    }, [window.location.pathname, user])

    if (loading) return <div>Loading...</div>//jb tk user nhi aye loader dikhao
    return <div>
    <Header user={user} />
    <Outlet /> 
    </div>
}
    // Outlet dekhna hoga ye shyd nested Routing k liye use hota hai 
// Outlet dekhna hoga ye shyd nested Routing k liye use hota hai 

*/

export default function Router() {
    return <RouterProvider router={router} />

}

/*
08-01-24 
SPA like OLX
MPA like ebay


go tutorial 
step 1 npm i react-router-dom 
step 2 create folder "src"-->"config" -->"router.js"

npm install react-router-dom (agar ye kam nhi kry too --force q k sir ki library)
https://reactrouter.com/en/main/start/tutorial <-- and copy contant from there example

*/

