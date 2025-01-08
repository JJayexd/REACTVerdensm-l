import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../Pages/HomePage/HomePage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
        </Routes>
    )
}