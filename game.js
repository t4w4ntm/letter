// ====== Data: โครงเนื้อเรื่องแบบ Letro Letter ======
// แต่ละ node คือ 1 หน้า/ฉาก
// แต่ละ choice มี letterCard = การ์ดข้อความที่เอาไปโชว์หน้า summary

const storyNodes = {
  start: {
    id: "start",
    title: "ใส่ชื่อ",
    text: "กรอกชื่อและอายุ ",
    choices: [
      {
        label: "เริ่มต้น",
        nextId: "startChoices"
      }
    ]
  },

  startChoices: {
    id: "startChoices",
    title: "xxxxxxx",
    text: "xxxxxxx",
    choices: [
      {
        label: "xxxxxxx",
        nextId: "tasks",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      },
      {
        label: "xxxxxxx",
        nextId: "delayMorning",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      }
    ]
  },

  tasks: {
    id: "tasks",
    title: "xxxxxxx",
    text: "xxxxxxx",
    choices: [
      {
        label: "xxxxxxx",
        nextId: "planFocus",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      },
      {
        label: "xxxxxxx",
        nextId: "inspire",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      }
    ]
  },

  delayMorning: {
    id: "delayMorning",
    title: "xxxxxxx",
    text: "xxxxxxx",
    choices: [
      {
        label: "xxxxxxx",
        nextId: "planFocus",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      },
      {
        label: "xxxxxxx",
        nextId: "panicLater",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      }
    ]
  },

  inspire: {
    id: "inspire",
    title: "xxxxxxx",
    text: "xxxxxxx",
    choices: [
      {
        label: "xxxxxxx",
        nextId: "planFocus",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      },
      {
        label: "xxxxxxx",
        nextId: "panicLater",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      }
    ]
  },

  panicLater: {
    id: "panicLater",
    title: "xxxxxxx",
    text: "xxxxxxx",
    choices: [
      {
        label: "xxxxxxx",
        nextId: "writeFeeling",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      },
      {
        label: "xxxxxxx",
        nextId: "lateNight",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      }
    ]
  },

  planFocus: {
    id: "planFocus",
    title: "xxxxxxx",
    text: "xxxxxxx",
    choices: [
      {
        label: "xxxxxxx",
        nextId: "smallWin",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      },
      {
        label: "xxxxxxx",
        nextId: "deepWork",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      }
    ]
  },

  smallWin: {
    id: "smallWin",
    title: "xxxxxxx",
    text: "xxxxxxx",
    choices: [
      {
        label: "xxxxxxx",
        nextId: "eveningReflect",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      },
      {
        label: "xxxxxxx",
        nextId: "eveningTired",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      }
    ]
  },

  deepWork: {
    id: "deepWork",
    title: "xxxxxxx",
    text: "xxxxxxx",
    choices: [
      {
        label: "xxxxxxx",
        nextId: "eveningReflect",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      },
      {
        label: "xxxxxxx",
        nextId: "eveningTired",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      }
    ]
  },

  writeFeeling: {
    id: "writeFeeling",
    title: "xxxxxxx",
    text: "xxxxxxx",
    choices: [
      {
        label: "xxxxxxx",
        nextId: "preSummary",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      },
      {
        label: "xxxxxxx",
        nextId: "preSummary",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      }
    ]
  },

  eveningReflect: {
    id: "eveningReflect",
    title: "xxxxxxx",
    text: "xxxxxxx",
    choices: [
      {
        label: "xxxxxxx",
        nextId: "preSummary",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      },
      {
        label: "xxxxxxx",
        nextId: "preSummary",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      }
    ]
  },

  eveningTired: {
    id: "eveningTired",
    title: "xxxxxxx",
    text: "xxxxxxx",
    choices: [
      {
        label: "xxxxxxx",
        nextId: "preSummary",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      },
      {
        label: "xxxxxxx",
        nextId: "preSummary",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      }
    ]
  },

  preSummary: {
    id: "preSummary",
    title: "xxxxxxx",
    text: "xxxxxxx",
    choices: [
      {
        label: "xxxxxxx",
        nextId: "summary",
        letterCard: {
          title: "xxxxxxx",
          line: "xxxxxxx"
        }
      }
    ]
  },

  // Node สรุป (หน้าสุดท้าย)
  summary: {
    id: "summary",
    title: "xxxxxxx",
    text: "", // จะไม่ใช้ text ตรงนี้ ใช้ renderSummary แทน
    choices: []
  }
};

// ====== State ======
const gameState = {
  currentNodeId: "start",
  path: [], // { nodeId, choiceLabel, letterCard }
  user: {
    name: "",
    age: ""
  }
};

function isStartFormValid() {
  const name = (gameState.user.name || "").trim();
  const ageString = (gameState.user.age || "").trim();
  if (!name) return false;
  if (!ageString) return false;
  const ageNumber = Number(ageString);
  if (!Number.isFinite(ageNumber)) return false;
  if (ageNumber < 1 || ageNumber > 120) return false;
  return true;
}

function updateStartFormState(container) {
  if (gameState.currentNodeId !== "start") return;
  const continueBtn = container.querySelector(".choice-btn");
  if (!continueBtn) return;
  const isValid = isStartFormValid();
  continueBtn.disabled = !isValid;
  continueBtn.classList.toggle("choice-btn-disabled", !isValid);
}

