import u from "umbrellajs";
const createCapsule = (config, container) => {
    const capsule = `<div class="capsule" style="top:${config.end.y}px;left: ${config.end.x}px">
                        <span class="keyword">React</span>
                        <span class="info">i</span>
                    </div>`
    const capsuleInstance = u(container).append(capsule);
    // set the data to retrive when needed.
    capsuleInstance.data(config)
    console.log(u(container));
    return capsuleInstance;
}

u(".capsule.child .label").on("click", (e)=>{
    const capsuleObj = e.target.parent(".capsule").data();
    console.log(capsuleObj);
})

export const createCapsules = (capsulesList = []) =>{
    for(let i =0; i< capsulesList.length; i++){
        createCapsule(capsulesList[i], "#capsuleContainer");
    }
}
