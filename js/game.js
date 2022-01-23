var denominator = Math.floor(Math.random() * (10 - 2 + 1) + 2);
var numerator1 = Math.floor(Math.random() * (denominator * denominator));
var numerator2 = Math.floor(Math.random() * numerator1);

var size = "";
for (var i = 0; i < denominator; i++) {
  size = size + "40px ";
  for (var j = 0; j < denominator; j++) {
    var node = document.createElement("div");
    node.className = "gridItem";
    document.getElementById("gameGrid").appendChild(node);
  }
}
var editer = document.getElementById("gameGrid");
editer.style["grid-template-columns"] = size;
editer.style["grid-template-rows"] = size;

document.getElementById("numerator1").innerHTML = numerator1;
document.getElementById("numerator2").innerHTML = numerator2;
document.getElementById("denominator1").innerHTML = denominator * denominator;
document.getElementById("denominator2").innerHTML = denominator * denominator;
document.getElementById("denominator3").value = denominator * denominator;

var resCount = 0;
var flag = true;
var gridCont = document.getElementById("gameGrid");
var gridItm = gridCont.getElementsByClassName("gridItem");
for (var i = 0; i < gridItm.length; i++) {
  gridItm[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    this.className += " active";
    if (this.className == "gridItem active active") {
      this.className = "gridItem secondColor";
    }
    if (this.className == "gridItem active") {
      resCount++;
      flag = false;
    } else if (this.className == "gridItem secondColor") {
      resCount--;
    }
    console.log(resCount);
  });
}

function check() {
  var textNum = document.getElementById("numerator3").value;
  if (resCount == 0 && flag) {
    alert("Please Fill the empty boxes");
  } else {
    if (textNum == resCount) {
      alert("Hurray You Win Correct Answer");
      location.reload();
    } else {
      alert("Incorrect Answer");
      location.reload();
    }
  }
}
