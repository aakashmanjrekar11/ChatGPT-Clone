import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("chatContainer");

let loadInterval;

function loader(element) {
  element.textContent = ""; //initially text is empty

  loadInterval = setInterval(() => {
    element.textContent += "."; //incrementing single dot '.'

    if (element.textContent === "....") {
      //once it reaches 4 dots, clear the textContent (empty)
      element.textContent = "";
    }
  }, 300); //delay of 300ms
}

function typeText(element, index) {
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

function generateUniqueId() {
  const timeStamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

function chatStripe(isAI, value, uniqueID) {
  return `
      <div class="wrapper ${isAI && "ai"}">
        <div class="chat">
          <div class="profile">
            <img 
              src="${isAI ? bot : user}" 
              alt="${isAI ? "bot" : "user"}" 
            />
          </div>

          <div class="message" id=${uniqueID}>
            ${value}
          </div>
        </div>
      </div>
    `;
}

const handleSubmit = async (e) => {
  e.preventDefault(); //prevents browser from reloading (default)

  const data = new FormData(form);

  // user's chatstripe
  chatContainer.innerHTML += chatStripe(false, data.get("prompt")); // false = user typing
  form.reset();

  // bot's chatstripe
  const uniqueID = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true, " ", uniqueID); // true = AI typing. And " " empty because it will type as it loads (using loader function)

  // as user types, keeps scrolling down to see the message
  // puts new message in view.
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // uniqueID for every single message
  const messageDiv = document.getElementById(uniqueID);

  loader(messageDiv);
};

// call handleSubmit
// either when the submit button is clicked
form.addEventListener("submit", handleSubmit);
// or when the 'enter' key is pressed (enter keycode:13)
form.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    handleSubmit(e);
  }
});
