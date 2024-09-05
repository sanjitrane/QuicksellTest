import React, { useEffect, useState } from "react";

const useDeviceWidth = ()=>{
  const [isDesktop, setType] = useState(()=>window.innerWidth > 768 ? true : false )
  useEffect(()=>{
    const handleResize = ()=>{
      const width = window.innerWidth
      setType(window.innerWidth > 768 ? true : false)
      
    };

    window.addEventListener('resize', handleResize);

    return ()=>{
      window.removeEventListener('resize', handleResize);
    }

  },[])

  return {isDesktop}
}

export default useDeviceWidth;