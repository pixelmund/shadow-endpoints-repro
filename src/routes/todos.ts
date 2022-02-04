import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = () => {
	return {
		body: {
			todos: [{id: 1, text: 'Hello'}]
		}
	};
};