window.STUDY_DATA = {
  subjects: [
    { id: "math", name: "Math" },
    { id: "ela", name: "ELA" },
    { id: "science", name: "Science" },
    { id: "history", name: "History" }
  ],

  lessons: [
    {
      id: "alg1-linear",
      subject: "math",
      grade: "9",
      title: "Linear Equations",
      skills: ["one-step", "two-step", "inverse-operations"],
      intro: "Solve for x using inverse operations.",
      notes: [
        "An equation shows two equal values.",
        "Undo addition with subtraction, undo multiplication with division.",
        "Do the same operation to both sides."
      ],
      examples: [
        { prompt: "2x + 6 = 14", work: ["Subtract 6 from both sides", "2x = 8", "Divide by 2", "x = 4"] },
        { prompt: "x - 5 = 9", work: ["Add 5 to both sides", "x = 14"] }
      ],
      quiz: [
        { q: "Solve: 3x = 21", options: ["x = 6", "x = 7", "x = 9"], answer: 1 },
        { q: "Solve: x + 8 = 15", options: ["x = 7", "x = 8", "x = 23"], answer: 0 },
        { q: "Solve: 2x - 4 = 10", options: ["x = 3", "x = 7", "x = 10"], answer: 1 }
      ]
    },

    {
      id: "g7-expressions",
      subject: "math",
      grade: "7",
      title: "Expressions and Equations",
      skills: ["variables", "translate-words", "solve-basic"],
      intro: "Write expressions from words and solve simple equations.",
      notes: [
        "An expression has numbers, variables, and operations.",
        "An equation has an equals sign.",
        "Translate keywords, more than means plus, times means multiply."
      ],
      examples: [
        { prompt: "Write: 5 more than x", work: ["x + 5"] },
        { prompt: "Solve: x + 4 = 12", work: ["Subtract 4", "x = 8"] }
      ],
      quiz: [
        { q: "Write: 3 times y", options: ["y + 3", "3y", "y - 3"], answer: 1 },
        { q: "Solve: x - 7 = 3", options: ["x = 10", "x = 4", "x = -4"], answer: 0 },
        { q: "Write: 8 less than n", options: ["n - 8", "8 - n", "n + 8"], answer: 0 }
      ]
    },

    {
      id: "g6-evidence",
      subject: "ela",
      grade: "6",
      title: "Using Text Evidence",
      skills: ["quote", "paraphrase", "cite"],
      intro: "Support your answers using the text.",
      notes: [
        "Evidence means quoting or paraphrasing from the passage.",
        "Quotes use exact words, paraphrase uses your words.",
        "Explain how the evidence proves your point."
      ],
      examples: [
        { prompt: "Question: What is the theme?", work: ["Answer the theme", "Add one quote or paraphrase", "Explain how it supports the theme"] }
      ],
      quiz: [
        { q: "Text evidence is", options: ["a guess", "support from the text", "a summary only"], answer: 1 },
        { q: "A quote uses", options: ["exact words", "only opinions", "made up details"], answer: 0 },
        { q: "After evidence, you should", options: ["stop writing", "explain it", "change the topic"], answer: 1 }
      ]
    },

    {
      id: "g7-argument",
      subject: "ela",
      grade: "7",
      title: "Argument Writing",
      skills: ["claim", "reason", "evidence"],
      intro: "Write a claim and support it with reasons and evidence.",
      notes: [
        "A claim is what you believe.",
        "Reasons explain why the claim is true.",
        "Evidence proves your reasons using facts, examples, or text evidence."
      ],
      examples: [
        { prompt: "Claim: School should have clubs", work: ["Reason: Clubs build skills", "Evidence: Students practice teamwork and leadership", "Explain: This supports the reason"] }
      ],
      quiz: [
        { q: "A claim is", options: ["a fact only", "your position", "a question"], answer: 1 },
        { q: "Evidence is used to", options: ["prove a point", "add jokes", "avoid details"], answer: 0 },
        { q: "Best structure", options: ["claim, reason, evidence", "evidence only", "reason only"], answer: 0 }
      ]
    },

    {
      id: "g7-ecosystems",
      subject: "science",
      grade: "7",
      title: "Ecosystems",
      skills: ["biotic", "abiotic", "food-webs"],
      intro: "Learn how living and nonliving parts interact.",
      notes: [
        "Biotic means living, like plants and animals.",
        "Abiotic means nonliving, like water, soil, and sunlight.",
        "Energy moves through food chains and food webs."
      ],
      examples: [
        { prompt: "Identify parts of a pond ecosystem", work: ["Biotic: fish, algae", "Abiotic: water, sunlight", "Relationship: fish eat smaller organisms"] }
      ],
      quiz: [
        { q: "Biotic means", options: ["living", "nonliving", "plastic"], answer: 0 },
        { q: "Abiotic example", options: ["rabbit", "soil", "tree"], answer: 1 },
        { q: "Food webs show", options: ["one path only", "many feeding paths", "only plants"], answer: 1 }
      ]
    },

    {
      id: "g8-us-reform",
      subject: "history",
      grade: "8",
      title: "Reform Movements",
      skills: ["cause-effect", "compare", "timeline"],
      intro: "Explain why reform movements started and what changed.",
      notes: [
        "Reform movements aim to improve society.",
        "People organize, write, protest, and vote to create change.",
        "Cause and effect helps explain why movements begin."
      ],
      examples: [
        { prompt: "Cause and effect", work: ["Cause: unfair conditions", "Action: reform groups formed", "Effect: laws and attitudes changed"] }
      ],
      quiz: [
        { q: "A reform movement tries to", options: ["keep things the same", "improve society", "hide problems"], answer: 1 },
        { q: "Cause and effect means", options: ["random facts", "why something happened and what happened next", "opinions only"], answer: 1 },
        { q: "A timeline shows", options: ["events in order", "a map", "a poem"], answer: 0 }
      ]
    }
  ]
};
