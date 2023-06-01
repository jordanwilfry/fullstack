import { useState } from 'react'

const AddStudent = ({ onAdd }) => {
  const [matriculation, setMatriculation] = useState('')
  const [name, setName] = useState('')
  const [present, setPresent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!matriculation || !name) {
      alert('Please add a name and a matricule')
      return
    }

    onAdd({ matriculation, name, present })
    setMatriculation('')
    setName('')
    setPresent(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Matriculation</label>
        <input
          type='text'
          placeholder='Matriculation'
          value={matriculation}
          onChange={(e) => setMatriculation(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>In class</label>
        <input
          type='checkbox'
          checked={present}
          value={present}
          onChange={(e) => setPresent(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddStudent
