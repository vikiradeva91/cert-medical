// import cookie from 'cookie';

// export const handle = async ({ request, resolve }) => {
// 	// const cookies = cookie.parse(request.headers.cookie || '');
// 	// request.locals.userid = cookies.userid || uuid();

//     console.log("request", request);

// 	// TODO https://github.com/sveltejs/kit/issues/1046
// 	// if (request.query.has('_method')) {
// 	// 	request.method = request.query.get('_method').toUpperCase();
// 	// }

// 	const response = await resolve(request);

// 	// if (!cookies.userid) {
// 	// 	// if this is the first time the user has visited this app,
// 	// 	// set a cookie so that we recognise them when they return
// 	// 	response.headers['set-cookie'] = cookie.serialize('userid', request.locals.userid, {
// 	// 		path: '/',
// 	// 		httpOnly: true
// 	// 	});
// 	// }

// 	return response;
// };

// export const getSession = (request) => {
//     console.log("session request", request);
// }
