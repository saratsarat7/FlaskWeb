function fillForm() {
	// var claim_type = getValuesFromAPI();
	// document.getElementById(claim_type).checked = true; 
	
	var patient_name = getValuesFromAPI("Please say patient name");
	document.getElementById("patient_name").value = patient_name;
	
	var dob = getValuesFromAPI("Please say Date of Birth");
	document.getElementById("dob").value = dob;
	
	// var gender = getValuesFromAPI("Please select gender, Male or Female");
	// document.getElementById(gender).checked = true;
	
	var patient_address = getValuesFromAPI("Please say patient address");
	document.getElementById("patient_address").value = patient_address;

	var Insurer_ID = getValuesFromAPI("Please say Insurer ID");
	document.getElementById("Insurer_ID").value = Insurer_ID;
	
	var Insured_Name = getValuesFromAPI("Please say Insured Name");
	document.getElementById("Insured_Name").value = Insured_Name;
	
	var date_of_ill = getValuesFromAPI("Please say the date of illness");
	document.getElementById("date_of_ill").value = date_of_ill;
	
	var diag_code = getValuesFromAPI("Please say the diagnosis code");
	document.getElementById("diag_code").value = diag_code;
	
	// var from = getValuesFromAPI();
	// document.getElementById("from").value = from;
	
	// var to = getValuesFromAPI();
	// document.getElementById("to").value = to;
	
	// var CPT_HCPS = getValuesFromAPI();
	// document.getElementById("CPT_HCPS").value = CPT_HCPS;
	
	// var Modifier = getValuesFromAPI();
	// document.getElementById("Modifier").value = Modifier;
	
	// var Diag_Pointer = getValuesFromAPI();
	// document.getElementById("Diag_Pointer").value = Diag_Pointer;
	
	// var Charge = getValuesFromAPI();
	// document.getElementById("Charge").value = Charge;
	
	// var Unit = getValuesFromAPI();
	// document.getElementById("Unit").value = Unit;
		
}

function getValuesFromAPI(element_string) {
	var request = new XMLHttpRequest();
	var url = 'http://127.0.0.1:5000/SpeechApi';
	var params = 'field_name='.concat(element_string);
	var data = ""
	
	// request.open('POST', url, true);

	// //Send the proper header information along with the request
	// request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	// request.onreadystatechange = function() {//Call a function when the state changes.
	// 	if(request.readyState == 4 && request.status == 200) {
	// 		data = request.responseText;
	// 	}
	// }
	// request.send(params);

	request.open('GET', 'http://127.0.0.1:5000/SpeechApi?'+params, false);  // `false` makes the request synchronous
	//request.send(null);
	request.send();

	if (request.status === 200) {
	  data = request.responseText;
	}
	return data
}