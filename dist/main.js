(()=>{const e=[{description:"Go grocery shopping",completed:!1,index:1},{description:"Finish homework",completed:!0,index:2},{description:"Take out the trash",completed:!1,index:3}];function n(){const t=document.getElementById("task-list");t.innerHTML="",e.forEach((e=>{const n=function(e){const n=document.createElement("li");return n.innerHTML=`\n    <div class="task-item">\n      <div class="task-item__checkbox">\n        <input type="checkbox" id="task-${e.index}" ${e.completed?"checked":""}>\n        <label for="task-${e.index}"></label>\n      </div>\n      <div class="task-item__description ${e.completed?"completed":""}">\n        ${e.description}\n      </div>\n      <div class="task-item__delete">\n        <button class="delete-button" data-index="${e.index}">\n          <i class="fas fa-trash-alt"></i>\n        </button>\n      </div>\n    </div>\n  `,n}(e);t.appendChild(n)})),document.querySelectorAll('input[type="checkbox"]').forEach((t=>{t.addEventListener("change",(function(){const d=Number(t.id.replace("task-",""));e.find((e=>e.index===d)).completed=t.checked,n()}))})),document.querySelectorAll(".delete-button").forEach((t=>{t.addEventListener("click",(function(){const d=Number(t.dataset.index),i=e.findIndex((e=>e.index===d));e.splice(i,1),n()}))}))}document.addEventListener("DOMContentLoaded",(function(){n()})),document.getElementById("clear-btn").addEventListener("click",(function(){e.forEach((n=>{if(n.completed){const t=e.findIndex((e=>e.index===n.index));e.splice(t,1)}})),n()}))})();