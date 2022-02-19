(function () {
	'use strict';

	class BrownCustomElement extends HTMLElement {
		connectedCallback() { this.render(); }

		render() {
			this.innerHTML = 'Hello from Brown Custom Element render function';
		}
	}

	window.customElements.define('brown-custom-element', BrownCustomElement);

})();
