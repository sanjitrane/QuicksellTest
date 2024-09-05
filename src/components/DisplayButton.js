import React, { useRef, useState } from "react";
import { settings } from "../settings";
import Dropdown from "./dropdown";
import { useDispatch } from "react-redux";
import { selectGroup } from "../feature/groupSlice";
import { setOrder } from "../feature/orderSlice";

const DisplayButton = ()=>{
  const [showPanel, togglePanel] = useState(false);
  const dispatch = useDispatch();

  const captureValues = (title, value)=>{
    switch(title){
      case 'Grouping': 
        dispatch(selectGroup(value))
      return;
      case 'Ordering':
        dispatch(setOrder(value))
    }
  }

  const renderComponent = (type, title, options=null)=>{
    switch(type){
      case 'dropdown':
        return <Dropdown title={title} options={options} cb={captureValues}/>
      default:
        return null;
    }
  }


  return <>
    <div className="dropdown-button" onClick={()=>togglePanel(panel=>!panel)}>
      <img src = {settings.icons.display} alt="display-button"/>
      <span>Display</span>
      <img src={settings.icons.down} alt="display-down-arrow"/>
    </div>
    {showPanel && <div className="dropdown-panel">
      {settings.displayPanels.map((panel, index)=>{
        return <div key={index} className="panel">
          <span>{panel.title}</span>
          {renderComponent(panel.componentType,  panel.title, panel.options,)}
        </div>
      })}
    </div>}
  </>
}

export default DisplayButton;