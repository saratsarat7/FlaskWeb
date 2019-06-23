function fillForm() {
	// var claim_type = getValuesFromAPI();
	// document.getElementById(claim_type).checked = true; 
	
	var patient_name = getValuesFromAPI();
	document.getElementById("patient_name").value = patient_name;
	
	// var dob = getValuesFromAPI();
	// document.getElementById("dob").value = dob;
	
	// var gender = getValuesFromAPI();
	// document.getElementById(gender).checked = true;
	
	// var patient_address = getValuesFromAPI();;
	// document.getElementById("patient_address").value = patient_address;

	// var Insurer_ID = getValuesFromAPI();
	// document.getElementById("Insurer_ID").value = Insurer_ID;
	
	// var Insured_Name = getValuesFromAPI();
	// document.getElementById("Insured_Name").value = Insured_Name;
	
	// var date_of_ill = getValuesFromAPI();
	// document.getElementById("date_of_ill").value = date_of_ill;
	
	// var diag_code = getValuesFromAPI();
	// document.getElementById("diag_code").value = diag_code;
	
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

function getValuesFromAPI() {
	var request = new XMLHttpRequest();
	var result = null;
	request.open('GET', 'http://127.0.0.1:5000/SpeechApi', false);  // `false` makes the request synchronous
	//request.send(null);
	request.send();

	if (request.status === 200) {
	  result = request.responseText;
	}
	//OR
	/*
	request.onreadystatechange = (e) => {
		 result = request.responseText;
	}
	*/
return result;
}
