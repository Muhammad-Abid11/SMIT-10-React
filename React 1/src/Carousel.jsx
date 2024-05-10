import React, { useEffect, useState } from 'react'
import './Carousel.css'
const data = [
    "https://wallpaperset.com/w/full/0/b/4/498853.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFboOCHNRfacsWIwbaS9g8n9uTEw9Vr85rg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgeiwr0OQ0W-_v0zaWgL2xO7IciBp6qi_-Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDroprldojsVJASu8Ij_qvfr6HyUi5MjY_Q&usqp=CAU"
]
export default function Carousel() {

    const [activeImage, setActiveImage] = useState(0)
    const moveBack = () => {
        if (!activeImage) {//ye 0 ye pichy jaye too data ki length k final pe jao
            setActiveImage(data.length - 1)

        } else {
            setActiveImage(activeImage - 1)
        }
    }
    const moveNext = () => {
        // setActiveImage(activeImage + 1)
        setActiveImage((activeImage + 1) % data.length)
        // here it works like 0%4=0  1%4=1 ,2%4=2 ,3%4=3 ,4%4=0 ,
    }

    //after 5 sec change it
    useEffect(() => { //jb page banega iska timer start 
        const clearInterval = setTimeout(() => {
            moveNext() //state update hoye timer phir sy start sy start hoga
        }, 5000)
        return () => {
            clearTimeout(clearInterval); //ta k count taiz nhi chaly agar usper click kiya jaye 
        }
    }, [activeImage]);

    // 
    return (
        <div >
            {/* <h1 >Carousel</h1> */}
            <div className='flex justify-center'>
                <button className='font-bold p-4 m-10' onClick={() => {
                    moveBack()
                }}>Previous</button>
                {/*                 <img
                    src={data[activeImage]} alt="slide-images"
                    className='w-[800px] m-10 h-[500px] object-contain'
                /> */}

                {data.map((url, index) => {
                    return <img
                        src={url} alt="slide-images"
                        key={index}
                        className={
                            'w-[800px] m-10 h-[500px] object-contain ' +// object-contain sy us hi div me image contain hojayega
                            (activeImage === index ? "block" : "hidden")
                        }
                    // className='w-[800px] m-10 h-[500px] object-contain' //for make className dynamic use Up
                    />
                })}
                <button className='font-bold p-4 m-10' onClick={() => {
                    moveNext()
                }}>Next</button>
            </div>
        </div>
    )
}
