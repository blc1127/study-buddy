const KEY = "studybuddy_progress_v1"

export function loadProgress() {
  const raw = localStorage.getItem(KEY)
  if (!raw) return { completed: {}, scores: {}, lastLessonId: "" }
  try {
    const parsed = JSON.parse(raw)
    return {
      completed: parsed.completed || {},
      scores: parsed.scores || {},
      lastLessonId: parsed.lastLessonId || ""
    }
  } catch {
    return { completed: {}, scores: {}, lastLessonId: "" }
  }
}

export function saveProgress(progress) {
  localStorage.setItem(KEY, JSON.stringify(progress))
}

export function markCompleted(lessonId) {
  const p = loadProgress()
  p.completed[lessonId] = true
  p.lastLessonId = lessonId
  saveProgress(p)
  return p
}

export function saveScore(lessonId, scorePercent) {
  const p = loadProgress()
  p.scores[lessonId] = scorePercent
  p.lastLessonId = lessonId
  saveProgress(p)
  return p
}
