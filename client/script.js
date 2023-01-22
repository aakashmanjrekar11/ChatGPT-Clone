import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");

let loadInterval;

function loader(element) {
  element.textContent = ""; //initially text is empty

  loadInterval = setInterval(() => {
    // Update the text content of the loading indicator
    element.textContent += "."; //incrementing single dot '.'

    // If the loading indicator has reached three dots, reset it
    if (element.textContent === "....") {
      //once it reaches 4 dots, clear the textContent (empty)
      element.textContent = "";
    }
  }, 300); //delay of 300ms
}

function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      //if AI is still typing
      element.innerHTML += text.charAt(index); //insert current character at index to HTML
      index++; //increment index
    } else {
      clearInterval(interval); //clear
    }
  }, 20); //delay of 20ms
}

// generate unique ID for each message div of bot
// necessary for typing text effect for that specific reply
// without unique ID, typing text will work on every element
function generateUniqueId() {
  const timeStamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timeStamp}-${hexadecimalString}`;
}

function chatStripe(isAI, value, uniqueId) {
  return `
      <div class="wrapper ${isAI && "ai"}">
        <div class="chat">
          <div class="profile">
            <img 
              src="${isAI ? bot : user}" 
              alt="${isAI ? "bot" : "user"}" 
            />
          </div>

          <div class="message" id=${uniqueId}>${value}</div>
        </div>
      </div>
    `;
}

const handleSubmit = async (e) => {
  e.preventDefault(); //prevents browser from reloading (default)

  const data = new FormData(form);

  // user's chatstripe
  chatContainer.innerHTML += chatStripe(false, data.get("prompt")); // false = user typing

  // to clear the textarea input
  form.reset();

  // bot's chatstripe
  const uniqueId = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true, " ", uniqueId); // true = AI typing. And " " empty because it will type as it loads (using loader function)

  // as user types, keeps scrolling down to see the message
  // puts new message in view.
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // fetch newly created specific-message-div
  const messageDiv = document.getElementById(uniqueId);

  // messageDiv.innerHTML = "..."
  loader(messageDiv);

  // fetch data from the server -> bot's response
  const response = await fetch("http://localhost:5000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: data.get("prompt"),
    }),
  });

  clearInterval(loadInterval);
  messageDiv.innerHTML = "";

  if (response.ok) {
    const data = await response.json(); //gives us actual response coming from the backend
    const parsedData = data.bot.trim();

    typeText(messageDiv, parsedData);
  } else {
    const err = await response.text();

    messageDiv.innerHTML = "Something went wrong...";

    alert(err);
  }
};

// call handleSubmit
// either when the submit button is clicked
form.addEventListener("submit", handleSubmit);
// or when the 'enter' key is pressed (enter)
form.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSubmit(e);
  }
});
