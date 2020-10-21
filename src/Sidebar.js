import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
// import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
// import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
// import PeopleIcon from '@material-ui/icons/People';
// import ChatIcon from '@material-ui/icons/Chat';
// import StorefrontIcon from '@material-ui/icons/Storefront';
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow img="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/7_gcmlwrelX.png" title="COVID-19 Information Center"/>
            <SidebarRow img="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" title="Friends"/>
            <SidebarRow img="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png" title="Groups"/>
            <SidebarRow img="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png" title="Marketplace"/>
            <SidebarRow img="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png" title="Videos"/>
            <SidebarRow img="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png" title="Events"/>
            <SidebarRow img="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/Uy-TOlM5VXG.png" title="Memories"/>
            <SidebarRow img="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png" title="Saved"/>
            <SidebarRow Icon={ExpandMoreIcon} title="See More"/>
        </div>
    )
}

export default Sidebar
