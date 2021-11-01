import React, {useState,useEffect} from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { WelcomeParagraph } from "../WelcomeParagraph";

export function Welcome({name}) {
  const [width, height] = useWindowSize();
  const [style,setStyle] = useState("m-5");
   // for mobile interface usage
   useEffect(() => {
    if(width<=500){
      setStyle("m-0 break-words");
    } 
    if(width>500) {
      setStyle("m-5");
    }},[width])
  return (
    <section className={style}>
      <WelcomeParagraph name={name} />
    </section>
  );
}
