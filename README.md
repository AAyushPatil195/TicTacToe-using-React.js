# 🎮 Tic-Tac-Toe Web Application

A classic **Tic-Tac-Toe** game built using **React.js**, featuring intuitive gameplay, simple state management, and automatic winner/tie detection. This project demonstrates the use of React hooks and conditional rendering to create an interactive and responsive game experience.

## 📸 Screenshot

- ![image](https://github.com/user-attachments/assets/f467218a-026a-4926-b9dd-4997d49d42a0)
- ![image](https://github.com/user-attachments/assets/82bac926-fe6d-402c-b2ad-80fe3607f6a8)



## ✨ Features

- 🧠 Winner detection logic
- 🤝 Tie condition detection
- 🔁 Restart game functionality
- ⚛️ Built with React functional components and hooks
- 🎨 Clean and minimal UI
- 🧪 Self-contained, no backend needed

## 🛠 Tech Stack

- **React.js**
- **JavaScript (ES6+)**
- **CSS3 (App.css)**

## 🧩 How It Works

- **`Square` Component**: Represents a clickable square in the game grid.
- **`Board` Component**:
  - Maintains the state of the board using `useState`
  - Determines if there's a winner or tie after every move
  - Shows dynamic status messages
  - Provides a restart button to reset the game

### Game Logic

- A win is detected based on predefined index combinations.
- A tie is declared if all squares are filled with no winner.
- Once a game ends, further clicks are disabled until a restart.

## 📁 Project Structure

src/
├── App.css # Styling for board and buttons
└── Game.jsx # Main logic and UI components

## 🚀 Getting Started

   ```bash
   git clone https://github.com/yourusername/tic-tac-toe-react.git
   cd tic-tac-toe-react
   npm install
   npm start
   ```
   Open http://localhost:3000 in your browser.

## 📌 Future Improvements
 - 🔄 Add player vs computer mode with basic AI

- 🎨 Add themes or animations

- 📱 Improve mobile responsiveness
