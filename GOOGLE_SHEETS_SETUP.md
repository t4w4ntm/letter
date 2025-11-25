# วิธีตั้งค่า Google Sheets เพื่อเก็บข้อมูล

## ขั้นตอนที่ 1: สร้าง Google Sheet

1. ไปที่ [Google Sheets](https://sheets.google.com)
2. สร้างชีตใหม่
3. ตั้งชื่อ เช่น "Letro Letter Responses"
4. สร้าง Column Headers ดังนี้:
   - A: Timestamp (เวลา)
   - B: Name (ชื่อ)
   - C: Age (อายุ)
   - D: Title (หัวข้อจดหมาย)
   - E: Message (ข้อความจดหมาย)
   - F: Choices (ตัวเลือกที่เลือก)

## ขั้นตอนที่ 2: สร้าง Google Apps Script

1. ไปที่ [Google Apps Script](https://script.google.com)
2. สร้าง Project ใหม่
3. คัดลอก Code ต่อไปนี้ลงใน `Code.gs`:

```javascript
const SHEET_ID = "YOUR_SHEET_ID"; // เปลี่ยนเป็น ID ของ Sheet ของคุณ

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // เพิ่มข้อมูลแถวใหม่
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.age,
      data.title,
      data.message,
      data.choices
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data saved successfully"
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## ขั้นตอนที่ 3: หา Sheet ID

1. เปิด Google Sheet ของคุณ
2. ดู URL ที่อยู่ในแถบ address
3. Sheet ID อยู่ในตัวอย่างนี้:
   ```
   https://docs.google.com/spreadsheets/d/[SHEET_ID_HERE]/edit
   ```
4. คัดลอก SHEET_ID ไปใส่ใน Code.gs

## ขั้นตอนที่ 4: Deploy Google Apps Script

1. ใน Google Apps Script คลิก "Deploy" > "New deployment"
2. เลือกประเภท "Web app"
3. ตั้งค่า:
   - Execute as: บัญชี Google ของคุณ
   - Who has access: Anyone
4. คลิก "Deploy"
5. คัดลอก Deployment ID จาก URL ที่ปรากฏ

## ขั้นตอนที่ 5: อัปเดต game.js

1. เปิด `game.js`
2. ค้นหา `YOUR_DEPLOYMENT_ID` ในฟังก์ชัน `saveToGoogleSheets()`
3. เปลี่ยน URL ให้เหมือนกับ Deployment URL:
   ```javascript
   const googleSheetWebAppUrl = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/usurp";
   ```

## เสร็จแล้ว!

ตอนนี้เมื่อผู้เล่นเสร็จสิ้นเกม ข้อมูลของพวกเขาจะถูกบันทึกลงใน Google Sheets โดยอัตโนมัติ

## การแก้ไขปัญหา

- ถ้าข้อมูลไม่ถูกบันทึก ให้เปิด Browser Console (F12) แล้วดู error message
- ถ้าได้ CORS error อาจต้องตั้งค่า Access ใหม่ใน Google Apps Script
- ตรวจสอบให้แน่ใจว่า Google Sheet ID ถูกต้อง
