import "./ListaSuspensa.css";
const ListaSuspensa = ({ time }) => {
  return (
    <div className="lista-suspensa">
      <select>
        {time.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
