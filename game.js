// ====== Data: โครงเนื้อเรื่องแบบ Letro Letter (Flowchart Structure) ======

const storyNodes = {
  // --- Start & Intro ---
  start: {
    id: "start",
    type: "start",
    title: "ชื่อผู้เล่น",
    text: "กรอกชื่อผู้เล่น",
    nextId: "intro"
  },
  intro: {
    id: "intro",
    type: "story",
    title: "Intro",
    text: "Intro",
    nextId: "q1"
  },

  // --- Linear Questions (Q1 - Q3) ---
  q1: {
    id: "q1",
    type: "choice",
    title: "คำถามที่ 1",
    text: "คำถามที่ 1",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q2", letterCard: { title: "การ์ด 1-1", line: "ข้อความการ์ด 1-1" } },
      { label: "ตัวเลือกที่ 2", nextId: "q2", letterCard: { title: "การ์ด 1-2", line: "ข้อความการ์ด 1-2" } }
    ]
  },
  q2: {
    id: "q2",
    type: "choice",
    title: "คำถามที่ 2",
    text: "คำถามที่ 2",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q3", letterCard: { title: "การ์ด 2-1", line: "ข้อความการ์ด 2-1" } },
      { label: "ตัวเลือกที่ 2", nextId: "q3", letterCard: { title: "การ์ด 2-2", line: "ข้อความการ์ด 2-2" } }
    ]
  },
  q3: {
    id: "q3",
    type: "choice",
    title: "คำถามที่ 3",
    text: "คำถามที่ 3",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q4", letterCard: { title: "การ์ด 3-1", line: "ข้อความการ์ด 3-1" } },
      { label: "ตัวเลือกที่ 2", nextId: "q4", letterCard: { title: "การ์ด 3-2", line: "ข้อความการ์ด 3-2" } }
    ]
  },

  // --- Q4: Text Input ---
  q4: {
    id: "q4",
    type: "text_input",
    title: "คำถามที่ 4",
    text: "คำถามที่ 4 (พิมพ์ตอบ)",
    placeholder: "พิมพ์คำตอบ...",
    nextId: "story_bridge"
  },

  // --- Story Bridge & Branch Selection ---
  story_bridge: {
    id: "story_bridge",
    type: "story",
    title: "เนื้อเรื่อง",
    text: "เนื้อเรื่อง",
    nextId: "branch_select"
  },
  branch_select: {
    id: "branch_select",
    type: "choice",
    title: "เลือกเส้นทาง",
    text: "เลือกเส้นทาง",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q5_a" },
      { label: "ตัวเลือกที่ 2", nextId: "q5_b" },
      { label: "ตัวเลือกที่ 3", nextId: "q5_c" }
    ]
  },

  // --- Branch A ---
  q5_a: {
    id: "q5_a",
    type: "choice",
    title: "คำถามที่ 5",
    text: "คำถามที่ 5 (A)",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q6_a", letterCard: { title: "การ์ด 5A-1", line: "ข้อความ 5A-1" } },
      { label: "ตัวเลือกที่ 2", nextId: "q6_a", letterCard: { title: "การ์ด 5A-2", line: "ข้อความ 5A-2" } }
    ]
  },
  q6_a: {
    id: "q6_a",
    type: "choice",
    title: "คำถามที่ 6",
    text: "คำถามที่ 6 (A)",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q7_a", letterCard: { title: "การ์ด 6A-1", line: "ข้อความ 6A-1" } },
      { label: "ตัวเลือกที่ 2", nextId: "q7_a", letterCard: { title: "การ์ด 6A-2", line: "ข้อความ 6A-2" } }
    ]
  },
  q7_a: {
    id: "q7_a",
    type: "choice",
    title: "คำถามที่ 7",
    text: "คำถามที่ 7 (A)",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q8", letterCard: { title: "การ์ด 7A-1", line: "ข้อความ 7A-1" } },
      { label: "ตัวเลือกที่ 2", nextId: "q8", letterCard: { title: "การ์ด 7A-2", line: "ข้อความ 7A-2" } }
    ]
  },

  // --- Branch B ---
  q5_b: {
    id: "q5_b",
    type: "choice",
    title: "คำถามที่ 5",
    text: "คำถามที่ 5 (B)",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q6_b", letterCard: { title: "การ์ด 5B-1", line: "ข้อความ 5B-1" } },
      { label: "ตัวเลือกที่ 2", nextId: "q6_b", letterCard: { title: "การ์ด 5B-2", line: "ข้อความ 5B-2" } }
    ]
  },
  q6_b: {
    id: "q6_b",
    type: "choice",
    title: "คำถามที่ 6",
    text: "คำถามที่ 6 (B)",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q7_b", letterCard: { title: "การ์ด 6B-1", line: "ข้อความ 6B-1" } },
      { label: "ตัวเลือกที่ 2", nextId: "q7_b", letterCard: { title: "การ์ด 6B-2", line: "ข้อความ 6B-2" } }
    ]
  },
  q7_b: {
    id: "q7_b",
    type: "choice",
    title: "คำถามที่ 7",
    text: "คำถามที่ 7 (B)",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q8", letterCard: { title: "การ์ด 7B-1", line: "ข้อความ 7B-1" } },
      { label: "ตัวเลือกที่ 2", nextId: "q8", letterCard: { title: "การ์ด 7B-2", line: "ข้อความ 7B-2" } }
    ]
  },

  // --- Branch C ---
  q5_c: {
    id: "q5_c",
    type: "choice",
    title: "คำถามที่ 5",
    text: "คำถามที่ 5 (C)",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q6_c", letterCard: { title: "การ์ด 5C-1", line: "ข้อความ 5C-1" } },
      { label: "ตัวเลือกที่ 2", nextId: "q6_c", letterCard: { title: "การ์ด 5C-2", line: "ข้อความ 5C-2" } }
    ]
  },
  q6_c: {
    id: "q6_c",
    type: "choice",
    title: "คำถามที่ 6",
    text: "คำถามที่ 6 (C)",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q7_c", letterCard: { title: "การ์ด 6C-1", line: "ข้อความ 6C-1" } },
      { label: "ตัวเลือกที่ 2", nextId: "q7_c", letterCard: { title: "การ์ด 6C-2", line: "ข้อความ 6C-2" } }
    ]
  },
  q7_c: {
    id: "q7_c",
    type: "choice",
    title: "คำถามที่ 7",
    text: "คำถามที่ 7 (C)",
    choices: [
      { label: "ตัวเลือกที่ 1", nextId: "q8", letterCard: { title: "การ์ด 7C-1", line: "ข้อความ 7C-1" } },
      { label: "ตัวเลือกที่ 2", nextId: "q8", letterCard: { title: "การ์ด 7C-2", line: "ข้อความ 7C-2" } }
    ]
  },

  // --- Q8: Text Input (Merge) ---
  q8: {
    id: "q8",
    type: "text_input",
    title: "คำถามที่ 8",
    text: "คำถามที่ 8 (พิมพ์ตอบ)",
    placeholder: "พิมพ์คำตอบ...",
    nextId: "q9"
  },

  // --- Q9: Yes/No ---
  q9: {
    id: "q9",
    type: "choice",
    title: "คำถามที่ 9",
    text: "คำถามที่ 9",
    choices: [
      { label: "Yes", nextId: "result_happy", letterCard: { title: "การ์ด Yes", line: "ข้อความ Yes" } },
      { label: "No", nextId: "result_encourage", letterCard: { title: "การ์ด No", line: "ข้อความ No" } }
    ]
  },

  // --- Outcomes ---
  result_happy: {
    id: "result_happy",
    type: "story",
    title: "ดีใจ",
    text: "ดีใจ",
    nextId: "summary"
  },
  result_encourage: {
    id: "result_encourage",
    type: "story",
    title: "ให้กำลังใจ",
    text: "ให้กำลังใจ",
    nextId: "summary"
  },

  // --- Summary ---
  summary: {
    id: "summary",
    type: "summary",
    title: "สรุป",
    text: ""
  }
};

