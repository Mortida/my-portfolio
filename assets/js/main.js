/*===== MENU SHOW =====*/
const shoeMenu = (toggleId, navId, navI) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId),
		navIcon = document.getElementById(navI);

	if (toggle && nav) {
		toggle.addEventListener('click', (e) => {
			nav.classList.toggle('show');
			navIcon.classList.toggle('toggle__Icon');
		});
	}
};
shoeMenu('nav-toggle', 'nav-menu', 'nav-toggle-icon');
