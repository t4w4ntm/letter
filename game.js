// ====== Data: โครงเนื้อเรื่องแบบ Letro Letter ======
// แต่ละ node คือ 1 หน้า/ฉาก
// แต่ละ choice มี letterCard = การ์ดข้อความที่เอาไปโชว์หน้า summary

const storyNodes = {
  start: {
    id: "start",
    title: "เช้าวันที่เดดไลน์ใกล้เข้ามา",
    text: "คุณตื่นขึ้นมาแล้วเห็นแจ้งเตือนงานที่ต้องส่งอีก 2 วัน ทั้งที่ยังทำไม่เสร็จเลย หัวใจเต้นแรงขึ้นเล็กน้อยพร้อมความคิดว่า “เดี๋ยวก่อนค่อยทำก็ได้มั้ง”",
    choices: [
      {
        label: "ลุกจากเตียงไปดูว่างานค้างอะไรบ้าง",
        nextId: "tasks",
        letterCard: {
          title: "กล้าที่จะมองงานที่ค้างอยู่",
          line: "ถึงตัวฉันที่เคยกลัวจะมองงานที่ดองไว้… แค่กล้าหันไปมองความจริง ก็ถือว่าเริ่มต้นได้ดีแล้ว"
        }
      },
      {
        label: "ปัดแจ้งเตือนทิ้ง แล้วแกล้งนอนเล่นต่ออีกนิด",
        nextId: "delayMorning",
        letterCard: {
          title: "การหนีปัญหาที่คุ้นเคย",
          line: "ถึงตัวฉันที่ชอบแกล้งทำเป็นไม่เห็นเดดไลน์… ฉันเข้าใจนะว่ามันไม่ใช่ความขี้เกียจอย่างเดียว แต่มันคือความกลัวว่าจะทำได้ไม่ดีพอ"
        }
      }
    ]
  },

  tasks: {
    id: "tasks",
    title: "กองงานบนโต๊ะ",
    text: "คุณนั่งลงที่โต๊ะ มองดูงานที่ต้องทำ ทั้งรีเสิร์ช สไลด์ พรีเซนต์ และรายงานเล่มใหญ่ มันดูเยอะจนไม่รู้จะเริ่มตรงไหนก่อนดี",
    choices: [
      {
        label: "แบ่งงานเป็นชิ้นเล็ก ๆ แล้วเขียนลงกระดาษโน้ต",
        nextId: "planFocus",
        letterCard: {
          title: "แตกงานให้จับต้องได้",
          line: "ถึงตัวฉันที่เคยรู้สึกว่างานมันใหญ่เกินไป… การแบ่งเป็นชิ้นเล็ก ๆ ไม่ได้ทำให้งานหายไป แต่ทำให้เราพอเดินเข้าไปใกล้มันได้ทีละก้าว"
        }
      },
      {
        label: "เปิด YouTube หาแรงบันดาลใจก่อนเริ่มทำ",
        nextId: "inspire",
        letterCard: {
          title: "การขอแรงใจจากโลกออนไลน์",
          line: "ถึงตัวฉันที่มักจะหาคลิปสร้างแรงบันดาลใจก่อนลงมือทำ… ไม่ผิดหรอกที่อยากได้เสียงจากใครสักคนมาบอกว่า “เธอทำได้นะ”"
        }
      }
    ]
  },

  delayMorning: {
    id: "delayMorning",
    title: "เช้าที่ไหลไปอย่างเงียบ ๆ",
    text: "คุณนอนเลื่อนฟีดไปเรื่อย ๆ จนเวลาล่วงเลยไปหนึ่งชั่วโมง ความรู้สึกผิดเริ่มโผล่มาเคาะประตูหัวใจเบา ๆ",
    choices: [
      {
        label: "ปิดหน้าจอ แล้วลุกไปที่โต๊ะทำงานเสียที",
        nextId: "planFocus",
        letterCard: {
          title: "กลับมาหาตัวเองทันเวลา",
          line: "ถึงตัวฉันที่มักจะรู้สึกผิดหลังจากไถมือถือ… การยอมรับแล้วลุกขึ้นมาเปลี่ยน ณ ตอนนี้ ยังดีกว่าปล่อยให้ผ่านไปทั้งวัน"
        }
      },
      {
        label: "ทำเป็นไม่สนใจ แล้วเลื่อนต่อไปอีกหน่อย",
        nextId: "panicLater",
        letterCard: {
          title: "ฉันรู้ว่าเธอยังไม่พร้อม",
          line: "ถึงตัวฉันที่ปล่อยเวลาไหลไปทั้งที่รู้ว่าเดดไลน์ไล่หลัง… ฉันรู้ว่าเธอไม่ได้ขี้เกียจเสมอไป แค่ยังไม่รู้จะเริ่มจากตรงไหน"
        }
      }
    ]
  },

  inspire: {
    id: "inspire",
    title: "คลิปสร้างแรงบันดาลใจ",
    text: "คุณเปิดคลิปเกี่ยวกับการจัดการเวลาและการเอาชนะตัวเอง ฟังแล้วก็รู้สึกอยากจะเปลี่ยน แต่ก็ยังมีเสียงเล็ก ๆ ในหัวบอกว่า “จะทำได้จริงเหรอ”",
    choices: [
      {
        label: "หยิบกระดาษขึ้นมา เขียนเป้าหมายวันนี้แบบง่าย ๆ",
        nextId: "planFocus",
        letterCard: {
          title: "เขียนลงกระดาษเพื่อยืนยันตัวเอง",
          line: "ถึงตัวฉันที่ลังเลว่าจะเปลี่ยนตัวเองได้ไหม… การเขียนเป้าหมายเล็ก ๆ ลงบนกระดาษ คือสัญญาอ่อนโยนที่เธอให้กับตัวเอง"
        }
      },
      {
        label: "เซฟคลิปไว้ แล้วเปิดคลิปถัดไปต่อ",
        nextId: "panicLater",
        letterCard: {
          title: "แรงบันดาลใจที่ยังไม่กลายเป็นการลงมือทำ",
          line: "ถึงตัวฉันที่เซฟคลิปดี ๆ ไว้เต็มเพลย์ลิสต์ แต่ยังไม่ได้เริ่มลงมือ… ไม่เป็นไรนะ อย่างน้อยใจเธอก็ยังอยากจะเปลี่ยน"
        }
      }
    ]
  },

  panicLater: {
    id: "panicLater",
    title: "เวลาที่เริ่มบีบ",
    text: "ผ่านไปอีกหลายชั่วโมงโดยแทบไม่ได้แตะงาน ความตึงเครียดยิ่งเพิ่มขึ้น จนเริ่มโทษตัวเองเบา ๆ ว่า “อีกแล้วสินะ”",
    choices: [
      {
        label: "ลองหยุดทุกอย่าง แล้วเขียนว่า “ตอนนี้ฉันรู้สึกยังไง”",
        nextId: "writeFeeling",
        letterCard: {
          title: "ฟังเสียงข้างในอย่างจริงจัง",
          line: "ถึงตัวฉันที่ชอบโทษตัวเองเวลาเริ่มช้า… การยอมเขียนความรู้สึกออกมา แสดงว่าเธอกล้าฟังหัวใจตัวเองมากขึ้นแล้ว"
        }
      },
      {
        label: "ฝืนทำงานทันทีโดยไม่คิดอะไร",
        nextId: "lateNight",
        letterCard: {
          title: "ทำต่อไปแม้ใจจะยังหนัก",
          line: "ถึงตัวฉันที่เลือกกัดฟันทำต่อทั้งที่ยังโทษตัวเอง… ฉันอยากให้รู้ว่าเธอพยายามมากกว่าที่ตัวเองคิดเสมอ"
        }
      }
    ]
  },

  planFocus: {
    id: "planFocus",
    title: "แผนเล็ก ๆ สำหรับวันนี้",
    text: "คุณเขียนเป้าหมายง่าย ๆ ว่า วันนี้จะทำให้เสร็จอย่างน้อยหนึ่งส่วน ไม่ต้องทำทุกอย่าง แต่ขอแค่ “ขยับเข้าใกล้เดดไลน์อย่างตั้งใจ”",
    choices: [
      {
        label: "เริ่มจากงานชิ้นที่ง่ายที่สุด เพื่อสร้างโมเมนตัม",
        nextId: "smallWin",
        letterCard: {
          title: "เริ่มจากก้าวเล็ก ๆ",
          line: "ถึงตัวฉันที่กลัวว่าก้าวแรกจะไม่สมบูรณ์… งานง่าย ๆ ที่เธอทำสำเร็จ คือหลักฐานว่าการเริ่มเล็ก ๆ ก็มีพลัง"
        }
      },
      {
        label: "เริ่มจากงานยากที่สุด เพราะอยากเคลียร์ให้จบ",
        nextId: "deepWork",
        letterCard: {
          title: "เลือกสู้กับงานยากตรงหน้า",
          line: "ถึงตัวฉันที่ตัดสินใจเริ่มจากงานยาก… ต่อให้รู้สึกโหด แต่นั่นแปลว่าเธอกล้าที่จะลองเผชิญหน้ากับสิ่งที่กลัวที่สุด"
        }
      }
    ]
  },

  smallWin: {
    id: "smallWin",
    title: "ชัยชนะเล็ก ๆ",
    text: "หลังจากลงมือทำไปสักพัก คุณปิดหนึ่ง task ได้สำเร็จ แม้มันจะไม่ใช่ส่วนที่ใหญ่ที่สุด แต่ก็ทำให้รู้สึกว่าตัวเอง “ไม่ได้ยืนอยู่ที่เดิม”",
    choices: [
      {
        label: "จดบันทึกว่าวันนี้ฉันทำอะไรสำเร็จไปแล้วบ้าง",
        nextId: "eveningReflect",
        letterCard: {
          title: "ให้เครดิตตัวเอง",
          line: "ถึงตัวฉันที่มักจะมองข้ามสิ่งที่ตัวเองทำได้… การจดว่าทำอะไรไปแล้ว คือจดหมายขอบคุณเล็ก ๆ ที่เธอเขียนถึงตัวเอง"
        }
      },
      {
        label: "ไม่ต้องจดอะไร เดี๋ยวค่อยนึกเอาทีหลัง",
        nextId: "eveningTired",
        letterCard: {
          title: "ความสำเร็จที่เธอมักจะลืมจำ",
          line: "ถึงตัวฉันที่บอกว่า “ไม่เป็นไร เดี๋ยวค่อยจำเอง”… ฉันอยากให้เธอรู้ว่า ทุกความพยายามของเธอมีคุณค่าพอจะถูกบันทึกไว้เสมอ"
        }
      }
    ]
  },

  deepWork: {
    id: "deepWork",
    title: "โหมดโฟกัสสุดตัว",
    text: "คุณปิดแจ้งเตือนทั้งหมด เปิดเพลงเบา ๆ แล้วจมอยู่กับงานยากที่สุด เวลาผ่านไปอย่างรวดเร็ว แต่ก็แลกมากับความล้าอย่างชัดเจน",
    choices: [
      {
        label: "พักสายตาและยืดตัวสัก 5 นาที",
        nextId: "eveningReflect",
        letterCard: {
          title: "ยอมให้ตัวเองได้พัก",
          line: "ถึงตัวฉันที่เคยคิดว่าต้องโฟกัสให้เต็ม 100% ตลอดเวลา… การพักไม่ใช่การถอยหนี แต่มันคือการเตรียมแรงสำหรับก้าวต่อไป"
        }
      },
      {
        label: "ฝืนทำต่อไปเพราะกลัวจะหลุดโฟกัส",
        nextId: "eveningTired",
        letterCard: {
          title: "ความดื้อที่เกิดจากความกลัว",
          line: "ถึงตัวฉันที่ฝืนทำต่อแม้สมองจะล้า… ฉันรู้ว่าเธอกลัวว่าจะไม่ทันเดดไลน์ แต่ร่างกายและหัวใจก็อยากให้เธอเบามือตัวเองลงกว่านี้หน่อย"
        }
      }
    ]
  },

  writeFeeling: {
    id: "writeFeeling",
    title: "เขียนถึงความรู้สึกตอนนี้",
    text: "คุณหยิบกระดาษขึ้นมาเขียนว่า “ตอนนี้ฉันรู้สึกยังไง” คำบางคำที่ไม่เคยยอมพูดกับใคร ค่อย ๆ ไหลออกมาบนหน้ากระดาษ",
    choices: [
      {
        label: "เขียนต่อว่า “ถ้าย้อนกลับไปบอกตัวเองในอดีตได้ ฉันอยากพูดว่าอะไร”",
        nextId: "preSummary",
        letterCard: {
          title: "เริ่มต้นจดหมายถึงตัวเอง",
          line: "ถึงตัวฉันในวันที่ยังไม่เข้าใจตัวเอง… ขอบคุณที่ยังยืนอยู่ตรงนี้ แม้จะล้มเหลวมาแล้วนับครั้งไม่ถ้วน"
        }
      },
      {
        label: "เก็บกระดาษไว้เฉย ๆ ยังไม่อยากคิดถึงอดีต",
        nextId: "preSummary",
        letterCard: {
          title: "เก็บคำพูดไว้รอวันที่พร้อม",
          line: "ถึงตัวฉันที่ยังไม่พร้อมจะมองย้อนกลับไป… ไม่เป็นไรเลย วันนี้แค่ยอมเขียนความรู้สึกปัจจุบันออกมา ก็ถือว่าเธอเดินหน้าไปอีกก้าวแล้ว"
        }
      }
    ]
  },

  eveningReflect: {
    id: "eveningReflect",
    title: "เย็นวันเดียวกัน",
    text: "เมื่อมองย้อนกลับไปในวันเดียวกัน คุณพบว่าตัวเองทำอะไรไปได้มากกว่าที่คิด แม้งานยังไม่เสร็จ แต่ก็ไม่ใช่ศูนย์เหมือนตอนเช้าอีกต่อไป",
    choices: [
      {
        label: "ลองเขียนโน้ตสั้น ๆ ว่า “ฉันภูมิใจอะไรในตัวเองวันนี้”",
        nextId: "preSummary",
        letterCard: {
          title: "มองตัวเองด้วยสายตาอ่อนโยน",
          line: "ถึงตัวฉันที่เพิ่งยอมบอกว่าภูมิใจในตัวเอง… ขอให้เธอเก็บความรู้สึกนี้ไว้ใช้ในวันที่เธอเผลอลืมคุณค่าของตัวเองอีกครั้ง"
        }
      },
      {
        label: "บอกตัวเองว่า “ก็แค่ทำหน้าที่ไปตามปกติเอง” แล้วปล่อยผ่าน",
        nextId: "preSummary",
        letterCard: {
          title: "ยังไม่กล้าพูดคำว่าภูมิใจ",
          line: "ถึงตัวฉันที่คิดว่าตัวเองก็แค่ทำสิ่งที่ควรทำ… แท้จริงแล้ว เธอทำได้ดีมากกว่านั้นเยอะเลย"
        }
      }
    ]
  },

  eveningTired: {
    id: "eveningTired",
    title: "ค่ำคืนแห่งความเหนื่อยล้า",
    text: "ร่างกายและหัวสมองของคุณเริ่มตื้อ แต่เดดไลน์ก็ยังไม่ขยับไปไหน คุณทั้งโล่งใจที่ทำไปบ้าง และผิดหวังที่ไปได้ไม่ไกลอย่างที่หวัง",
    choices: [
      {
        label: "ยอมพัก และบอกตัวเองว่า “พรุ่งนี้ค่อยสู้ต่อก็ได้”",
        nextId: "preSummary",
        letterCard: {
          title: "อนุญาตให้ตัวเองหยุด",
          line: "ถึงตัวฉันที่ยอมให้ตัวเองพักในวันที่ยังทำไม่เสร็จ… การหยุดหายใจลึก ๆ ไม่ได้ทำให้เธอล้มเหลว แต่มันทำให้เธอกลับมาสู้ได้นานขึ้น"
        }
      },
      {
        label: "ฝืนทำต่อจนดึก แล้วค่อยล้มตัวลงนอนแบบหมดแรง",
        nextId: "preSummary",
        letterCard: {
          title: "ฉันเห็นความพยายามของเธอ",
          line: "ถึงตัวฉันที่เข้านอนด้วยความรู้สึกผิด… ต่อให้วันนี้ไม่สมบูรณ์แบบ แต่ฉันอยากให้เธอรู้ว่าเธอพยายามเต็มที่ในแบบของเธอแล้ว"
        }
      }
    ]
  },

  preSummary: {
    id: "preSummary",
    title: "หลังเดดไลน์ผ่านไป",
    text: "ไม่ว่าผลลัพธ์ของงานจะออกมาแบบไหน เดดไลน์ก็ผ่านไปแล้ว เหลือเพียงความทรงจำถึงวันที่คุณทั้งหนี ทั้งสู้ ทั้งล้ม และทั้งลุกขึ้นมาใหม่",
    choices: [
      {
        label: "ลองมองย้อนกลับไปหาตัวเองในอดีตสักครั้ง",
        nextId: "summary",
        letterCard: {
          title: "เดินมาถึงจุดที่หันกลับไปมองได้แล้ว",
          line: "ถึงตัวฉันในทุกช่วงเวลาที่ผ่านมา… ขอบคุณที่ไม่เคยหยุดพยายาม แม้หลายครั้งจะรู้สึกว่าตัวเองไม่เก่งพอ"
        }
      }
    ]
  },

  // Node สรุป (หน้าสุดท้าย)
  summary: {
    id: "summary",
    title: "จดหมายถึงตัวฉันในอดีต",
    text: "", // จะไม่ใช้ text ตรงนี้ ใช้ renderSummary แทน
    choices: []
  }
};