// ====== State ======
const gameState = {
  currentNodeId: "start",
  path: [], // { nodeId, choiceLabel, letterCard }
  user: {
    name: "",
    age: ""
  },
  textAnswers: {} // { q4: "...", q8: "..." }
};

// ====== Utils ======
function $(selector) {
  return document.querySelector(selector);
}

// ====== Render Logic ======
function renderCurrentNode() {
  const container = $("#game-container");
  const node = storyNodes[gameState.currentNodeId];

  if (!node) {
    container.innerHTML = `<div class="story-card"><p>Error: Node '${gameState.currentNodeId}' not found.</p></div>`;
    return;
  }

  if (node.type === "summary") {
    renderSummary();
    return;
  }

  // Common Card Structure
  let contentHtml = `
    <div class="story-card fade-in">
      <div class="story-title">${node.title}</div>
      <div class="story-body">${node.text}</div>
  `;

  // 1. Start Node (Form)
  if (node.type === "start") {
    contentHtml += `
      <div class="user-form">
        <div class="form-row">
          <label for="user-name">ชื่อ</label>
          <input id="user-name" type="text" placeholder="ชื่อ" value="${gameState.user.name}">
        </div>
        <div class="form-row">
          <label for="user-age">อายุ</label>
          <input id="user-age" type="number" placeholder="อายุ" value="${gameState.user.age}">
        </div>
      </div>
      <div class="choices" style="margin-top: 24px;">
        <button class="primary-btn" id="start-btn">ถัดไป</button>
      </div>
    `;
  }
  // 2. Text Input Node
  else if (node.type === "text_input") {
    contentHtml += `
      <div style="margin-top: 20px;">
        <textarea id="text-answer" class="game-textarea" placeholder="${node.placeholder || ''}"></textarea>
      </div>
      <div class="choices">
        <button class="primary-btn" onclick="handleTextSubmit('${node.id}')">ถัดไป</button>
      </div>
    `;
  }
  // 3. Story Node (Text only -> Next)
  else if (node.type === "story") {
    contentHtml += `
      <div class="choices" style="margin-top: 24px;">
        <button class="primary-btn" onclick="goToNext('${node.nextId}')">ถัดไป</button>
      </div>
    `;
  }
  // 4. Choice Node
  else if (node.type === "choice") {
    contentHtml += `<div class="choices" id="choices"></div>`;
  }

  contentHtml += `
    </div>
  `;

  container.innerHTML = contentHtml;

  // Post-render bindings
  if (node.type === "start") {
    const nameInput = document.getElementById("user-name");
    const ageInput = document.getElementById("user-age");
    const startBtn = document.getElementById("start-btn");

    const checkValid = () => {
      const valid = nameInput.value.trim() && ageInput.value.trim();
      startBtn.style.opacity = valid ? "1" : "0.5";
      startBtn.disabled = !valid;
    };

    nameInput.addEventListener("input", (e) => { gameState.user.name = e.target.value; checkValid(); });
    ageInput.addEventListener("input", (e) => { gameState.user.age = e.target.value; checkValid(); });
    startBtn.addEventListener("click", () => goToNext(node.nextId));
    checkValid();
  }
  else if (node.type === "choice") {
    const choicesDiv = $("#choices");
    node.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.textContent = choice.label;
      btn.onclick = () => handleChoice(node, choice);
      choicesDiv.appendChild(btn);
    });
  }
  else if (node.type === "text_input") {
    // Focus textarea
    setTimeout(() => {
      const ta = document.getElementById("text-answer");
      if (ta) ta.focus();
    }, 100);
  }
}

