const clock = document.querySelector('.clock');

// Assigning time values to constants 
const tick = () => {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  let am_pm = 'PM';

  var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  
// Defining html for digital clock
  const html = 
  `
  <center><span>${date}</span></center>
  <span>${h}</span> : 
  <span>${m}</span> : 
  <span>${s}</span>
  <span class="ampm">${am_pm}</span>
  `; 

//printing html code inside div.clock
clock.innerHTML = html;
};

//refreshing clock every 1 second
setInterval(tick, 1000);