export const limitedChar = (str: string, length: number) => `${str.length <= length ? str : str.substring(0, length)}...`;
export const removeDuplicate = <T = any>(array: T[]) => {
	let uniqueSet = new Set(array);
	let uniqueArray = Array.from(uniqueSet);
	return uniqueArray;
};
