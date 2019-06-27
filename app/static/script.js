function fillForm() {
	
	var patient_name = getValuesFromAPI("Please say patient name");
	document.getElementById("patient_name").value = patient_name;
	
	var dob = getValuesFromAPI("Please say Date of Birth");
	document.getElementById("dob").value = dob;
	
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
	
	var from = getValuesFromAPI("Please say service from date");
	document.getElementById("from").value = from;
	
	var to = getValuesFromAPI("Please say service to date");
	document.getElementById("to").value = to;
	
	var hcps = getValuesFromAPI("Please say HCPS code");
	document.getElementById("CPT_HCPS").value = hcps;
	
	var Modifier = getValuesFromAPI("Please say the modifer");
	document.getElementById("Modifier").value = Modifier;
	
	var Diag_Pointer = getValuesFromAPI("Please say the diag pointer");
	document.getElementById("Diag_Pointer").value = Diag_Pointer;
	
	var Charge = getValuesFromAPI("Please say the charge amount");
	document.getElementById("Charge").value = Charge;
	
	var Unit = getValuesFromAPI("Please say the units");
	document.getElementById("Unit").value = Unit;
		
}

function getValuesFromAPI(element_string) {
	var request = new XMLHttpRequest();
	var url = 'http://127.0.0.1:5000/SpeechApi';
	var params = '?field_name='.concat(element_string);
	var data = ""
	
	do {
		request.open('GET', url+params, false);  // `false` makes the request synchronous
		request.send();
		if (request.status === 200) {
			data = request.responseText;
			break
		}
	}
	while (request.status != 200)
	
	return data
}

function getValuesFromAPICheckBox(element_string) {
	var request = new XMLHttpRequest();
	var url = 'http://127.0.0.1:5000/SpeechApi';
	var params = '?field_name='.concat(element_string);
	var data = ""
	
	do {
		request.open('GET', url+params, false);  // `false` makes the request synchronous
		request.send();
		if (request.status === 200) {
			data = request.responseText;
			break
		}
	}
	while (request.status != 200)
	
	return data
}