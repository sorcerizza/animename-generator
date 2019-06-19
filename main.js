function getName(){
	var e = document.querySelector('#e').value;
	var p = document.querySelector('#p').value;
	document.querySelector('#o').innerHTML = finalName(e,p);
}
function finalName (num1, num2) {
var name = num1 + ' ' + num2;
if (num1 == 1) return name = "Daisuki";
if (num1 == 2) return name = "HideShi";
if (num1 == 3) return name = "Akonori";
if (num1 == 4) return name = "Kenji";
if (num1 == 5) return name = "Takami";
if (num1 == 6) return name = "Sadata";
if (num1 == 7) return name = "Junro";
if (num1 == 8) return name = "Shosumi";
if (num1 == 9) return name = "Kazuro";
if (num1 == 0) return name = "Masahiro";
return name
}