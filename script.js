const body = document.querySelector("body")
const navBar = document.querySelector(".c-navbar")
const menuBtn =  document.querySelector(".c-navbar__btn--menu")
const cancelBtn = document.querySelector(".c-navbar__btn--cancel")
const menuActive = document.querySelector(".c-navbar__logo--mobile")

menuBtn.onclick = ()=>{
				body.classList.add("c-body__disabled");
				navBar.classList.add("show");													menuBtn.classList.add("c-navbar__btn-menu--hide");		
				menuActive.classList.add(".c-navbar__logo--mobile-active");
}

cancelBtn.onclick = ()=>{
				body.classList.remove("c-body__disabled");
				navBar.classList.remove("show");		menuBtn.classList.remove("c-navbar__btn-menu--hide");
				menuActive.classList.remove(".c-navbar__logo--mobile-active");
}
