import { useState } from "react"

import StudyInput from "./components/StudyInput"
import SubjectList from "./components/SubjectList"
import StudyPlan from "./components/StudyPlan"
import { generateStudyPlan } from "./utils/generatePlan"

function App(){
  const [subject,setSubject] = useState("")
  const [deadline,setDeadline] = useState("")
  const [subjects,setSubjects] = useState([])
  const [studyPlan,setStudyPlan] = useState("")
  function addSubject(){
    if(!subject || !deadline){
      alert("Please enter subject and deadline")
      return
    }
    const newSubject = {subject,deadline}
    setSubjects([...subjects,newSubject])
    setSubject("")
    setDeadline("")
  }

  function deleteSubject(indexToDelete){
    const updatedSubjects = subjects.filter((item,index)=>{
      return index !== indexToDelete
    })
    setSubjects(updatedSubjects)
  }

  function generatePlan(){
    if(subjects.length === 0){
      alert("Please add subjects first")
      return
    }
    const plan = generateStudyPlan(subjects)
    setStudyPlan(plan)
  }

  return(
    <div className="bg-purple-900 min-h-screen flex justify-center pt-16">
      <div className="bg-purple-300 p-6 shadow-lg rounded-lg w-125px">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-950">
          AI Study Planner
        </h1>
        <StudyInput subject={subject} deadline={deadline} setSubject={setSubject} setDeadline={setDeadline} addSubject={addSubject}/>

        <SubjectList
          subjects={subjects}
          deleteSubject={deleteSubject}
        />
        <button
          onClick={generatePlan}
          className="bg-purple-700 text-white w-full py-2 rounded mt-4 hover:bg-purple-800"
        >
          Generate Study Plan
        </button>
        <StudyPlan
          studyPlan={studyPlan}
          clearPlan={()=>setStudyPlan("")}
        />
      </div>
    </div>
  )
}

export default App