import { Session } from './classes'
import { FeedBack, Messages } from './feedback';
import { setEdit } from '../store/action/actions';

var getCookie = Session.getCookie

interface IOperations {
   addOperation(setters: any, props: any): any
   editOperation(setters: any, props: any): any
   deleteOperation(_id: string, props: any): any
}

async function apiOperation(url: string, body: { token: any, value?: number, date?: string, details?: string, category?: string, _id?: string }) {
   
   var myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   var raw = JSON.stringify({
      "token": body.token,
      "value": body.value,
      "date": body.date,
      "details": body.details,
      "category": body.category,
      "_id": body._id
   });

   var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
   };
   var last_operation:any
   await fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
         var message = FeedBack.instanc(new Messages())
         // console.log(result)
         if (result.status === 'done') {
            console.log(result)
            last_operation = result.lastOperation
            // console.log(result.lastPay)
            Messages.setSetting = { typeMessage: 'success', message: result.message }
            message.feedBackMe()
         }
         else {
            Messages.setSetting = { typeMessage: 'error', message: result.error }
            message.feedBackMe()
         }

      })
      .catch(error => console.log('error', error));
      return last_operation
}


export class Pay implements IOperations {

   addOperation(setters: any, props: any) {
      console.log('add pay')
      var _token = getCookie('token')
      var values = {
         token: _token,
         value: setters._Value.value,
         date: setters._Date.value,
         details: setters._Details.value,
         category: setters.category
      }
      apiOperation(String(process.env.REACT_APP_ADDPAY), values).then((last_operation) => {
         console.log(props)
         props.addPay(props.payR, last_operation)
         console.log(last_operation)
      })

      console.log(values)
   }

   editOperation(setters: any, props: any) {
      console.log('edit pay')

      var _token = getCookie('token')
      var values = {
         token: _token,
         value: setters._Value,
         date: setters._Date,
         details: setters._Details,
         category: setters.category,
         _id: setters._id
      }
      apiOperation(String(process.env.REACT_APP_EDITPAY), values).then((last_operation) => {         console.log(last_operation)
         props.editePay(props.payR, last_operation)
      })
      // alert(values.category)
      console.log(values)
   }

   deleteOperation(_id: string, props: any) {

      console.log('delete pay')
      var _token = getCookie('token')
      var values =
      {
         token: _token,
         _id
      }
      apiOperation(String(process.env.REACT_APP_DELETEPAY), values).then((last_operation) => {         
         props.deleteOperation(props.payR, _id)
         console.log(props)
      })

   }
}


export class Catch implements IOperations {
   constructor() {

   }
   addOperation(setters: any, props: any) {
      console.log('add catch')
      var _token = getCookie('token')
      var values = {
         token: _token,
         value: setters._Value.value,
         date: setters._Date.value,
         details: setters._Details.value,
         category: setters.category
      }
      apiOperation(String(process.env.REACT_APP_ADDCATCH), values).then((last_operation) => {         
         console.log(props)
         props.addCatch(props.catchR, last_operation)
         console.log(last_operation)
      })

      console.log(values)
   }

   editOperation(setters: any, props: any) {
      console.log('edit catch')

      var _token = getCookie('token')
      var values = {
         token: _token,
         value: setters._Value,
         date: setters._Date,
         details: setters._Details,
         category: setters.category,
         _id: setters._id
      }
      apiOperation(String(process.env.REACT_APP_EDITCATCH), values).then((last_operation) => {         
         console.log(last_operation)
         props.editeCatch(props.catchR, last_operation)
      })
      // alert(values.category)
      console.log(values)
   }

   deleteOperation(_id: string, props: any) {

      console.log('delete catch')
      var _token = getCookie('token')
      var values =
      {
         token: _token,
         _id
      }
      apiOperation(String(process.env.REACT_APP_DELETECATCH), values).then((last_operation) => {         props.deleteOperation(props.payR, _id)
         props.deleteOperation(props.catchR, _id)
         console.log(props)
      })

   }
}


export default class Operation {
   private operation: IOperations
   constructor(typeOperation: any) {
      this.operation = typeOperation
   }
   _addOperation(setters: { _Value: HTMLInputElement, _Date: HTMLInputElement, _Details: HTMLInputElement, category: string }, props: any) {
      this.operation.addOperation(setters, props)
   }
   _editOperation(setters: { _Value: HTMLInputElement, _Date: HTMLInputElement, _Details: HTMLInputElement, category: string, _id: string }, props: any) {
      this.operation.editOperation(setters, props)
   }
   _deleteOperation(_id: string, props: any,) {
      this.operation.deleteOperation(_id, props)
   }
}

export function hideModal(id: string) {
   document.getElementById(id)?.style.setProperty('display', 'none')
}

export function openOperation(id: string, loadOneOperation: Function) {
   document.getElementById('modal-operation')?.style.setProperty('display', 'grid')
   document.getElementById('modal-body')?.style.setProperty('grid-template-columns', '2fr')
   document.getElementById('modal-body')?.style.setProperty('grid-template-rows', '1fr')
   document.getElementById('myOperation')?.style.setProperty('grid-template-columns', '1fr 1fr')
   var value = document.getElementById(`value-${id}`)?.innerText
   var date = document.getElementById(`date-${id}`)?.innerText
   var details = document.getElementById(`details-${id}`)?.innerText
   var category = document.getElementById(`category-${id}`)?.innerText
   loadOneOperation({ value, date, details, category, typeOperation: 'pay' })
}

export function openEditOperation(id: string, values: { value: any, date: Date, details: string, category: string }, setEdit: Function) {
   document.getElementById('modalEdit')?.style.setProperty('display', 'grid')
   console.log(values)

   setEdit({
      value: values.value,
      date: values.date,
      details: values.details,
      category: values.category,
      id
   })
   // console.log(date.value)
   // }, 1000);


}
