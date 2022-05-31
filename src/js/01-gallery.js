import { galleryItems } from "./gallery-items.js";
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardsMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
    }).join('');
};
galleryContainer.addEventListener('click', onGalleryContainerClick)

function onGalleryContainerClick (evt) {
    evt.preventDefault();
    const isGallerySwatchEl = evt.target.dataset.source;
        if (!isGallerySwatchEl) {
            return
        }
        const lightBox = basicLightbox.create(`
    		<img  src="${isGallerySwatchEl}">
    	`);
        lightBox.show();
        
        this.addEventListener("keydown", onPresEscape);
        function onPresEscape(evt) {
            if (evt.key !== "Escape") {
                return
            }
            lightBox.close();
            this.removeEventListener("keydown", onPresEscape);
        }
}
let gallery = new SimpleLightbox('.gallery__link', { captionsData: 'alt', captionDelay: 25, });



