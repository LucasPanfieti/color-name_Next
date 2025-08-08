export default function Input2(props) {
  return (
    <>
      <input
        style={{ paddingLeft: "8px" }}
        id={props.id}
        name={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(eventos) => props.newValue(eventos.target.value)}
      />
    </>
  );
}
