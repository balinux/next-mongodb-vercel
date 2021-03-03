import { useReducer, useContext, createContext } from 'react'

const CounterStateContext = createContext()
const CounterDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'STORE_PRODUCT':
            return {
                product: [...state.product, { product: action.product, completed: false }]
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
