function howItWorks(){alert("AI analyzes Unsafe Acts, Unsafe Conditions and Near-Miss reports using NLP.")}
function loginAlert(){alert("Login page will open here.")}
function analyzeLive(){
    let t=document.getElementById('liveInput').value.trim();
    if(!t){alert('Please paste a report');return;}
    let s=t.toLowerCase().includes('height')||t.toLowerCase().includes('helmet')?87:68;
    document.getElementById('liveResult').style.opacity='1';
    document.getElementById('liveScore').innerText=s+'%';
    document.getElementById('liveFill').style.width=s+'%';
    document.getElementById('liveRisk').innerText=s>80?'HIGH':'MEDIUM';
    document.getElementById('liveRisk').style.background=s>80?'#d93c2f':'#e67e22';
}
function toggleTheme(){
    document.body.classList.toggle('dark-mode');
    let isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('anveshak-theme', isDark ? 'dark' : 'light');
    document.getElementById('themeToggle').innerText = isDark ? '☀️' : '🌙';
}
(function(){
    let saved = localStorage.getItem('anveshak-theme');
    let prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(saved === 'dark' || (!saved && prefersDark)){
        document.body.classList.add('dark-mode');
        window.addEventListener('DOMContentLoaded', ()=>{
            let btn = document.getElementById('themeToggle');
            if(btn) btn.innerText = '☀️';
        });
    }
})();
const reveals=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
        if(e.isIntersecting){e.target.classList.add('active');obs.unobserve(e.target);}
    });
},{threshold:0.15});
reveals.forEach(r=>obs.observe(r));
window.addEventListener('load',()=>{
    setTimeout(()=>{document.getElementById('liveFill').style.width='87%'},800);
});