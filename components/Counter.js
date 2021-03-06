import { useReducer, useContext, createContext } from 'react'

const CounterStateContext = createContext()
const CounterDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'STORE_PRODUCT':
            return {
                // add product without filter
                product: [...state.product, { product: action.product }]

                // // check if exist then udpate
                // product: state.product.length == 0 ?
                //     [...state.product, { product: action.product }] :
                //     state.product != undefined ?
                //         state.product.map(({ product }) => product.id == action.product.id ?
                //             { product: { ...product, qty: product.qty + 1 } } :
                //             [...state.product, { product: action.product }])
                //         : { product: product }
            }
        case 'DELETE_PRODUCT':
            return {
                product: state.product.filter((item, index) => item.product.id != action.product.id)
                // product: state.product.filter((item, idx) => idx != action.idx)
            }
        case 'UPDATE_PRODUCT':
            // console.log("log update data");
            return {
                // product: state.product.map((p, idx) => p.product.id == action.product.id ? { ...p , qty: p.qty + 1 } : p)
                // product: state.product.map(({ product }) => product.id == action.product.id ? { ...product, qty: product.qty + 1 } : product)

                product: state.product.map(({ product }) => product.id == action.product.id ? { product: { ...product, qty: product.qty + 1 } } : { product: product })
            }
        case 'UPDATE_PRODUCT_DECREMENT':
            // console.log("log update data");
            return {
                product: state.product.map(({ product }) => product.id == action.product.id ? { product: { ...product, qty: product.qty - 1 } } : { product: product })
            }
        default:
            return state
    }
}

export const CounterProvider = ({ children }) => {
    const [{ product }, dispatch] = useReducer(reducer, { product: [] })
    return (
        <CounterDispatchContext.Provider value={dispatch}>
            <CounterStateContext.Provider value={product}>
                {children}
            </CounterStateContext.Provider>
        </CounterDispatchContext.Provider>
    )
}

export const useCount = () => useContext(CounterStateContext)
export const useDispatchCount = () => useContext(CounterDispatchContext)
