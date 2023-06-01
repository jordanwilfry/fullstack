import Student from './student'

const List = ({ student, onDelete, onTogglePresence }) => {
  return (
    <>
      {student.map((student, index) => (
        <Student key={index} student={student} onDelete={onDelete} onTogglePresence={onTogglePresence} />
      ))}
    </>
  )
}

export default List
