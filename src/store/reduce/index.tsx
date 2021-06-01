import {
	oneOperation,
	_idOperation,
	_EditeOperation,
	showEditeOperation,
	typeOfOperation
} from "../action/types"

import { add_Pay, delete_Pay, edit_Pay, pays } from "../action/actionPay/types"

import { add_Catch, delete_Catch, edit_Catch, _catch } from "../action/actionCatch/types"

export function PaysReducer(state: any, action: any) {
	// console.log(state, action)
	switch (action.type) {
		case pays: {
			state = action.Pays
			return state
		}

		case delete_Pay: {
			var index = action.Pays.findIndex(function (i: any) {
				return i._id === action._id
			})
			if (index > -1) {
				console.log(index)
				let nwArr = [... action.Pays ];
				nwArr.splice(index,1);
				return nwArr;
			}

			return state
		}
		case add_Pay: {
			console.log(action.newPay)
			let newArr = [...action.Pays]
			newArr.push(action.newPay)
			return newArr
		}
		case edit_Pay: {
			var index = action.Pays.findIndex(function (i: any) {
				return i._id == action.PayEdited._id
			})
			action.Pays[index] = action.PayEdited
			// console.log(action.Pays[index])
			console.log(action.PayEdited)
			return state
		}

		default: {
			if (state === undefined) {
				return ""
			}
			return state
		}
	}
}

export function CatchesReducer(state: any, action: any) {
	// console.log(state, action)
	switch (action.type) {
		case _catch: {
			state = action.Catch
			return state
		}

		case delete_Catch: {
			var index = action.Catches.findIndex(function (i: any) {
				return i._id === action._id
			})
			if (index > -1) {
				console.log(index)
				var newArr = [...action.Catches]
				newArr.splice(index, 1)
				// action.Catches.splice(index, 1)
				// return state
				return newArr
			}

			return state
		}
		case add_Catch: {
			console.log(action.newCath)
			let newArr = [...action.Catches]
			newArr.push(action.newCath)
			return newArr

		}
		case edit_Catch: {
			var index = action.Catches.findIndex(function (i: any) {
				return i._id == action.CatchEdited._id
			})
			action.Catches[index] = action.CatchEdited
			// console.log(action.Pays[index])
			console.log(action.CatchEdited)
			return state
		}

		default: {
			if (state === undefined) {
				return ""
			}
			return state
		}
	}
}

export function oneOperationReducer(state: any, action: any) {
	switch (action.type) {
		case oneOperation: {
			state = action.OneOperation
			return state
		}
		default: {
			if (state === undefined) {
				return ""
			}
			return state
		}
	}
}

export function idOperationReducer(state: any, action: any) {
	switch (action.type) {
		case _idOperation: {
			state = action.idOperation
			return state
		}
		default: {
			if (state === undefined) {
				return ""
			}
			return state
		}
	}
}

export function setEditReducer(state: any, action: any) {
	switch (action.type) {
		case _EditeOperation: {
			state = action.valueEdite
			return state
		}
		default: {
			if (state === undefined) {
				return ""
			}
			return state
		}
	}
}

export function isShowEditReducer(state: any, action: any) {
	switch (action.type) {
		case showEditeOperation: {
			state = action.isShow
			return state
		}

		default: {
			if (state === undefined) {
				return false
			}
			return state
		}
	}
}

export function typeOperation(state: any, action: any) {
	switch (action.type) {
		case typeOfOperation: {
			state = action._typeOperation
			return state
		}

		default: {
			if (state === undefined) {
				return "no type"
			}
			return state
		}
	}
}
