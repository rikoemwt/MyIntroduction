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


{
  const Card = document.getElementById('CARD');
  Card.addEventListener('click',e => {
     if(Card.classList.contains('roll')==true && Card.classList.contains('roll-b')==true){
      Card.classList.remove('roll');
      Card.classList.remove('roll-b');
    }else if(Card.classList.contains('roll')==true){
      Card.classList.add('roll-b');
    }
    else{
      Card.classList.add('roll');
    }
  
  });
}