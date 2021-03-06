const currentInboxButton = document.querySelector(".inbox-button");
const currentInbox = document.querySelector(".currentInboxMatchWrapper");
const requestButton = document.querySelector(".request-button");
const requests = document.querySelector(".requestsMatchWrapper");
const showHideButton = document.querySelector(".showHideMobile");
const leftMenu = document.querySelector(".leftChatPage");

currentInboxButton.addEventListener("click", function () {
  currentInbox.classList.remove("disabled-menu");
  requestButton.classList.remove("is-active");
  currentInboxButton.classList.add("is-active");
  requests.classList.add("disabled-menu");
});

requestButton.addEventListener("click", function () {
  currentInbox.classList.add("disabled-menu");
  currentInboxButton.classList.remove("is-active");
  requestButton.classList.add("is-active");
  requests.classList.remove("disabled-menu");
});

showHideButton.addEventListener("click", function () {
  this.classList.toggle("isON");
  leftMenu.classList.toggle("isON");
});

//fix scroll position to always start at bottom
document.querySelector('.rightChatPageMessages').scrollTop = document.querySelector('.rightChatPageMessages').scrollHeight;

const emojiKeyboard = document.querySelector('.emojiKeyboard');
const emojiKeyboardContainer = document.querySelector('.emojiKeyboardMenu');
const emojiHolderContainer = document.querySelector('.emojiHolder');

let listEmoji = ['๐','๐','๐','๐','๐','๐','๐','๐คฃ','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐','๐คช','๐คจ','๐ง','๐ค','๐','๐คฉ','๐','๐','๐','๐','๐','๐','๐','โน๏ธ','๐ฃ','๐','๐ซ','๐ฉ','๐ข','๐ญ','๐ค','๐ ','๐ก','๐คฌ','๐คฏ','๐ณ','๐ฑ','๐จ','๐ฐ','๐ฅ','๐','๐ค','๐ค','๐คญ','๐คซ','๐คฅ','๐ถ','๐','๐','๐ฌ','๐','๐ฏ','๐ฆ','๐ง','๐ฎ','๐ฒ','๐ฅฑ','๐ด','๐คค','๐ช','๐ต','๐ค','๐คข','๐คฎ','๐คง','๐ท','๐ค','๐ค','๐ค','๐ค ','๐','๐ฟ','๐น','๐บ','๐คก','๐ฉ','๐ป','๐','โ ๏ธ','๐ฝ','๐พ','๐ค','๐','๐บ','๐ธ','๐น','๐ป','๐ผ','๐ฝ','๐','๐ฟ','๐พ'];
let ourHtml = "";

listEmoji.forEach(element => {
  ourHtml += `<p class='emojiButton' data-emoji='${element}'>${element}</p>`;
});
emojiHolderContainer.innerHTML += ourHtml;


const allClickableEmojiButton = document.querySelectorAll(".emojiButton");
const textArea = document.getElementById('inputBarBottomText');

allClickableEmojiButton.forEach(button =>{
  button.addEventListener("click", ()=>{
    textArea.value += (button.dataset.emoji);
  })
})

textArea.addEventListener("click",()=>{
  emojiKeyboardContainer.classList.add('hideEmoji');
})


emojiKeyboard.addEventListener("click", ()=>{
  emojiKeyboardContainer.classList.toggle('hideEmoji');
})

const likeButton = document.querySelector('.likeButton');

likeButton.addEventListener("click", ()=>{
  textArea.value = ":like:";
  document.getElementById('send').click();

})


// Execute a function when the user releases a key on the keyboard
textArea.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  let key = window.event.keyCode;
  if (key === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("send").click();
  }
});