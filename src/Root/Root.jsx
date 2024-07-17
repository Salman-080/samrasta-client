import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div className="py-6 ">

            </div>
            <div className="bg-[#C1C9F4] min-h-screen w-full flex flex-col">
             
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;