import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import { ApolloProvider } from "@apollo/client";
import { Suspense } from "react";
import { BLOCK_POST_ATTRIBUTES_COMMON, client } from "..";
import { Spinner } from "@wordpress/components";

registerBlockType(metadata.name, {
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<Spinner />}>
				<Edit {...props} />
			</Suspense>
		</ApolloProvider>
	),
	save,
	attributes: {
		sectionName: { type: "string", default: "magazine-1" },
		//
		...BLOCK_POST_ATTRIBUTES_COMMON,
		//
	},
});
