const buttonHome = document.getElementById("button_home");
const buttonEducation = document.getElementById("button_education");
const buttonExperience = document.getElementById("button_experience");
const buttonAchievements = document.getElementById("button_achievements");

const pageHome = document.getElementById("page_home");
const pageEducation = document.getElementById("page_education");
const pageExperience = document.getElementById("page_experience");
const pageAchievements = document.getElementById("page_achievements");

buttonHome.addEventListener("click", goToHome);
buttonEducation.addEventListener("click", goToEducation);
buttonExperience.addEventListener("click", goToExperience);
buttonAchievements.addEventListener("click", goToAchievements);

function goToHome(){
    pageHome.style.display = "block";
    pageEducation.style.display = "none";
    pageExperience.style.display = "none";
    pageAchievements.style.display = "none";
}

function goToEducation(){
    pageHome.style.display = "none";
    pageEducation.style.display = "block";
    pageExperience.style.display = "none";
    pageAchievements.style.display = "none";
}

function goToExperience(){
    pageHome.style.display = "none";
    pageEducation.style.display = "none";
    pageExperience.style.display = "block";
    pageAchievements.style.display = "none";
}

function goToAchievements(){
    pageHome.style.display = "none";
    pageEducation.style.display = "none";
    pageExperience.style.display = "none";
    pageAchievements.style.display = "block";
}