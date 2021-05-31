import u from 'umbrellajs';
import { fetchCapsules } from './fetchCapsules';

const createCapsule = (config, childCapsule, container) => {
  const hasChildrenClass = childCapsule.hasChildren ? 'clickable' : '';
  const capsule = `<div class="capsule child-capsule ${hasChildrenClass}" style="top:${config.end.y}px;left: ${config.end.x}px">
                    <span class="keyword ${childCapsule.key}">${childCapsule.label}</span>
                    <span class="info">i</span>
                  </div>`;
  const capsuleInstance = u(container).append(capsule);

  // handle click on child capsules
  u(`.child-capsule .${childCapsule.key}`).on('click', () => {
    return childCapsule.hasChildren ? fetchCapsules(childCapsule.key) : null;
  });

  // set the data to retrive when needed.
  capsuleInstance.data(config);
  return capsuleInstance;
};

export const createCapsules = (capsulesList = [], mainCapsuleData = {}) => {
  const handleMainCapsuleClick = () => {
    window.open(mainCapsuleData.detailsLink, '_blank');
  };
  const mainCapsule = `<div id="main-capsule-section">
                          <span class="keyword">${mainCapsuleData.label}</span>
                          <span class="info tooltip">i
                              <span class="tooltiptext">${mainCapsuleData.desc}</span>
                          </span>
                      </div>`;
  const mainCapsuleInstance = u('#capsuleContainer .main-capsule').append(
    mainCapsule
  );
  u('.main-capsule .keyword').on('click', handleMainCapsuleClick);
  for (let capsuleItem = 0; capsuleItem < capsulesList.length; capsuleItem++) {
    createCapsule(
      capsulesList[capsuleItem],
      mainCapsuleData.children[capsuleItem],
      '#capsuleContainer'
    );
  }
  return mainCapsuleInstance;
};
