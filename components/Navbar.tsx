import {FC} from "react";
import MobileSidebar from "@/components/MobileSidebar";

const Navbar: FC = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar />
        </div>
    );
};

export default Navbar;
