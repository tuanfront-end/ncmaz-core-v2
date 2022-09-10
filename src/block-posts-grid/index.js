import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
/**
 * Internal dependencies
 */
import Edit from "./edit";
// import save from "./save";
import metadata from "./block.json";
import { ApolloProvider } from "@apollo/client";
import { Suspense } from "react";
import { Spinner } from "@wordpress/components";
import { client } from "../main";

registerBlockType(metadata.name, {
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<Spinner />}>
				<Edit {...props} />
			</Suspense>
		</ApolloProvider>
	),
	// save,
	// attributes______: {
	// 	...BLOCK_POST_ATTRIBUTES_COMMON,
	// 	blockLayoutStyle: { type: "string", default: "layout-1" },
	// 	postCardName: { type: "string", default: "card4" },
	// 	gridClass: {
	// 		type: "string",
	// 		default: "grid-cols-1 sm:grid-cols-2 lg:md:grid-cols-3 xl:grid-cols-4",
	// 	},
	// 	gridClassCustom: { type: "string", default: "" },
	// 	enableLoadMoreButton: { type: "boolean", default: true },
	// 	loadMoreButtonHref: { type: "string", default: "" },
	// },
});
