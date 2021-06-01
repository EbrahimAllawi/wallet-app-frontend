import { Button, DatePicker, Dropdown, Input, InputNumber, Menu } from 'antd';
import moment from 'moment'
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import _Operation, { Pay, Catch } from '../js/Operations';
import { setShowEditeOperation } from '../store/action/actions';
import { CollectionInternet } from '../js/classes';
import { editePay } from '../store/action/actionPay/actions';
import { editeCatch } from '../store/action/actionCatch/actions';

var _mounted = false

function EditOperation(props: any) {
   var [editOperation, setEdit] = useState<any>()
   var [category, setCategory] = useState<any>(props.EditR.category)
   var value: any, date: any, details: any, _id: string


   useEffect(() => {
      if (props.typeOperationR === 'pay') {
         setEdit(new _Operation(new Pay()))
      }
      if (props.typeOperationR === 'catch') {
         setEdit(new _Operation(new Catch()))
      }
      _id = props.EditR.id
   }, [props.EditR])
   
   useEffect(() => {
      value = document.getElementById('value-edite') as HTMLInputElement
      date = document.getElementById('date-operation-edite') as HTMLInputElement
      details = document.getElementById('details-operation-edite') as HTMLInputElement
   })


   const menu = (
      <Menu className="menu-category" >
         <Menu.Item onClick={() => setCategory('foood')}><span style={{ backgroundColor: 'rgb(244, 67, 54)' }} className="icon-food icon-category" /><div className="name-category" ></div> foood</Menu.Item>
         <Menu.Item onClick={() => setCategory('shopping')}><span style={{ backgroundColor: 'rgb(79, 195, 247)' }} className="icon-shopping-bag icon-category" /><div className="name-category" ></div> shopping</Menu.Item>
         <Menu.Item onClick={() => setCategory('housing')}><span style={{ backgroundColor: 'rgb(255, 167, 38)' }} className="icon-warehouse icon-category" /><div className="name-category" ></div> housing</Menu.Item>
         <Menu.Item onClick={() => setCategory('Transportation')}><span style={{ backgroundColor: 'rgb(120, 144, 156)' }} className="icon-bus icon-category" /><div className="name-category" ></div> Transportation</Menu.Item>
         <Menu.Item onClick={() => setCategory('entertentment')}><span style={{ backgroundColor: 'rgb(100, 221, 23)' }} className="icon-child icon-category" /><div className="name-category" ></div> entertentment</Menu.Item>
         <Menu.Item onClick={() => setCategory('technologia')}><span style={{ backgroundColor: 'rgb(83, 109, 254)' }} className="icon-laptop icon-category" /><div className="name-category" ></div> technologia</Menu.Item>
         <Menu.Item onClick={() => setCategory('financial expenses')}><span style={{ backgroundColor: 'rgb(0, 191, 165)' }} className="icon-money icon-category" /><div className="name-category" ></div> financial expenses</Menu.Item>
         <Menu.Item onClick={() => setCategory('Investments')}><span style={{ backgroundColor: 'rgb(255, 64, 129)' }} className="icon-money-1 icon-category" /><div className="name-category" ></div> Investments</Menu.Item>
         <Menu.Item onClick={() => setCategory('else')}><span style={{ backgroundColor: 'rgb(158, 158, 158)' }} className="icon-align-justify icon-category" /><div className="name-category" ></div> else</Menu.Item>
      </Menu>
   )
   return (
      <>
         <div id="modalEdit" className="modal-operation modal-edite">
            <div className="modal-edit-head ">
               <div>edit</div>
               <div onClick={() => props.setShowEditeOperation(false)} className="icon-cancel" ></div>
            </div>
            <div className="modal-edit-body" >
               <InputNumber className="inputs-operation input-value-operation" id={"value-edite"} defaultValue={Number(props.EditR.value)} min={5} />
               <DatePicker className="inputs-operation" id="date-operation-edite" defaultValue={moment(props.EditR.date, 'DD/MM/YY')} clearIcon={true} />
               <Input className="inputs-operation" id="details-operation-edite" defaultValue={props.EditR.details} placeholder="type any description" />
               <Dropdown className="inputs-operation" overlay={menu}>
                  <Button>{category}</Button>
               </Dropdown>
               <Button onClick={async () => {
                  var internet = CollectionInternet.Internet
                  const resultInternet = await new internet().getStatusIntrernet();
                  if(!resultInternet)  return ''
                  editOperation._editOperation({
                     _Value: value.value,
                     _Date: date.value,
                     _Details: details.value,
                     category,
                     _id: props.EditR.id
                  },props)
                  // console.log(value.value)
                  // props.editePay('1','payEdited')
                  // alert(date.value)
               }} className="inputs-operation" type="primary">edit</Button>
            </div>
         </div>
      </>
   );
}

const dispatchToProps = (dispatch: any) => {
   return {
      setShowEditeOperation: (isShow: any) => dispatch(setShowEditeOperation(isShow)),
      editePay: (Pays: any, PayEdited:any) => dispatch(editePay(Pays, PayEdited)),
      editeCatch: (Catchs: any, CatchEdited:any) => dispatch(editeCatch(Catchs, CatchEdited))
   }

}

const stateToProps = (state: any) => {
   return state
}
export default connect(stateToProps, dispatchToProps)(EditOperation);

