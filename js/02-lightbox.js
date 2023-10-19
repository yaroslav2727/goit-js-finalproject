import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryMarkup = galleryItems
  .map(item => {
    return `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    alt="${item.description}"
                />
            </a>
        </li>`;
  })
  .join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = galleryMarkup;

const lightboxInstance = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

galleryEl.addEventListener("click", e => {
  e.preventDefault();
});
