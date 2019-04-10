let $ = require('jquery');
$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler
});
import bird from '../images/bird.jpg';
import squirrel from '../images/squirrel.jpg';

$('#bird').attr("src", bird);
$('#squirrel').attr("src", squirrel);