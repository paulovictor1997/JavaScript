/*
const navFilter = document.querySelector('.nav-filter');
const navFilterList = document.querySelector('.nav-filter__list');

navFilter.addEventListener('click', () => {
  if (navFilterList.classList.contains('show')) {
    navFilterList.classList.remove('show');
  } else {
    navFilterList.classList.add('show');
  }
});

*/

document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})