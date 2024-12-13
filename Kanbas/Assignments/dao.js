import model from "./model.js";

export const createAssignment = async (assignment) => {
  const newAssignment = await model.create(assignment);
  return newAssignment;
};

export const findAssignmentsForCourse = async (courseId) => {
  const assignments = await model.find({ course: courseId });
  return assignments;
};

export const findAssignmentById = async (assignmentId) => {
  const assignment = await model.findById(assignmentId);
  return assignment;
};

export const updateAssignment = async (assignmentId, assignment) => {
  const status = await model.updateOne(
    { _id: assignmentId },
    { $set: assignment }
  );
  return status;
};

export const deleteAssignment = async (assignmentId) => {
  const status = await model.deleteOne({ _id: assignmentId });
  return status;
};