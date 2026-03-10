function StudyPlan({ studyPlan, clearPlan }){
  if(!studyPlan) return null
  return(
    <div className="mt-6 whitespace-pre-line text-sm bg-amber-50 p-3 rounded border">
      {studyPlan}
      <button
        onClick={clearPlan}
        className="bg-red-500 text-white w-full py-2 rounded mt-3"
      >
        Clear Plan
      </button>
    </div>
  )
}

export default StudyPlan