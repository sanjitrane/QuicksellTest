import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTickets } from "../feature/ticketSlice";
import Lane from "../module/Lane/Lane";
import { settings } from "../settings";

const Layout = ()=>{
  const [lanesObj, setLanesObj] = useState([])
  const group = useSelector(state=>state.group)
  const order = useSelector(state=>state.order)
  const tickets = useSelector(state=>state.tickets)
  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchTickets());
  },[])

useEffect(()=>{  
  localStorage.setItem("groupState", group.status);
  localStorage.setItem("orderState", order.orderBy);
  if(!tickets.loading && tickets.error === '' && tickets?.data?.users){
  switch(group.status){
    case "Status":
      createLanesByStatus(tickets.data)
      return;
    case "User":
      createLanesByUser(tickets.data)
      return;
    case "Priority":
      
      createLanesByPriority(tickets.data)
      return;
  }    
  }
  },[group.status, order.orderBy,  tickets])

  const getTicketsByKey = (key, value, tickets)=>{
    if(tickets.length < 1) return tickets;
    const filtered =  tickets.filter(ticket=> ticket[key] === value)
    
    if(filtered.length){
    if(order.orderBy.toLowerCase() === 'priority'){
      return filtered.sort((a,b)=> b['priority'] - a['priority'])
    }else{
      return filtered.sort((a, b) => b['title'].localeCompare(a['title']));
    }
    }
    return filtered;
  }

  const createLanesByUser = (data)=>{
    const {users, tickets} = data
    if(!users) return null
    const lanes = []
    users.forEach((user)=>{
      const obj = {
      groupType: 'User',
      user,
      tickets: [...getTicketsByKey('userId', user.id, tickets)]
    }
    lanes.push(obj)
    })
    setLanesObj(lanes)
  }

  const createLanesByStatus = (data)=>{
    const {users, tickets} = data
    const lanes = []
    settings.status.forEach((s)=>{
      const obj = {
        groupType: 'Status',
        title: s,
        tickets:[...getTicketsByKey('status', s, tickets)],
        users
      }
      lanes.push(obj)
    })
    setLanesObj(lanes)
  }

  const createLanesByPriority = (data)=>{
    const {users, tickets} = data
    const lanes = []
    const keys = Object.keys(settings.priority)
    keys.forEach((p)=>{
      const obj = {
        groupType: 'Priority',
        priority: parseInt(p),
        tickets:[...getTicketsByKey('priority', parseInt(p), tickets)],
        users
      }
      lanes.push(obj)
    })
    setLanesObj(lanes)
  }



  {tickets.loading && <div>Loading...</div>}
  {!tickets.loading && tickets.error ? <div>Error: ${tickets.error}</div> : null}  
   
  return <section className="lanes">   
    {lanesObj.length > 0 ? lanesObj.map((lane, index)=>{
        return <Lane key={index} data={lane}/>
    })
    :
    null
    }
    
  </section>
}

export default Layout;