import { formatDate } from "../utils/generatePlan"
function SubjectList({ subjects, deleteSubject }){
  return(
    <div className="mt-6">
      {subjects.map((item,index)=>(
        <div
          key={index}
          className="border border-purple-700 p-2 rounded mb-2 flex justify-between bg-purple-200"
        >
          <span className="font-medium">{item.subject}</span>
          <div className="flex gap-3 items-center">
            <span className="text-sm">
              {formatDate(item.deadline)}
            </span>
            <button
              onClick={()=>deleteSubject(index)}
              className="text-red-600 font-bold"
            >
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SubjectList