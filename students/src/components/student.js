import { FaTimes } from "react-icons/fa";

const Student = ({ student, onDelete, onTogglePresence }) => {
  const handlePresenceClick = () => {
    onTogglePresence(student.id);
  };
  return (
    <div
      className={`task ${student.present && "reminder"}`}
      onDoubleClick={handlePresenceClick}
    >
      <h3>
        <span>
          <input type="checkbox" checked={student.present} onChange={handlePresenceClick} style={{display: "inline-block", margin: "1em"}}/>
          <span  style={{fontWeight: "bold", color: "blue", margin: "1em"}}>
            {student.matriculation}
          </span>
            {student.name}
        </span>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(student.id)}
        />
      </h3>
      <p  style={{color: "green"}}>status {student.status} %</p>
    </div>
  );
};

export default Student;
