import { getCircularCords } from '../utils/getCircularCordinates';
import { createArrows } from './canvas';
import { createCapsules } from './capsule';

export const fetchCapsules = async (maincapsule = 'html') => {
  const capsuleFolder = maincapsule.charAt(0);
  const capsuleData = await fetch(
    `./database/${capsuleFolder}/${maincapsule}.json`
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log('Error fetching data ' + err);
    });
  console.log(capsuleData);
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
  createArrows(arrowsCordinates);
  createCapsules(arrowsCordinates, capsuleData);
};
