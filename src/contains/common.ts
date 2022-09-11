export type ValueOfOptionFilterDataBy = "by_filter" | "by_specific";

export interface OptionFilterDataBy {
	label: string;
	value: ValueOfOptionFilterDataBy;
}

const OPTIONS_FILTER_DATA_BY: OptionFilterDataBy[] = [
	{ label: "Select data by specific", value: "by_specific" },
	{ label: "Select data by filter", value: "by_filter" },
];

export { OPTIONS_FILTER_DATA_BY };
