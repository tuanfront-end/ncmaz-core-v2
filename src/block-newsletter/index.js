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

//
const { Fragment } = wp.element;
const { withSelect } = wp.data;
const { __ } = wp.i18n;
//

registerBlockType(metadata.name, {
	edit: withSelect((select, props) => {
		return {
			media: props.attributes.mediaId
				? select("core").getMedia(props.attributes.mediaId)
				: undefined,
		};
	})((props) => (
		<Suspense fallback={<Spinner />}>
			<Edit {...props} />
		</Suspense>
	)),
	save,
	// attributes: {
	// 	hasBackground: { type: "boolean", default: false },
	// 	heading: {
	// 		type: "string",
	// 		default: "Join our newsletter 🎉",
	// 	},
	// 	subHeading: {
	// 		type: "string",
	// 		default:
	// 			"Read and share new perspectives on just about any topic. Everyone’s welcome.",
	// 	},
	// 	mediaId: { type: "number", default: 0 },
	// 	mediaUrl: { type: "string", default: "" },
	// 	mediaSrcSet: { type: "string", default: "" },
	// 	descLists: { type: "array", default: [] },
	// },
});
