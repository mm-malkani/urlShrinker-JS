const success = (message, results, statusCode) => {
	return {
		message,
		error: false,
		code: statusCode,
		results,
	}
}

const error = (message, results, statusCode) => {
	const codes = [200, 201, 400, 401, 404, 403, 409, 422, 500, 429]
	const findCode = codes.find(code => code == statusCode)
	if (!findCode) statusCode = 500
	else statusCode = findCode
	return {
		message,
		code: statusCode,
		error: true,
		results,
	}
}

const validation = (message, errors) => {
	return {
		message: message,
		error: true,
		code: 422,
		errors,
	}
}

export {
    success,
    error,
    validation,
}