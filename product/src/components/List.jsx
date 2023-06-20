import { FaTimes } from "react-icons/fa";


function List({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div className="task">
          <h3>
        <span>
          <span  style={{fontWeight: "bold", color: "blue"}}>
            {product.name}
          </span>
        </span>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p  style={{color: "green"}}>Quantity: {product.quantity}</p>
      <p  style={{color: "black"}}>availble: {product.available? "yes": "No"} </p>
        </div>
      ))}
    </div>
  );
}

export default List;
