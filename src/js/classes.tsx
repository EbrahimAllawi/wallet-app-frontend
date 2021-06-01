import { message, Button, notification } from 'antd'
import Cookie from 'js-cookie';
import { FeedBack, Messages } from './feedback';




export namespace Session {
    export function setSessionCookieToken(result:any) {
        var date = new Date();
        date.setMinutes(date.getMinutes() + 1440)
        document.cookie = `token=${result.token}; expires=${date.toUTCString()}; path=/; Secure; 127.0.0.1`;
    }

    export function getCookie(name:string) {
        var cookie = Cookie.get(name)
        if(cookie === undefined) {
            return null
        }
        return cookie
    } 

    export class LogOut  {
        async deleteCookie(nameCookie:string) {
            document.cookie = await nameCookie + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';  
            document.location.href = "/"
        }
    }

    export function redirectToMain() {
        if(getCookie('token') === null) {
            console.log('app')
            document.location.href = '/'
        }
    }
    export function redirectToApp() {
        if(getCookie('token') !== null) {
            document.location.href = "/wallet-app"
        }
    } 
}

export function notifyMe(title:string, notificationmessage:string) {
    var option = {
        body: notificationmessage,
    }
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {

      // If it's okay let's create a notification
        var notification = new Notification(title, option);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {

                var notification = new Notification(title, option);
            }
        });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
}

export namespace CollectionInternet {
    
    export class Internet {

        async getStatusIntrernet() {
            // await getStatusIntrernet().then((res:string) =>{Internet.isInternet = res} )
            try {
                const online = await fetch('https://ipv4.icanhazip.com')
                return online.status >= 200 && online.status < 300
            } catch (err) {
                var message = FeedBack.instanc(new Messages())
                Messages.setSetting = { typeMessage: 'error', message: 'check from Internet' }
                message.feedBackMe()
                return false
            }
        }
        
    }

}
