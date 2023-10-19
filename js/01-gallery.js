import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryMarkup = galleryItems
  .map(item => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </li>`;
  })
  .join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  const { target: imgEl } = e;

  if (imgEl.nodeName !== "IMG") {
    return;
  }

  const galleryInstance = basicLightbox.create(
    `
    <img class="gallery__image"
    src="${imgEl.dataset.source}" width="800" height="600" 
    alt="${imgEl.alt}">
    `,
    {
      instancedContextKeydown: null,
      onShow(instance) {
        this.instancedContextKeydown = onKeydown.bind(instance);
        document.addEventListener("keydown", this.instancedContextKeydown);
      },
      onClose() {
        document.removeEventListener("keydown", this.instancedContextKeydown);
      },
    }
  );

  console.log(`Picture "${imgEl.alt}" is opened in the lightbox`);
  galleryInstance.show();
}

function onKeydown(e) {
  console.log(`Keydown registered: ${e.code}`);
  if (e.code === "Escape") {
    this.close();
  }
}
