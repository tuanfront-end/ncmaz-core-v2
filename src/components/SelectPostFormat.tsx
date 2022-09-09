import React from "react";
import { useState, useEffect } from "react";
import { SelectControl } from "@wordpress/components";

const SelectPostFormat = ({ onChange, defaultValue }) => {
	const [format, setFormat] = useState(defaultValue);

	return (
		<div>
			<SelectControl
				label="Format"
				value={format}
				options={[
					{ label: "standard", value: "standard" },
					{ label: "gallery", value: "gallery" },
					{ label: "video", value: "video" },
					{ label: "audio", value: "audio" },
				]}
				onChange={(e) => {
					setFormat(e);
					onChange && onChange(e);
				}}
			/>
		</div>
	);
};

export default SelectPostFormat;
