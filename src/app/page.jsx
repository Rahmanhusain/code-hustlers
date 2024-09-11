import Banner from "@/components/banner";
import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";
import CoverPage from "@/components/CoverPage";
import Image from "next/image";
import MentorProfilePage from "./mentorProfile/MentorProfilePage";
import QuestionAnswerPage from "./askQuestion/QuestionAnswerPage";
import AppointmentScheduler from "./appointmentScheduler/AppointmentScheduler";
import MentorsList from "./mentorsList/MentorsList";
import StudentQuestionUpload from "./studentQuestionUpload/StudentQuestionUpload";

export default function Home() {
  return (
   <>

   <Navbar/>
   {/* <CoverPage/> */}
   {/* <MentorProfilePage/> */}

   {/* <QuestionAnswerPage/> */}

   {/* <AppointmentScheduler/> */}

   {/* <MentorsList/> */}
   <StudentQuestionUpload/>
   </>
  );
}
