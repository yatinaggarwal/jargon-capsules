import u from 'umbrellajs';
const createCapsule = (config, childCapsule, container) => {
  const capsule = `<div class="capsule" style="top:${config.end.y}px;left: ${config.end.x}px">
                        <span class="keyword">${childCapsule.label}</span>
                        <span class="info">i</span>
                    </div>`;
  const capsuleInstance = u(container).append(capsule);
  // set the data to retrive when needed.
  capsuleInstance.data(config);
  return capsuleInstance;
};

u('.capsule.child .label').on('click', (e) => {
  const capsuleObj = e.target.parent('.capsule').data();
  console.log(capsuleObj);
});

export const createCapsules = (capsulesList = [], mainCapsuleData = {}) => {
  const mainCapsule = `<span class="keyword">${mainCapsuleData.label}</span>
                        <span class="info tooltip">i
                            <span class="tooltiptext">${mainCapsuleData.desc}</span>
                        </span>`;
  const mainCapsuleInstance = u('#capsuleContainer .main-capsule').append(
    mainCapsule
  );
  for (let capsuleItem = 0; capsuleItem < capsulesList.length; capsuleItem++) {
    createCapsule(
      capsulesList[capsuleItem],
      mainCapsuleData.children[capsuleItem],
      '#capsuleContainer'
    );
  }
  return mainCapsuleInstance;
};
