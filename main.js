function seePersonalProfile(){
	$('.content-div-0-effect').css("display", "block");
	$('.content-div-0-effect-profile').css("display", "none");
}
function alertPersonalProfileInfo(){
	alert("La información del perfil personal ha sido actualizada.");
	$('.content-div-0-effect').css("display", "none");
	$('.content-div-0-effect-profile').css("display", "block");
}



function seeComapanyProfile(){
	$('.content-div-0-effect-company').css("display", "block");
	$('.content-div-0-effect-profile').css("display", "none");
}
function alertPersonalCompanyInfo(){
	alert("La información de la empresa ha sido actualizada.");
	$('.content-div-0-effect-company').css("display", "none");
	$('.content-div-0-effect-profile').css("display", "block");
}




