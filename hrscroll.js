function right(r) {
    var l = r.nextElementSibling;
    var p = r.parentElement.previousElementSibling;
    l.classList.add("d-block");
    p.scrollLeft += 200;
    if ((p.offsetWidth + p.scrollLeft)+200 > p.scrollWidth) {
      r.classList.add("d-none");
      p.scrollLeft += 200;
    }
  }
  function left(l) {
    var r = l.previousElementSibling;
    var p = l.parentElement.previousElementSibling;
    p.scrollLeft -= 200;
    if ((p.offsetWidth + p.scrollLeft)-200 < p.scrollWidth) {
      r.classList.remove("d-none");
      l.classList.add("d-block");
    } 
    if (p.scrollLeft < 200) {
      l.classList.remove('d-block');
      l.classList.add('d-none');
    }
       
  }
  
  function scrolled(cont){
      
    var hrscrollBtns=cont.nextElementSibling;
    var right=hrscrollBtns.children[0];
    var left=hrscrollBtns.children[1];

    if (cont.scrollLeft !=0) {
        left.classList.add('d-block');
    }else{
        left.classList.remove('d-block');
    }
    if((cont.offsetWidth + cont.scrollLeft) + 10 > cont.scrollWidth){
        right.classList.add('d-none');
        right.classList.remove('d-block');
    }else{
        if((cont.offsetWidth + cont.scrollLeft) + 10 < cont.scrollWidth){
            right.classList.add('d-block');
        }
    }

  }