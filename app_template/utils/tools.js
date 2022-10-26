const Tools = {
	numberWithCommas(value){
		let num = new Number(value)
		return num.toLocaleString()
	}
}

export default Tools;