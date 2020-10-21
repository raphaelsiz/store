(function() {
  emailjs.init("user_4mxAmtDTezCeC2AZzTxs8");
  var maskDiv = document.getElementById("mask");
  var paypalDiv = document.getElementById("paypal-button-container");
  if (window.innerWidth > window.innerHeight) {
    maskDiv.style.width = "50%";
    paypalDiv.style.width = "50%";
  }
  else {
    maskDiv.style.width = "100%";
    paypalDiv.style.width = "100%"
  }
})();
function order(email) {
  var price;
  var typeSelect = document.getElementById("type");
  if (typeSelect.value == "surgical") price = 2.5;
  else price = 5;
  var outsideSelect = document.getElementById("outside");
  var liningSelect = document.getElementById("lining");
  if (outsideSelect.value == "khaki" || outsideSelect.value == "green-khaki" || liningSelect.value == "khaki" || liningSelect.value == "green-khaki") price += 2.5;
  var sizeSelect = document.getElementById("size");
  var typeValue = typeSelect.options[typeSelect.selectedIndex].text;
  var outsideValue = outsideSelect.options[outsideSelect.selectedIndex].text;
  var liningValue = liningSelect.options[liningSelect.selectedIndex].text;
  var sizeValue = sizeSelect.options[sizeSelect.selectedIndex].text;
  var specialInstructions = document.getElementById("special").value;
  var string0 = "Product: "
  var string1 = ". Outside fabric: ";
  var string2 = ". Lining: "
  var string3 = ". Size: ";
  var string4, string5;
  if (specialInstructions == "" || specialInstructions == " "){
    string4 = "";
    string5 = "."
  }
  else {
    string4 = " (Special Instructions: ";
    string5 = ")."
  }
  var order = string0.concat(typeValue,string1,outsideValue,string2,liningValue,string3,sizeValue,string4,specialInstructions,string5);
  if (email){
    emailjs.send("service_7kldg0k","template_byjn2ur",{
      message: order,
    });
  }
  else{
    var p = document.createElement("P");
    p.innerText = price;
    document.getElementById("mask-form").appendChild(p);
  }
};
window.addEventListener('resize',function(event){
  var maskDiv = document.getElementById("mask");
  var paypalDiv = document.getElementById("paypal-button-container");
  if (window.innerWidth > window.innerHeight) {
    maskDiv.style.width = "50%";
    paypalDiv.style.width = "50%";
  }
  else {
    maskDiv.style.width = "100%";
    paypalDiv.style.width = "100%"
  }
});