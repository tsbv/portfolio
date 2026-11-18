const initializeProjectsSwitch = () => {
  const switchNode = document.querySelector('.switch');
  if (!switchNode) {
    return;
  }
  const buttonNodes = Array.from(switchNode.querySelectorAll('.switch__btn'));

  const select = (activeBtn) => {
    buttonNodes.forEach((btn, index) => {
      const isActive = btn === activeBtn;
      btn.classList.toggle('switch__btn--active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
      btn.tabIndex = isActive ? 0 : -1;
      document.getElementById(btn.getAttribute('aria-controls')).hidden = !isActive;
      if (isActive) {
        switchNode.style.setProperty('--thumb-index', index);
      }
    });
  };

  buttonNodes.forEach((btn, index) => {
    btn.addEventListener('click', () => select(btn));
    btn.addEventListener('keydown', (evt) => {
      if (evt.key !== 'ArrowLeft' && evt.key !== 'ArrowRight') {
        return;
      }
      const next = buttonNodes[(index + (evt.key === 'ArrowRight' ? 1 : -1) + buttonNodes.length) % buttonNodes.length];
      select(next);
      next.focus();
    });
  });
};

export { initializeProjectsSwitch };
