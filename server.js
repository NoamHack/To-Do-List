
const express = require('express');
   const app = express();
   const port = 2000;

   app.use(express.urlencoded({ extended: true }));
   app.use(express.json());

   // Array to store the assignments
   let assignments = [];

   // Route to handle assignment submission
   app.post('/assignment', (req, res) => {
     const assignment = req.body.assignment;
     
     // Add the assignment to the assignments array
     assignments.push(assignment);
 
     res.redirect('/assignment');
   });

   // Route to display the assignment board
   app.get('/assignment', (req, res) => {
     let assignmentBoard = '';
     
     // Generate the assignment board HTML
     assignments.forEach((assignment, index) => {
       assignmentBoard += `
         <div class="assignment">
           <span class="assignment-text">${assignment}</span>
           <button onclick="removeAssignment(${index})" class="remove-btn">Remove</button>
         </div>
       `;
     });

     // Render the assignment board HTML
     const html = `
     <!DOCTYPE html>
<html>
<head>
  <title>Assignment Board</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #87ceeb; /* Light blue background color */
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 30px;
    }

    .assignment-form {
      display: flex;
      margin-bottom: 20px;
    }

    .assignment-input {
      flex-grow: 1;
      padding: 10px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
    }

    .add-button {
      background-color: #ffbf00;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      margin-left: 10px;
    }

    .assignment-list {
      list-style-type: none;
      padding: 0;
    }

    .assignment-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-radius: 4px;
      background-color: #f9f9f9;
      margin-bottom: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .assignment-text {
      font-weight: bold;
      color: #333;
    }

    .remove-button {
      background-color: #ff4136;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .remove-button:hover {
      background-color: #d30e00;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Assignment Board</h1>
    
    <form class="assignment-form">
      <input type="text" id="assignment-input" placeholder="Enter assignment" required class="assignment-input">
      <button type="submit" id="add-button" class="add-button">Add</button>
    </form>
    
    <ul id="assignment-list" class="assignment-list"></ul>

    <script>
      const form = document.querySelector('.assignment-form');
      const input = document.getElementById('assignment-input');
      const list = document.getElementById('assignment-list');

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const assignment = input.value.trim();
        if (assignment !== '') {
          addAssignment(assignment);
          input.value = '';
        }
      });

      function addAssignment(assignment) {
        const listItem = document.createElement('li');
        listItem.className = 'assignment-item';

        const assignmentText = document.createElement('span');
        assignmentText.className = 'assignment-text';
        assignmentText.textContent = assignment;
        listItem.appendChild(assignmentText);

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
          listItem.remove();
        });
        listItem.appendChild(removeButton);

        list.appendChild(listItem);
      }
    </script>
</div>
</body>
</html>
     `;
     
     res.send(html);
   });

   // Route to remove an assignment
   app.delete('/assignment/:index', (req, res) => {
     const index = req.params.index;
     
     // Remove the assignment from the assignments array
     assignments.splice(index, 1);

     res.sendStatus(204);
   });

   app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
   });
   