// ====== State ======
const gameState = {
  currentNodeId: "start",
  path: [] // { nodeId, choiceLabel, letterCard }
};

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
    container.innerHTML = `<div class="story-card"><p>ไม่พบเนื้อเรื่องสำหรับ id: ${gameState.currentNodeId}</p></div>`;
    return;
  }

  container.innerHTML = `
    <div class="story-card">
      <div class="story-title">${node.title}</div>
      <div class="story-body">${node.text}</div>
      <div class="choices" id="choices"></div>
      <div class="story-footer">
        หน้าที่ ${gameState.path.length + 1}
      </div>
    </div>
  `;

  const cardElement = container.querySelector(".story-card");
  cardElement.classList.add("fade-in");

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
        <div class="summary-title">จดหมายยังว่างเปล่า</div>
        <div class="summary-subtitle">
          ดูเหมือนว่าวันนี้คุณยังไม่ได้เขียนอะไรถึงตัวเองในอดีตเลย ลองเล่นใหม่อีกครั้ง แล้วฟังเสียงข้างในให้ชัดขึ้นสักนิดดีไหม
        </div>
        <button class="restart-btn" onclick="restartGame()">เริ่มใหม่อีกครั้ง</button>
      </div>
    `;
    return;
  }

  const titleSummary = cards.map(card => `“${card.title}”`).join(" → ");
  const lineSummary = cards.map(card => card.line).join(" ");

  container.innerHTML = `
    <div class="story-card">
      <div class="summary-title">จดหมายที่คุณเขียนถึงตัวเอง</div>
      <div class="summary-subtitle">
        ข้อความต่อไปนี้คือบันทึกเดียวของเส้นทางที่คุณเลือกเดินในวันนี้
      </div>
      <div class="summary-card summary-card-single">
        <div class="summary-label">ถึงตัวฉันในอดีต</div>
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
  renderCurrentNode();
}

// ====== Start ======
document.addEventListener("DOMContentLoaded", () => {
  renderCurrentNode();
});
