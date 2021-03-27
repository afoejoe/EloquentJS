/* Elements by tag name
The document.getElementsByTagName method returns all child elements with a given tag name. Implement your own version of this as a function that takes a node and a string (the tag name) as arguments and returns an array containing all descendant element nodes with the given tag name.

To find the tag name of an element, use its nodeName property. But note that this will return the tag name in all uppercase. Use the toLowerCase or toUpperCase string methods to compensate for this.

<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p> */

  function byTagName(node, tagName) {
    // Your code here.
    let nodeArray = [];
    if (node && node.hasChildNodes) {
        let nodelist = Array.from(node.childNodes);
        nodelist.forEach(element => {
            if (element && element.nodeName && element.nodeName.toLowerCase() === tagName.toLowerCase()) {
                //nodeArray.push(element.nodeName);
                nodeArray.push(element)
            }
        }); 
    }
 
   
    return nodeArray;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  let para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2

