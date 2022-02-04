import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = () => {
	return {
		body: {
			name: 'Mike',
			stuff: {
				metadata: { title: 'Hi' }
			}
		}
	};
};

export const post: RequestHandler = () => {
	return {
		body: {
			errors: { name: 'Name should be 6 chars long' }
		}
	};
};
