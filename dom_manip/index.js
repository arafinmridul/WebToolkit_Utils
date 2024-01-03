const link = document.querySelector("a");

link.textContent = "Link to Google";

link.href = "https://google.com";

// document.querySelector(); // first element
// document.querySelectorAll(); // all elements
// document.getElementById(); // id
// document.getElementsByClassName(); // class
// document.getElementsByTagName(); // tag
// document.createElement(); // create element
// document.createTextNode(); // create text node
// document.appendChild(); // add child
// document.removeChild(); // remove child
// document.replaceChild(); // replace child
// document.insertBefore(); // insert before
// document.write(); // write to document

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "This is a new ride.";

sect.appendChild(para);

const text = document.createTextNode(" — the greatest search engine.");

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);

sect.removeChild(linkPara);

linkPara.remove(); // for newer browsers
linkPara.parentNode.removeChild(linkPara); // for older browsers

// Manipulating styles
para.style.color = "white";
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";

// Manipulating classes
para.setAttribute("class", "highlight");
para.classList.add("highlight");
para.classList.remove("highlight");
