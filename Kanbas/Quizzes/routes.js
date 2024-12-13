export default function QuizzesRoutes(app) {
    app.get("/api/quizzes/:quizId/questions", (req, res) => {
        const quizId = req.params.quizId;
        const questions = db.questions.filter((q) => q.quizId === quizId);
        res.send(questions);
    });
    // Create a new question
    app.post("/api/quizzes/:quizId/questions", (req, res) => {
        const quizId = req.params.quizId;
        const question = {
            ...req.body,
            _id: Date.now().toString(),
            quizId: quizId,
        };
        db.questions.push(question);
        res.send(question);
    });
    // Update a question
    app.put("/api/questions/:qid", (req, res) => {
        const { qid } = req.params;
        const questionIndex = db.questions.findIndex((q) => q._id === qid);
        db.questions[questionIndex] = {
            ...db.questions[questionIndex],
            ...req.body,
        };
        res.sendStatus(204);
    });
    
    // Delete a question
    app.delete("/api/questions/:qid", (req, res) => {
        const { qid } = req.params;
        db.questions = db.questions.filter((q) => q._id !== qid);
        res.sendStatus(200);
    });
}
