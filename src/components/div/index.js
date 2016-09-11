const Component = template => state => {
  const $frag = document.createElement('div');
  $frag.innerHTML = template(state);
  return $frag;
};

export default Component;
