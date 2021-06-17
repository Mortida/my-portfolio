/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId, navI, act) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId),
		active = document.querySelector(act),
		navIcon = document.getElementById(navI);
	

	if (toggle && nav) {
		toggle.addEventListener('click', (e) => {
			nav.classList.toggle('show');
			navIcon.classList.toggle('toggle__Icon');
		});
	};

	for(let index of active.children)
	{
		index.addEventListener('click', (e) => {
			e.target.classList.toggle('active');
			let pre = index.previousElementSibling;
			if(pre)
			{
				sibiling = e.target.parentElement.previousElementSibling.children[0];
				sibiling.classList.remove('active')
				// 
			} else if (active.firstElementChild.classList.contains('active')) {
				console.log(active.lastElementChild);
			}

		});
	}

};
showMenu('nav-toggle', 'nav-menu', 'nav-toggle-icon', '.nav__list');
