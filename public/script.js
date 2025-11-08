function showSection(id) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// NOTES
async function saveNote() {
  const content = document.getElementById("noteInput").value;
  await fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content })
  });
  document.getElementById("noteInput").value = "";
  loadNotes();
}

async function loadNotes() {
  const res = await fetch("/api/notes");
  const data = await res.json();
  document.getElementById("noteList").innerHTML = data.map(n => `<p>${n.content}</p>`).join("");
}
loadNotes();

// CHAT
async function sendMessage() {
  const input = document.getElementById("chatInput");
  const msg = input.value;
  input.value = "";
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });
  const data = await res.json();
  const box = document.getElementById("chatBox");
  box.innerHTML += `<div>You: ${msg}</div><div>${data.reply}</div>`;
}

// TRACKER
async function addTransaction() {
  const desc = document.getElementById("desc").value;
  const amount = document.getElementById("amount").value;
  const type = document.getElementById("type").value;
  await fetch("/api/expenses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ desc, amount, type })
  });
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}

// EVENTS
async function addEvent() {
  const title = document.getElementById("eventTitle").value;
  const date = document.getElementById("eventDate").value;
  await fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, date })
  });
}
