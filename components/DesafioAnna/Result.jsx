export default function Result(props) {
  return (
    <>
      <h2>
        Seu nome é: <span style={{ color: props.color }}>{props.nome}</span>
      </h2>
    </>
  );
}
