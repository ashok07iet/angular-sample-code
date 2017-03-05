Order of Execution
1.Controller gets executed first
2.Pre-link gets executed next
3.Post-link gets executed last

Post : This is the most commonly used for data binding

Safe to attach event handlers to the DOM element
All children directives are linked, so it’s safe to access them
Never set any data required by the child directive here. Because child directive’s will be linked already.

Pre : Used rarely. One of the use case is when a child directive requires data from its parent, the parent directive should set it through its pre-link function.
Set data required for its child directives
Safe to attach event handlers to the DOM element
Not safe to access DOM elements belong to child directives. They’re not linked yet.

Controller : Used for defining a proper API to the directive. Using controller, directives can communicate and share data each other.
Set the data required to other directives.
Never access DOM element inside the controller; it’s against Angular’s philosophy and make testing hard.
