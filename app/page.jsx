"use client";

import Input from "../components/DesafioAnna/Input";
import Input2 from "../components/DesafioAnna/Input2";
import Button from "../components/DesafioAnna/Button";
import Result from "../components/DesafioAnna/Result";
import "./desafioNome/style.css";
import { useState } from "react";

export default function desafioNome() {
  const [name, setName] = useState("");
  const [tempName, setTempName] = useState("");
  const [color, setColor] = useState("");
  console.log(color);

  function handleClick() {
    console.log(`Name: ${name}`);
    console.log(`tempName: ${tempName}`);
    setName(tempName);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        flexDirection: "column",

        paddingTop: "1rem",
        paddingRight: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "1rem",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "400px",
          // minWidth: "50%",
          // maxWidth: "400px",
          backgroundColor: "#535353ff",
          borderRadius: "16px",

          boxShadow: "0 0 5px #00ffb3ff",
          display: "flex",
          flexDirection: "column",
          gap: "8px",

          paddingTop: "0 rem",
          paddingRight: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1rem",
        }}
      >
        <h2>Digite seu nome: </h2>
        <div className="flex">
          <Input2
            newValue={setTempName}
            type="text"
            placeholder="Digite seu nome"
          />
          <Button handleClick={handleClick} />
        </div>
        <h2>Escolha a cor do seu nome: </h2>
        <div className="flex">
          <Input newValue={setColor} type="color" placeholder="" />
          {/* <Button
                    handleClick={handleClick}
                /> */}
        </div>
      </div>

      <div
        style={{
          width: "90%",
          maxWidth: "400px",
          // minWidth: "50%",
          // maxWidth: "400px",
          backgroundColor: "#535353ff",
          borderRadius: "16px",
          boxShadow: "0 0 5px #00ffb3ff",
          display: "flex",
          flexDirection: "column",
          gap: "8px",

          paddingTop: "0 rem",
          paddingRight: "1rem",
          paddingBottom: "0.2rem",
          paddingLeft: "1rem",
        }}
      >
        <Result nome={name} color={color} />
      </div>
    </div>
  );
}
