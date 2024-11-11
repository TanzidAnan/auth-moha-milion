import { Outlet } from "react-router-dom";
import Navber from "./Navber";

const Roots = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet/>
        </div>
    );
};

export default Roots;