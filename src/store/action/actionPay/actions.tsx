import { add_Pay, delete_Pay, edit_Pay, pays } from "./types"

export function loadPays(Pays: any) {
	return {
		type: pays,
		Pays
	}
}

export function deletePay(Pays: any, _id: any) {
	console.log(Pays)
	return {
		type: delete_Pay,
		Pays,
		_id
	}
}

export function editePay(Pays: any, PayEdited: any) {
	return {
		type: edit_Pay,
		Pays,
		PayEdited
	}
}

export function addPay(Pays: any, newPay: any) {
	return {
		type: add_Pay,
		Pays,
		newPay
	}
}
