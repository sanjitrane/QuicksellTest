import { settings } from "./settings";

export const showInitials = (str)=>{
  const arr = str.split(' ')
  if(arr.length > 1){
    return `${arr[0][0].toUpperCase()}${arr[1][0].toUpperCase()}`
  }
  return `${arr[0][0].toUpperCase()}`
}

export const getStatusIcon = (status)=>{
  switch(status){
    case "Backlog":
      return settings.icons.backlog;
    case "Todo":
      return settings.icons.to_do;
    case "In progress":
      return settings.icons.in_progress;
    case "Done":
      return settings.icons.done;
    case "Canceled":
      return settings.icons.cancelled;
    default:
      return '';  
  }
}

export const getPriorityIcon = (priority)=>{
  
  switch(priority){
    case 0:
      return settings.icons.no_priority;
    case 1:
      return settings.icons.low_priority;
    case 2:
      return settings.icons.medium_priority;
    case 3:
      return settings.icons.high_priority;
    case 4:
      return settings.icons.urgent_priority;
    default:
      return '';  
  }
}

export const findByKey = (arr, key, value)=>{
  const obj = arr.find(item=> item[key] === value)
  return obj
}