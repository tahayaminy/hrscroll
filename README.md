# hrscroll

##html code:
- head
```
<link rel="stylesheet" href="https://parswebdesigners.github.io/icon/css/all.min.css"/>
<link rel="stylesheet" href="hrscroll.css">
```
- main template
```
<article class="hrscroll-cont">
  <section class="hrscroll" onscroll="scrolled(this)">
    <div class="hrscroll-item">1</div>      
  </section>
  <section class="hrscroll-btns">
    <i onclick="right(this)" class="fas fa-chevron-circle-right"></i>
    <i onclick="left(this)" class="fas fa-chevron-circle-left d-none"></i>
  </section>
</article>
```
- bottom of document
```
  <script src="hrscroll.js"></script>
```

##css code:
- change buttons color
```
.hrscroll-btns{color:/*color*/}
```
