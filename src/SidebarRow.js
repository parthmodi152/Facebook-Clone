import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarRow.css"


function SidebarRow({img, src, Icon, title}) {
    return (
        <div className="sidebarRow">
            {img && <img src={img}/>}
            {src && <Avatar src={src} />}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
