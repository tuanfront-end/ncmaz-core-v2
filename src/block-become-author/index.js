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

//------------------ TAILWINDCSS AND COMMON CSS -----------------
import "../style.css";
import "../styles/index.scss";
import "@glidejs/glide/dist/css/glide.core.min.css";
//-----------------------------------------

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
	attributes: {
		hasBackground: { type: "boolean", default: true },
		headingSmallText: {
			type: "string",
			default: "supper change your planning powers",
		},
		heading: {
			type: "string",
			default: "Become an author and share your great stories",
		},
		description: {
			type: "string",
			default: `Become an author you can earn extra income by writing articles. Read
		and share new perspectives on just about any topic. Everyone’s welcome.`,
		},
		buttonText: { type: "string", default: "Become an author" },
		buttonHref: { type: "string", default: "/#" },
		mediaId: { type: "number", default: 0 },
		mediaUrl: { type: "string", default: "" },
		mediaSrcSet: { type: "string", default: "" },
	},
});
