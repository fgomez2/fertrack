import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Dashboard from "../pages/Dashboard"
import Habits from "../pages/Habits"
import Stats from "../pages/Stats"

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            {/* RUTAS PROTEGIDAS */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/stats" element={<Stats />} />

            {/* PRÓXIMAS PÁGINAS */}
            {/* <Route /> */}
        </Routes>
    )
}