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
import { ATTR_SETTINGS_SLIDER, BLOCK_POST_ATTRIBUTES_COMMON, client } from "..";
import { Spinner } from "@wordpress/components";

registerBlockType(metadata.name, {
	edit: (props) => (
		<ApolloProvider client={client}>
			<Suspense fallback={<Spinner />}>
				<Edit {...props} />
			</Suspense>
		</ApolloProvider>
	),
	// save,
	attributes____: {
		blockLayoutStyle: { type: "string", default: "layout-1" },
		postCardName: { type: "string", default: "card4" },
		sectionId: { type: "string", default: "gutenberg_section_id" },
		//
		...ATTR_SETTINGS_SLIDER,
		...BLOCK_POST_ATTRIBUTES_COMMON,
	},
});
