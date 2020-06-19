export function validateEmail(value) {
	let error;
	if (!value) {
		error = "*Email is a Required Field";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		error = "*Invalid email address";
	}
	return error;
}
export function validateMessage(value) {
	let error;
	if (!value) {
		error = "Message is a required field";
	}
	return error;
}
export function validateSubject(value) {
	let error;
	if (!value) {
		error = "Subject is a required field";
	}
	return error;
}
export function validateName(value) {
	let error;
	if (!value) {
		error = "Name is a required field";
	}
	return error;
}
