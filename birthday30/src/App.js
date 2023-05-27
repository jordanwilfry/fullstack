import Header from "./components/Header";
import List from "./components/List";

const App = () => {
  const universities = [
    { name: "University of Buea", town: "Buea", address: "UB-junction", faculties: ["FS", "COT", "FHS"] },
    { name: "University of Bamenda", town: "Bamenda", address: "U", faculties: ["FS", "COLTECH"] },
  ];
  return (
    <div className="container">
      <Header title={"Happy Birthday"} />
      <List universities={universities}/>
    </div>
  );
};

export default App;