// ====== Handlers ======

function goToNext(nextId) {
  transitionToNode(nextId);
}

function handleChoice(node, choice) {
  // Record choice
  gameState.path.push({
    nodeId: node.id,
    choiceLabel: choice.label,
    letterCard: choice.letterCard || null
  });

  transitionToNode(choice.nextId);
}

function handleTextSubmit(nodeId) {
  const textarea = document.getElementById("text-answer");
  const value = textarea.value.trim();

  if (!value) {
    textarea.style.borderColor = "#ff4444";
    textarea.placeholder = "กรุณาพิมพ์ข้อความ...";
    return;
  }

  // Save answer
  gameState.textAnswers[nodeId] = value;

  // Logic to find nextId from current node
  const node = storyNodes[nodeId];
  transitionToNode(node.nextId);
}

function transitionToNode(nextId) {
  const container = $("#game-container");
  const card = container.querySelector(".story-card");
  if (card) {
    card.classList.remove("fade-in");
    card.classList.add("fade-out");
  }

  setTimeout(() => {
    gameState.currentNodeId = nextId;
    renderCurrentNode();
  }, 400);
}

// ====== Summary & Google Sheets ======

function renderSummary() {
  const container = $("#game-container");

  container.innerHTML = `
    <div class="story-card fade-in" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 300px;">
      <h1 style="font-size: 2rem; color: #333;">รูปการ์ด</h1>
      <div class="summary-actions" style="margin-top: 30px;">
        <button class="restart-btn" onclick="restartGame()">เริ่มใหม่อีกครั้ง</button>
      </div>
    </div>
  `;

  saveToGoogleSheets();
}

function saveToGoogleSheets() {
  // Prepare data
  const cards = gameState.path.map(p => p.letterCard).filter(Boolean);
  const data = {
    timestamp: new Date().toLocaleString('th-TH'),
    name: gameState.user.name,
    age: gameState.user.age,
    q4_distraction: gameState.textAnswers['q4'] || "",
    q8_selftalk: gameState.textAnswers['q8'] || "",
    cards_title: cards.map(c => c.title).join(" | "),
    cards_line: cards.map(c => c.line).join(" | "),
    path: gameState.path.map(p => p.nodeId).join(" -> ")
  };

  // URL เดิม
  const url = "https://script.google.com/macros/s/AKfycbwroaM8NsNKxdQJL7vSGuevLJeKios3reEBOI21ZcZDPZwnlMgK49fP3054ReJFY8COpg/exec";

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data)
  }).catch(err => console.error("Save error:", err));
}

function restartGame() {
  gameState.currentNodeId = "start";
  gameState.path = [];
  gameState.textAnswers = {};
  gameState.user = { name: "", age: "" };
  renderCurrentNode();
}

// ====== Init ======
document.addEventListener("DOMContentLoaded", () => {
  // Intro screen logic
  const introScreen = document.getElementById("intro-screen");
  const introBtn = document.getElementById("intro-continue");
  if (introBtn && introScreen) {
    introBtn.addEventListener("click", () => {
      introScreen.classList.add("intro-hidden");
      setTimeout(() => introScreen.remove(), 600);
    });
  }

  renderCurrentNode();
});
