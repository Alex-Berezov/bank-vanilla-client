import { BaseScreen } from '@/core/component/baseScreen.component'

export class Auth extends BaseScreen {
	constructor() {
		super({ title: 'Auth' }) // Устанавливаем заголовок для Home
	}

	render() {
		return `
            <div>
                <h1>Auth</h1>
                <p>Welcome to the Auth page.</p>
            </div>
        `
	}
}
