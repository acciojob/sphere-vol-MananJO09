function volume_sphere(event) {
    //Write your code here
	 event.preventDefault();
var radius= document.getElementById("radius").value;
var volume=(4/3)*Math.PI* Math.pow(radius, 3);
document.getElementById("volume").value = volume.toFixed(2);
// document.getElementById("submit").addEventListener("click", volume_sphere);

} 

window.onload = function () {
	document.getElementById('MyForm').addEventListener('submit', volume_sphere);
}