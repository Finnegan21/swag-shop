import notificationService, {NOTIF_WISHLIST_CHANGED} from "./notification-service";

let ns = new notificationService();
var wishList = [];
let instance = null;
class dataService {
    constructor() {
        if (!instance) {
            instance = this
        }
        return instance
    }
    itemOnWishList = item => {
        for (let x = 0; x < wishList.length; x++) {
            if (wishList[x]._id === item._id) {
                return true
            }
        }
        return false
    }
    addWishListItem = item => {
        wishList.push(item)
        ns.postNotificationService(NOTIF_WISHLIST_CHANGED, wishList);
    }
    removeWishListItem = item => {
        for (let x = 0; x < wishList.length; x++) {
            if (wishList[x]._id === item._id) {
                wishList.splice(x,1);
                ns.postNotificationService(NOTIF_WISHLIST_CHANGED, wishList);
                break;
            }
        }
    }
}

export default dataService;