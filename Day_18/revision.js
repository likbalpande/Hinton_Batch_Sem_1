const title = "My recent project";
const imgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-n8b3tWTU94-xs9ibg5EzqDosGExhDrAE4_zwk-5Cw&s=10";

const titleElement = document.getElementById("post-1-title");
titleElement.innerText = title;

const imgElem = document.getElementById("post-1-img");
imgElem.src = imgUrl;
