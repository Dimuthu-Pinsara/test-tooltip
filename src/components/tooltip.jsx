import React from 'react'
import { useEffect } from "react";
import { initTipNixTooltip } from "tipnix";
import "tipnix/tipnix.css"; 

export default function Tooltip({...props}) {
    useEffect(() => {
        initTipNixTooltip({
          backgroundColor: "#000000",
          textColor: "#ffffff",
          fontSize: "16px",
          animation: "wobble",
          width: "225px",
          padding: "10px",
          parentWrapElement: ".body"
        });
      }, []);
  return (
    <div
        className="tipnix"
        {...props}
      >
        {props.children}
      </div>
  )
}
