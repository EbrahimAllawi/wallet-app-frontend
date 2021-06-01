// import iconNotification from '../'
import '../css/rigister-login/rigisterLogin.css'
import { notifyMe, CollectionInternet, Session } from '../js/classes'

import {
   Button,
   Spin,
} from 'antd'
import React, { useEffect, useState, useRef, useContext, FC } from 'react'
import { FeedBack, Messages, Notifications } from '../js/feedback'

require('dotenv').config()

var internet = CollectionInternet.Internet
class LoginUser extends internet {

   public username: any
   public password: any
   constructor(username: any, password: any) {
      super()
      this.username = username
      this.password = password

   }
   async login(startLoader: Function, stopLoader: Function) {
      startLoader()
      const resultInternet = await this.getStatusIntrernet()
      
      console.log(resultInternet)
      if (!resultInternet) {
      stopLoader()
         return ''
      }

      const username = this.username.current.value
      const password = this.password.current.value
      try {
         if (username === '') {
            var message = FeedBack.instanc(new Messages())
            Messages.setSetting = { typeMessage: 'error', message: 'user name is empty' }
            message.feedBackMe()
            stopLoader()
            return ''
         } if (password === '') {
            var message = FeedBack.instanc(new Messages())
            Messages.setSetting = { typeMessage: 'error', message: 'password name is empty' }
            message.feedBackMe()
            stopLoader()
            return ''
         }
         console.log(username, password)

         var myHeaders = new Headers();
         myHeaders.append("Content-Type", "application/json");
         var user = JSON.stringify({ "username": username, "password": password });

         var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: user,

         };
         
            await fetch(String(process.env.REACT_APP_LOGIN) , requestOptions)
            .then(response => response.json())
            .then(result => {
               if (result.status === 'error') {
                  if (result.error === 'Operation `users.findOne()` buffering timed out after 10000ms') {
                     var message = FeedBack.instanc(new Messages())
                     Messages.setSetting = { typeMessage: 'error', message: 'The process took more time than it should' }
                     message.feedBackMe()
                     return ''
                  }

                  var message = FeedBack.instanc(new Messages())
                  Messages.setSetting = { typeMessage: 'error', message: result.error }
                  message.feedBackMe()
                  console.log(result.error)
                  return ''

               }
               console.log(result)
               notifyMe('Login', result.notification)
               Session.setSessionCookieToken(result)
               document.location.href = "/wallet-app"

            })
            .catch(error => console.log('error', error));
         stopLoader()

      } catch (error) {

      }


   }
}

var redirectToApp: Function = Session.redirectToApp
function Login() {
   const [display, setDisplay] = useState('none')
   const username = useRef<HTMLInputElement>(null)
   const password = useRef<HTMLInputElement>(null)
   var login = new LoginUser(username, password)

   useEffect(() => {
      redirectToApp()
   })

   function startLoader() {
      setDisplay('block')
   }
   function stopLoader() {
      setDisplay('none')
   }

   

   /////
   return (
      <>

         <div className="operation" >Login</div>
         <div className="rigisterLogin" >
            <div className="inputs username" >
               <div>User Name</div>
               <input ref={username} id="username" placeholder="write full name" className="input" type="text" />
            </div>
            <div className="inputs password" >
               <div>Password</div>
               <input ref={password} id="password" className="input" type="password" />
            </div>
            <Spin style={{ display: display }} />
            <Button type="primary" onClick={() => { login.login(startLoader, stopLoader); }} >Login</Button>
         
         </div>
      </>
   )
}

export default Login