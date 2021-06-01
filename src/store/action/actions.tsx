import {
	oneOperation,
	_idOperation,
	_EditeOperation,
	showEditeOperation,
	typeOfOperation
} from "./types"


export function loadOneOperation(OneOperation: any) {
	return {
		type: oneOperation,
		OneOperation
	}
}

export function getIdOperation(idOperation: string) {
	return {
		type: _idOperation,
		idOperation
	}
}

interface IV {
	value: number
	date: string
	details: string
	category: string
	id: string
}

export function setEdit(valueEdite: IV) {
	return {
		type: _EditeOperation,
		valueEdite
	}
}

export function setShowEditeOperation(isShow: boolean) {
	return {
		type: showEditeOperation,
		isShow
	}
}

export function typeOperation(_typeOperation: string) {
	return {
		type: typeOfOperation,
		_typeOperation
	}
}
