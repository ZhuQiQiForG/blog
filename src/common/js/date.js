export function nowDate() {
	let myDate = new Date();
	let y = myDate.getFullYear().toString();
	let m = myDate.getMonth() + 1;
	m = m.toString();
	let d = myDate.getDate().toString();
	let t = myDate.toLocaleTimeString();
	let time = y + '-' + m + '-' + d + ' ' + t;
	return time;
};
