export const getCircularCords = ({
  itemsCount = 0,
  canvasWidth = 1000,
  canvasHeight = 600,
}) => {
  const itemHeight = 40;
  /**
   *  spacing between two items in vertical direction
   *  8 being minimum and 64 being the optimized balance. the spacing will decrease as the number of
   *  items grow.
   */
  const verticalSpacing = 8 + 64 / (itemsCount * Math.log10(itemsCount));

  // split the values into two arrays or left and right calculation.
  const leftSideItemCount = parseInt(itemsCount / 2);
  const rightSideItemsCount = itemsCount - leftSideItemCount;

  const coordinates = [];

  /**
   * add some spacing based on the number of elements.
   */
  const leftXPos = -100 + (-canvasWidth / 35) * leftSideItemCount;
  const rightXPos = 100 + (canvasWidth / 35) * rightSideItemsCount;

  for (let leftCount = 0; leftCount < leftSideItemCount; leftCount++) {
    const direction = leftCount % 2 === 0 ? 1 : -1;
    const yPos =
      direction * (Math.ceil(leftCount / 2) * (itemHeight + verticalSpacing));

    const xCord =
      leftXPos +
      Math.log10(canvasWidth / itemsCount) *
        Math.ceil(leftCount / 2) *
        parseInt(leftCount / Math.log10(leftCount + 2));

    coordinates.push({ x: xCord, y: yPos });
  }

  for (let rightCount = 0; rightCount < rightSideItemsCount; rightCount++) {
    const direction = rightCount % 2 === 0 ? 1 : -1;
    const yPos =
      direction * Math.ceil(rightCount / 2) * (itemHeight + verticalSpacing);
    const xCord =
      rightXPos -
      Math.ceil(rightCount / 2) *
        parseInt(rightCount / Math.log10(rightCount + 2));
    coordinates.push({ x: xCord, y: yPos });
  }

  return translateCoordinates(coordinates, {
    x: canvasWidth / 2,
    y: canvasHeight / 2,
  });
};

export const translateCoordinates = (
  cords = [],
  centerCordinate = { x: 0, y: 0 }
) => {
  return cords.map((cordinate) => {
    return {
      x: centerCordinate.x + cordinate.x,
      y: centerCordinate.y + cordinate.y,
    };
  });
};
