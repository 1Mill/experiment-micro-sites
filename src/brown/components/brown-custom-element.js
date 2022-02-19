export class BrownCustomElement extends HTMLElement {
	connectedCallback() { this.render() }

	render() {
		this.innerHTML = 'Hello from Brown Custom Element render function using Microbundler!'
	}
}
