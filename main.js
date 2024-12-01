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

{
 const level1 = document.querySelector("#level1");

 const keyframes = {
  opacity: [0, 1],
  translate: ["0 100px", 0],
};
const options = {
  duration: 5000,
  easing: "ease",
};

level1.animate(keyframes, options);
}
{
 const level2 = document.querySelector("#level2");

 const keyframes = {
  opacity: [0, 1],
  translate: ["0 200px", 0],
};
const options = {
  duration: 5000,
  easing: "ease",
};

level2.animate(keyframes, options);
}
{
 const level3 = document.querySelector("#level3");

 const keyframes = {
  opacity: [0, 1],
  translate: ["0 300px", 0],
};
const options = {
  duration: 5000,
  easing: "ease",
};

level3.animate(keyframes, options);
}
{
 const level4 = document.querySelector("#level4");

 const keyframes = {
  opacity: [0, 1],
  translate: ["0 400px", 0],
};
const options = {
  duration: 5000,
  easing: "ease",
};

level4.animate(keyframes, options);
}