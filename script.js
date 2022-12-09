const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click',(e)=>{
    panels.forEach(pan =>{
      pan.classList.remove('active');
    })
    panel.classList.add('active');
}))