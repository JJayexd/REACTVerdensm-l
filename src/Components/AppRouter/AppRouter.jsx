import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../Pages/HomePage/HomePage";
import { EducationPage } from "../../Pages/EducationPage/EducationPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/education" element={<EducationPage />} />
        </Routes>
    )
}