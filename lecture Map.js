// map=> jb apko her items me kuch update krna ho
// aur uska liye new banana ho
// "Map" hamesha return krta hai agar return nhi krogy too
// too ye "array of undefined " return kryga jitni us array ki length hogi

// Example 1

const sabzi = ["alu", "piyas", "tamator"]
const updateSabzi = sabzi.map((items) => {
    items + ' behtreen car'
})
updateSabzi //array of undefined

// Example 2

const cars = ["Suzuki", "Audi", "Honda", "Toyota"]
const updateCars = cars.map((items) => {
    return items + ' behtreen car'
})
updateCars //array of updatedArrays

// Example 3
const cars2 = ["Suzuki", "Toyota", "Civic", "Corolla"]
const updateCars2 = cars2.map((items) => {
    if (items.includes("c")) {
        return items + " Brand New"
    } else {
        return items + " Old Brand"
    }
})
updateCars2 //array of updatedArrays


// Example 4
const cars3 = ["Suzuki", "Toyota", "Civic", "Corolla"]
const updateCars3 = cars3.map((items, index) => {
    if (index === 2) {//index 2 k element updae kro
        return items + " Brand New"
    } else {
        return items + " Old Brand"
    }
})
updateCars3 //array of updatedArrays


// Example 5 Used this in react with some changes
const carsList = [
    {
        name: "Audi",
        color: "Grey",
        model: 2100,
        feature: ["Power Window", "Power Sterring", "Luxury"]
    },
    {
        name: "Mehran",
        color: "Black",
        model: 2000,
        feature: ["low ", "Oil Consume", "Old Style"]
    },
    {
        name: "CIVIC",
        color: "RED",
        model: 2019,
        feature: ["user-friendly", "Normal Cost"]
    }
]

console.log(
    carsList.map((items) => {
        return {
            name: items.name,
            color: items.color,
            model: items.model,
            feature: items.feature.map((featuresItems) => {
                return featuresItems
            })
        }
    })
)



/* 
    const [result, setResult] = useState(true);

    function toggle() {
        console.log("Result before update", result)//true
        setResult(!result)
        console.log("Result after update", result)//true yhn bhi q k state async 
        // nature ye bad me update hoga ya is function k bad hoga
    }

    <button onClick={toggle}>Toggle</button>


*/

/* 

200 success
404 not found
500 internal server erroo
*/