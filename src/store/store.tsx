import {
   oneOperationReducer,
   PaysReducer,
   idOperationReducer,
   setEditReducer,
   isShowEditReducer,
   typeOperation,
   CatchesReducer
} from './reduce/'
import { createStore, applyMiddleware, combineReducers } from 'redux'
// import logger from 'redux-logger' 
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';









function loadState() {
   const state = localStorage.getItem('state')
   if (state !== null) {
      return JSON.parse(state)
   }
   return {
      operations: 'empty'
   }
}

function saveState(state: any) {
   localStorage.setItem('state', JSON.stringify(state))
}

var allReducers = combineReducers({
   payR: PaysReducer,
   catchR: CatchesReducer,
   oneOp: oneOperationReducer,
   idOperationR: idOperationReducer,
   EditR: setEditReducer,
   isShowEditR: isShowEditReducer,
   typeOperationR: typeOperation
})

var store = createStore(allReducers, loadState(), composeWithDevTools(applyMiddleware()))
store.subscribe(() => {
   saveState(store.getState())
   // console.log('aa',store.getState())
})
export default store
