var themeicon = document.getElementById("icon");

themeicon.onclick = function toggleTheme() {
	if (themeicon.src.includes("moon.png")) {
		themeicon.src = "sun.png";
	} else {
		themeicon.src = "moon.png";
	}
	document.body.classList.toggle("dark-mode");
};
