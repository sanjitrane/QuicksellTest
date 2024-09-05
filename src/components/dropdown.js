import React, { useState } from "react";
import { useSelector } from "react-redux";

const Dropdown = ({options, title, cb})=>{
  const group = useSelector(state=>state.group)
  const order = useSelector(state=>state.order)
  const [selectedOption, setSelected] = useState(()=>{
    if(title === 'Grouping'){
      return group.status
    }else{
      return order.orderBy
    }
  })
  const [isOpen, setToggle] = useState(false)

  const openDp = ()=> setToggle(true);
  const closeDp = ()=> setToggle(false);

  const onCapture = (e)=>{
    const selected = e.target.value
    setSelected(selected);
    closeDp()
    cb(title, selected)
  }

    return(
      <div className="custom-select">
      <select onChange={onCapture}>
        {options.map((option, index)=>{
          return <option key={option} value={option} selected={option === selectedOption}>{option}</option>
        })}
      </select>
      </div>
)
}

export default Dropdown;

