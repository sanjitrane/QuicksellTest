import React from "react";
import UserHeader from "../../components/UserHeader"
import Card from "../../components/Card";
import { findByKey } from "../../utils";
import StatusHeader from "../../components/StatusHeader";
import PriorityHeader from "../../components/PriorityHeader";
import { settings } from "../../settings";

/**
 * Lane will have a header component
 * Header will pass data based on the selection
 * Cards to line below
 */
const Lane = ({data})=>{
  

  const createUserHeaderObj = ()=>{
    const {user, tickets} = data
    return {
      user,
      count: tickets.length
    }
  }

  const createStatusHeaderObj = ()=>{
    const {title, tickets} = data
    return {
      title,
      count: tickets.length
    }
  }

  const createPriorityHeaderObj = ()=>{
    const {priority, tickets} = data
    return {
      priority: parseInt(priority),
      title: settings.priority[priority],
      count: tickets.length
    }
  }

  const renderHeaderComponent = ()=>{
    const {groupType} = data

    switch(groupType){
      case "User":
        return <UserHeader data={createUserHeaderObj()}/>
      case "Status":
        return <StatusHeader data={createStatusHeaderObj()}/>
      case "Priority":
        return <PriorityHeader data={createPriorityHeaderObj()}/>
      default:
        return null;
    }
  }

  const createCardObj = (obj)=>{
    const {tickets, user = null, users=null} = data
    return {
      card: obj,
      user: user ? user : findByKey(users,'id', obj.userId )      
    }
  }

  return(
    <div className="wrapper">
    {renderHeaderComponent()}
    {data.tickets.length > 0 && data.tickets.map((ticket)=>{
      return <Card key={ticket.id} data={createCardObj(ticket)}/>
    })}
    
    </div>
  )
}

export default Lane;