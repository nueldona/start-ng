const accordionItem = document.querySelectorAll('.accordion-item');

accordionItem.forEach(accordionItem => {
  accordionItem.addEventListener("click", event => {
    accordionItem.classList.toggle("active");
  })
})
