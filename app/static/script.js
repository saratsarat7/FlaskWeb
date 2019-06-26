function fillForm() {
	//-------------- Claim type-------------------------
	var claim_type = getValuesFromAPI();
	if(claim_type == "Invalid Response"){
		alert("Invalid Response! Please try again");
		claim_type = getValuesFromAPI();
	}
	else{
		document.getElementById(claim_type).checked = true; 
	}
	
	
	//-------------- Patient name--------------------------
	var patient_name = getValuesFromAPI("Please say patient name");
	var field_pt = document.getElementById("patient_name");
	field_pt.focus();
	if(patient_name == "Invalid Response") {
		alert("Invalid Response! Please try again");
		patient_name = getValuesFromAPI();
	}
	else {
		field_pt.disabled = true;
		field_pt.value = patient_name;
		field_pt.style.background = "yellow"; 
		
	}
	
	//-------------- DOB--------------------------
	var dob = getValuesFromAPI("Please say Date of Birth");
	var field_dob = document.getElementById("dob");
	field_dob.focus();
	if(dob == "Invalid Response") {
		alert("Invalid Response! Please try again");
		dob = getValuesFromAPI();
	}
	else {
		field_dob.value = dob;
		field_dob.style.background = "yellow"; 
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
	var patient_address = getValuesFromAPI("Please say patient address");
	var field_pa = document.getElementById("patient_address");
	field_pa.focus();
	if(patient_address == "Invalid Response") {
		alert("Invalid Response! Please try again");
		patient_address = getValuesFromAPI();
	}
	else {
		field_pa.value = patient_address;
		field_pa.style.background = "yellow"; 
		field_pa.disabled = true;
	}

	//-------------- Insurer ID--------------------------
	var Insurer_ID = getValuesFromAPI("Please say Insurer ID");
	var field_iid = document.getElementById("Insurer_ID");
	field_iid.focus();
	if(Insurer_ID == "Invalid Response") {
		alert("Invalid Response! Please try again");
		Insurer_ID = getValuesFromAPI();
	}
	else {
		field_iid.value = Insurer_ID;
		field_iid.style.background = "yellow"; 
		field_iid.disabled = true;
	}
	
	//-------------- Insurer Name--------------------------
	var Insured_Name = getValuesFromAPI("Please say Insured Name");
	var field_iname = document.getElementById("Insured_Name");
	field_iname.focus();
	if(Insured_Name == "Invalid Response") {
		alert("Invalid Response! Please try again");
		Insured_Name = getValuesFromAPI();
	}
	else {
		field_iname.value = Insured_Name;
		field_iname.style.background = "yellow"; 
		field_iname.disabled = true;
	}
	
	//-------------- Date of Illness--------------------------
	var date_of_ill = getValuesFromAPI("Please say the date of illness");
	var field_dol = document.getElementById("date_of_ill");
	field_dol.focus();
	if(date_of_ill == "Invalid Response") {
		alert("Invalid Response! Please try again");
		date_of_ill = getValuesFromAPI();
	}
	else {
		field_dol.value = date_of_ill;
		field_dol.style.background = "yellow"; 
		field_dol.disabled = true;
	}
	
	//-------------- Diag Code--------------------------
	var diag_code = getValuesFromAPI("Please say the diagnosis code");
	var field_dc = document.getElementById("diag_code");
	field_dc.focus();
	if(diag_code == "Invalid Response") {
		alert("Invalid Response! Please try again");
		diag_code = getValuesFromAPI();
	}
	else {
		field_dc.value = diag_code;
		field_dc.style.background = "yellow"; 
		field_dc.disabled = true;
	}
	
	//-------------- FROM--------------------------
	var from = getValuesFromAPI();
	var field_from = document.getElementById("from");
	field_from.focus();
	if(from == "Invalid Response") {
		alert("Invalid Response! Please try again");
		from = getValuesFromAPI();
	}
	else {
		field_from.value = from;
		field_from.style.background = "yellow"; 
		field_from.disabled = true;
	}
	
	//-------------- TO--------------------------
	var to = getValuesFromAPI();
	var field_to = document.getElementById("to");
	field_to.focus();
	if(to == "Invalid Response") {
		alert("Invalid Response! Please try again");
		to = getValuesFromAPI();
	}
	else {
		field_to.value = to;
		field_to.style.background = "yellow"; 
		field_to.disabled = true;
	}
	
	//-------------- CPT HCPS--------------------------
	var CPT_HCPS = getValuesFromAPI();
	var field_cpt = document.getElementById("CPT_HCPS");
	field_cpt.focus();
	if(CPT_HCPS == "Invalid Response") {
		alert("Invalid Response! Please try again");
		CPT_HCPS = getValuesFromAPI();
	}
	else {
		field_cpt.value = CPT_HCPS;
		field_cpt.style.background = "yellow"; 
		field_cpt.disabled = true;
	}
	
	//-------------- Modifier--------------------------
	var Modifier = getValuesFromAPI();
	var field_modifier = document.getElementById("Modifier");
	field_modifier.focus();
	if(Modifier == "Invalid Response") {
		alert("Invalid Response! Please try again");
		Modifier = getValuesFromAPI();
	}
	else {
		field_modifier.value = Modifier;
		field_modifier.style.background = "yellow"; 
		field_modifier.disabled = true;
	}
	
	//-------------- Diag Pointer--------------------------
	var Diag_Pointer = getValuesFromAPI();
	var field_dp = document.getElementById("Diag_Pointer");
	field_dp.focus();
	if(Diag_Pointer == "Invalid Response") {
		alert("Invalid Response! Please try again");
		Diag_Pointer = getValuesFromAPI();
	}
	else {
		field_dp.value = Diag_Pointer;
		field_dp.style.background = "yellow"; 
		field_dp.disabled = true;
	}
	
	//-------------- Charge--------------------------
	var Charge = getValuesFromAPI();
	var field_charge = document.getElementById("Charge");
	field_charge.focus();
	if(Charge == "Invalid Response") {
		alert("Invalid Response! Please try again");
		Charge = getValuesFromAPI();
	}
	else {
		field_charge.value = Charge;
		field_charge.style.background = "yellow"; 
		field_charge.disabled = true;
	}
	
	//-------------- Unit--------------------------
	var Unit = getValuesFromAPI();
	var field_unit = document.getElementById("Unit");
	field_unit.focus();
	if(Unit == "Invalid Response") {
		alert("Invalid Response! Please try again");
		Unit = getValuesFromAPI();
	}
	else {
		field_unit.value = Unit;
		field_unit.style.background = "yellow"; 
		field_unit.disabled = true;
	}
		
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

	request.open('GET', url+params, false);  // `false` makes the request synchronous
	//request.send(null);
	request.send();

	if (request.status === 200) {
	  data = request.responseText;
	}
	else{
		data = "Invalid Response";
	}
	return data
}


