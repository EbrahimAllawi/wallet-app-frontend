import { Card } from 'antd'

import '../css/walletApp/wallet.css'

import { CollectionInternet, Session } from "../js/classes"
import { useEffect, useRef, useState } from 'react'
import Cookies from 'js-cookie'
import { FeedBack, Messages } from '../js/feedback';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


import { loadPays } from '../store/action/actionPay/actions'
import { loadCatch } from '../store/action/actionCatch/actions'
var redirectToMain: Function = Session.redirectToMain


async function getInfoUser(setLoadingCard: Function) {
   var internet = CollectionInternet.Internet
   const resultInternet = await new internet().getStatusIntrernet();
   console.log(resultInternet)
   if(!resultInternet){
      setLoadingCard(false)
      return ''
   }  
   
   const logOut = new Session.LogOut()
   var dataUser = ''
   try {
      // startLoader()
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var cookie = Cookies.get('token')
      var token = JSON.stringify({ "token": cookie });

      var requestOptions = {
         method: 'POST',
         headers: myHeaders,
         body: token
      };
      
      
         await fetch(String(`${process.env.REACT_APP_IFOUSER}`), requestOptions)
         .then(response => response.json())
         .then(result => {
            console.log('start')
            if (result.status === 'jwt expired') {
               var message = FeedBack.instanc(new Messages())
               Messages.setSetting = { typeMessage: 'error', message: result.message }
               message.feedBackMe()
               logOut.deleteCookie('token')
               redirectToMain()
               return ''
            }
            console.log(result['dataUserToSent'])
            setLoadingCard(false)
            dataUser = result['dataUserToSent']

         })
         .catch(error => {
            console.log('error', error)
            return error(error.name)
         });
      // console.log('info')


   } catch (err) {
      console.log(err.message)
      var message = FeedBack.instanc(new Messages())
      Messages.setSetting = { typeMessage: 'error', message: err.message }
      message.feedBackMe()
      return ''
   }
   return dataUser
}


// var mounted = false
function WalletApp(props: any) {
   // var [cookie, setCookie] = useState(Cookies.get('token'))
   var [dataUser, SetDataUser] = useState<any>('')
   var [loadingCards, setLoadingCard] = useState(true)

   var [valuePays, setValuePays] = useState<number>(0)
   var [valuecatch, setValuecatch] = useState<number>(0)

   useEffect(() => {
      document.title = 'Wallet-App'
      // console.log(process.env.REACT_APP_LOGIN)
      redirectToMain()
      console.log('first')
   }, [])

   useEffect(() => {
      // if (!mounted) {
      //    console.log(props)
      //    mounted = true;
      //    return
      // }
      // console.log('use 1')
      // mounted = false
      getInfoUser(setLoadingCard).then(result => {
         // console.log(result)
         SetDataUser(result)
      })
      // console.log(loadingCards)
   }, [])

   useEffect(() => {
      if (dataUser['pays'] == null && dataUser['pays'] == undefined) {
         return;
      }

      console.log('af')
      props.loadPays(dataUser['pays'])
      var totalPays: number = 0
      totalPays = Object.values(dataUser['pays']).reduce(function (total: number, pays: any) {
         return total + pays.value
      }, 0)
      setValuePays(totalPays)
      console.log(totalPays)

      if (dataUser['catch'] == null && dataUser['catch'] == undefined) {
         return;
      }
      props.loadCatch(dataUser['catch'])
      var totalCatchs: number = 0
      totalCatchs = Object.values(dataUser['catch']).reduce(function (total: number, catchs: any) {
         return total + catchs.value
      }, 0)

      setValuecatch(totalCatchs)
      console.log(totalCatchs)


   }, [dataUser])

   // useEffect(() => {
   //     setValuePays(1)
   //     console.log(1111111111)
   // })

   return (
      <>


      {/* <ModalShowOperation /> */}
         {/* <div>app</div> */}
         <div style={{textAlign:'center'}} >{dataUser.username}</div>

         <Card type="inner" title="Pays" loading={loadingCards}>
            <div>you pays {valuePays} S.P</div>
            <Link to="/pay" >add pay</Link>
         </Card>

         <br></br>
         <Card type="inner" title="Catches" loading={loadingCards}>
            <div>you catch {valuecatch} S.P</div>
            <Link to="/catch" >add catch</Link>

         </Card>
         <br></br>
         <Card type="inner" title="Total" loading={loadingCards}>
            you have {valuecatch - valuePays} S.P in your account
         </Card>


      </>
   );
}

const stateToProps = (state: any) => {
   return {
      oper: state
   }

}
const dispatchToProps = (dispatch: any) => {
   return {
      loadPays: (_Pays: any) => dispatch(loadPays(_Pays)),
      loadCatch:(_Catch:any)=> dispatch(loadCatch(_Catch))
   }

}

// export default WalletApp
export default connect(stateToProps, dispatchToProps)(WalletApp);