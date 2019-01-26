function newElement() {
  var li = document.createElement("li")
  var inputValue = document.getElementById("myInput").value
  var t = document.createTextNode(inputValue)
// appendChild() is to add something to the end of something, like a child
  li.appendChild(t)

// will alert you if text box is emtpy when clicking add  
  if (inputValue === "") {
    alert('Please fill out form before submitting you')
  } else { /* else statment will  */
    document.getElementById("myUL").appendChild(li)
  }

  document.getElementById("myInput").value = ""// resets text box to blank

// SPAN is like div, has no meaning and is used for id and class, 
// but the difference is SPAN is an inline element, meaning it 
// can be on a line with other elements
  var span = document.createElement("SPAN") 
  var txt = document.createTextNode("\u00D7") // the x at the end
  span.className = 'close'
  span.appendChild(txt)
  li.appendChild(span)


  for(i = 0; i < close.length; i++){
    close[i].onclick = function (){
      var div = this.parentElement;
      div.parentElement.removeChild(div)
    }
  }
}

// delete (two ways of making it happen)
var todos = document.getElementsByTagName("LI") // the list?
var i;
for (i = 0; i < todos.length; i++){
  var span = document.createElement("SPAN")
  span.className = 'close'
  todos[i].appendChild(span)
}


var close = document.getElementsByClassName("close")
var i
for ( i = 0; i < close.length; i++ ) {
    close[i].onlick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


// update
var list = document.querySelector('ul')
list.addEventListener('click', function(e) {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('checked')
  }
}, false)