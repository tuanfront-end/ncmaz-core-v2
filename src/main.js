import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
	HttpLink,
	from,
} from "@apollo/client";
import { RetryLink } from "@apollo/client/link/retry";
//
import "@glidejs/glide/dist/css/glide.core.min.css";
import "./styles/index.scss";
import "./style.css";
console.log(12345, "-------- FIRTS MAIN JS -------");
//

const cache = new InMemoryCache({
	addTypename: false,
	typePolicies: {
		// Post: {
		// 	keyFields: [
		// 		"ncmazVideoUrl",
		// 		"ncmazAudioUrl",
		// 		"ncPostMetaData",
		// 		"ncmazGalleryImgs",
		// 	],
		// },
		// User: {
		// 	keyFields: ["ncUserMeta"],
		// },
		// Category: {
		// 	keyFields: ["ncTaxonomyMeta"],
		// },
		// Tag: {
		// 	keyFields: ["ncTaxonomyMeta"],
		// },
	},
});

const link = new RetryLink();

const httpLink = new HttpLink({
	uri: ncmazcoreJsData.graphQLBasePath,
});

export const client = new ApolloClient({
	uri: ncmazcoreJsData.graphQLBasePath,
	cache,
	link: from([link, httpLink]),
});
