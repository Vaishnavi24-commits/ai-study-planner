function StudyInput({subject,deadline,setSubject,setDeadline,addSubject}){
  return(
    <div className="flex gap-3 mb-4">
      <input
        type="text"
        placeholder="Enter subject"
        className="border border-purple-800 p-2 rounded flex-1"
        value={subject}
        onChange={(e)=>setSubject(e.target.value)}
      />
      <input
        type="date"
        className="border border-purple-800 p-2 rounded"
        value={deadline}
        onChange={(e)=>setDeadline(e.target.value)}
      />
      <button
        onClick={addSubject}
        className="bg-purple-600 text-white px-4 rounded"
      >
        Add
      </button>
    </div>
  )
}

export default StudyInput