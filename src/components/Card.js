import React from "react";
import { useSelector } from "react-redux";
import { getStatusIcon, getPriorityIcon } from "../utils";
import { settings } from "../settings";
import Avatar from "./Avatar";

const Card = ({data})=>{
  const {card, user} = data
  const group = useSelector(state=>state.group)

  return(
    <div className="card">
      <div>
      <div className="card-info">
        <p className="card-id">{card.id}</p>
        {/**render based on the group type */}
        <Avatar user={user}/>
      </div>
      <div className="details">
        <img src={getStatusIcon(card.status)}/>
        <p className="details-title">{card.title}</p>
      </div>
      </div>
      <div className="meta">
        {group.status !=='Priority' && <img src={getPriorityIcon(card.priority)}/>}
        {card.tag && 
        <div className="meta-tags">
          <img src={settings.icons.urgent_priority_grey}/>
          <p className="tag">{card.tag.toLocaleString()}</p>
        </div>
        }
      </div>
    </div>
  )
}

export default Card;