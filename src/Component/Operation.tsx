import React, { Props, useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { CollectionInternet } from '../js/classes';

import _Operation, { openEditOperation, openOperation, Pay, Catch } from '../js/Operations';
import { getIdOperation, loadOneOperation, setEdit, setShowEditeOperation, typeOperation} from '../store/action/actions';
import EditOperation from './EditOperation';


interface IProps {
   id: string
   value: number
   date: any
   details: string
   category: string
   payR?: any
   deleteOperation: any
   loadOneOperation?: any
   // getIdOperation: Function
}
// function t(b:any) {
//     if() {

//     }
//     <EditOperation/>    

// }
function Operation(props: any) {
   const { id, value, date, details, category } = props
   var [actionOperation, setActionOperation] = useState<any>()
   // var Operation = new _Operation(new Pay())
   // TODO 
   // ?
   // !

   useEffect(()=> {
      if(props.typeOperationR === 'pay') {
         setActionOperation(new _Operation(new Pay()))
      }
      if(props.typeOperationR === 'catch') {
         setActionOperation(new _Operation(new Catch()))
      }
   },[])
   return (
      <>
         <div className="my-operation" >
            <div onClick={async() => {
               var internet = CollectionInternet.Internet
               const resultInternet = await new internet().getStatusIntrernet();
               if(!resultInternet)  return ''
               actionOperation._deleteOperation(id, props);
               } } className="icon-trash-empty edit-delete delete" ></div>
            <div id={id} className="values" onClick={() => openOperation(id, props.loadOneOperation)}>
               {/* <div id={id} className="values" onClick={()=> props.loadOneOperation('operation')}> */}
               <div id={`value-${id}`} className="value" >{value} S.P</div>
               <div id={`date-${id}`} className="date" >{date}</div>
               <div id={`details-${id}`} className="details" >{details}</div>
               <div id={`category-${id}`} className="category" >{category}</div>
            </div>
            <div className="icon-pen edit-delete edite" onClick={() => {
               openEditOperation(id, { value, date:date, details, category }, props.setEdit); 
               props.setShowEditeOperation(true);
               // props.typeOperation(props.type_operation)
               
               }} ></div>
         </div>
      </>
   );
}

const dispatchToProps = (dispatch: any) => {
   return {
      loadOneOperation: (_oneOperation: any) => dispatch(loadOneOperation(_oneOperation)),
      getIdOperation: (idOperation: string) => dispatch(getIdOperation(idOperation)),
      setEdit: (category_edite: any) => dispatch(setEdit(category_edite)),
      setShowEditeOperation: (isShow: any) =>  dispatch(setShowEditeOperation(isShow)),
      typeOperation: (_typeOperation: string) => dispatch(typeOperation(_typeOperation))
   }
   
}
const stateToProps = (state: any) => {
   return state
}
export default connect(stateToProps, dispatchToProps)(Operation);