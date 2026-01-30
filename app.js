let subject = "math";

function showView(id){
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function setSubject(s){
  subject = s;
  addMessage("System", "Switched to " + s.toUpperCase());
}

function send(){
  let msg = document.getElementById("msg").value;
  if(!msg) return;
  addMessage("You", msg);
  document.getElementById("msg").value = "";

  fetch("https://jolly-cell-68d2.blake1127mm.workers.dev", {
    method: "POST",
    body: JSON.stringify({ subject, message: msg })
  })
  .then(r => r.text())
  .then(reply => addMessage("Tutor", reply));
}

function addMessage(who,text){
  let box = document.getElementById("chatbox");
  let div = document.createElement("div");
  div.textContent = who + ": " + text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}
