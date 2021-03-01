export default function Product({ products }) {
    return (
        <div>
            <h1>products</h1>
            {
                products.data.map(product => (
                    <div key={products._id}>
                        <p>{product.title}</p>
                    </div>
                ))
            }
        </div>
    )
}


export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/api/product");
    const products = await response.json();
    console.log(products);

    return {
        props: {
            products
        }
    }
}