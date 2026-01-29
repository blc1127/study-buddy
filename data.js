export const SUBJECTS = [
  { id: "math", name: "Math" },
  { id: "ela", name: "ELA" },
  { id: "science", name: "Science" },
  { id: "history", name: "History" }
]

export const GRADES = [
  { id: "k-2", name: "Grades K to 2" },
  { id: "3-5", name: "Grades 3 to 5" },
  { id: "6-8", name: "Grades 6 to 8" },
  { id: "9-12", name: "Grades 9 to 12" }
]

export const LESSONS = [
  {
    id: "math-k2-addsub",
    subject: "math",
    gradeBand: "k-2",
    title: "Add and Subtract",
    summary: "Build number sense with simple strategies.",
    videoHint: "Add a short video link later",
    notes: [
      "Addition joins, subtraction separates",
      "Use number lines and ten frames",
      "Check subtraction with addition"
    ],
    examples: [
      "7 + 3 = 10",
      "10 - 6 = 4"
    ],
    quiz: [
      { prompt: "What is 6 + 4", choices: ["8", "10", "12", "14"], answerIndex: 1 },
      { prompt: "What is 9 - 5", choices: ["2", "3", "4", "5"], answerIndex: 2 }
    ]
  },
  {
    id: "math-35-fractions",
    subject: "math",
    gradeBand: "3-5",
    title: "Fractions",
    summary: "Understand parts of a whole and equivalent fractions.",
    videoHint: "Add a short video link later",
    notes: [
      "Numerator counts parts, denominator shows total equal parts",
      "Equivalent fractions represent the same amount",
      "Use visuals like fraction bars"
    ],
    examples: [
      "1/2 equals 2/4",
      "3/6 equals 1/2"
    ],
    quiz: [
      { prompt: "Which equals 1/2", choices: ["2/3", "3/6", "1/3", "4/5"], answerIndex: 1 },
      { prompt: "Top number is called", choices: ["Denominator", "Numerator", "Factor", "Product"], answerIndex: 1 }
    ]
  },
  {
    id: "math-68-expressions",
    subject: "math",
    gradeBand: "6-8",
    title: "Expressions and Equations",
    summary: "Write expressions and solve one step equations.",
    videoHint: "Add a short video link later",
    notes: [
      "Expression has no equals sign",
      "Equation has an equals sign",
      "Inverse operations isolate the variable"
    ],
    examples: [
      "5 more than x is x + 5",
      "Solve x + 7 = 12, x = 5"
    ],
    quiz: [
      { prompt: "Which is an equation", choices: ["x + 3", "7y", "x + 3 = 10", "4a"], answerIndex: 2 },
      { prompt: "Solve x - 5 = 9", choices: ["4", "14", "9", "5"], answerIndex: 1 }
    ]
  },
  {
    id: "math-912-algebra1-linear",
    subject: "math",
    gradeBand: "9-12",
    title: "Linear Equations",
    summary: "Solve and graph lines in slope intercept form.",
    videoHint: "Add a short video link later",
    notes: [
      "Slope intercept form is y = mx + b",
      "m is slope, b is y intercept",
      "Use two points to find slope"
    ],
    examples: [
      "If m = 2 and b = 1 then y = 2x + 1",
      "Slope between (0, 1) and (2, 5) is 2"
    ],
    quiz: [
      { prompt: "In y = 3x + 2, slope is", choices: ["2", "3", "5", "1"], answerIndex: 1 },
      { prompt: "y intercept in y = 3x + 2 is", choices: ["2", "3", "6", "1"], answerIndex: 0 }
    ]
  },

  {
    id: "ela-k2-phonics",
    subject: "ela",
    gradeBand: "k-2",
    title: "Phonics Basics",
    summary: "Match letters to sounds and blend words.",
    videoHint: "Add a short video link later",
    notes: [
      "Letters represent sounds",
      "Blend sounds to read words",
      "Practice with short vowel words"
    ],
    examples: [
      "c a t makes cat",
      "s u n makes sun"
    ],
    quiz: [
      { prompt: "Which is a short vowel word", choices: ["cake", "bike", "sun", "cube"], answerIndex: 2 },
      { prompt: "cat starts with", choices: ["t", "c", "a", "k"], answerIndex: 1 }
    ]
  },
  {
    id: "ela-35-mainidea",
    subject: "ela",
    gradeBand: "3-5",
    title: "Main Idea",
    summary: "Find what a passage is mostly about.",
    videoHint: "Add a short video link later",
    notes: [
      "Main idea is the big point",
      "Details support the main idea",
      "Titles and headings give clues"
    ],
    examples: [
      "If details talk about dolphins, main idea is dolphins",
      "Supporting details explain, prove, or describe"
    ],
    quiz: [
      { prompt: "Main idea is", choices: ["a random detail", "the big point", "a quote", "a title"], answerIndex: 1 },
      { prompt: "Details are used to", choices: ["confuse", "support", "hide", "skip"], answerIndex: 1 }
    ]
  },
  {
    id: "ela-68-argument",
    subject: "ela",
    gradeBand: "6-8",
    title: "Argument Writing",
    summary: "Write claims with reasons and evidence.",
    videoHint: "Add a short video link later",
    notes: [
      "Claim is your position",
      "Reasons explain why",
      "Evidence supports reasons, quotes or facts"
    ],
    examples: [
      "Claim: Later start times help students",
      "Evidence: better sleep supports focus"
    ],
    quiz: [
      { prompt: "A claim is", choices: ["your position", "a spelling error", "a title", "a joke"], answerIndex: 0 },
      { prompt: "Evidence includes", choices: ["opinions only", "quotes and facts", "nothing", "rumors"], answerIndex: 1 }
    ]
  },
  {
    id: "ela-912-rhetoric",
    subject: "ela",
    gradeBand: "9-12",
    title: "Rhetorical Appeals",
    summary: "Identify ethos, pathos, and logos.",
    videoHint: "Add a short video link later",
    notes: [
      "Ethos builds trust",
      "Pathos uses emotion",
      "Logos uses logic and facts"
    ],
    examples: [
      "Statistics are logos",
      "Personal story can be pathos"
    ],
    quiz: [
      { prompt: "Using facts and data is", choices: ["ethos", "pathos", "logos", "tone"], answerIndex: 2 },
      { prompt: "Building credibility is", choices: ["ethos", "pathos", "logos", "theme"], answerIndex: 0 }
    ]
  },

  {
    id: "science-k2-plants",
    subject: "science",
    gradeBand: "k-2",
    title: "Plants and Animals",
    summary: "Learn needs of living things.",
    videoHint: "Add a short video link later",
    notes: [
      "Living things need food, water, and space",
      "Plants need light and water",
      "Animals need food and shelter"
    ],
    examples: [
      "Plants make food with light",
      "Animals eat plants or other animals"
    ],
    quiz: [
      { prompt: "Plants need", choices: ["light", "phones", "cars", "noise"], answerIndex: 0 },
      { prompt: "Animals need", choices: ["food", "screens", "locks", "paper"], answerIndex: 0 }
    ]
  },
  {
    id: "science-35-matter",
    subject: "science",
    gradeBand: "3-5",
    title: "States of Matter",
    summary: "Solid, liquid, gas with examples.",
    videoHint: "Add a short video link later",
    notes: [
      "Solids keep shape",
      "Liquids take container shape",
      "Gases spread out"
    ],
    examples: [
      "Ice is solid",
      "Steam is gas"
    ],
    quiz: [
      { prompt: "Water vapor is", choices: ["solid", "liquid", "gas", "metal"], answerIndex: 2 },
      { prompt: "A solid", choices: ["spreads out", "keeps shape", "fills room", "evaporates"], answerIndex: 1 }
    ]
  },
  {
    id: "science-68-ecosystems",
    subject: "science",
    gradeBand: "6-8",
    title: "Ecosystems",
    summary: "Living and nonliving parts interact.",
    videoHint: "Add a short video link later",
    notes: [
      "Biotic means living",
      "Abiotic means nonliving",
      "Food chains show energy flow"
    ],
    examples: [
      "Sun to plants to rabbits to foxes",
      "Water and soil are abiotic"
    ],
    quiz: [
      { prompt: "Biotic means", choices: ["nonliving", "living", "metal", "invisible"], answerIndex: 1 },
      { prompt: "Energy starts from", choices: ["moon", "sun", "rocks", "cars"], answerIndex: 1 }
    ]
  },
  {
    id: "science-912-biology-cells",
    subject: "science",
    gradeBand: "9-12",
    title: "Cells Overview",
    summary: "Cell parts and functions.",
    videoHint: "Add a short video link later",
    notes: [
      "Nucleus controls cell activities",
      "Mitochondria release energy",
      "Cell membrane controls entry and exit"
    ],
    examples: [
      "Mitochondria are the energy site",
      "Membrane is a selective barrier"
    ],
    quiz: [
      { prompt: "Controls activities", choices: ["nucleus", "rib", "leaf", "stone"], answerIndex: 0 },
      { prompt: "Energy release site", choices: ["mitochondria", "skin", "paper", "ink"], answerIndex: 0 }
    ]
  },

  {
    id: "history-k2-community",
    subject: "history",
    gradeBand: "k-2",
    title: "Community and Rules",
    summary: "Learn roles in a community.",
    videoHint: "Add a short video link later",
    notes: [
      "Communities have helpers",
      "Rules keep people safe",
      "Choices affect others"
    ],
    examples: [
      "Teachers help students learn",
      "Crosswalk rules keep people safe"
    ],
    quiz: [
      { prompt: "Rules help keep people", choices: ["safe", "lost", "quiet forever", "invisible"], answerIndex: 0 },
      { prompt: "A community helper is", choices: ["teacher", "storm", "chair", "shadow"], answerIndex: 0 }
    ]
  },
  {
    id: "history-35-earlyus",
    subject: "history",
    gradeBand: "3-5",
    title: "Early America Basics",
    summary: "Colonies, trade, daily life.",
    videoHint: "Add a short video link later",
    notes: [
      "Colonies formed for trade and settlement",
      "People traded goods and services",
      "Geography shaped work and life"
    ],
    examples: [
      "Farming in rural areas",
      "Trade routes connected towns"
    ],
    quiz: [
      { prompt: "Trade is", choices: ["exchange of goods", "sleep", "painting only", "silence"], answerIndex: 0 },
      { prompt: "Geography affects", choices: ["daily life", "numbers", "fonts", "music only"], answerIndex: 0 }
    ]
  },
  {
    id: "history-68-ancient",
    subject: "history",
    gradeBand: "6-8",
    title: "Ancient Civilizations",
    summary: "River valleys and early societies.",
    videoHint: "Add a short video link later",
    notes: [
      "Rivers supported farming",
      "Cities formed near water",
      "Writing and laws shaped society"
    ],
    examples: [
      "Nile River supported Egypt",
      "Tigris and Euphrates supported Mesopotamia"
    ],
    quiz: [
      { prompt: "Rivers helped by", choices: ["supporting farming", "stopping rain", "turning to gold", "making snow"], answerIndex: 0 },
      { prompt: "A law is", choices: ["a rule", "a song", "a snack", "a toy"], answerIndex: 0 }
    ]
  },
  {
    id: "history-912-government",
    subject: "history",
    gradeBand: "9-12",
    title: "Government Basics",
    summary: "Branches and civic roles.",
    videoHint: "Add a short video link later",
    notes: [
      "Governments make and enforce rules",
      "Branches share power",
      "Citizens have rights and responsibilities"
    ],
    examples: [
      "Voting is a civic responsibility",
      "Laws aim to protect rights"
    ],
    quiz: [
      { prompt: "Government exists to", choices: ["make and enforce rules", "erase maps", "stop learning", "remove books"], answerIndex: 0 },
      { prompt: "A citizen responsibility is", choices: ["voting", "breaking rules", "hiding", "sleeping in class"], answerIndex: 0 }
    ]
  }
]
