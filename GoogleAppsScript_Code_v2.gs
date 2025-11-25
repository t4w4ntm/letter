// ===== Google Apps Script - Code.gs =====
// วางใน https://script.google.com

// ใส่ Google Sheet ID ของคุณตรงนี้
const SHEET_ID = "1TyFJCPqaqlGfgJdKqjIGq5PqP5q5q5q5q5"; // เปลี่ยนเป็น ID ของคุณ

function doPost(e) {
  try {
    // Get the request body
    const requestBody = e.postData.contents;
    const data = JSON.parse(requestBody);
    
    // Open the sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Get the current date/time in Bangkok timezone
    const now = new Date();
    const options = { timeZone: 'Asia/Bangkok', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timestamp = now.toLocaleString('th-TH', options);
    
    // Add the data as a new row
    sheet.appendRow([
      timestamp,
      data.name || "ไม่ระบุ",
      data.age || "ไม่ระบุ",
      data.title || "",
      data.message || "",
      data.choices || ""
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data saved successfully"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - สำหรับทดสอบ
function testPost() {
  const testData = {
    name: "ทดสอบ",
    age: "25",
    title: "การทดสอบ",
    message: "ข้อความทดสอบ",
    choices: '["choice1", "choice2"]'
  };
  
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(e);
  Logger.log(result.getContent());
}
