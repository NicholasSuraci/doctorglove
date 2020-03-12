document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });


  var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: '.about__container'
})
    .setClassToggle('.about__container', 'fade-in') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
new ScrollMagic.Scene({
    triggerElement: '.services__card-1'
})
    .setClassToggle('.services__card-1', 'fade-in') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
new ScrollMagic.Scene({
    triggerElement: '.services__card-2',
    offset: 60
})
    .setClassToggle('.services__card-2', 'fade-in') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
new ScrollMagic.Scene({
    triggerElement: '.services__card-3',
    offset: 120
})
    .setClassToggle('.services__card-3', 'fade-in') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
new ScrollMagic.Scene({
    triggerElement: '.row-1',
    
})
    .setClassToggle('.row-1', 'fade-in') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller
new ScrollMagic.Scene({
    triggerElement: '.row-6',
    offset: -600
})
    .setClassToggle('.row-6', 'fade-in') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller