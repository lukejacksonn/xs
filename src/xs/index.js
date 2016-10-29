const $body = document.querySelector("body");

export const Fetch = json =>
  typeof json === 'string' ?
    fetch(json).then(res => res.json())
  : Promise.resolve([].concat.apply(...[json]));

export const Node = template => json =>
  [].concat.apply(...[json]).map(x => {
    const range = document.createRange();
    range.selectNode($body);
    const $n = range.createContextualFragment(template(x));
    $n.data = x;
    return $n;
  });

export const Bind = selector => event => callback => nodes =>
  nodes.map(x =>
    [...x.querySelectorAll(selector)]
    .forEach(y => { y.addEventListener(event, callback.bind(x))})
  ?x:x);

export const Draw = element => nodes => {
  const $elem = document.createElement(element);
  [].concat.apply([], nodes).map(x =>
    $elem.appendChild(x));
  return $elem;
}
