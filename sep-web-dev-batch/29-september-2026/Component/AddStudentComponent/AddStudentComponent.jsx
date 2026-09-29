import React from 'react'

function AddStudentComponent({onAddStudent}) {
  return (
    <div>
        <button onClick={onAddStudent}>
            Add Student
        </button>
    </div>
  )
}

export default AddStudentComponent