import {Outlet} from "react-router";
import {Suspense} from "react";

const AuthView = () => {
    return (
        <>
            <div>auth</div>
            <Outlet />
        </>
    )
}

export default AuthView;
