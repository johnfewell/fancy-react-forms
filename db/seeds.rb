Form.create!([
  {name: "Test form 1"},
  {name: "Test form 2"},
  {name: "Test form 3"},
  {name: "Test form 4"},
])

Question.create!([
  {content: "What is a duck?", question_type: "text"},
  {content: "This is a real question?", question_type: "text"},
  {content: "What time is it?", question_type: "text"},
  {content: "How are you really?", question_type: "text"},
  {content: "Are you 9?", question_type: "text"},
  {content: "How was this course mr?", question_type: "text"},
  {content: "Flannelde", question_type: "text"},
  {content: "How good was this class?", question_type: "text"},
  {content: "How good was this class really?", question_type: "text"},
  {content: "Boosh", question_type: "text"},
  {content: "What are I now?", question_type: "text"},
  {content: "This is new question with an instructor ID", question_type: "text"},
  {content: "Testd", question_type: "text"},
  {content: "Still workers?", question_type: "text"},
  {content: "This is a tester?", question_type: "text"},
  {content: "Fun?", question_type: "text"},
  {content: "This is a type question 1", question_type: "text"},
  {content: "type questions 2", question_type: "text"},
  {content: "type questions 3", question_type: "text"},
  {content: "This is for the demo recording?", question_type: "text"}
])

FormQuestion.create!([
  {evaluation_id: 1, question_id: 2},
  {evaluation_id: 1, question_id: 1},
  {evaluation_id: 1, question_id: 3},
  {evaluation_id: 1, question_id: 4},
  {evaluation_id: 3, question_id: 1},
  {evaluation_id: 4, question_id: 1},
  {evaluation_id: 4, question_id: 2},
  {evaluation_id: 3, question_id: 6},
  {evaluation_id: 4, question_id: 1},
])
