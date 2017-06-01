document.addEventListener('DOMContentLoaded', function(){
  Typed.new('.element', {
    strings: ["Actor", "Web Developer", "Speaker", "Entrepreneur","Writer"],
    typeSpeed: 100,
    loop: true,
    showCursor: true
  });
});

// perfectscrollbar
var container = document.getElementById('container');
Ps.initialize(container, {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
});
// perfectscrollbar
