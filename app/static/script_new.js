function fillForm() {
	var claim_type = getValuesFromAPI();
	if(claim_type == "Invalid Response"){
		alert("Invalid Response! Please try again");
		claim_type = getValuesFromAPI();
	}
	else{
		document.getElementById(claim_type).checked = true; 
	}
	
	
	//-------------- Patient name--------------------------
	var patient_name = getValuesFromAPI();
	var field_pt = document.getElementById("patient_name");
	if(patient_name == "Invalid Response") {
		alert("Invalid Response! Please try again");
		patient_name = getValuesFromAPI();
	}
	else {
		field_pt.value = patient_name;
		field_pt.style.backgroundColor = "FFFF00"; //yellow
		field_pt.disabled = true;
	}
	
	//-------------- DOB--------------------------
	var dob = getValuesFromAPI();
	var field_dob = document.getElementById("dob");
	if(dob == "Invalid Response") {
		alert("Invalid Response! Please try again");
		dob = getValuesFromAPI();
	}
	else {
		field_dob.value = dob;
		field_dob.style.backgroundColor = "FFFF00"; //yellow
		field_dob.disabled = true;
	}
	
	//-------------- Gender--------------------------
	var gender = getValuesFromAPI();
	if(gender == "Invalid Response"){
		alert("Invalid Response! Please try again");
		gender = getValuesFromAPI();
	}
	else{
		document.getElementById(gender).checked = true; 
	}
	
	
	//-------------- Patient Address--------------------------
	var patient_address = getValuesFromAPI();
	var field_pa = document.getElementById("patient_address");
	if(patient_address == "Invalid Response") {
		alert("Invalid Response! Please try again");
		patient_address = getValuesFromAPI();
	}
	else {
		field_pa.value = patient_address;
		field_pa.style.backgroundColor = "FFFF00"; //yellow
		field_pa.disabled = true;
	}

	//-------------- Insurer ID--------------------------
	var Insurer_ID = getValuesFromAPI();
	var field_iid = document.getElementById("Insurer_ID");
	if(Insurer_ID == "Invalid Response") {
		alert("Invalid Response! Please try again");
		Insurer_ID = getValuesFromAPI();
	}
	else {
		field_iid.value = Insurer_ID;
		field_iid.style.backgroundColor = "FFFF00"; //yellow
		field_iid.disabled = true;
	}
	
	//-------------- Insurer Name--------------------------
	var Insured_Name = getValuesFromAPI();
	var field_iname = document.getElementById("Insured_Name");
	if(Insured_Name == "Invalid Response") {
		alert("Invalid Response! Please try again");
		Insured_Name = getValuesFromAPI();
	}
	else {
		field_iname.value = Insured_Name;
		field_iname.style.backgroundColor = "FFFF00"; //yellow
		field_iname.disabled = true;
	}
	
	//-------------- Date of Illness--------------------------
	var date_of_ill = getValuesFromAPI();
	var field_dol = document.getElementById("date_of_ill");
	if(date_of_ill == "Invalid Response") {
		alert("Invalid Response! Please try again");
		date_of_ill = getValuesFromAPI();
	}
	else {
		field_dol.value = date_of_ill;
		field_dol.style.backgroundColor = "FFFF00"; //yellow
		field_dol.disabled = true;
	}
	
	//-------------- Diag Code--------------------------
	var diag_code = getValuesFromAPI();
	var field_dc = document.getElementById("diag_code");
	if(diag_code == "Invalid Response") {
		alert("Invalid Response! Please try again");
		diag_code = getValuesFromAPI();
	}
	else {
		field_dc.value = diag_code;
		field_dc.style.backgroundColor = "FFFF00"; //yellow
		field_dc.disabled = true;
	}
	
	//-------------- FROM--------------------------
	var from = getValuesFromAPI();
	var field_from = document.getElementById("from");
	if(from == "Invalid Response") {
		alert("Invalid Response! Please try again");
		from = getValuesFromAPI();
	}
	else {
		field_from.value = from;
		field_from.style.backgroundColor = "FFFF00"; //yellow
		field_from.disabled = true;
	}
	
	//-------------- TO--------------------------
	var to = getValuesFromAPI();
	var field_to = document.getElementById("to");
	if(to == "Invalid Response") {
		alert("Invalid Response! Please try again");
		to = getValuesFromAPI();
	}
	else {
		field_to.value = to;
		field_to.style.backgroundColor = "FFFF00"; //yellow
		field_to.disabled = true;
	}
	
	//-------------- CPT HCPS--------------------------
	var CPT_HCPS = getValuesFromAPI();
	var field_cpt = document.getElementById("CPT_HCPS");
	if(CPT_HCPS == "Invalid Response") {
		alert("Invalid Response! Please try again");
		CPT_HCPS = getValuesFromAPI();
	}
	else {
		field_cpt.value = CPT_HCPS;
		field_cpt.style.backgroundColor = "FFFF00"; //yellow
		field_cpt.disabled = true;
	}
	
	//-------------- Modifier--------------------------
	var Modifier = getValuesFromAPI();
	var field_modifier = document.getElementById("Modifier");
	if(Modifier == "Invalid Response") {
		alert("Invalid Response! Please try again");
		Modifier = getValuesFromAPI();
	}
	else {
		field_modifier.value = Modifier;
		field_modifier.style.backgroundColor = "FFFF00"; //yellow
		field_modifier.disabled = true;
	}
	
	//-------------- Diag Pointer--------------------------
	var Diag_Pointer = getValuesFromAPI();
	var field_dp = document.getElementById("Diag_Pointer");
	if(Diag_Pointer == "Invalid Response") {
		alert("Invalid Response! Please try again");
		Diag_Pointer = getValuesFromAPI();
	}
	else {
		field_dp.value = Diag_Pointer;
		field_dp.style.backgroundColor = "FFFF00"; //yellow
		field_dp.disabled = true;
	}
	
	//-------------- Charge--------------------------
	var Charge = getValuesFromAPI();
	var field_charge = document.getElementById("Charge");
	if(Charge == "Invalid Response") {
		alert("Invalid Response! Please try again");
		Charge = getValuesFromAPI();
	}
	else {
		field_charge.value = Charge;
		field_charge.style.backgroundColor = "FFFF00"; //yellow
		field_charge.disabled = true;
	}
	
	//-------------- Unit--------------------------
	var Unit = getValuesFromAPI();
	var field_unit = document.getElementById("Unit");
	if(Unit == "Invalid Response") {
		alert("Invalid Response! Please try again");
		Unit = getValuesFromAPI();
	}
	else {
		field_unit.value = Unit;
		field_unit.style.backgroundColor = "FFFF00"; //yellow
		field_unit.disabled = true;
	}
		
}

function getValuesFromAPI() {
	var request = new XMLHttpRequest();
	var result = null;
	while (request.status != 200)
	{		
		request.open('GET', 'localhost:5000/SpeechApi', false);  // `false` makes the request synchronous
		//request.send(null);
		request.send();

		if (request.status === 200) {
		  result = request.responseText;
		}
		else {
			result = "Invalid Response";
			//alert("Invalid Response! Please try again");		
		}
		//OR
		/*
		request.onreadystatechange = (e) => {
			 result = request.responseText;
		}
		*/
	}
	
return result;
}

