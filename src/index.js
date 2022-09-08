import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
	HttpLink,
	from,
} from "@apollo/client";
import { Spinner } from "@wordpress/components";
import React, { Suspense, lazy } from "react";
import { RetryLink } from "@apollo/client/link/retry";
//
import "./style.css";
import "./styles/index.scss";
import "@glidejs/glide/dist/css/glide.core.min.css";

//
const { Fragment } = wp.element;
const { withSelect } = wp.data;
const { __ } = wp.i18n;
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

export const BLOCK_POST_ATTRIBUTES_COMMON = {
	filterDataBy: { type: "string", default: "by_filter" },
	posts: { type: "array", default: [] },
	categories: { type: "array", default: [] },
	authors: { type: "array", default: [] },
	tags: { type: "array", default: [] },
	orderBy: { type: "string", default: "AUTHOR" },
	order: { type: "string", default: "DESC" },
	viewMoreHref: { type: "string", default: "#" },
	heading: { type: "string", default: "Heading of section" },
	subHeading: {
		type: "string",
		default: "This is sub-heading of section",
	},
	numberPerPage: { type: "number", default: 8 },
	showFilterTab: { type: "boolean", default: true },
	hasBackground: { type: "boolean", default: false },
	graphQLvariables: { type: "object", default: {} },
	graphQLData: { type: "object", default: {} },
	expectedNumberResults: { type: "number", default: 8 },
};

console.log(2323232);
