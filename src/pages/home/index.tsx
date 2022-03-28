import { useState } from "react";
import * as S from "./components/styles";
import * as EmailValidator from 'email-validator';

export const Home = () => {


  const [color, setColor] = useState("green");
  const handleColor = () => setColor(color === "green" ? "blue" : "green");
  const [email, setEmail] = useState(``)
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    console.log(EmailValidator.validate(email))
  }

  return (
    <>
      <S.Button onClick={handleColor}>Mudar</S.Button>
      <S.Button bg="black" color="white" onClick={() => setColor(`green`)}>
        {email}
      </S.Button>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        <button type="submit">Testar</button>
      </form>
    </>
  );
};
