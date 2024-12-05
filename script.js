const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)(); 

console.log(recognition);

recognition.lang = "en-US"; // Corrected from "Lang"

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {

    function speak(text) {
        const abc = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(abc);
    }

    function handleCommands(command) {
        // Command to open YouTube
        if (command.includes("open youtube")) {
            speak("Opening YouTube...");
            // Open YouTube directly in response to button click
            setTimeout(() => {
                window.open("https://www.youtube.com", "_blank");
            }, 500); // Delay to allow the speech to be processed first

        // Command to open Facebook
        } else if (command.includes("open facebook")) {
            speak("Opening Facebook...");
            setTimeout(() => {
                window.open("https://www.facebook.com", "_blank");
            }, 500);

        // Command to open Instagram
        } else if (command.includes("open instagram")) {
            speak("Opening Instagram...");
            setTimeout(() => {
                window.open("https://www.instagram.com", "_blank");
            }, 500);

        // Command to open Whatsapp
        } else if (command.includes("open whatsapp")) {
            speak("Opening WhatsApp...");
            setTimeout(() => {
                window.open("https://www.whatsapp.com", "_blank");
            }, 500);

        // Command to open Google
        } else if (command.includes("open google")) {
            speak("Opening Google...");
            setTimeout(() => {
                window.open("https://www.google.com", "_blank");
            }, 500);

        // If the command is something else, let the user know and perform a search
        } else {
            window.open(`https://www.google.com/search?q=${command}`, "_blank");
        }
    }

    speak("Hello, how can I help you?");

    // Start listening after 2 seconds
    setTimeout(() => {
        recognition.start();
    }, 2000);

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        handleCommands(command);
    };

});
