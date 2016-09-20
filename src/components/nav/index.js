const Component = (state) => {
  const $container = document.createElement('nav');
  const template = (x = {}) => Object.keys(x).map(href => `
    <a href='${href}'>${x[href]}</a>
  `).join('');
  $container.innerHTML = template(state);
  // Ensure rendered internal links are handled by router
  [...$container.querySelectorAll(`a[href^="/"]`)]
  .forEach(x => x.addEventListener('click', e => {
    e.preventDefault();
    history.pushState(null, null, e.currentTarget.href);
    window.onpopstate();
  }));
  return $container;
};

export default Component;
