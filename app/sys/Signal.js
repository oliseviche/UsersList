'use strict'

define(function() {
	return class Signal {
		constructor() {
			this.handlers = [];
		}

		add() {
			let args = [...arguments];
			let handler = args.shift();
			let context = args.shift();
			
			if (!this.handlers.includes(handler)) {
				this.handlers.push({
					handler: handler, 
					context: context || null,
					args: args || [] 
				})
			}
		}

		remove(handler) {
			this.handlers = this.handlers.filter((h) => handler != h.handler)
		}

		dispatch() {
			let args = [...arguments];
			this.handlers.forEach(h => {
				h.handler.apply(h.context, h.args.concat(args));
			})
		}
	}
})