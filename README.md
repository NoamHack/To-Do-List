# אפליקציית ניהול מטלות ב-Node.js 🥇🥇🥇

## מבוא:
תיעוד זה מספק את ההוראות וההסברים הנחוצים למפתחים להקים ולהפעיל מופע מקומי של אפליקציית ניהול מטלות שנבנתה באמצעות Node.js עם Express. הקוד מגדיר API ליצירה, רישום ומחיקת מטלות.

## דרישות מערכת:
- Node.js שמותקן על המחשב.
- NPM (Node Package Manager) לניהול תלויות.

## הקמת סביבת פיתוח מקומית:

   **התקנת Node.js ו-NPM**: וודא ש-Node.js ו-NPM מותקנים על המחשב שלך. אם לא, הורד והתקן אותם מהאתר הרשמי של Node.js.

   **הקמת הפרויקט**: צור ספרייה חדשה עבור הפרויקט והעתק את הקוד המסופק לתוך קובץ בשם `app.js`.

   **התקנת תלויות**: פתח טרמינל בספריית הפרויקט שלך והרץ `npm init -y` כדי ליצור קובץ `package.json`. לאחר מכן התקן את Express על ידי הרצת `npm install express`.

   **הפעלת האפליקציה**: הרץ את הפקודה `node app.js` כדי להפעיל את שרת ה-Express. גש לאפליקציה דרך דפדפן אינטרנט ב-`http://localhost:2000`.

## הבנת הקוד:

**אתחול וניתוב:**
  האפליקציה מאתחלת שרת Express וקובעת אותו להאזנה על פורט 2000.
  היא כוללת נתיבים לניהול מטלות:
  - POST `/assignment`: מקבלת מטלות חדשות ומוסיפה אותן למערך.
  - GET `/assignment`: מציג את לוח המטלות כדף HTML.
  - DELETE `/assignment/:index`: מוחקת מטלה לפי האינדקס שלה במערך.

**אינטראקציה קדמית:**
  החזית מספקת ממשק להוספת מטלות חדשות באמצעות טופס קלט, ורשימה שמציגה את המטלות הנוכחיות עם האפשרות להסיר אותן.

**ניהול מטלות:**
  המטלות מאוחסנות במערך שמור בזיכרון בשם `assignments`. זוהי פתרון אחסון זמני - הפעלה מחדש של השרת תאפס את נתונים אלו.

  ## נראות האתר והשימוש בו:



https://github.com/NoamHack/To-Do-List/assets/144808954/a4bee54d-fc43-431d-b0bd-3892deeacc8e
