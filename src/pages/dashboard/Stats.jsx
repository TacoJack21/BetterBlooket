import { useEffect } from "react";
import Sidebar from "./SideBar";
function Stats() {
    useEffect(() => {
        // fetch stats
    }, []);
    return (<>
        <Sidebar>
            stats
        </Sidebar>
    </>);
}
export default Stats;