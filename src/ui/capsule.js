import u from "umbrellajs";
const createCapsule = (config, container) => {
    const capsule = `<div className="capsule main-capsule">
                        <span className="keyword">React</span>
                        <span className="info">i</span>
                    </div>`
    const capsuleInstance = u(container).append(capsule);
    // set the data to retrive when needed.
    capsuleInstance.data(config)
    return capsuleInstance;
}

u(".capsule.child .label").on("click", (e)=>{
    const capsuleObj = e.target.parent(".capsule").data();
    console.log(capsuleObj);
})

