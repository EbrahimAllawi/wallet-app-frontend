import {message, notification, Button} from 'antd'


interface IFeedback {
    showFeedback(): any
}
interface IMessage {
    typeMessage: string 
    message: string
}
interface INotification {
    placement?:any
    description:any
    type:any
    message: string
}

export class Messages implements IFeedback {

    private static setting: IMessage

    static set setSetting(setting: {typeMessage: string, message: string}) {
        Messages.setting = setting
    }

    showFeedback() {
        if(Messages.setting.typeMessage === 'error') {
            console.log('message')
            const hide = message.error(Messages.setting.message);
            setTimeout(hide,5000)
            return ''
        }
        if(Messages.setting.typeMessage === 'success') {
            const hide = message.success(Messages.setting.message);
            setTimeout(hide,5000)
            return ''
        }
    }

    
}

export class Notifications implements IFeedback{

    private static typeNotifiction: string
    private static option: object
    private static setting : object
    // constructor () {
    //     // Notifications.typeNotifiction = _typeMessage
    //     // Notifications.option = _option/
    // }
    
    private static notification = (option: INotification)  => {

        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
            Confirm
            </Button>
        );
        notification.open(Object.assign(option))
    };

    static set setSetting(setting: {placement?:any, description:any, type:any, message: string}) {
        Notifications.setting = setting
    }

    showFeedback() {
        Notifications.notification(Object.assign(Notifications.setting) )
    }
}

export class FeedBack {
    
    private static feedback : IFeedback 
    private static _instanc: FeedBack
    private static setting : object
    
    private static instans = 0
    private constructor () {
        // FeedBack.feedback = typeFeedBack
        FeedBack.instans += 1
        console.log(FeedBack.instans)
    }
    static instanc (typeFeedBack: any) {
        if(FeedBack._instanc == null) {FeedBack._instanc = new FeedBack()}
        FeedBack.feedback = typeFeedBack
        return FeedBack._instanc
    }
    

    
    feedBackMe() {
        FeedBack.feedback.showFeedback()
    }
}

// export class FeedBack {
    
//     private static feedback : IFeedback 

//     constructor (typeFeedBack: IFeedback) {
//         FeedBack.feedback = typeFeedBack
//     }

//     feedBackMe() {
//         FeedBack.feedback.showFeedback()
//     }
// }