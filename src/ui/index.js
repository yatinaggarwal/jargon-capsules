import u from 'umbrellajs';
import { keywords } from '../../cache/keywords';
import { search } from './search';
import {getCircularCords} from "../utils/getCircularCordinates";

// global search functionality
const searchInput = u('#searchInput');
search(searchInput, keywords);



