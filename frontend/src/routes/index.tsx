import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Dashboard from "../pages/Dashboard"

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* PRÓXIMAS PÁGINAS */}
            {/* <Route /> */}
        </Routes>
    )
}