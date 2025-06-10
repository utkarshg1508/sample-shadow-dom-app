import { NavLink } from "react-router-dom";
import { ArpAiIcon } from "@netapp/bxp-style/react-icons/General";
import { TabHeader, TabLinks } from "@netapp/bxp-design-system-react";
import { ROUTES } from "../constants/routes";

const Header = () => {

    return (
        <TabHeader Icon={ArpAiIcon} label="Sample Shadow DOM App">
            <TabLinks>
                <NavLink to={`${ROUTES.HOME}`} children={"Home"} />
                <NavLink to={`${ROUTES.PRODUCTS}`} children={"Products"} />
                <NavLink to={`${ROUTES.REACT_PORTALS}`} children={"React Portals"} />
            </TabLinks>
        </TabHeader>
    );
};

export default Header;