import './css/main/main.css'
import Rigister from './Component/Rigister'
import Login from './Component/Login'
import WalletApp from './Component/WalletApp'
import Main from './Component/Main'
import Pay from './Component/pay'
import _Catch from './Component/_Catch'
import NotFound from './Component/NotFound'
import MyVisible from './Component/MyVisible'



import {Session } from "./js/classes"


import {
   BrowserRouter as Router,
   Route,
   Link,
   Switch,
} from 'react-router-dom';

import { Button } from 'antd'
import { createContext, useEffect, useState } from 'react'
import ModalShowOperation from './Component/ModalShowOperation'



function App(props: any) {
   const [showRigisterLogin, setHideRigisterLogin] = useState(true)
   // const [hideRigisterLogin, setHideRigisterLogin] = useState('inline')
   const logOut = new Session.LogOut()
   var _cookie = Session.getCookie('token')
   var homPageUrl = ()=> {
      if(_cookie == null) {
         return '/'
      }
      return 'wallet-app'
   }
   useEffect(() => {
      if (Session.getCookie('token') !== null) {
         setHideRigisterLogin(false)
      }

   })

   
   return (
      <>
         <ModalShowOperation />
         <MyVisible />

         <Router>
            <div className="container app" >
               <nav className="my-nav" >
                  <div  className="bar" ><Link to={homPageUrl()} >WalletApp</Link></div>
                  <div>
                     {showRigisterLogin ?
                        <>
                           <Button type="primary" className="rigister-login" ><Link to="/rigister" >Rigister</Link></Button>
                           <Button type="primary" className="rigister-login" ><Link to="/login" >Login</Link></Button>
                        </>
                        : null}
                     <Button onClick={() => logOut.deleteCookie('token')} type="primary" className="login rigister-login" >logout</Button>
                  </div>
               </nav>
               {/* <Button type="primary" onClick={()=> refresh()} >Refresh</Button> */}
               <Switch>
                  <Route exact path="/" component={() => <Main />} ></Route>
                  <Route exact path="/rigister" component={() => <Rigister />} ></Route>
                  <Route exact path="/wallet-app" component={() => <WalletApp />} ></Route>
                  <Route exact path="/pay" component={() => <Pay />} ></Route>
                  <Route exact path="/Login" component={() => <Login />} ></Route>
                  <Route exact path="/catch" component={() => <_Catch />} ></Route>
                  <Route path='*' exact={true} component={() => <NotFound />} />
               </Switch>
            </div>
         </Router>

      </>
   );
}

const stateToProps = (state: any) => {
   return state
}
// export default App;
// export default connect(stateToProps,null)(App)
export default App;
