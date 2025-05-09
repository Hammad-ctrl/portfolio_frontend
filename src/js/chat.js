const input = document.getElementById('message');
const sendButton = document.querySelector('button[type="submit"]');
const chatContainer = document.querySelector('.chat-container');

sendButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  const userBubble = `
  <div class="flex items-center gap-3 mb-3 my-4 rounded-md w-full justify-end">
    <div class="bg-blue-300 p-3 text-black rounded-xl break-words text-right">
      ${userMessage}
    </div>
    <img src="/src/assets/utils/user.png" width="40" class="rounded-full self-start" alt="User">
  </div>`;
  chatContainer.innerHTML += userBubble;

  input.value = '';

  const botId = `bot-msg-${Date.now()}`;
  const botBubble = `
  <div class="flex items-start gap-3 mb-12 py-5 w-full justify-start" id="${botId}">
    <img src="/src/assets/utils/robot.png" width="40" class="rounded-full  self-start" alt="Bot">
    <div class=" text-black px-4 rounded-xl max-w-[70%] flex items-center gap-1 animate-pulse">
      <span>.</span><span>.</span><span>.</span>
    </div>
  </div>`;
  chatContainer.innerHTML += botBubble;

  chatContainer.scrollTop = chatContainer.scrollHeight;

  try {
    const res = await fetch('https://portfolio-backend-5w4o.onrender.com/api/chat-req', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();
    const botDiv = document.getElementById(botId);
    if (botDiv) {
      botDiv.innerHTML = `
        <img src="/src/assets/utils/robot.png" width="40" class="rounded-full self-start" alt="Bot">
        <div class="bg-green-300 text-black px-4 py-3 rounded-xl  break-words text-left">
          ${data.resp || "No response from AI"}
        </div>
      `;
    }
  } catch (error) {
    const botDiv = document.getElementById(botId);
    if (botDiv) {
      botDiv.innerHTML = `
        <img src="/src/assets/utils/robot.png" width="40" class="rounded-full self-start" alt="Bot">
        <div class="bg-red-100 text-black px-4 py-3 rounded-xl max-w-[70%] break-words text-left">
          Error: ${error.message}
        </div>
      `;
    }
    console.error("API error:", error);
  }

  chatContainer.scrollTop = chatContainer.scrollHeight;
});
