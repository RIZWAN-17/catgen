//alert("hello")
function ageindays() {
    var birthyear = prompt('what year were you born...?');
    var ageindayss = (2021 - birthyear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' +  ageindayss + ' Days Old');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageindays').remove();
}
function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="cat.gif";
    div.appendChild(image);
}