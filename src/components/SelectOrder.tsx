import React, { useState, useEffect } from "react";
import { SelectControl } from "@wordpress/components";

const SelectOrder = ({ onChange, defaultValue = "DESC" }) => {
	const [order, setOrder] = useState(defaultValue);

	return (
		<div>
			<SelectControl
				label="Order"
				value={order}
				options={[
					{ label: "DESC", value: "DESC" },
					{ label: "ASC", value: "ASC" },
				]}
				onChange={(e) => {
					setOrder(e);
					onChange && onChange(e);
				}}
			/>
		</div>
	);
};

export default SelectOrder;
