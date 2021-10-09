import React from 'react'
import './App.css'
import DataDetail from './components/DataDetail'
import DataList from "./components/DataList"

export default function App() {
    return (
        <div className="App">
            <DataList/>
            <DataDetail/>
        </div>
    )
}
