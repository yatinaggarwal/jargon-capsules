import u from 'umbrellajs';
import { keywords } from '../../cache/keywords';
import { search } from './search';
import { fetchCapsules } from './fetchCapsules';

// global search functionality
const searchInput = u('#searchInput');
search(searchInput, keywords);

// fetch capsules
fetchCapsules('javascript');
