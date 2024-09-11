import mongoose from 'mongoose';


const answerSchema = new mongoose.Schema({
    
    answer: { type: String, required: true },
    username: { type: String, required: true },
    Userid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    date: { type: Date, default: Date.now }
});

const questionSchema = new mongoose.Schema({
    Quetion: { type: String, required: true },
    Answer: [answerSchema]
});

const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);

export default Question;