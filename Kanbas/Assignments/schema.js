import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    course: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "CourseModel",
      required: true 
    },
    description: String,
    points: { type: Number, default: 100 },
    dueDate: Date,
    availableFromDate: Date,
    availableUntilDate: Date,
    submissionTypes: [String],
    state: {
      type: String,
      enum: ["DRAFT", "PUBLISHED"],
      default: "DRAFT"
    }
  },
  { collection: "assignments" }
);

export default assignmentSchema;