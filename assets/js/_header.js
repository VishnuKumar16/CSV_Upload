const sideNavbar = document.querySelector('.side-navbar')
const darkBg = document.querySelector('.dark-bg');
const userSection = document.querySelector('.user-section');

function handleClicks(e){
  let fetchId = e.target.id;
  let fetchClass = e.target.className;
  
  console.log("Class: ", fetchClass);
  console.log("Id:", fetchId);
  
  if(fetchClass == 'dark-bg'){
    closeSideBar();
    closeUserSection()
  }
  if(fetchClass == 'user-img-icon'){
    openUserSection()
  }
}

function openSideNavbar(){
  sideNavbar.style.width = '200px';
  darkBg.style.display = 'block'
  document.body.style.overflowY = 'hidden';
}

function closeSideBar(){
  sideNavbar.style.width = '0'
  darkBg.style.display = 'none'
  document.body.style.overflowY = 'scroll';

}

function openUserSection(){
  userSection.style.height = '90%';
  userSection.style.width = '270px';
  darkBg.style.display = 'block'
  userSection.style.borderRadius = '10px'
  userSection.style.zIndex= '2'
  document.body.style.overflowY = 'hidden';
}

function closeUserSection(){
  userSection.style.height = '0%';
  userSection.style.width = '0px';
  userSection.style.borderRadius = '50%'
  userSection.style.zIndex= '-1'
  darkBg.style.display = 'none'
  document.body.style.overflowY = 'scroll';


}
document.addEventListener('click', handleClicks)