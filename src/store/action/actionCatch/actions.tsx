import { add_Catch, delete_Catch, edit_Catch, _catch } from "./types";

export function loadCatch(Catch: any) {
	return {
		type: _catch,
		Catch
	}
}

export function deleteCatch(Catches: any, _id: any) {
	console.log(Catches)
	return {
		type: delete_Catch,
		Catches,
		_id
	}
}

export function editeCatch(Catches: any, CatchEdited: any) {
	return {
		type: edit_Catch,
		Catches,
		CatchEdited
	}
}

export function addCatch(Catches: any, newCath: any) {
	return {
		type: add_Catch,
		Catches,
		newCath
	}
}