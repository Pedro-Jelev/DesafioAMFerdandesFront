import { Container } from "./style";

interface IProps {
  status: string;
  imageLink: string;
  imageAlt: string;
  location: string;
  businessName: string;
  area: string;
  dorm: string;
  suite: string;
  vacancies: string;
}

export function Show(props: IProps) {
  return (
    <Container>
      <img src={props.imageLink} alt={props.imageAlt} />

      {props.status === "new" ? <span className="new">LANÇAMENTO</span> : ""}
      {props.status === "construction" ? (
        <span className="construction">EM CONSTRUÇÃO</span>
      ) : (
        ""
      )}
      {props.status === "read" ? <span className="read">PRONTO</span> : ""}

      <p>{props.location.toUpperCase()}</p>
      <h4>{props.businessName}</h4>

      <ul className="details">
        <li>Área: {props.area} m²</li>
        <li>Dorm(s): {props.dorm}</li>
        <li>Suite(s): {props.suite}</li>
        <li>Vaga(s): {props.vacancies}</li>
      </ul>
    </Container>
  );
}
