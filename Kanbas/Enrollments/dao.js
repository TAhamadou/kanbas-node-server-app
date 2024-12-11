import Database from "../Database/index.js";

export const enrollUserInCourse = (userId, courseId) => {
  const enrollment = {
    _id: new Date().getTime().toString(),
    user: userId,
    course: courseId,
  };
  Database.enrollments.push(enrollment);
  return enrollment;
};

export const unenrollStudentFromCourse = (userId, courseId) => {
  Database.enrollments = Database.enrollments.filter(
    (e) => !(e.user === userId && e.course === courseId)
  );
  return { status: "OK" };
};

export const findEnrollmentsByUser = (userId) => {
  return Database.enrollments.filter((e) => e.user === userId);
};

export const findEnrollmentsByCourse = (courseId) => {
  return Database.enrollments.filter((e) => e.course === courseId);
};