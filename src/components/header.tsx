import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArpAiIcon } from "@netapp/bxp-style/react-icons/General";
import { TabHeader, TabLinks, TabWidgets, Toggle } from "@netapp/bxp-design-system-react";
import { RootState } from "../store";
import { ROUTES } from "../constants/routes";
import { toggleTheme } from "../store/themeSlice";

const Controls = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector((state: RootState) => state.theme.isDarkTheme);

    return (
        <div>
            <Toggle
                value={isDarkTheme}
                toggle={() => dispatch(toggleTheme())}
            >
                Theme: {isDarkTheme ? "Dark" : "Light"}
            </Toggle>
        </div>
    );
};

const Header = () => {
    return (
        <TabHeader Icon={ArpAiIcon} label="NetApp Internal">
            <TabLinks>
                <NavLink to={ROUTES.HOME} children={"Home"} />
                <NavLink to={ROUTES.PRODUCTS} children={"Products"} />
            </TabLinks>
            <TabWidgets children={<Controls />} className={null} />
        </TabHeader>
    );
};

export default Header;