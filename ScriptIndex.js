// Create random chose
var adjective = ["Gratulerar du ska köpa", "Nu är det bestämt, du ska köpa"] 
var object = ["Charge Amps Aura", "Zaptec Go 22 kW", "Wallbox Pulsar Plus laddbox 3"]
var list;

function generator() {
 document.getElementById("name").innerHTML = adjective[Math.floor(Math.random() * adjective.length)] + " " + object[Math.floor(Math.random() * object.length)];;;
}
