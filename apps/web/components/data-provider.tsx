"use client"

import {createContext} from "react";
import {DataProviderState} from "@/lib/data-loader";


interface DataProviderProps {
    children: React.ReactNode,
    data: DataProviderState
}


export const DataContext = createContext<DataProviderState>({});


export default function DataProvider({data, children}: DataProviderProps) {
    return (
        <DataContext value={data}>
            {children}
        </DataContext>
    )
}