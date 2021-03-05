import * as React from "react";
import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";

export const Layout = ({children}) => {
  const [windowHeight, setWindowHeight] = useState();

  const handleResize = () => {
    console.log(windowHeight);
    setWindowHeight(window.innerHeight);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  })

  return (
    <div className='Layout' style={{height: `${windowHeight}px`}}>
      <Container>{children}</Container>
    </div>
  )
}