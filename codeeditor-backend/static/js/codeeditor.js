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

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

runBtn.addEventListener("click", () => {
  const codeInput = editor.getValue();
  const inputData = inputArea.value;

  fetch("/run/", { // Changed from /run_code to /run/
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": getCookie("csrftoken") // Add CSRF token
    },
    body: JSON.stringify({ code: codeInput, input: inputData })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
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