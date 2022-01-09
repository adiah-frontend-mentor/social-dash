const toggler = document.querySelector('.switch');
const check = document.getElementById('toggleSwitch');
const themeStyles = document.getElementById('theme');

toggler.addEventListener('click', () => {
	// if (toggler.classList.contains('darkmode')) {
	// 	console.log('change to light');
	// 	themeStyles.href="css/default.css";
	// 	toggler.classList.remove('darkmode');
	// 	toggler.classList.add('light');
	if (check.checked) {
		themeStyles.href="css/dark.css";
	} else {
		themeStyles.href="css/default.css";
	}
		
	// } else {
	// 	console.log('change to dark');
	// 	themeStyles.href="css/dark.css";
	// 	toggler.classList.remove('light');
	// 	toggler.classList.add('darkmode');
		
	// }
})