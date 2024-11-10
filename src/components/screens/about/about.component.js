import { BaseScreen } from '@/core/component/baseScreen.component'

export class About extends BaseScreen {
	constructor() {
		super({ title: 'About' }) // Устанавливаем заголовок для About
	}

	render() {
		return `
            <div>
                <h1>About</h1>
                <p>This is the About page of the application.</p>
            </div>
        `
	}
}
