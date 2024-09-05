import React from "react";
import Avatar from "./Avatar";
import { settings } from "../settings";
import { getStatusIcon } from "../utils";

const StatusHeader = ({data})=>{
  
  return(<div className="lane-wrapper">
    <img src={getStatusIcon(data.title)} alt={`${data.title} Icon`}/>
    <p>{data.title} {data.count}</p>
    <div className="tools">
    <img src={settings.icons.add} alt="Add Icon"/>
    <img src={settings.icons.dot_menu} alt="Dot Menu"/>
    </div>
  </div>)
}

export default StatusHeader;