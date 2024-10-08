const initializeShowAllButton = () => {
  const showAllBtnNode = document.querySelector('.projects__show-all');
  const projectItemNodes = document.querySelectorAll('.projects__list .projects__item');
  const desktopMediaQuery = window.matchMedia('(min-width: 960px)');
  const updateVisibility = () => {
    const visibleItems = desktopMediaQuery.matches ? 3 : 4;
    projectItemNodes.forEach((projectItemNode, index) => {
      projectItemNode.style.display = index < visibleItems ? 'block' : 'none';
    });
    showAllBtnNode.style.display = projectItemNodes.length > visibleItems ? 'block' : 'none';
  };
  showAllBtnNode.addEventListener('click', () => {
    projectItemNodes.forEach((projectItemNode) => {
      projectItemNode.style.display = 'block';
    });
    showAllBtnNode.style.display = 'none';
  });
  updateVisibility();
  desktopMediaQuery.addEventListener('change', updateVisibility);
};

export { initializeShowAllButton };
