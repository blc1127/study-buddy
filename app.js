import { SUBJECTS, GRADES, LESSONS } from "./data.js"
import { loadProgress, saveProgress } from "./progress.js"
import { initTimer } from "./tools.js"

const state = {
  subject: "math",
  gradeBand: "6-8",
  query: "",
  sort: "recommended"
}

function byId(id) {
  return document.getElementById(id)
}

function setActiveNav(containerId, activeId, prefix) {
  const el = byId(containerId)
  if (!el) return
  const links = el.querySelectorAll("a")
  links.forEach(a => {
    const isActive = a.dataset.value === activeId
    if (isActive) a.classList.add("active")
    else a.classList.remove("active")
  })
}

function renderNav() {
  const subjectNav = byId("subjectNav")
  const gradeNav = byId("gradeNav")

  subjectNav.innerHTML = ""
  SUBJECTS.forEach(s => {
    const a = document.createElement("a")
    a.href = "#"
    a.textContent = s.name
    a.dataset.value = s.id
    a.addEventListener("click", (e) => {
      e.preventDefault()
      state.subject = s.id
      setActiveNav("subjectNav", state.subject)
      renderAll()
    })
    subjectNav.appendChild(a)
  })

  gradeNav.innerHTML = ""
  GRADES.forEach(g => {
    const a = document.createElement("a")
    a.href = "#"
    a.textContent = g.name
    a.dataset.value = g.id
    a.addEventListener("click", (e) => {
      e.preventDefault()
      state.gradeBand = g.id
      setActiveNav("gradeNav", state.gradeBand)
      renderAll()
    })
    gradeNav.appendChild(a)
  })

  setActiveNav("subjectNav", state.subject)
  setActiveNav("gradeNav", state.gradeBand)
}

function computeProgress(progress) {
  const ids = LESSONS.map(l => l.id)
  const doneCount = ids.filter(id => progress.completed[id]).length
  const total = ids.length
  const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100)
  return { doneCount, total, percent }
}

function renderProgress() {
  const p = loadProgress()
  const { doneCount, total, percent } = computeProgress(p)

  const progressText = byId("progressText")
  const fill = byId("progressFill")
  const continueText = byId("continueText")
  const continueBtn = byId("continueBtn")

  progressText.textContent = "Progress: " + String(doneCount) + " of " + String(total) + " lessons, " + String(percent) + "%"
  fill.style.width = String(percent) + "%"

  const last = p.lastLessonId || ""
  if (last) {
    const lesson = LESSONS.find(l => l.id === last)
    continueText.textContent = "Last lesson: " + (lesson ? lesson.title : last)
    continueBtn.href = "lesson.html?id=" + encodeURIComponent(last)
  } else {
    continueText.textContent = "No lessons completed yet."
    const first = LESSONS[0] ? LESSONS[0].id : ""
    continueBtn.href = "lesson.html?id=" + encodeURIComponent(first)
  }

  const resetBtn = byId("resetProgress")
  resetBtn.onclick = () => {
    saveProgress({ completed: {}, scores: {}, lastLessonId: "" })
    renderAll()
  }
}

function lessonMatches(l) {
  const subjectMatch = l.subject === state.subject
  const gradeMatch = l.gradeBand === state.gradeBand
  const q = state.query.trim().toLowerCase()
  const searchMatch = q.length === 0
    || l.title.toLowerCase().includes(q)
    || l.summary.toLowerCase().includes(q)
  return subjectMatch && gradeMatch && searchMatch
}

function sortLessons(list, progress) {
  const withMeta = list.map(l => {
    const done = !!progress.completed[l.id]
    const score = typeof progress.scores[l.id] === "number" ? progress.scores[l.id] : -1
    return { l, done, score }
  })

  if (state.sort === "title") {
    withMeta.sort((a, b) => a.l.title.localeCompare(b.l.title))
  } else if (state.sort === "grade") {
    withMeta.sort((a, b) => a.l.gradeBand.localeCompare(b.l.gradeBand))
  } else if (state.sort === "subject") {
    withMeta.sort((a, b) => a.l.subject.localeCompare(b.l.subject))
  } else {
    withMeta.sort((a, b) => {
      if (a.done !== b.done) return a.done ? 1 : -1
      return b.score - a.score
    })
  }

  return withMeta.map(x => x.l)
}

function labelSubject(id) {
  const s = SUBJECTS.find(x => x.id === id)
  return s ? s.name : id
}

function labelGrade(id) {
  const g = GRADES.find(x => x.id === id)
  return g ? g.name : id
}

function renderLessons() {
  const grid = byId("lessonGrid")
  const progress = loadProgress()

  const filtered = LESSONS.filter(lessonMatches)
  const sorted = sortLessons(filtered, progress)

  grid.innerHTML = ""

  if (sorted.length === 0) {
    const div = document.createElement("div")
    div.className = "muted"
    div.textContent = "No lessons found for this filter."
    grid.appendChild(div)
    return
  }

  sorted.forEach(l => {
    const done = !!progress.completed[l.id]
    const score = typeof progress.scores[l.id] === "number" ? progress.scores[l.id] : null

    const card = document.createElement("div")
    card.className = "card"

    const top = document.createElement("div")
    top.className = "card-top"

    const pill1 = document.createElement("div")
    pill1.className = "pill"
    pill1.textContent = labelSubject(l.subject)

    const pill2 = document.createElement("div")
    pill2.className = "pill"
    pill2.textContent = labelGrade(l.gradeBand)

    const pill3 = document.createElement("div")
    pill3.className = "pill"
    pill3.textContent = done ? "Completed" : "Not completed"

    top.appendChild(pill1)
    top.appendChild(pill2)
    top.appendChild(pill3)

    const title = document.createElement("div")
    title.className = "title"
    title.textContent = l.title

    const meta = document.createElement("div")
    meta.className = "meta"
    meta.textContent = l.summary + (score === null ? "" : " Score: " + String(score) + "%")

    const actions = document.createElement("div")
    actions.className = "card-actions"

    const start = documentLnk("Start", "lesson.html?id=" + encodeURIComponent(l.id), true)
    const review = documentLnk("Review", "lesson.html?id=" + encodeURIComponent(l.id), false)

    actions.appendChild(start)
    actions.appendChild(review)

    card.appendChild(top)
    card.appendChild(title)
    card.appendChild(meta)
    card.appendChild(actions)

    grid.appendChild(card)
  })
}

function documentLnk(text, href, primary) {
  const a = document.createElement("a")
  a.className = primary ? "btn primary" : "btn"
  a.href = href
  a.textContent = text
  return a
}

function wireInputs() {
  const search = byId("search")
  const sort = byId("sort")

  search.addEventListener("input", () => {
    state.query = search.value
    renderLessons()
  })

  sort.addEventListener("change", () => {
    state.sort = sort.value
    renderLessons()
  })
}

function renderAll() {
  renderProgress()
  renderLessons()
}

renderNav()
wireInputs()
initTimer()
renderAll()
