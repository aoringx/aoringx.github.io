const buttonHome = document.getElementById("button_home");
const buttonEducation = document.getElementById("button_education");
const buttonExperience = document.getElementById("button_experience");
const buttonResume = document.getElementById("button_resume");

const pageHome = document.getElementById("page_home");
const pageEducation = document.getElementById("page_education");
const pageExperience = document.getElementById("page_experience");
const pageResume = document.getElementById("page_resume");

buttonHome.addEventListener("click", goToHome);
buttonEducation.addEventListener("click", goToEducation);
buttonExperience.addEventListener("click", goToExperience);
buttonResume.addEventListener("click", goToResume);

function goToHome(){
    pageHome.style.display = "block";
    pageEducation.style.display = "none";
    pageExperience.style.display = "none";
    pageResume.style.display = "none";
}

function goToEducation(){
    pageHome.style.display = "none";
    pageEducation.style.display = "block";
    pageExperience.style.display = "none";
    pageResume.style.display = "none";
}

function goToExperience(){
    pageHome.style.display = "none";
    pageEducation.style.display = "none";
    pageExperience.style.display = "block";
    pageResume.style.display = "none";
}

function goToResume(){
    pageHome.style.display = "none";
    pageEducation.style.display = "none";
    pageExperience.style.display = "none";
    pageResume.style.display = "block";
}