// Initialize chat history array
let chatHistory = [];

// DOM elements
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');
const sendButton = document.getElementById('sendButton');

// Send message on button click
sendButton.addEventListener('click', sendMessage);

// Function to send message
function sendMessage() {
    const message = userInput.value.trim();
    
    // Validate user input
    if (!message) {
        return;
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = 'message sent';
    messageElement.textContent = message;
    
    // Append message to chat box
    chatBox.appendChild(messageElement);
    
    // Add message to chat history
    chatHistory.push({ type: 'sent', text: message });
    
    // Clear input
    userInput.value = '';
    
    // Check for special commands
    if (message.toUpperCase() === 'SEARCH HISTORY') {
        displaySearchHistory();
        return;
    } else if (message.toUpperCase() === 'OPTIONS') {
        displayOptions();
        return;
    }
    
    // Simulate response
    const botMessage = document.createElement('div');
    botMessage.className = 'message received';
    botMessage.textContent = generateResponse(message);
    
    // Append bot message to chat box after a short delay
    setTimeout(() => {
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Add bot message to chat history
        chatHistory.push({ type: 'received', text: botMessage.textContent });
    }, 1000);
}

// Function to generate bot response
function generateResponse(message) {
    // Implement advanced NLP logic here
    // For now, a simple response is returned
    return 'Sorry, I can only mimic responses. I am just a simple example.';
}

// Function to display search history
function displaySearchHistory() {
    const searchHistory = chatHistory.filter(message => message.type === 'sent' && message.text.toUpperCase() !== 'SEARCH HISTORY');
    displayMessages(searchHistory);
}

// Function to display options
function displayOptions() {
    const options = ['Option 1', 'Option 2', 'Option 3']; // Example options
    displayMessages(options.map(option => ({ type: 'received', text: option })));
}

// Function to display messages
function displayMessages(messages) {
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.type}`;
        messageElement.textContent = message.text;
        
        chatBox.appendChild(messageElement);
    });
    
    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// ... (previous code)

// DOM elements
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');
const sendButton = document.getElementById('sendButton');
const voiceButton = document.getElementById('voiceButton');

// Initialize voice recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';

// Send message on button click
sendButton.addEventListener('click', sendMessage);
voiceButton.addEventListener('click', startVoiceRecognition);

// Function to start voice recognition
function startVoiceRecognition() {
    recognition.start();
    recognition.onresult = event => {
        const message = event.results[0][0].transcript;
        userInput.value = message;
        sendMessage();
    };
}

// ... (rest of the code)
