import u from 'umbrellajs';
import { keywords } from '../../cache/keywords';
import { search } from './search';
import {getCircularCords} from "../utils/getCircularCordinates";
import {createArrows} from "./canvas";
import {createCapsules} from "./capsule";

// global search functionality
const searchInput = u('#searchInput');
search(searchInput, keywords);

const targetNodesCoordinates = getCircularCords({
    itemsCount:32,
    canvasWidth:window.innerWidth,
    canvasHeight:window.innerHeight
});

const startPoint = {
    x: window.innerWidth/2,
    y: window.innerHeight/2
}
const arrowsCordinates = targetNodesCoordinates.map(item => {
    return {
        start : startPoint,
        end : item
    }
})

createArrows(arrowsCordinates);
createCapsules(arrowsCordinates);


