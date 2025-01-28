import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { serviceImages } from './js/pixabay-api';
import { creatGallery } from './js/render-functions';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnMore = document.querySelector('.load-more');

loader.style.display = 'none';
btnMore.style.display = 'none';

let question = '';
let page = 1;
const perPage = 15;

const galleryModal = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
  event.preventDefault();

  let question = event.target.elements.query.value.trim();

  gallery.innerHTML = ' ';

  if (!question) {
    iziToast.show({
      backgroundColor: '#EF4040',
      message: `Enter the data for the search!`,
      messageColor: '#FFFFFF',
      position: 'topRight',
    });
    return;
  }

  loader.style.display = 'flex';

  serviceImages(question)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          title: '',
          backgroundColor: '#EF4040',
          messageColor: '#FFFFFF',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topCenter',
        });
      }

      page = 1;

      gallery.insertAdjacentHTML('beforeend', creatGallery(data.hits));
      galleryModal.refresh();
      loader.style.display = 'none';

      if (page * perPage < data.totalHits) {
        btnMore.style.display = 'flex';
      }
    })

    .catch(error => {
      iziToast.show({
        title: '',
        backgroundColor: '#EF4040',
        messageColor: '#FFFFFF',
        message: `${error.message}`,
        position: 'topCenter',
      });
    })
    .finally(() => event.target.reset());
}

async function onLoadMore() {
  page += 1;
  btnMore.disabled = true;

  btnMore.style.display = 'none';
  loader.style.display = 'flex';

  try {
    const data = await serviceImages(question, page);

    if (data.hits.length === 0) {
      iziToast.info({
        message: 'No results found for your query.',
        position: 'bottomCenter',
        timeout: 5000,
      });
      btnMore.style.display = 'none';
      loader.style.display = 'none';
      return;
    }

    gallery.insertAdjacentHTML('beforeend', creatGallery(data.hits));
    galleryModal.refresh();
    loader.style.display = 'none';

    if (page * perPage >= data.totalHits) {
      btnMore.style.display = 'none';
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
        timeout: 10000,
      });
    } else {
      btnMore.style.display = 'flex';
    }

    const firstGalleryItem = document.querySelector('.gallery-item');
    if (firstGalleryItem) {
      const cardHeight = firstGalleryItem.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.show({
      title: '',
      backgroundColor: '#EF4040',
      messageColor: '#FFFFFF',
      message: `${error.message}`,
      position: 'topRight',
    });
  } finally {
    btnMore.disabled = false;
  }
}

form.addEventListener('submit', handlerSearch);
btnMore.addEventListener('click', onLoadMore);
