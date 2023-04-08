const header = document.querySelector('.header');
const navigation = document.querySelector('.navigation__container');
const navigationButton = document.querySelector('.navigation__button');
const navigationItems = document.querySelectorAll('.navigation__item');

const openNavigation = () => {
	navigationButton.classList.toggle('navigation__button--active');
	navigation.classList.toggle('navigation__container--active');
};

const closeNavigationAfterLink = () => {
	navigationButton.classList.remove('navigation__button--active');
	navigation.classList.remove('navigation__container--active');
};

const stickyHeader = () => {
	window.scrollY > 0 ? header.classList.add('header--sticky') : header.classList.remove('header--sticky');
};

navigationItems.forEach((navigationItem) => navigationItem.addEventListener('click', closeNavigationAfterLink));

navigationButton.addEventListener('click', openNavigation);

window.addEventListener('scroll', stickyHeader);
