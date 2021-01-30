function JQuery(selector){
  this.nodes = document.querySelectorAll(selector);
  this.length = this.nodes.length;
}

JQuery.prototype.each = function(){
  for(let i=0;i<this.length;i++){
    return this.nodes[i]
  }
} 

// jQuery.prototype.show = function(){
// // add code
// }

// jQuery.prototype.hide = function(){
// // add code
// }

function $(selector){
  return new JQuery(selector)
}

export default $

