import React, { useState } from "react";

function List({ universities }) {
  const [faculties, setFaculties] = useState([]);

  const HandleClick = (uni) => {
    setFaculties(uni.faculties);
  };
  return (
    <div>
      {universities.map((university) => (
        <div className="task" onClick={() => HandleClick(university)}>
          <h3>{university.name}</h3>
          <p>{university.town}</p>
        </div>
      ))}

      <div className="task">
        {faculties.length > 1 ? (
          <ul>
            {faculties.map((faculty) => (
              <li>{faculty}</li>
            ))}
          </ul>
        ) : (
          <div className="">Nothing to show</div>
        )}
      </div>
    </div>
  );
}

export default List;
