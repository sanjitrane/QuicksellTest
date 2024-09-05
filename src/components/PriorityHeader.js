import React from "react";
import Avatar from "./Avatar";
import { settings } from "../settings";
import { getPriorityIcon,  } from "../utils";

const PriorityHeader = ({data})=>{
  return(<div className="lane-wrapper">
    <img src={getPriorityIcon(data.priority)} alt={`${data.title} Icon`}/>
    <p>{data.title} {data.count}</p>
    <div className="tools">
    <img src={settings.icons.add} alt="Add Icon"/>
    <img src={settings.icons.dot_menu} alt="Dot Menu"/>
    </div>
  </div>)
}

export default PriorityHeader;