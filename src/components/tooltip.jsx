import React from "react";
import { useEffect,useRef } from "react";
import { initTipNixTooltip } from "tipnix";
import "tipnix/tipnix.css";

export default function Tooltip({ ...props }) {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    initTipNixTooltip({
      backgroundColor: "#000000",
      textColor: "#ffffff",
      fontSize: "16px",
      animation: "wobble",
      width: "225px",
      padding: "10px",
      parentWrapElement: ".body",
    });
  }, []);
  return (
    <div className="tipnix" {...props}>
      {props.children}
    </div>
  );
}
