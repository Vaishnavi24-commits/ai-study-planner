/*
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
})


export async function generateStudyPlanAI(subjects){

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `
    Create a 5 day study plan for these subjects:
    ${JSON.stringify(subjects)}
    Return day wise tasks.
    `
  })

  return response.text
}
*/
export function formatDate(date){
  return new Date(date).toLocaleDateString()
}

export function generateStudyPlan(subjects){

  let plan = "Smart Study Plan\n\n"

  subjects.forEach((item,index)=>{

    plan += `Day ${index + 1}\n`
    plan += `Subject: ${item.subject}\n`
    plan += `• Study core concepts\n`
    plan += `• Practice important questions\n`
    plan += `• Revise notes\n`
    plan += `Deadline: ${formatDate(item.deadline)}\n\n`

  })

  plan += `Final Day\n`
  plan += `• Revise all subjects\n`
  plan += `• Practice weak topics\n`
  plan += `• Attempt mock tests\n`

  return plan
}