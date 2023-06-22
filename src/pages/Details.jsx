import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(useLocation);

  return (
    <>
      <button onClick={()=>{navigate("/")}}>이전으로</button>
    </>
  )
}

export default Details