export default function Product({ products }) {
    return (
        <div>
            <h1>Nothing happens here</h1>
        </div>
    )
}


// export async function getStaticProps() {
//     const response = await fetch("http://localhost:3000/api/product");
//     const products = await response.json();
//     console.log(products);

//     return {
//         props: {
//             products
//         }
//     }
// }