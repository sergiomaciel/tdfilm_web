export default function parallaxie(selector) {
  let elementBg = document.querySelector(selector);
  let image = elementBg.getAttribute("data-background");
  let position = elementBg.getBoundingClientRect().top * 0.10;

  elementBg.style.backgroundImage = `url("${image}")`;
  elementBg.style.backgroundSize = 'cover';
  elementBg.style.backgroundRepeat = 'no-repeat';
  elementBg.style.backgroundAttachment = 'fixed';
  elementBg.style.backgroundPosition = `bottom ${position}px`;

  window.onscroll = () => {
    let elements = document.querySelectorAll('.parallaxie[data-background]');

    elements.forEach(element => {
      position = element.getBoundingClientRect().top * 0.10;
      element.style.backgroundPosition = `bottom ${position}px`;
    });
  }
}