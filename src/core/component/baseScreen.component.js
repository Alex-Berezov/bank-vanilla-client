import { getTitle } from '@/config/seo.config'

export class BaseScreen {
	/**
	 * Create a new BaseScreen instance
	 * @param {Object} options - The options for the BaseScreen
	 * @param {string} options.title - The title of the page
	 * @description Set the title of the page
	 */

	constructor({ title }) {
		document.title = getTitle(title)
	}

	/**
	 * Render the child component content
	 * @return {HTMLElement} The child component content
	 */
	render() {
		throw new Error('Method "render" must be implemented in the child class.')
	}
}
