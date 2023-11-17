var hldr = document.querySelectorAll('.fr');

hldr.forEach(el =>{
        el.addEventListener('mouseenter', () =>  {
        hldr.forEach(fr=>fr.classList.remove('active'));
        el.classList.add('active');
        })
     });

