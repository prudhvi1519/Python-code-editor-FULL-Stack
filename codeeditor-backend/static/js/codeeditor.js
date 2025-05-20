const inputArea = document.getElementById("inputArea");
const runBtn = document.getElementById("runBtn");
const outputArea = document.getElementById("outputArea");

const editor = CodeMirror(document.getElementById("editor"), {
  lineNumbers: true,
  mode: "python",
  theme: "default",
  indentUnit: 4,
  indentWithTabs: false,
  autofocus: true,
  extraKeys: { Tab: "indentMore", "Shift-Tab": "indentLess" },
  value: `# Write your Python code here\nprint("Hello, World!")`
});
editor.setSize("100%", "100%");

runBtn.addEventListener("click", () => {
  const codeInput = editor.getValue();
  const inputData = inputArea.value;

  fetch("https://python-code-editor-full-stack.onrender.com/api/run/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ code: codeInput, input: inputData })
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      outputArea.textContent = "Error: " + data.error;
    } else {
      outputArea.textContent = data.output;
    }
  })
  .catch(err => {
    outputArea.textContent = "Failed to fetch: " + err;
  });
});