const Component = (state) => {
  const $container = document.createElement('nav');
  const template = (x = {}) => Object.keys(x).map(href => `
    <a href='${href}'>${x[href]}</a>
  `).join('');
  $container.innerHTML = template(state);
  return $container;
};

export default Component;
