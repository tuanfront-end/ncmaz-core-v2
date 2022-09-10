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
import { Spinner } from "@wordpress/components";

registerBlockType(metadata.name, {
	edit: (props) => (
		<Suspense fallback={<Spinner />}>
			<Edit {...props} />
		</Suspense>
	),
	save,
	attributes: {
		hasBackground: { type: "boolean", default: false },
		heading: {
			type: "string",
			default: "🎬 The Videos",
		},
		subHeading: {
			type: "string",
			default: `Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s welcome.`,
		},
		videoIds: {
			type: "array",
			default: [],
		},
	},
});
