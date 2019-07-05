function fillForm() {
	//-------------- Claim type-------------------------
	
	
	/*var claim_type = getValuesFromAPI();
	if(claim_type == "Invalid Response"){
		alert("Invalid Response! Please try again");
		claim_type = getValuesFromAPI();
	}
	else{
		document.getElementById(claim_type).checked = true; 
	}
	
	*/
	//-------------- Patient name--------------------------
	setTimeout(function(){
	var patient_name = getValuesFromAPI("Please say patient name");
	var field_pt = document.getElementById("patient_name");
	field_pt.focus();
	field_pt.disabled = true;
		field_pt.value = patient_name;
	field_pt.style.background = "yellow";},0); 

	
	//-------------- DOB--------------------------
	setTimeout(function(){
	var dob = getValuesFromAPI("Please say Date of Birth");
	var field_dob = document.getElementById("dob");
	field_dob.focus();
	field_dob.value = dob;
		field_dob.style.background = "yellow"; 
		field_dob.disabled = true;},500);
	//clearInterval(myVar1);

	//-------------- Gender--------------------------
	/*
	var gender = getValuesFromAPI();
	if(gender == "Invalid Response"){
		alert("Invalid Response! Please try again");
		gender = getValuesFromAPI();
	}
	else{
		document.getElementById(gender).checked = true; 
	}
	*/
	
	//-------------- Patient Address--------------------------
	setTimeout(function(){	
		var patient_address = getValuesFromAPI("Please say patient address");
	var field_pa = document.getElementById("patient_address");
	field_pa.focus();
	field_pa.value = patient_address;
		field_pa.style.background = "yellow"; 
		field_pa.disabled = true;},1000);
	//clearInterval(myVar2);
	
	//-------------- Insurer ID--------------------------
	setTimeout(function(){
	var Insurer_ID = getValuesFromAPI("Please say Insurer ID");
	var field_iid = document.getElementById("Insurer_ID");
	field_iid.focus();
	field_iid.value = Insurer_ID;
		field_iid.style.background = "yellow"; 
		field_iid.disabled = true;},1500);
	
	//-------------- Insurer Name--------------------------
	setTimeout(function(){
	var Insured_Name = getValuesFromAPI("Please say Insured Name");
	var field_iname = document.getElementById("Insured_Name");
	field_iname.focus();
	field_iname.value = Insured_Name;
		field_iname.style.background = "yellow"; 
		field_iname.disabled = true;},2000);
		
	//-------------- Date of Illness--------------------------
	setTimeout(function(){
	var date_of_ill = getValuesFromAPI("Please say the date of illness");
	var field_dol = document.getElementById("date_of_ill");
	field_dol.focus();
	field_dol.value = date_of_ill;
		field_dol.style.background = "yellow"; 
		field_dol.disabled = true;},2500);
	
	//-------------- Diag Code--------------------------
	setTimeout(function(){
	var diag_code = getValuesFromAPI("Please say the diagnosis code");
	var field_dc = document.getElementById("diag_code");
	field_dc.focus();
	field_dc.value = diag_code;
		field_dc.style.background = "yellow"; 
		field_dc.disabled = true;},3000);
	
	//-------------- FROM--------------------------
	setTimeout(function(){
	var from = getValuesFromAPI();
	var field_from = document.getElementById("from");
	field_from.focus();
	field_from.value = from;
		field_from.style.background = "yellow"; 
		field_from.disabled = true;},3500);
	
	//-------------- TO--------------------------
	setTimeout(function(){
	var to = getValuesFromAPI();
	var field_to = document.getElementById("to");
	field_to.focus();
	field_to.value = to;
		field_to.style.background = "yellow"; 
		field_to.disabled = true;},4000);
	
	//-------------- CPT HCPS--------------------------
	setTimeout(function(){
	var CPT_HCPS = getValuesFromAPI();
	var field_cpt = document.getElementById("CPT_HCPS");
	field_cpt.focus();
	field_cpt.value = CPT_HCPS;
		field_cpt.style.background = "yellow"; 
		field_cpt.disabled = true;},4500);
		
	//-------------- Modifier--------------------------
	setTimeout(function(){
	var Modifier = getValuesFromAPI();
	var field_modifier = document.getElementById("Modifier");
	field_modifier.focus();
	field_modifier.value = Modifier;
		field_modifier.style.background = "yellow"; 
		field_modifier.disabled = true;},5000);
		
	//-------------- Diag Pointer--------------------------
	setTimeout(function(){
	var Diag_Pointer = getValuesFromAPI();
	var field_dp = document.getElementById("Diag_Pointer");
	field_dp.focus();
	field_dp.value = Diag_Pointer;
		field_dp.style.background = "yellow"; 
		field_dp.disabled = true;},5500);
	
	//-------------- Charge--------------------------
	setTimeout(function(){
	var Charge = getValuesFromAPI();
	var field_charge = document.getElementById("Charge");
	field_charge.focus();
	field_charge.value = Charge;
		field_charge.style.background = "yellow"; 
		field_charge.disabled = true;},6000);
	
	//-------------- Unit--------------------------
	setTimeout(function(){
	var Unit = getValuesFromAPI();
	var field_unit = document.getElementById("Unit");
	field_unit.focus();
	field_unit.value = Unit;
		field_unit.style.background = "yellow"; 
		field_unit.disabled = true;},6500);
	
		
}


function getValuesFromAPI(element_string) {
	
	var request = new XMLHttpRequest();
	var url = 'http://127.0.0.1:5000/SpeechApi';
	var params = 'field_name='.concat(element_string);
	var data = "";
	
	// request.open('POST', url, true);

	// //Send the proper header information along with the request
	do{
			request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

		request.onreadystatechange = function() {//Call a function when the state changes.
			if(request.readyState == 4 && request.status == 200) {
				data = request.responseText;
			}
		}
		request.send(params);
		
		request.open('GET', 'http://127.0.0.1:5000/SpeechApi?'+params, false);  // `false` makes the request synchronous
		//request.send(null);
		request.send();

		if (request.status === 200) {
		  data = request.responseText;
		}
		else{
			alert("Invalid Response! Please try again!");
			//data = "Invalid Response";
		}
	}
	while (request.status !== 200); 
	
	
	return data
}


