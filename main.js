"use strict";
// {
//   function textSplit(target) {
//     target.children().andSelf().contents().each(function() {
//       if (this.nodeType == 3) {
//         $(this).replaceWith($(this).text().replace(/(\w)/g, "<span>$&</span>"));
//       }
//     });
//   }
  
//   $(function () {
//    textSplit($('#js-text'));
//   });

// }


// 
{
  function callback(entries,obs){
    entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    entry.target.classList.add("appear");
    obs.unobserve(entry.target);
    });
  }
  const opsion = {
    threshold:0.2,
  };
  
  const observer = new IntersectionObserver(callback,opsion);
  const targets = document.querySelectorAll(".grid");
  targets.forEach(target => {
  observer.observe(target)
  });
}
