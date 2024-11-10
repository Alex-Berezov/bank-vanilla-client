import { BaseScreen } from '@/core/component/baseScreen.component'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' }) // Устанавливаем заголовок для Home
	}

	render() {
		return `
            <div>
                <h1>Home</h1>
                <p>Welcome to the Home page.</p>
            </div>
        `
	}
}
