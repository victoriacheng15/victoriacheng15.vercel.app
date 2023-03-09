export function getFormattedDate(date: string | number | Date) {
	const formattedDate = new Date(date).toISOString();
	return formattedDate.split("T")[0];
}
