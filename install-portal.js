// import instantsearch from './instantsearch.js';

var vdeptype = null;

 
window.onload = start;   
  
function start() {
	vdeptype = document.getElementById("idDeploymentType");
 // $('#sticky0-sticky-wrapper').hide();

	fdeployment();
  	fplatform();
  	fcollector();
  	flinuxm();
  	flauncher();
  
}
  
                                                 
    
function flocals3() {
var vlocals3 = document.getElementById("idlocals3");
var selected = vlocals3.options[vlocals3.selectedIndex].value;

  
    $('#s3').hide();
    $('#local').hide();
   
  if(selected === 's3'){
        $('#s3').show();
    }
		if(selected === 'local'){
        $('#local').show();
    }
}
                                                  
  
function fdeployment() {

var selected = vdeptype.options[vdeptype.selectedIndex].value;

  

  
    $('#saas').hide();
    $('hybrid').hide();
    $('onprem').hide();

  if(selected === 'saas'){
        $('#saas').show();
    }
		if(selected === 'hybrid'){
        $('#hybrid').show();
    }
  
  		if(selected === 'onprem'){
        $('#onprem').show();
    }
}

  
  
  function flinuxm() {
		var vlinuxm = document.getElementById("idLinuxM");
		var selected = vlinuxm.options[vlinuxm.selectedIndex].value;

    
      $('#lcurl').hide();
      $('#lwget').hide();
      $('#ldeb').hide();
      $('#lrpm').hide();
    
    if(selected === 'curl'){
        $('#lcurl').show();
    }
    if(selected === 'wget'){
        $('#lwget').show();
    }
    if(selected === 'deb'){
        $('#ldeb').show();
    }
    if(selected === 'rpm'){
        $('#lrpm').show();
    }
    
    
}
  
  
  
  function fcollector() {
  }
  
  
  function fplatform() {
		var vplatform = document.getElementById("idPlatform");
		var selected = vplatform.options[vplatform.selectedIndex].value;

    
      $('#windows').hide();
      $('#macos').hide();
      $('#linux').hide();
    
    if(selected === 'windows'){
        $('#windows').show();
    }
    if(selected === 'linux'){
        $('#linux').show();
    }
    if(selected === 'macos'){
        $('#macos').show();
    }
}
  
 
  function flauncher() {
		/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtna')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  

  
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}  