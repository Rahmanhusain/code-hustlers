import connectDB from "@/DB/Dbconnection";
import Question from "@/Models/QuetionModel";
import { NextResponse } from "next/server";


export async function POST(req) {
  await connectDB();
  try {
    const { Quetionid,answeredit,answerId} = await req.json();
    const question = await Question.findById(Quetionid);
        if (!question) {
            console.error('Question not found');
            return;
        }

        // Find the specific answer by ID within the Answer array
        const answer = question.Answer.id(answerId);
        if (!answer) {
            console.error('Answer not found');
            return;
        }

        // Update the fields of the answer
        answer.answer = answeredit;
        // Save the updated question document
        const updatedQuestion = await question.save();
        console.log('Updated question:', updatedQuestion);
  } catch (error) {
    console.error("Error inserting question:", error);
  }
  return NextResponse.json({ message: "Hello World", status: 201 });
}


export async function DELETE(req) {
  await connectDB();
  try {
    const { Quetionid, answerId } = await req.json();
    const question = await Question.findById(Quetionid);
    if (!question) {
      console.error('Question not found');
      return NextResponse.json({ message: "Question not found", status: 404 });
    }

    // Remove the specific answer by ID within the Answer array
    question.Answer.pull({ _id: answerId });
    // Save the updated question document
    const updatedQuestion = await question.save();
    console.log('Updated question after deletion:', updatedQuestion);

    return NextResponse.json({ message: "Answer deleted successfully", status: 200 });
  } catch (error) {
    console.error("Error deleting answer:", error);
    return NextResponse.json({ message: "Error deleting answer", status: 500 });
  }
}