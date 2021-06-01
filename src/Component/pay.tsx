import { useEffect, useMemo, useState, Component } from "react"

import "../css/operation/operation.css"

import AddOperation from "./AddOpertion"
import { Session } from "../js/classes"
import { connect, useDispatch, useSelector, useStore } from "react-redux"
import Operation from "./Operation"
import { typeOperation } from "../store/action/actions"
import { addPay, deletePay } from "../store/action/actionPay/actions"



function ShowAddPay() {
	var addPay = document.getElementById("add-pay")
	addPay?.style.setProperty("animation", `open-operation 1s linear forwards`)
	console.log("pay show")
}

function hideAddPay(e: any) {
	// hideAddPay?.addEventListener('click', function (e) {
	e.stopPropagation()
	var addPay = document.getElementById("add-pay")
	addPay?.style.setProperty("animation", `close-operation 1s linear forwards`)
	// })
}

var redirectToMain: Function = Session.redirectToMain

function Pay(props: any) {
	props.typeOperation("pay")

	useEffect(() => {
		redirectToMain()
		document.title = "Pay"
	})

	// const payR = useSelector((state:any) => state.payR)

	var myPays = props.payR.map((item: any) => {
		var date = new Date(item.date).toLocaleDateString()
		var d = `${date}`
		return (
			<>
				<Operation
					{...props}
					key={item._id}
					id={item._id}
					value={item.value}
					date={d}
					details={item.details}
					category={item.category}
					deleteOperation={(pay: any, id: any, alerady: any) =>
						props.deletePay(pay, id)
					}
				/>
			</>
		)
	})

	return (
		<>
			<div className="operation">
				<div
					id="add-pay"
					style={{ height: "0px" }}
					className="add-operation"
				>
					<AddOperation
						key="addOperation"
						{...props}
						// addnewOperation={(pays: any, newPay: any) =>
						// 	props.addPay(pays, newPay)
						// }
						typeOperation="save pay"
					/>
				</div>
				<div className="btn-add-operation" onClick={() => ShowAddPay()}>
					<span
						onClick={(event) => hideAddPay(event)}
						id="hide-add-operation"
						className="icon-minus"
					></span>
					<div>Add Pay</div>
				</div>
				<div className="my-operations">{myPays}</div>
			</div>
		</>
	)
}

const dispatchToProps = (dispatch: any) => {
	return {
		deletePay: (pay: any, _id: any) => dispatch(deletePay(pay, _id)),
		// addPay: (pays: any, newPay: any) => dispatch(addPay(pays, newPay)),
		typeOperation: (_typeOperation: string) => dispatch(typeOperation(_typeOperation))
	}
}
const stateToProps = (state: any) => {
	return state
}

export default connect(stateToProps, dispatchToProps)(Pay)
// export default Pay;
