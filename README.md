## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1.) The home page will need to display the names and pictures of list items with links to the details page. 
2.) The details page will need to be populated for each individual item.
3.) The information for populating the page will be accessed by following the ID tag that is present in the url. "new URLSearchParams(window.location.search)"
4.) The information can be imported from an array of objects (one object for each item) in its own data.js 
5.) A render function can create the divs/imgs/text for each item on the home page given the info from the array
6.) The details page can be populated by calling the info from urlsearchparams

1. The data array and the home page skeleton can be built first without reference to anything else besides the data.
2. The skeleton of the details page can be built without reference to anything besides the data
3. rendering the content on the home page requires looping a render function through all the objects in the data array
4. the render function runs on nothing but the data from the array.
5. The render function then needs to be tested

Order:
1. import data array from previous project
2. build home page and details page skeletons
3. write test for render function
4. write (using render code from previous project) render function and pass test
5. create for loop to populate home page using render
6. create test for findbyid, then create findbyid
6. populate details page elements by pulling data with urlsearchparams and findbyid






1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
