(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-navigation');

  if (!menuButton || !navigation) return;

  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Abrir menu' : 'Fechar menu');
    menuButton.classList.toggle('active', !isExpanded);
    navigation.classList.toggle('active', !isExpanded);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a') && window.matchMedia('(max-width: 900px)').matches) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
      menuButton.classList.remove('active');
      navigation.classList.remove('active');
    }
  });
})();
