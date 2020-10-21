(function() {
  emailjs.init("user_4mxAmtDTezCeC2AZzTxs8");
})();
function testing() {
  var price;
  var typeSelect = document.getElementById("type");
  if (typeSelect.value == "surgical") price = 2.5;
  else price = 5;
  var outsideSelect = document.getElementById("outside");
  var sizeSelect = document.getElementById("size");
  var outsideValue = outsideSelect.options[outsideSelect.selectedIndex].text;
  var sizeValue = sizeSelect.options[sizeSelect.selectedIndex].text;
  var specialInstructions = document.getElementById("special").value;
  var string1 = "Outside fabric: ";
  var string2 = ". Size: ";
  var string3, string4;
  if (specialInstructions == "" || specialInstructions == " "){
    string3 = "";
    string4 = "."
  }
  else {
    string3 = " (Special Instructions: ";
    string4 = ")."
  }
  var order = string1.concat(outsideValue,string2,sizeValue,string3,specialInstructions,string4);
  emailjs.send("service_7kldg0k","template_byjn2ur",{
    message: order,
  });
  var p = document.createElement("P");
  p.innerText = price;
  document.body.appendChild(p);
};