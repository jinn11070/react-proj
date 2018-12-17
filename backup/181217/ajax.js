import $ from "jquery";

/* Ajax functions. */
const urlBase = '/';
const params = {
    thisPath: ''
}
/*
export function getThisPath() {
    return params.thisPath;
}
export function setThisPath(eventKey) {
    console.log(eventKey);
    params.thisPath = eventKey;

    $("#content").removeAttr("name");
    $("#content").attr("name", eventKey);
}
*/

export function list(url, callback, callbackError) {

	$.ajax({
		type: 'post',
		url: urlBase + url, //Controller/method
		dataType: 'json',
		cache: false,
		success: (data) => {
			callback(data)
		},
		error: (xhr, status, err) => {
			console.error(xhr, status, err.toString())
			if (callbackError !== undefined) {
				callbackError(err)
			}
		}
	});
}
/*export function create(url, user, callback, callbackError) {

	$.ajax({
		type: 'post',
		url: url, //Controller/method
		dataType: 'json',
		data: user,
		cache: false,
		success: (data) => {
			callback(data)
		},
		error: (xhr, status, err) => {
			console.error(xhr, status, err.toString())
			if (callbackError !== undefined) {
				callbackError(err)
			}
		}
	});
}*/

