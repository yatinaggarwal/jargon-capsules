import u from 'umbrellajs';
import { getCircularCords } from '../utils/getCircularCordinates';
import { setPrevCapsule } from '../utils/maintainNavigationState';
import { initialCanvas, createArrows } from './canvas';
import { createCapsules } from './capsule';

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
  const myCanvas = `<canvas id="myCanvas" width="1000" height="1000">
                      Your browser does not support the HTML5 canvas tag.
                    </canvas>`;
  const canvasInstance = u('body').append(myCanvas);
  const canvasContext = initialCanvas();
  const capsuleFolder = maincapsule.charAt(0);
  const capsuleData = await fetch(
    `./database/${capsuleFolder}/${maincapsule}.json`
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log('Error fetching data ' + err);
    });
  const targetNodesCoordinates = getCircularCords({
    itemsCount: capsuleData.children.length,
    canvasWidth: window.innerWidth,
    canvasHeight: window.innerHeight,
  });

  const startPoint = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
  const arrowsCordinates = targetNodesCoordinates.map((item) => {
    return {
      start: startPoint,
      end: item,
    };
  });
  createArrows(arrowsCordinates, canvasContext);
  createCapsules(arrowsCordinates, capsuleData);
  return canvasInstance;
};
