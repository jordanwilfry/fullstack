import Header from "./components/Header";
import List from "./components/List";

const App = () => {
  const products = [
    { name: "pienut", quantity: 4, available: true },
    { name: "apple", quantity: 1, available: false },
    { name: "orange", quantity: 5, available: true },
    { name: "pienut", quantity: 2, available: false },
    
  ];
  return (
    <div className="container">
      <Header title={"Product"} />
      <List products={products}/>
    </div>
  );
};

export default App;
