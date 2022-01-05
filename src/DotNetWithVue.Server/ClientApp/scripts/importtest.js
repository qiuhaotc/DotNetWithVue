var a = 3;
var b = 4;

// Export a function as default export
// import DDD from "../scripts/importtest";
export default function () {
	return {
		A: a
	}
}

// Export specific value
// import { b } from "../scripts/importtest";
export { b }