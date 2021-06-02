import u from 'umbrellajs';
import { getCircularCords } from '../utils/getCircularCordinates';
import { setPrevCapsule } from '../utils/maintainNavigationState';
import { initialCanvas, createArrows } from './canvas';
import { createCapsules } from './capsule';
import { customEvents, subscribe } from '../utils/events';

const getCordInfo = (capsuleData) => {
  const targetNodesCoordinates = getCircularCords({
    itemsCount: capsuleData.children.length,
    canvasWidth: window.innerWidth,
    canvasHeight: window.innerHeight,
  });

  const startPoint = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
  const arrowsCoordinates = targetNodesCoordinates.map((item, count) => {
    return {
      start: startPoint,
      end: item,
      ...capsuleData.children[count],
    };
  });

  return {
    arrowsCoordinates,
    startPoint,
  };
};

export const fetchCapsules = async (
  maincapsule = 'html',
  backAction = false
) => {
  setPrevCapsule(maincapsule, backAction);
  const canvasExistingInstance = u('#myCanvas');
  const mainCapsuleExistingInstance = u('#main-capsule-section');
  const childCapsuleExistingInstance = u('.child-capsule');
  if (
    mainCapsuleExistingInstance.nodes.length &&
    childCapsuleExistingInstance.nodes.length
  ) {
    mainCapsuleExistingInstance.remove();
    childCapsuleExistingInstance.remove();
  }
  if (canvasExistingInstance.nodes.length) {
    canvasExistingInstance.remove();
  }
  const canvasContext = initialCanvas();
  const capsuleFolder = maincapsule.charAt(0);
  const capsuleData = await fetch(
    `./database/${capsuleFolder}/${maincapsule}.json`
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log('Error fetching data ' + err);
    });

  const { arrowsCoordinates, startPoint } = getCordInfo(capsuleData);

  createArrows(arrowsCoordinates, canvasContext);
  createCapsules(arrowsCoordinates, capsuleData, startPoint);

  subscribe(customEvents.ON_WIN_RESIZE, () => {
    const { arrowsCoordinates, startPoint } = getCordInfo(capsuleData);
    createArrows(arrowsCoordinates, canvasContext);
    createCapsules(arrowsCoordinates, capsuleData, startPoint);
  });
};
