export class BrownCustomElement extends HTMLElement {
	static get observedAttributes() {
		return ['message']
	}

	connectedCallback() { this.render() }

	render() {
		const message = this.getAttribute('message')
		this.innerHTML = `Your message is: ${message}`
	}
}
