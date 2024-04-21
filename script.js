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
    
    // Check for search history command
    if (message.toUpperCase() === 'SEARCH HISTORY') {
        displaySearchHistory();
        return;
    }
    
    // Simulate response
    const botMessage = document.createElement('div');
    botMessage.className = 'message received';
    botMessage.textContent = 'Sorry, I can only mimic responses. I am just a simple example.';
    
    // Append bot message to chat box after a short delay
    setTimeout(() => {
        chatBox.appendChild(botMessage);
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Add bot message to chat history
        chatHistory.push({ type: 'received', text: 'Sorry, I can only mimic responses. I am just a simple example.' });
    }, 1000);
}

// Function to display search history
function displaySearchHistory() {
    const searchHistory = chatHistory.filter(message => message.type === 'sent' && message.text.toUpperCase() !== 'SEARCH HISTORY');
    
    searchHistory.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.type}`;
        messageElement.textContent = message.text;
        
        chatBox.appendChild(messageElement);
    });
    
    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
} 