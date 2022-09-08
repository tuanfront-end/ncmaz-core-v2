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

console.log(999999);

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

//
//
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
export const ATTR_SETTINGS_SLIDER = {
	itemPerView: { type: "number", default: 4 },
	sliderStartAt: { type: "number", default: 0 },
	sliderAutoplayTime: { type: "number", default: 0 },
	sliderHoverpause: { type: "boolean", default: false },
	sliderAnimationDuration: { type: "number", default: 400 },
	sliderRewind: { type: "boolean", default: true },
};

export const BLOCK_TERM_ATTRIBUTES_COMMON = {
	blockLayoutStyle: { type: "string", default: "layout-1" },
	termCardName: { type: "string", default: "card2" },
	typeOfTerm: { type: "string", default: "category" },
	filterDataBy: { type: "string", default: "by_filter" },
	categories: { type: "array", default: [] },
	tags: { type: "array", default: [] },
	orderBy: { type: "string", default: "NAME" },
	order: { type: "string", default: "DESC" },
	heading: { type: "string", default: "Heading of section" },
	subHeading: {
		type: "string",
		default: "This is sub-heading of section",
	},
	numberPerPage: { type: "number", default: 10 },
	hasBackground: { type: "boolean", default: false },
	graphQLvariables: { type: "object", default: {} },
	graphQLData: { type: "object", default: {} },
	expectedNumberResults: { type: "number", default: 8 },
};
export const BLOCK_USER_ATTRIBUTES_COMMON = {
	filterDataBy: { type: "string", default: "by_filter" },
	numberPerPage: { type: "number", default: 8 },
	orderBy: { type: "string", default: "REGISTERED" },
	order: { type: "string", default: "DESC" },
	userIds: { type: "array", default: [] },
	roleIn: { type: "array", default: [] },
	blockLayoutStyle: { type: "string", default: "layout-1" },
	userCardName: { type: "string", default: "card2" },
	heading: { type: "string", default: "Heading of section" },
	subHeading: {
		type: "string",
		default: "This is sub-heading of section",
	},
	hasBackground: { type: "boolean", default: false },
	graphQLvariables: { type: "object", default: {} },
	graphQLData: { type: "object", default: {} },
	expectedNumberResults: { type: "number", default: 8 },
};
