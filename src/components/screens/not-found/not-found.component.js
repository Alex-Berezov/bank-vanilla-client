import { BaseScreen } from '@/core/component/baseScreen.component'

export class NotFound extends BaseScreen {
	constructor() {
		super({ title: 'Not Found' }) // Устанавливаем заголовок для Home
	}

	render() {
		return `
            <div>
                <h1>404 Not Found</h1>
                <p>Page Not Found.</p>
            </div>
        `
	}
}
