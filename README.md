# 🖥️ Python Code Editor - Full Stack Project

An interactive Python code editor built with a **Django backend** and a **CodeMirror-based frontend**.  
**Users can write Python code, give custom input, execute it on the backend, and view the output in a responsive and user-friendly interface.**

---

## 🛠️ Technologies Used

- **Backend:**
  - Django (Python web framework)
  - Python subprocess (for code execution)
- **Frontend:**
  - HTML, CSS, JavaScript
  - CodeMirror (syntax-highlighted code editor)
- **Optional:**
  - Docker (for containerized code execution)
  - Bootstrap (for responsive design)

---

## 🎮 Features

- 📝 **Code Editor:** Python syntax highlighting, line numbers, and indentation via CodeMirror.
- ⌨️ **User Input:** Custom stdin for executing programs with input.
- ⚙️ **Run Code:** Executes Python code securely on the server and returns output.
- 📤 **Output Panel:** Displays output or error tracebacks in styled text area.
- 📱 **Mobile-Friendly:** Responsive layout that adjusts for mobile screens.
- 🐳 **Docker Setup:** Optional Dockerized code execution environment.

---

## 📂 Project Structure

    codeeditor-backend/         # Django backend project  
    ├── manage.py  
    ├── codeeditor/             # Django project core  
    │  ├── settings.py  
    │  └── urls.py  
    ├── codeexecutor/           # Django app for code execution  
    │  ├── templates/           # Frontend
    │  │   └── index.html
    │  ├── views.py  
    │  └── urls.py 
    ├── static/              # Static files
    │  ├── codeeditor.css
    │  └── codeeditor.js
    └── Docker/                 # Docker setup  
       ├── Dockerfile  
       └── run_code.sh  

---

## 💻 Installation

### Backend Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/prudhvi1519/Python-code-editor-FULL-Stack.git
    cd Python-code-editor-FULL-Stack/codeeditor-backend
    ```
2. **Create and Activate Virtual Environment**  
   On **Windows**:
    ```python
    python -m venv venv  
    venv\Scripts\activate       # For Windows
    ```  
   On **Linux/macOS**:
    ```python
    source venv/bin/activate       # For Linux/macOS
    ```
3. **Install Dependencies**
    ```python
    pip install -r requirements.txt
    ```
    > 💡 If `requirements.txt` is missing, you can manually install Django:  
      ```python
      pip install django
      ```
4. **Run Migrations**
    ```python  
    python manage.py migrate
    ```
5. **Start the Development Server**
    ```python
    python manage.py runserver
    ```

### Frontend Setup
1. Open `frontend/index.html` in your browser.
2. Or, serve it via a simple HTTP server (like `Live Server` in VSCode).

---

## 🚀 How It Works

- **Frontend (CodeMirror)**: Lets the user write and submit Python code + input.
- **Backend (Django)**: Accepts the code/input via POST, runs it using `subprocess`, captures stdout/stderr, and sends it back.
- **Output**: Shown in a dedicated section below the code editor.

---

## 🧪 Sample Input
  ```bash
  name = input("Enter your name: ")
  print("Hello,", name)
  ```
  ### Custom Input Field:
  ```bash
  Prudhvi
  ```

---

## 👥 Contributing

1. Fork the repository.
2. Clone your fork locally.
3. Create a new branch: `git checkout -b feature-name`
4. Commit your changes: `git commit -m "Add feature"`
5. Push to GitHub: `git push origin feature-name`
6. Submit a pull request.

---

## 📜 License
This project is licensed under the **MIT License**.  
