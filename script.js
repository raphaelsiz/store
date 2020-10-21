(function() {
  emailjs.init("user_4mxAmtDTezCeC2AZzTxs8");
})();
function testing() {
  var price;
  var typeSelect = document.getElementById("type");
  if (typeSelect.value == "surgical") price = 2.5;
  else price = 5;
  var outsideSelect = document.getElementById("outside");
  var liningSelect = document.getElementById("lining");
  if (outsideSelect.value == "khaki" || outsideSelect.value == "green-khaki" || liningSelect.value == "khaki" || liningSelect.value == "green-khaki") price += 2.5;
  var sizeSelect = document.getElementById("size");
  var outsideValue = outsideSelect.options[outsideSelect.selectedIndex].text;
  var liningValue = liningSelect.options[liningSelect.selectedIndex].text;
  var sizeValue = sizeSelect.options[sizeSelect.selectedIndex].text;
  var specialInstructions = document.getElementById("special").value;
  var string1 = "Outside fabric: ";
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
  var order = string1.concat(outsideValue,string2,liningValue,string3,sizeValue,string4,specialInstructions,string5);
  emailjs.send("service_7kldg0k","template_byjn2ur",{
    message: order,
  });
  var p = document.createElement("P");
  p.innerText = price;
  document.body.appendChild(p);
};