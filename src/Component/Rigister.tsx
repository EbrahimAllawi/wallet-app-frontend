import '../css/rigister-login/rigisterLogin.css'
import { notifyMe, CollectionInternet, Session } from '../js/classes'

import Cookies from 'js-cookie'
import { Button, Spin } from 'antd'
import React, { useEffect, useState, useRef, useContext } from 'react'
import { FeedBack, Messages } from '../js/feedback'

var Internet = CollectionInternet.Internet
class RigisterUser extends Internet {
   public username: any
   public password: any
   constructor(username: any, password: any) {
      super()
      this.username = username
      this.password = password
   }
   async rigister(startLoader: Function, stopLoader: Function) {
      startLoader()
      const resultInternet = await this.getStatusIntrernet()
      
      console.log(resultInternet)
      if (!resultInternet) {
         stopLoader()
         return ''
      }

      const username = this.username.current.value
      const password = this.password.current.value

      console.log(username, password)
      try {
         if (username === '') {
            var message = FeedBack.instanc(new Messages())
            Messages.setSetting = { typeMessage: 'error', message: 'user name is empty' }
            message.feedBackMe()
            stopLoader()
            return ''
         } else if (password === '') {
            var message = FeedBack.instanc(new Messages())
            Messages.setSetting = { typeMessage: 'error', message: 'password name is empty' }
            message.feedBackMe()
            stopLoader()
            return ''
         }

         var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");
         var user = JSON.stringify({ "username": username, "password": password });

         var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: user,
         };

         await fetch(String(process.env.REACT_APP_RIGISTER) , requestOptions)            
            .then(response => response.json())
            .then(result => {
               if (result.status === 'error') {
                  var message = FeedBack.instanc(new Messages())
                  Messages.setSetting = { typeMessage: 'error', message: result.error }
                  message.feedBackMe()
                  stopLoader()
                  return ''
               }
               console.log(result)
               Session.setSessionCookieToken(result)
               stopLoader()
               notifyMe('Rigister', result.notification)
               document.location.href = "/wallet-app"

            })
            .catch(error => {
               console.log(error.name)
               var message = FeedBack.instanc(new Messages())
               Messages.setSetting = { typeMessage: 'error', message: error.name }
               message.feedBackMe()
               stopLoader()
               return ''
            });

      } catch (err) {
         var message = FeedBack.instanc(new Messages())
         Messages.setSetting = { typeMessage: 'error', message: err.name }
         message.feedBackMe()
         stopLoader()
         return ''
      }


   }
}
var redirectToApp: Function = Session.redirectToApp

function Rigister() {
   const [display, setDisplay] = useState('none')
   useEffect(() => {
      redirectToApp()
   })

   function startLoader() {
      setDisplay('block')
   }
   function stopLoader() {
      setDisplay('none')
   }

   const username = useRef(null)
   const password = useRef(null)
   const rigister = new RigisterUser(username, password)


   return (
      <>
         <div className="operation" >Rigister</div>
         <div className="rigisterLogin" >
            <div id="username" className="inputs username" >
               <div>User Name</div>
               <input ref={username} placeholder="write full name" className="input" type="text" />
            </div>
            <div className="inputs password" >
               <div>Password</div>
               <input ref={password} id="password" className="input" type="password" />
            </div>
            <Spin style={{ display: display }} />
            <Button type="primary" onClick={() => { rigister.rigister(startLoader, stopLoader); }} >rigister</Button>
         </div>

      </>
   )

}
export default Rigister