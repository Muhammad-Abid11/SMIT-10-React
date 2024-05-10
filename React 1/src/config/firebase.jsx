

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD9ObDXV4gHIfK6EH1V2rfPIZK2pMfh1sE",
    authDomain: "fir-store-b10-257cb.firebaseapp.com",
    projectId: "fir-store-b10-257cb",
    storageBucket: "fir-store-b10-257cb.appspot.com",
    messagingSenderId: "57831018633",
    appId: "1:57831018633:web:7ce8d1288647e9e6d63658",
    measurementId: "G-9LSGK8NEDZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();


async function getAllProducts() {
    const products = []
    const querySnapshot = await getDocs(collection(db, "ads"));
    querySnapshot.forEach((doc) => {

        console.log(doc.id, " => ", doc.data());
        const product = { id: doc.id, ...doc.data() } // ye kam nichy 1 or lamby way sy kiya huawa hai
        products.push(product)

    });
    console.log("products--->", products)
    return products;
}

export default getAllProducts
export {
    auth, onAuthStateChanged
}
/* H/W
login signup all products details page show

*/




















/* 


// Export multiple ways 12-Jan-24

const foo = () => {
    fetch("")
}
export default foo


const foo3 = () => {
    fetch("")
}

const foo4 = () => {
    fetch("")
}

export {
    foo3,
    foo4
}

export const foo1 = () => {
    fetch("")
}
export const foo2 = () => {
    fetch("")
}


// export same sy hojaye difference function too--> "Alias" use krty hen
import { getSinglePro as getProductfromABC } from './abc.js'
import { getSinglePro as getProductfromABC2 } from './abc2.js'

// npm uninstall packageName */




/* 

Firebase hosting
npm install -g firebase-tools.

npm i "someProject" <--for project
npm i "someProject" -g <--for System use like firebase init //C:user/hidden 
//Error firebase not recognize // PC property --> advanced--> environment--> add path of npm

Steps:
1.firebase login
2.firebase init
3.select hosting
4.select existing project
5.public--> nhi bulid k folder banao
6.firebase deploy
7.jb bhi changes aye build banao or deploy kro

*/