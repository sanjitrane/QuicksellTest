/**
 * User - 
 * id
 * name
 * available
 */
import React from "react";
import { settings } from "../settings";
import { showInitials } from "../utils";
const Avatar = ({user})=>{

  return(
    <div className="avatar-wrapper">
      <div className="avatar-container">
        {showInitials(user.name)}
      </div>
        <div className={`avatar-status ${user.available ? 'available' : 'unavailable'}`} />
    </div>
  )
}

export default Avatar;