import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import AddStudent from "./components/AddStudent";

const App = () => {
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const StudentsFromServer = await fetchStudents();
      setStudents(StudentsFromServer);
    };

    getStudents();
  }, []);

  // Fetch Students
  const fetchStudents = async () => {
    const res = await fetch("http://localhost:5001/Students");
    const data = await res.json();

    return data;
  };

  // Fetch Student
  const fetchStudent = async (id) => {
    const res = await fetch(`http://localhost:5001/Students/${id}`);
    const data = await res.json();
    return data;
  };

  // Add Student
  const addStudent = async (student) => {
    const status = Math.random()
    const newStudent = { status: status, ...student }
    const res = await fetch("http://localhost:5001/students", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });

    const data = await res.json();

    setStudents([data, ...students]);

    // const id = Math.floor(Math.random() * 10000) + 1
    // setStudents([...Students, newStudent])
  };

  // Delete Student
  const deleteStudent = async (id) => {
    const res = await fetch(`http://localhost:5001/Students/${id}`, {
      method: "DELETE",
    });
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setStudents(students.filter((Student) => Student.id !== id))
      : alert("Error Deleting This Student");
  };

  // Toggle Presence
  const togglePresence = async (id) => {
    const StudentToToggle = await fetchStudent(id);
    const updStudent = {
      ...StudentToToggle,
      present: !StudentToToggle.present,
    };

    const res = await fetch(`http://localhost:5001/Students/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updStudent),
    });

    const data = await res.json();

    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, present: data.present } : student
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddStudent(!showAddStudent)}
        showAdd={showAddStudent}
        title="Class List"
      />
      <>
        {showAddStudent && <AddStudent onAdd={addStudent} />}
        {students.length > 0 ? (
          <List
            student={students}
            onDelete={deleteStudent}
            onTogglePresence={togglePresence}
          />
        ) : (
          "No Students To Show"
        )}
      </>

      <Footer />
    </div>
  );
};

export default App;
