import {lazy, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/homepage/Homepage";
import AuthView from "./views/authView/AuthView.tsx";
import CommonView from "./views/commonView/CommonView.tsx";
import MaraphoneList from "./pages/maraphone/maraphoneList/maraphoneList.tsx";
import DaysList from "./pages/days/daysList/daysList.tsx";
import DayDetails from "./pages/days/dayDetails/dayDetails.tsx";

const Register = lazy(() => import("./pages/registration/Registration"));
const Login = lazy(() => import("./pages/login/Login.tsx"))

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<CommonView />}>
                    <Route index element={<Homepage />} />
                    <Route path="maraphones" element={<MaraphoneList/>} />
                    <Route path="maraphones/:menuId/days" element={<DaysList/>} />
                    <Route path="maraphones/:menuId/days/:dayId" element={<DayDetails/>} />
                </Route>

                {/*<Route path="about" element={<About />} />*/}

                <Route element={<AuthView />}>
                    <Route path="login" element={<Login />} />
                    <Route path="sign-in" element={<Register/>} />
                </Route>

                {/*<Route path="concerts">*/}
                {/*    <Route index element={<ConcertsHome />} />*/}
                {/*    <Route path=":city" element={<City />} />*/}
                {/*    <Route path="trending" element={<Trending />} />*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