// ====== Utils ======
function $(selector) {
  return document.querySelector(selector);
}

// ====== Render Node ปัจจุบัน ======
function renderCurrentNode() {
  const container = $("#game-container");
  const node = storyNodes[gameState.currentNodeId];

  if (gameState.currentNodeId === "summary") {
    renderSummary();
    return;
  }

  if (!node) {
    container.innerHTML = `<div class="story-card"><p>xxxxxxx</p></div>`;
    return;
  }

  container.innerHTML = `
    <div class="story-card">
      <div class="story-title">${node.title}</div>
      <div class="story-body">${node.text}</div>
      ${
        gameState.currentNodeId === "start"
          ? `
        <div class="user-form" aria-label="xxxxxxx">
          <div class="form-row">
            <label for="user-name">xxxxxxx</label>
            <input id="user-name" type="text" inputmode="text" autocomplete="name" placeholder="xxxxxxx" />
          </div>
          <div class="form-row">
            <label for="user-age">xxxxxxx</label>
            <input id="user-age" type="number" inputmode="numeric" min="1" max="120" placeholder="xxxxxxx" />
          </div>
        </div>
      `
          : ""
      }
      <div class="choices" id="choices"></div>
      <div class="story-footer">
        xxxxxxx ${gameState.path.length + 1}
      </div>
    </div>
  `;

  const cardElement = container.querySelector(".story-card");
  cardElement.classList.add("fade-in");

  // Bind inputs on start page
  if (gameState.currentNodeId === "start") {
    const nameInput = document.getElementById("user-name");
    const ageInput = document.getElementById("user-age");
    if (nameInput) {
      nameInput.value = gameState.user.name || "";
      nameInput.addEventListener("input", e => {
        gameState.user.name = e.target.value;
        updateStartFormState(container);
      });
    }
    if (ageInput) {
      ageInput.value = gameState.user.age || "";
      ageInput.addEventListener("input", e => {
        gameState.user.age = e.target.value;
        updateStartFormState(container);
      });
    }

    updateStartFormState(container);
  }

  const choicesDiv = $("#choices");
  node.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.label;
    btn.onclick = () => handleChoice(node, choice);
    choicesDiv.appendChild(btn);
  });
}

// ====== เมื่อเลือกตัวเลือก ======
function handleChoice(node, choice) {
  const container = $("#game-container");
  const currentCard = container.querySelector(".story-card");

  if (node.id === "start" && !isStartFormValid()) {
    updateStartFormState(container);
    const nameInput = document.getElementById("user-name");
    const ageInput = document.getElementById("user-age");
    if (nameInput && !(gameState.user.name || "").trim()) {
      nameInput.focus();
    } else if (ageInput) {
      ageInput.focus();
    }
    return;
  }

  if (currentCard) {
    currentCard.classList.remove("fade-in");
    currentCard.classList.add("fade-out");
  }

  gameState.path.push({
    nodeId: node.id,
    choiceLabel: choice.label,
    letterCard: choice.letterCard || null
  });

  if (choice.nextId === "summary") {
    gameState.currentNodeId = "summary";
  } else {
    gameState.currentNodeId = choice.nextId;
  }

  const transitionDelay = 420;

  setTimeout(() => {
    renderCurrentNode();
  }, transitionDelay);
}

// ====== หน้าสรุป: การ์ดอวยพร/ข้อความถึงตัวเองในอดีต ======
function renderSummary() {
  const container = $("#game-container");

  // ดึงเฉพาะการ์ดที่มี letterCard จริง ๆ
  const cards = gameState.path
    .map(step => step.letterCard)
    .filter(Boolean);

  if (cards.length === 0) {
    container.innerHTML = `
      <div class="story-card">
        <div class="summary-title">xxxxxxx</div>
        <div class="summary-subtitle">
          xxxxxxx
        </div>
        <button class="restart-btn" onclick="restartGame()">xxxxxxx</button>
      </div>
    `;
    return;
  }

  const titleSummary = cards.map(card => `"${card.title}"`).join(" → ");
  const lineSummary = cards.map(card => card.line).join(" ");
  const nameLabel = (gameState.user.name || "").trim() || "xxxxxxx";
  const ageText = (gameState.user.age || "").trim();

  container.innerHTML = `
    <div class="story-card">
      <div class="summary-title">xxxxxxx</div>
      <div class="summary-subtitle">
        xxxxxxx
      </div>
      <div class="summary-card summary-card-single">
        <div class="summary-label">xxxxxxx ${nameLabel}${ageText ? ` (xxxxxxx ${ageText})` : ""} xxxxxxx</div>
        <div class="summary-message">
          <p>${titleSummary}</p>
          <p>${lineSummary}</p>
        </div>
      </div>
    </div>
  `;
}

// ====== เริ่มใหม่ ======
function restartGame() {
  gameState.currentNodeId = "start";
  gameState.path = [];
  gameState.user = { name: "", age: "" };
  renderCurrentNode();
}

// ====== Start ======
document.addEventListener("DOMContentLoaded", () => {
  renderCurrentNode();

  const introScreen = document.getElementById("intro-screen");
  const introButton = document.getElementById("intro-continue");

  if (introScreen && introButton) {
    introButton.addEventListener("click", () => {
      introScreen.classList.add("intro-hidden");
      setTimeout(() => {
        introScreen.remove();
      }, 600);
    });
  }
});
