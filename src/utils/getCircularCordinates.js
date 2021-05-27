export const getCircularCords = ({itemsCount=0, canvasWidth=1000, canvasHeight=600}) => {
    const itemHeight= 40;
    const fitIn = false;
    // spacing between two items in vertical direction
    const verticalSpacing = 20 ;

    // split the values into two arrays or left and right calculation.
    const leftSideItemCount = parseInt(itemsCount/2);
    const rightSideItemsCount = itemsCount - leftSideItemCount;

    const coordinates = [];
    const leftXPos = -10 * leftSideItemCount;
    const rightXPos = 10 * rightSideItemsCount;

    for(let leftCount = 0 ; leftCount < leftSideItemCount; leftCount++){
        const direction = leftCount % 2 === 0 ? 1 : -1;

        const yPos = direction((leftCount + 1) * (itemHeight + verticalSpacing))
        coordinates.push({x:leftXPos, y:yPos})
    }
    for(let rightCount = 0 ; rightCount < rightSideItemsCount; rightCount++){
        const direction = rightCount % 2 === 0 ? 1 : -1;

        const yPos = direction((rightCount + 1) * (itemHeight + verticalSpacing))
        coordinates.push({x:rightXPos, y:yPos})
    }

    return translateCoordinates(coordinates, {x: canvasWidth/2, y:canvasHeight/2});
}

export const translateCoordinates = (cords = [], centerCordinate = {x:0, y:0}) => {
    return cords.map(cordinate => {
        return {
            x: centerCordinate.x + cords.x,
            y: centerCordinate.y + cords.y
        }
    })
}
