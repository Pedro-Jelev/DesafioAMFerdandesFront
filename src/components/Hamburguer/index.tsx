import { useState } from "react";
import { Container } from "./style";

export function Hamburguer(/* { children }: { children: React.ReactNode } */) {
  const [isActive, setIsActive] = useState("");
  function handle() {
    if (isActive === "") {
      setIsActive("active");
    } else {
      setIsActive("");
    }
  }

  return (
    <Container className={isActive} onClick={handle}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
      {/*  {children} */}
    </Container>
  );
}
