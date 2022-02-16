import React from "react";
import { Routes, Route} from "react-router-dom"
import CardComponent from "./components/card/card-component";
import LandingPage from "./components/landing-page";

export const ApplicationView = () => {
    
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/card" element={<CardComponent />} />
        </Routes>

    )
}