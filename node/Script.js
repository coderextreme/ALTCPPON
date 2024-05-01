class LOG {
	constructor() {
		this.array = [];
	}
	join(s) {
		return this.array.join(s);
	}
	push(s) {
		this.array.push(s);
	}
	log(el) {
		this.array.push(el);
	}
}
