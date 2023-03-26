export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed"

var observers = {};
let instance = null;
class notificationService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance
    }
    addObserver = (notifName, observer, callBack) => {
        let obs = observers[notifName];
        if (!obs) {
            observers[notifName] = [];
        }
        let obj = {observer: observer, callBack: callBack};
        observers[notifName].push(obj)
    }
    postNotificationService = (notifName, data) => {
        let obs = observers[notifName];
        for (let x = 0; x < obs.length; x++) {
            var obj = obs[x]
            obj.callBack(data)
        }
    }
    removeObserver = (observer, notifName) => {
        let obs = observers[notifName];
        if (obs) {
            for (let x = 0; x < obs.length; x++) {
                if (obs[x].observer === observer) {
                    obs.splice(x,1);
                    observers[notifName] = obs;
                    break;
                }
            }
        }
    }
}
export default notificationService;