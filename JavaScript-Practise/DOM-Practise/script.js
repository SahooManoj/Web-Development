const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const firstPara = document.createElement("p");
firstPara.classList.add("firstPara");
firstPara.textContent = "Hey I’m red!"
firstPara.style.color = "red";

container.appendChild(firstPara);

const firstHeader = document.createElement("h3");
firstHeader.classList.add("firstHeader");
firstHeader.textContent = "I’m a blue h3!"
firstHeader.style.color = "blue";

container.appendChild(firstHeader);

const newDivContainer = document.createElement("div");
newDivContainer.classList.add("block");
newDivContainer.style.cssText = "border: 1px solid black; background-color: pink;"

const secondHeader = document.createElement("h1");
secondHeader.classList.add("secondHeader");
secondHeader.textContent = "I’m in a div";

const secondPara = document.createElement("p");
secondPara.classList.add("secondPara");
secondPara.textContent = "ME TOO!";

newDivContainer.append(secondHeader, secondPara);
container.appendChild(newDivContainer);
