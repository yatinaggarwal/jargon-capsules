import u from 'umbrellajs';
import { fetchCapsules } from './fetchCapsules';

const createCapsule = (config, childCapsule, container) => {
  const hasChildrenClass = childCapsule.hasChildren ? 'clickable' : '';
  const capsule = `<div class="capsule child-capsule ${hasChildrenClass} type-${config.type}" style="top:${config.end.y}px;left: ${config.end.x}px">
                    <span class="keyword ${childCapsule.key}">${childCapsule.label}</span>
                    <span class="info">i</span>
                  </div>`;
  const capsuleInstance = u(container).append(capsule);

  // handle click on child capsules
  u(`.child-capsule .${childCapsule.key}`).on('click', (e) => {
    e.stopPropagation();
    return childCapsule.hasChildren ? fetchCapsules(childCapsule.key) : null;
  });

  // set the data to retrive when needed.
  capsuleInstance.data(config);
  return capsuleInstance;
};

export const createCapsules = (
  capsulesList = [],
  mainCapsuleData = {},
  startPoint = {}
) => {
  const handleMainCapsuleClick = (e) => {
    e.stopPropagation();
  };
  const handleMainCapsuleInfoIconClick = (e) => {
    window.open(mainCapsuleData.detailsLink, '_blank');
  };

  const mainCapsule = `<div class="capsule main-capsule" style="top:${startPoint.y}px; left: ${startPoint.x}px">
                            <div id="main-capsule-section">
                              <span class="keyword">${mainCapsuleData.label}</span>
                              <span class="info tooltip">i
                                  <span class="tooltiptext">${mainCapsuleData.desc}</span>
                              </span>
                            </div>
                      </div>`;
  const mainCapsuleInstance = u('#capsuleContainer')
    .empty()
    .append(mainCapsule);
  u('.main-capsule').on('click', handleMainCapsuleClick);
  u('.main-capsule .info').on('click', handleMainCapsuleInfoIconClick);
  for (let capsuleItem = 0; capsuleItem < capsulesList.length; capsuleItem++) {
    createCapsule(
      capsulesList[capsuleItem],
      mainCapsuleData.children[capsuleItem],
      '#capsuleContainer'
    );
  }
  return mainCapsuleInstance;
};
