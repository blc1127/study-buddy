const lessons = {
  // SCIENCE
  "g7-ecosystems": {
    title: "Ecosystems",
    grade: "Grade 7 Science",
    intro: "Learn how living and nonliving parts work together.",
    notes: "An ecosystem includes plants, animals, water, soil, and climate. All parts depend on each other for survival.",
    practice: [
      "What is an ecosystem?",
      "Name two living and two nonliving parts.",
      "Why do animals depend on plants?"
    ]
  },

  "g6-cells": {
    title: "Cells and Organisms",
    grade: "Grade 6 Science",
    intro: "Understand the building blocks of life.",
    notes: "Cells are the smallest units of life. Groups of cells form tissues, organs, and systems.",
    practice: [
      "What is a cell?",
      "What do tissues form?",
      "Name one type of cell."
    ]
  },

  // MATH
  "alg1-linear": {
    title: "Linear Equations",
    grade: "Algebra I",
    intro: "Solve equations using inverse operations.",
    notes: "To solve for a variable, undo each operation in reverse order.",
    practice: [
      "Solve: 2x + 6 = 14",
      "Solve: x - 5 = 9",
      "Solve: 3x = 21"
    ]
  },

  "g7-expressions": {
    title: "Expressions and Equations",
    grade: "Grade 7 Math",
    intro: "Learn to write and solve expressions.",
    notes: "An expression has numbers and variables. An equation shows two equal values.",
    practice: [
      "Write an expression for 5 more than x.",
      "Solve: x + 4 = 12",
      "Solve: 2x = 10"
    ]
  },

  // ELA
  "g7-argument": {
    title: "Argument Writing",
    grade: "Grade 7 ELA",
    intro: "Learn to write strong arguments.",
    notes: "An argument includes a claim, reasons, and evidence.",
    practice: [
      "Write a claim about school uniforms.",
      "Give one reason to support your claim.",
      "Name one type of evidence."
    ]
  },

  "g6-evidence": {
    title: "Using Text Evidence",
    grade: "Grade 6 ELA",
    intro: "Support ideas using the text.",
    notes: "Text evidence means quoting or paraphrasing from a passage.",
    practice: [
      "What is text evidence?",
      "Why do writers use evidence?",
      "Find one example from a story."
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (lessons[id]) {
  document.getElementById("lessonTitle").textContent = lessons[id].title;
  document.getElementById("lessonGrade").textContent = lessons[id].grade;
  document.getElementById("lessonIntro").textContent = lessons[id].intro;
  document.getElementById("lessonNotes").textContent = lessons[id].notes;

  const list = document.getElementById("lessonPractice");
  lessons[id].practice.forEach(q => {
    const li = document.createElement("li");
    li.textContent = q;
    list.appendChild(li);
  });
}
