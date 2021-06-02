import u from 'umbrellajs';
import { keywords } from '../../cache/keywords';
import { search } from './search';
import { fetchCapsules } from './fetchCapsules';
import { getPrevCapsule } from '../utils/maintainNavigationState';

// global search functionality
const searchInput = u('#searchInput');

let initialCapsule = 'html';
let oneClick = false;
let navigationHistory = [];

u('.canvas').on('click', () => {
  if (oneClick) {
    let prevCap = getPrevCapsule();
    if (prevCap) {
      fetchCapsules(prevCap, true);
    }
    oneClick = false;
  } else {
    oneClick = true;
    setTimeout(() => {
      oneClick = false;
    }, 200);
  }
});

search(searchInput, keywords);

// fetch capsules on first load
fetchCapsules('html');
