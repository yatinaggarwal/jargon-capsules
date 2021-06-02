let events = {};
let hop = events.hasOwnProperty;

export const subscribe = (event, callback) => {
    if(!hop.call(events, event)) events[event] = [];

    const indexOfListener = events[event].push(callback) - 1;
    return {
        remove: () => {
            delete events[event][indexOfListener]
        }
    }
}

export const publish = (event, data=null) => {
    // no action needed if event does not have any listener.
    if(!hop.call(events, event)) return;

    events[event].forEach(callback=>{
        callback(data)
    })
}

export const customEvents = {
    "ON_WIN_RESIZE":'on window resize'
}
