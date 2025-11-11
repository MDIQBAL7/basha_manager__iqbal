// for add to-let functionality 
document.getElementById('toLetForm').onsubmit = function(e) { e.preventDefault(); const newProperty = { title: document.getElementById('propertyTitle').value, location: document.getElementById('propertyLocation').value, rent: document.getElementById('propertyRent').value, bedrooms: document.getElementById('propertyBedrooms').value, bathrooms: document.getElementById('propertyBathrooms').value, image: document.getElementById('propertyImage').value }; 
// লোকাল স্টোরেজে সেভ করা 
let toLetList = JSON.parse(localStorage.getItem('toLetList')) || []; toLetList.push(newProperty); localStorage.setItem('toLetList', JSON.stringify(toLetList));
 // মডাল বন্ধ করা 
 bootstrap.Modal.getInstance(document.getElementById('addToLetModal')).hide(); this.reset(); alert('Property added successfully!'); };




//  This code is for chat functionality 


// Users
const users = [
  {id:"rana",name:"Rana Hasan"},
  {id:"sakib",name:"Sakib Ahmed"},
  {id:"mila",name:"Mila Khan"},
  {id:"arif",name:"Arif Hossain"}
];

// Elements
const app=document.getElementById("messenger-app"),
toggle=document.getElementById("ms-toggle-btn"),
usersEl=document.getElementById("ms-users"),
chat=document.getElementById("ms-chat"),
back=document.getElementById("ms-back"),
closeBtn=document.getElementById("ms-close"),
headerName=document.getElementById("ms-chat-name"),
avatar=document.getElementById("ms-chat-avatar"),
msgsEl=document.getElementById("ms-messages"),
input=document.getElementById("ms-input-field"),
send=document.getElementById("ms-send"),
empty=document.getElementById("ms-empty");

let active=null;

// Storage Helpers
function loadMsgs(id){return JSON.parse(localStorage.getItem("CHAT_"+id))||[]}
function saveMsgs(id,m){localStorage.setItem("CHAT_"+id,JSON.stringify(m))}

// Render Users
function renderUsers(){
  usersEl.innerHTML="";
  users.forEach(u=>{
    let div=document.createElement("div");
    div.className="ms-user";
    div.innerHTML=`<div class="ms-avatar">${u.name[0]}</div><div>${u.name}</div>`;
    div.onclick=()=>openChat(u.id);
    usersEl.appendChild(div);
  })
}
renderUsers();

// Open Chat
function openChat(id){
  active=id;
  headerName.textContent = users.find(u=>u.id==id).name;
  avatar.textContent = headerName.textContent[0];

  empty.style.display = "none";
  renderMsgs();
  chat.classList.add("active");
}

// Render Messages
function renderMsgs(){
  msgsEl.innerHTML="";
  loadMsgs(active).forEach(m=>{
    let d=document.createElement("div");
    d.className="msg "+m.from;
    d.textContent=m.text;
    msgsEl.appendChild(d);
  });
  msgsEl.scrollTop=msgsEl.scrollHeight;
}

// Send Message
send.onclick=()=>sendMsg();
input.onkeydown=e=>{if(e.key==="Enter")sendMsg()}

function sendMsg(){
  if(!active||!input.value.trim())return;
  let m=loadMsgs(active);
  m.push({from:"owner",text:input.value});
  saveMsgs(active,m);
  input.value="";
  renderMsgs();
}

// Back button (mobile)
back.onclick=()=>{
  chat.classList.remove("active");
  empty.style.display="flex"; 
};

// Close button (hide chat)
closeBtn.onclick=()=>{
  app.style.display="none";
  empty.style.display="flex"; 
};

// Toggle button
toggle.onclick=()=>app.style.display=(app.style.display=="none"||!app.style.display)?"flex":"none";
