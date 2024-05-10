import FbImageLibrary from 'react-fb-image-grid'

function FbPost() {
    const images = [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"]

    return <div>
        <h1>Iphone 9</h1>
        <h3>Category</h3>

        <p>kasjfksanckashdas description</p>

        <FbImageLibrary images={images} />
    </div>
}

export default FbPost