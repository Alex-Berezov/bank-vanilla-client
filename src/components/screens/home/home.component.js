import { BaseScreen } from '@/core/component/baseScreen.component'
import renderService from '@/core/services/render.service'

import cls from './home.module.scss'

import template from './home.component.html'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(template, [], cls)
		return element.outerHTML
	}
}
