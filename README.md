# ChatGPT Clone

ChatGPT Clone is my attempt at developing an ML-AI chatbot based on [OpenAI](https://openai.com/)'s [ChatGPT](https://chat.openai.com/chat) model which interacts in a conversational way.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg) ](https://opensource.org/licenses/MIT) [![Website shields.io](https://img.shields.io/website-Up-Down-green-red/http/shields.io.svg)](https://chatgpt-clone-aakash.vercel.app/)

## Tech Stack

---

**Front-end:** ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

**Back-end:** ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

**Hosting:** ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

**Dependencies:** `npm: ^9.3.1`; `vite: ^4.0.0`; `openai: ^3.1.0`; `cors: ^2.8.5`; `dotenv: ^16.0.3`; `express: ^4.18.2`; `nodemon: ^2.0.20`

## Methods

---

I have made use of the [`text-davinci-003`](https://beta.openai.com/docs/models/gpt-3) model, which is the most capable GPT-3 model. It can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports [inserting](https://beta.openai.com/docs/guides/completion/inserting-text) completions within text.

"We trained this model using Reinforcement Learning from Human Feedback (RLHF), using the same methods as [InstructGPT](https://openai.com/blog/instruction-following/), but with slight differences in the data collection setup. We trained an initial model using supervised fine-tuning: human AI trainers provided conversations in which they played both sides—the user and an AI assistant. We gave the trainers access to model-written suggestions to help them compose their responses. We mixed this new dialogue dataset with the InstructGPT dataset, which we transformed into a dialogue format. Using these reward models, we can fine-tune the model using [Proximal Policy Optimization](https://openai.com/blog/openai-baselines-ppo/). We performed several iterations of this process." --- [OpenAI Blog](https://openai.com/blog/chatgpt/)

![](https://cdn.openai.com/chatgpt/draft-20221129c/ChatGPT_Diagram.svg)
_Photo credits: [OpenAI Blog](https://openai.com/blog/chatgpt/)_

## Usage

---

## Support

---

## Acknowledgment

---

Huge thanks to [Adrian Hajdin - JS Mastery](https://github.com/adrianhajdin) for coming up with the idea and implementation. Make sure to check out his channel 🤝
