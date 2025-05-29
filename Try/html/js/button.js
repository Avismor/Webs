var count = 0;
document.getElementById("myButton").onclick = function(){
count++;
if (count % 2 == 0) {
document.getElementById("demo").innerHTML ="";
} 
else {
var img = document.createElement("img");
img.src = "https://ibb.org.ru/images/2025/05/29/TYK.png";
document.getElementById("demo").appendChild(img);
}
}