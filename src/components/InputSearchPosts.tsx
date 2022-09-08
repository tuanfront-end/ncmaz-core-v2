import React, { useEffect, useState, FC } from "react";
import { __ } from "@wordpress/i18n";
import _ from "lodash";
import Select from "react-select";
import { gql, useLazyQuery } from "@apollo/client";
import { GQL_QUERY_SEARCH_POSTS } from "../contains/contants";

interface Props {
	onChange: (selected) => void;
	defaultValue: any[];
}

const InputSearchPosts: FC<Props> = ({ onChange, defaultValue = [] }) => {
	const [selected, setSelected] = useState(defaultValue);
	const [searchContent, setSearchContent] = useState("");

	//
	useEffect(() => {
		searchContent && loadGreeting();
	}, [searchContent]);

	const hanleChangeSelect = (selected) => {
		setSelected(selected);
		onChange && onChange(selected);
	};

	//
	let GQL_QUERY__string = GQL_QUERY_SEARCH_POSTS;
	const gqlQuery = gql`
		${GQL_QUERY__string}
	`;
	const [loadGreeting, { loading, error, data, called }] = useLazyQuery(
		gqlQuery,
		{ variables: { search: searchContent } }
	);

	let postsList = data?.posts?.edges || [];
	if (postsList && postsList.length) {
		postsList = postsList.map((item) => ({
			value: item.node.slug,
			label: item.node.title,
		}));
	}
	//
	const handleInputChange = _.debounce(function (e) {
		setSearchContent(e);
	}, 200);
	//

	return (
		<div className="w-full space-y-1">
			<legend>{__("Type and select posts", "ncmaz-core")}</legend>
			<Select
				placeholder="Select posts..."
				isMulti
				onInputChange={handleInputChange}
				isLoading={loading}
				value={selected}
				onChange={hanleChangeSelect}
				options={postsList}
			/>
		</div>
	);
};

export default InputSearchPosts;
