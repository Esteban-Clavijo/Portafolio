const sidebar=document.getElementById("sidebar");
const themeBtn=document.getElementById("themeBtn");
const progressBar=document.getElementById("progressBar");
const progressText=document.getElementById("progressText");
const topBtn=document.getElementById("topBtn");
const links=[...document.querySelectorAll(".dock-link")];
const sections=[...document.querySelectorAll(".section")];

themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  themeBtn.textContent=document.body.classList.contains("light")?"☀":"☾";
});

topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

function onScroll(){
  const max=document.documentElement.scrollHeight-window.innerHeight;
  const pct=max>0?Math.round((window.scrollY/max)*100):0;
  progressBar.style.width=pct+"%";
  progressText.textContent=pct+"%";

  let current="inicio";
  links.forEach(a=>{
    const sec=document.querySelector(a.getAttribute("href"));
    if(sec && sec.getBoundingClientRect().top<=150) current=sec.id;
  });
  links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
}
window.addEventListener("scroll",onScroll);
onScroll();

links.forEach(a=>a.addEventListener("click",()=>{
  if(window.innerWidth<=760) sidebar.classList.remove("open");
}));

const quoteForm=document.getElementById("quoteForm");
if(quoteForm){
  quoteForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=document.getElementById("formName").value.trim();
    const phone=document.getElementById("formPhone").value.trim();
    const service=document.getElementById("formService").value;
    const message=document.getElementById("formMessage").value.trim();
    const text=`Hola Esteban, soy ${name}.\nMi teléfono: ${phone}\nServicio: ${service}\nTrabajo que necesito: ${message}`;
    window.open(`https://wa.me/593984192851?text=${encodeURIComponent(text)}`,"_blank");
  });
}
