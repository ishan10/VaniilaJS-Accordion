const CLASS_NAME_SHOW = 'show';

function Accordion(parentNode){
  this.parentNode = parentNode;
  this.elements = this.parentNode.querySelectorAll('.card');
  this.bindEvents();
  this.currOpen;
  this.currTarget;
}


Accordion.prototype.toggle = function (e){
  this.getTarget(e.target);
  
  if(this.currTarget.classList.contains(CLASS_NAME_SHOW)){
    this.hide(this.currTarge);
  } else{
    this.show();
  }
  this.hideNonSelected();
}

Accordion.prototype.getTarget = function (curr){
  this.currOpen = curr.dataset.target;
  this.currTarget = this.parentNode.querySelector(curr.dataset.target);
}

Accordion.prototype.show = function (){
  this.currTarget.classList.add(CLASS_NAME_SHOW);
}

Accordion.prototype.hide = function (){
  this.currTarget.classList.remove(CLASS_NAME_SHOW);
}

Accordion.prototype.hideNonSelected = function (){
   this.elements.forEach(function(elem){
     var elemId = this.parentNode.querySelector(elem.dataset.target);
 //    console.log(elemId);
    // console.log(elem.dataset.target);
     if((elem.dataset.target != this.currOpen) && elemId.classList.contains(CLASS_NAME_SHOW)){
      // console.log("here");
        elemId.classList.remove(CLASS_NAME_SHOW);
       }
   }.bind(this));
}
Accordion.prototype.bindEvents = function(){
 // console.log(this.toggle);
  this.elements.forEach(function(elem){
    elem.addEventListener('click', this.toggle.bind(this));
}.bind(this));
}

var accordion = new Accordion(document.getElementById('accordion'));