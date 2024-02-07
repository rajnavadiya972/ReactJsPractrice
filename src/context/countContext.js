import React, { createContext, useState } from 'react'

export const countContext = createContext();

const DataProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <countContext.Provider value={{ count, setCount }}>
            {children}
        </countContext.Provider>
    )
}

export default DataProvider
