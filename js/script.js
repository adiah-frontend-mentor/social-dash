const toggler = document.querySelector('.switch');
const check = document.getElementById('toggleSwitch');
const themeStyles = document.getElementById('theme');

toggler.addEventListener('click', () => {
	if (check.checked) {
		themeStyles.href="css/dark.css";
	} else {
		themeStyles.href="css/default.css";
	}
})