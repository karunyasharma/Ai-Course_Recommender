// DOM Elements
const chatBox = document.getElementById("chatBox");
const chatBody = document.getElementById("chat");
const chatInput = document.getElementById("input");
const chatToggleBtn = document.getElementById("chatToggleBtn");
const sendBtn = document.getElementById("sendBtn");

// FLOWISE API FUNCTION
async function query(data) {
    const response = await fetch(
        "https://cloud.flowiseai.com/api/v1/prediction/62831658-e1b5-4410-a99f-8b4a885d365b",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
}

// Toggle Chat Visibility
function toggleChat() {
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
}

// Append Message to Chat
function addMessage(role, text) {
    const div = document.createElement("div");
    div.className = "message " + role;
    div.innerText = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Handle Sending Messages
async function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage("user", text);
    chatInput.value = "";

    const loading = document.createElement("div");
    loading.className = "message bot";
    loading.innerText = "Typing...";
    chatBody.appendChild(loading);
    chatBody.scrollTop = chatBody.scrollHeight;

    try {
        const response = await query({ question: text });
        loading.remove();
        addMessage("bot", response.text || "No response received.");
    } catch (error) {
        loading.innerText = "Error connecting to AI.";
        console.error("API Error:", error);
    }
}

// Event Listeners
chatToggleBtn.addEventListener("click", toggleChat);
sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});