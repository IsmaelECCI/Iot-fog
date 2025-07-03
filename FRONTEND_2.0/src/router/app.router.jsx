import { Route, Routes } from "react-router-dom"
import Auth from "../auth/pages/auth"
import Dashboard from "../dashboard/dashboard"

export const AppRouter = () => {
    return (

        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Auth />} />

        </Routes>)
} 