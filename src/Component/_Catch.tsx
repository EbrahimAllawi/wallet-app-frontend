import { useEffect, useState } from "react"

import "../css/operation/operation.css"

import AddOperation from "./AddOpertion"
import { Session } from "../js/classes"
import { connect } from "react-redux"
import Operation from "./Operation"
import { typeOperation } from "../store/action/actions"
import { deleteCatch } from "../store/action/actionCatch/actions"

function ShowAddCatch() {
	var addPay = document.getElementById("add-catch")
	addPay?.style.setProperty("animation", `open-operation 1s linear forwards`)
	console.log("pay show")
}

function hideAddCatch(e: any) {
	// hideAddPay?.addEventListener('click', function (e) {
	e.stopPropagation()
	var addPay = document.getElementById("add-catch")
	addPay?.style.setProperty("animation", `close-operation 1s linear forwards`)
	// })
}

var redirectToMain: Function = Session.redirectToMain

function _Catch(props: any) {
	props.typeOperation("catch")
	useEffect(() => {
		redirectToMain()
		document.title = "Catch"
	})


	var myCatchs = props.catchR.map((item: any) => {
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
					deleteOperation={(pay: any, id: any) =>
						props.deleteCatch(pay, id)
					}
				/>
			</>
		)
	})

	return (
		<>
			<div className="operation">
				<div
					id="add-catch"
					style={{ height: "0px" }}
					className="add-operation"
				>
					<AddOperation
						key="addOperation"
						{...props}
						// addnewOperation={(pays: any, newPay: any) =>
						// 	props.addPay(pays, newPay)
						// }
						typeOperation="save catch"
					/>
				</div>
				<div className="btn-add-operation" onClick={() => ShowAddCatch()}>
					<span
						onClick={(event) => hideAddCatch(event)}
						id="hide-add-operation"
						className="icon-minus"
					></span>
					<div>Add Catch</div>
				</div>
				<div className="my-operations">{myCatchs}</div>
			</div>
		</>
	)
}

const dispatchToProps = (dispatch: any) => {
	return {
		deleteCatch: (pay: any, _id: any) => dispatch(deleteCatch(pay, _id)),
		typeOperation: (_typeOperation: string) => dispatch(typeOperation(_typeOperation))
	}
}
const stateToProps = (state: any) => {
	return state
}

export default connect(stateToProps, dispatchToProps)(_Catch)
// export default Pay;
