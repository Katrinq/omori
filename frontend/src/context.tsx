//@ts-nocheck
import React, {useEffect} from 'react';
import {DataContextType, IData} from "./types";

export const DataContext = React.createContext<DataContextType | null>(null);

const getInitialState = () => {
    const data = localStorage.getItem("data")
    return data ? JSON.parse(data) : null
}
const DataProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [data, setData] = React.useState<IData | null>(getInitialState)

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])

    const saveData = (data: IData) => {
        const newData = {
            "project_name": data.project_name,
            "description": data.description,
            "requirements": data.requirements,
            "user_stories": data.user_stories,
            "use_cases": data.use_cases,
        }
        setData(newData)
    }
    return <DataContext.Provider value={{data, saveData}}>{children}</DataContext.Provider>
}

export default DataProvider
