Form.create!([
  {name: "Test form 1"},
  {name: "Test form 2"},
  {name: "Test form 3"},
  {name: "Test form 4"},
])

Question.create!([
  {content: "What is a duck?", question_type: "text", form_id: 1},
  {content: "This is a real question?", question_type: "text", form_id: 1},
  {content: "What time is it?", question_type: "text", form_id: 1},
  {content: "How are you really?", question_type: "text", form_id: 1},
  {content: "Are you 9?", question_type: "text", form_id: 1},
  {content: "How was this course mr?", question_type: "text", form_id: 1},
  {content: "Flannelde", question_type: "text", form_id: 1},
  {content: "How good was this class?", question_type: "text", form_id: 2},
  {content: "How good was this class really?", question_type: "text", form_id: 2},
  {content: "Boosh", question_type: "text", form_id: 2},
  {content: "What are I now?", question_type: "text", form_id: 3},
  {content: "This is new question with an instructor ID", question_type: "text", form_id: 3},
  {content: "Testd", question_type: "text", form_id: 3},
  {content: "Still workers?", question_type: "text", form_id: 3},
  {content: "This is a tester?", question_type: "text", form_id: 3},
  {content: "Fun?", question_type: "text", form_id: 3},
  {content: "This is a type question 1", question_type: "text", form_id: 4},
  {content: "type questions 2", question_type: "text", form_id: 4},
  {content: "type questions 3", question_type: "text", form_id: 4},
  {content: "This is for the demo recording?", question_type: "text", form_id: 4}
])
