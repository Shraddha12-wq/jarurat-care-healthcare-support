// ================= CHATBOT =================

function sendMessage() {

    const input = document.getElementById("userQuestion");

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    addUserMessage(question);

    const answer = getBotResponse(question);

    setTimeout(function () {

        addBotMessage(answer);

    }, 500);

    input.value = "";

}


// ================= USER MESSAGE =================

function addUserMessage(message) {

    const chatBox = document.getElementById("chatBox");

    const div = document.createElement("div");

    div.className = "user-message";

    div.innerHTML =
        "<strong>You:</strong><p class='mb-0'>" +
        message +
        "</p>";

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;

}


// ================= BOT MESSAGE =================

function addBotMessage(message) {

    const chatBox = document.getElementById("chatBox");

    const div = document.createElement("div");

    div.className = "bot-message";

    div.innerHTML =
        "<strong>Assistant:</strong><p class='mb-0'>" +
        message +
        "</p>";

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;

}


// ================= FAQ LOGIC =================

function getBotResponse(question) {

    const text = question.toLowerCase();


    if (
        text.includes("support") ||
        text.includes("help") ||
        text.includes("request")
    ) {

        return "You can request support by filling out our Patient Support Form. Please provide your contact details and describe your requirement.";

    }


    if (
        text.includes("volunteer") ||
        text.includes("join")
    ) {

        return "You can become a volunteer by visiting the Volunteer Registration page and submitting your details.";

    }


    if (
        text.includes("service") ||
        text.includes("services")
    ) {

        return "Jarurat Care provides patient support, healthcare assistance, volunteer support and automated FAQ assistance.";

    }


    if (
        text.includes("emergency") ||
        text.includes("urgent")
    ) {

        return "Jarurat Care is not an emergency medical service. For emergencies, please contact your local emergency services or a qualified healthcare professional.";

    }


    if (
        text.includes("contact") ||
        text.includes("email")
    ) {

        return "Please submit your request through the Patient Support form. Our support team can review your request and contact you.";

    }


    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return "Hello! 👋 Welcome to Jarurat Care. How can I assist you?";

    }


    if (
        text.includes("thank")
    ) {

        return "You're welcome! ❤️ I'm happy to help.";

    }


    return "I'm sorry, I don't have an answer for that yet. Please try asking about patient support, volunteering, services or emergency assistance.";

}


// ================= QUICK QUESTION =================

function askQuestion(question) {

    document.getElementById("userQuestion").value = question;

    sendMessage();

}


// ================= ENTER KEY =================

document
    .getElementById("userQuestion")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    });
