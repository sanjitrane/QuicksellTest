import React from "react";
import Avatar from "./Avatar";
import { settings } from "../settings";

/**Props
 * groupType - Status | User | Priority
 * user
 * tickets - 
 */

const UserHeader = ({data})=>{
  
  return(<div className="lane-wrapper">
    {/**Icon or Avatar based on the type of lane */}
    <Avatar user={data.user}/>
    {/** Title and Total Count of Tickets */}
    <p>{data.user.name} {data.count}</p>
    {/** Plus Icon */}
    <div className="tools">
    <img src={settings.icons.add} alt="Add Icon"/>
    {/** Dot menu icon */}
    <img src={settings.icons.dot_menu} alt="Dot Menu"/>
    </div>
  </div>)
}

export default UserHeader;