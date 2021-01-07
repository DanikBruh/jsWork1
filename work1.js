function showNumber(){
    let value = document.getElementById("input").value;
    var dispText = document.getElementById("dispText");
    dispText.innerHTML = `${value[0]}(${value.slice(1, 4)})${value.slice(4, 7)}-${value.slice(7, 9)}-${value.slice(9)}`;
}