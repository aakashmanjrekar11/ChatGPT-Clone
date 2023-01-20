import bot from ".assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("chatContainer");

let loadInterval;

function loader(element) {
  element.textContent = "";

  loadInterval = setInterval(() => {
    element.textContent += ".";

    if (element.textContent === "....") {
      element.textContent = "";
    }
  }, 300);
}

function typeText(element, index) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
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
