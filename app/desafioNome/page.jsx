"use client";

import Input from "../../components/DesafioAnna/Input";
import Button from "../../components/DesafioAnna/Button";
import "./style.css";
import { useState } from "react";
import Result from "../../components/DesafioAnna/Result";

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
        padding: "1rem",
      }}
    >
      <div
        style={{
          // width: "80%",
          minWidth: "50%",
          maxWidth: "100%",
          backgroundColor: "#535353ff",
          borderRadius: "8px",
          padding: "1rem",
          boxShadow: "0 0 5px #00ffb3ff",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <>
          <h2>Digite seu nome: </h2>
          <div className="flex">
            <Input
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

          <Result nome={name} color={color} />
        </>
      </div>
    </div>
  );
}
