import { NextResponse } from "next/server";
import connectDB from "@/DB/Dbconnection";
import Question from "@/Models/QuetionModel";
import mongoose from "mongoose";
import User from "@/Models/userSchema";

export async function POST(req) {
  await connectDB();
  try {
    const {Quetion,Answer}= await req.json();
    const newQuestion = new Question({Quetion:Quetion, Answer:Answer});

    const savedQuestion = await newQuestion.save();
    console.log("Question inserted successfully:", savedQuestion);
   
  } catch (error) {
    console.error("Error inserting question:", error);
  }
  return NextResponse.json({ message: "Hello World", status: 201 });
}

export async function PUT(req) {
  await connectDB();
  try {
    const { questionId, Answer } = await req.json();

    if (!mongoose.Types.ObjectId.isValid(questionId)) {
      return NextResponse.json({ message: "Invalid question ID", status: 400 });
    }

    const question = await Question.findById(questionId);

    if (!question) {
      return NextResponse.json({ message: "Question not found", status: 404 });
    }

    question.Answer.push({
      answer: Answer.answer,
      username: Answer.username,
      Userid: Answer.Userid
  });

    const updatedQuestion = await question.save();
    console.log("Answer added successfully:", updatedQuestion);

    return NextResponse.json({ message: "Answer added successfully", status: 200 });
  } catch (error) {
    console.error("Error adding answer:", error);
    return NextResponse.json({ message: "Error adding answer", status: 500 });
  }
}