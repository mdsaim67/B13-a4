1)Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll
ans:
getElementById():Selects only one element by its id.
->:let box = document.getElementById("myId");

getElementsByClassName():Selects multiple elements by class name.
->:let items = document.getElementsByClassName("item");

querySelector():Selects the first matching element.
->:let box = document.querySelector(".item");

querySelectorAll():Selects all matching elements.
->:let items = document.querySelectorAll(".item");





2)How to create and insert a new element into the DOM?
ans:
Create element → createElement()

Add content → innerText / innerHTML

Insert into DOM → appendChild()
->:let newDiv = document.createElement("div");
newDiv.innerText = "Hello World";

document.body.appendChild(newDiv);




3)What is Event Bubbling?
ans:
Event Bubbling means when an event happens on a child element, it first runs on that element, then moves upward to its parent, then grandparent, and so on.
->:document.getElementById("child").addEventListener("click", function() {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked");
});




4)What is Event Delegation? Why is it useful?
ans:
Event Delegation means adding an event listener to a parent element instead of multiple child elements.
It works because of event bubbling.
->:document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Item clicked:", e.target.innerText);
  }
});




5)Difference between preventDefault() and stopPropagation()
ans:
preventDefault():Stops the default browser behavior.
->:form.addEventListener("submit", function(e) {
  e.preventDefault();
});
stopPropagation():Stops the event from bubbling up.
->:button.addEventListener("click", function(e) {
  e.stopPropagation();
});