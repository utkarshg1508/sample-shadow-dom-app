import { NavLink } from "react-router-dom";
import { ArpAiIcon } from "@netapp/bxp-style/react-icons/General"
import { TabHeader, TabLinks } from "@netapp/bxp-design-system-react"
import { ROUTES } from "../constants/routes";

const Header = () => {
    return <TabHeader Icon={ArpAiIcon} label="NetApp Internal">
        <TabLinks>
            <NavLink
                to={ROUTES.HOME}
                children={"Home"}
            />
            <NavLink
                to={ROUTES.PRODUCTS}
                children={"Products"}
            />
        </TabLinks>
    </TabHeader>
}

export default Header;