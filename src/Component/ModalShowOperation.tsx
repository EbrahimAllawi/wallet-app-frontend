import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../js/Operations';


function ModalOperation(props:any) {
    var {value, date, details, category, typeOperation} = props.oneOp
    console.log(props)
    return (
        <>
            <div id="modal-operation" className="modal-operation-show modal-operation" >
                <div className="modal-box">
                    <div className="modal-head">
                        <span className="">{typeOperation}</span>
                        <span onClick={()=> hideModal('modal-operation')} className="close icon-cancel"></span>
                    </div>
                    <div id="modal-body" className="modal-body">
                        <div id="myOperation" className="my-operation" >
                            <div className="keys">
                                <div  className="value" >value</div>
                                <div className="date" >date</div>
                                <div className="details" >details</div>
                                <div className="category" >category</div>
                            </div>
                            <div className="values" >
                            {/* <div id={id} className="values" onClick={()=> props.loadOneOperation('operation')}> */}
                                <div  className="value" >{value}</div>
                                <div className="date" >{date}</div>
                                <div className="details" >{details}</div>
                                <div className="category" >{category}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const stateToProps = (state:any) => {
    return state
}

export default connect(stateToProps)(ModalOperation);