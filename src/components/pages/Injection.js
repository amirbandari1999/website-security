import React from "react";
import "./inject.css";
import { useState } from "react";
export default function Injection() {
  const [name, setName] = useState(Amir);
  const handleName = (e) => {
    setName(e.target.value);
  };
  return <div></div>;
}
