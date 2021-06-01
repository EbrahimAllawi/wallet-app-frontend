import React, { useState, useEffect, useRef, Component } from 'react';
import moment from 'moment'
import {
   DatePicker,
   Dropdown,
   Menu,
   Button,
   InputNumber,
   Input
} from 'antd'
import Operation, { Pay, Catch } from '../js/Operations';
import { connect, useSelector } from 'react-redux';

import { CollectionInternet } from '../js/classes';
import { addPay } from '../store/action/actionPay/actions';
import { addCatch } from '../store/action/actionCatch/actions';




function AddOpertion(props: any) {
   const { typeOperation } = props
   const [category, setCategory] = useState('choose')
   var [addOperation, setAddOperation] = useState<any>()
   // var o = new Operation(new Pay())
   
   var _Date: any
   var _Details: any
   var _Value: any
   useEffect(()=>{
      if(props.typeOperation === 'save pay') {
         setAddOperation(new Operation(new Pay()))
      }
      if(props.typeOperation === 'save catch') {
         setAddOperation(new Operation(new Catch()))
      }
      
   },[])


   useEffect(() => {
      _Date = document.getElementById('date-operation') as HTMLInputElement
      _Value = document.getElementById('value') as HTMLInputElement
      _Details = document.getElementById('details-operation') as HTMLInputElement
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
         <InputNumber defaultValue={5} id="value" className="input-value-operation" min={5} />
         <DatePicker id="date-operation" inputReadOnly={true} clearIcon={true} defaultValue={moment()} format="Y/M/D" />
         <Input id="details-operation" placeholder="type any description" />
         <Dropdown overlay={menu}>
            <Button>{category}</Button>
         </Dropdown>
         <Button type="primary" onClick={async() => {
            var internet = CollectionInternet.Internet
            const resultInternet = await new internet().getStatusIntrernet();
            if(!resultInternet)  return ''
            addOperation._addOperation({ _Value, _Date, _Details, category }, props)
            }} >{typeOperation}</Button>
      </>
   );
}

const stateToProps = (state: any) => {
   return state
}

const dispatchToProps = (dispatch: any) => {
   return {
      addPay: (pays: any, newPay: any) => dispatch(addPay(pays, newPay)),
      addCatch: (Catchs: any, newCatch: any) => dispatch(addCatch(Catchs, newCatch)),
   }

}

export default connect(stateToProps, dispatchToProps)(AddOpertion);