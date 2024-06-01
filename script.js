let btn = document.querySelector('.ham')
btn.addEventListener('click',()=>{
      let head = document.querySelector('.header')
      if (head.classList.contains('transformA')) {
            head.classList.remove('transformA')
            head.classList.add('transformB')
      }
      else {
            head.classList.remove('transformB')
            head.classList.add('transformA')
      }
})