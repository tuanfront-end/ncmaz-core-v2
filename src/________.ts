declare global {
	var ncmazcoreJsData: {
		ajaxurl: string;
		restUrl: string;
		graphQLBasePath: string;
		img_empty_png: string;
		img_musicWave_png: string;
		homeURL: string;
		pll_current_language: string | null;
		pll_themeoption_actived: string | null;
		gqlQueries: {
			NCMAZCORE_PLL_CURRENT_LANGUAGE: string;
			NCMAZCORE_PLL_THEMEOPTION_ACTIVED: string;
			IS_ENABLE_PLL: string;
			EDGES_POST_COMMONT_FIELDS: string;
			EDGES_USER_COMMONT_FIELDS: string;
			EDGES_TERMS_COMMONT_FIELDS: string;
			GQL_QUERY_GET_POSTS_BY_FILTER: string;
			GQL_QUERY_GET_POSTS_BY_SPECIFIC: string;
			GQL_QUERY_GET_USERS_BY_FILTER: string;
			GQL_QUERY_GET_USERS_BY_SPECIFIC: string;
			GQL_QUERY_GET_CATEGORIES_BY_FILTER: string;
			GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC: string;
			GQL_QUERY_GET_TAGS_BY_FILTER: string;
			GQL_QUERY_GET_TAGS_BY_SPECIFIC: string;
			GQL_QUERY_SEARCH_POSTS: string;
			GQL_QUERY_SEARCH_USER: string;
			GQL_QUERY_SEARCH_CATEGORIES: string;
			GQL_QUERY_SEARCH_TAGS: string;
		};
	};
}

//
console.log(123456789, "-------- FIRST INDEX MAIN JS -------");
//
export default null;

//
//
// export const BLOCK_POST_ATTRIBUTES_COMMON = {
// 	filterDataBy: { type: "string", default: "by_filter" },
// 	posts: { type: "array", default: [] },
// 	categories: { type: "array", default: [] },
// 	authors: { type: "array", default: [] },
// 	tags: { type: "array", default: [] },
// 	orderBy: { type: "string", default: "AUTHOR" },
// 	order: { type: "string", default: "DESC" },
// 	viewMoreHref: { type: "string", default: "#" },
// 	heading: { type: "string", default: "Heading of section" },
// 	subHeading: {
// 		type: "string",
// 		default: "This is sub-heading of section",
// 	},
// 	numberPerPage: { type: "number", default: 8 },
// 	showFilterTab: { type: "boolean", default: true },
// 	hasBackground: { type: "boolean", default: false },
// 	graphQLvariables: { type: "object", default: {} },
// 	graphQLData: { type: "object", default: {} },
// 	expectedNumberResults: { type: "number", default: 8 },
// };
// export const ATTR_SETTINGS_SLIDER = {
// 	itemPerView: { type: "number", default: 4 },
// 	sliderStartAt: { type: "number", default: 0 },
// 	sliderAutoplayTime: { type: "number", default: 0 },
// 	sliderHoverpause: { type: "boolean", default: false },
// 	sliderAnimationDuration: { type: "number", default: 400 },
// 	sliderRewind: { type: "boolean", default: true },
// };
// export const BLOCK_TERM_ATTRIBUTES_COMMON = {
// 	blockLayoutStyle: { type: "string", default: "layout-1" },
// 	termCardName: { type: "string", default: "card2" },
// 	typeOfTerm: { type: "string", default: "category" },
// 	filterDataBy: { type: "string", default: "by_filter" },
// 	categories: { type: "array", default: [] },
// 	tags: { type: "array", default: [] },
// 	orderBy: { type: "string", default: "NAME" },
// 	order: { type: "string", default: "DESC" },
// 	heading: { type: "string", default: "Heading of section" },
// 	subHeading: {
// 		type: "string",
// 		default: "This is sub-heading of section",
// 	},
// 	numberPerPage: { type: "number", default: 10 },
// 	hasBackground: { type: "boolean", default: false },
// 	graphQLvariables: { type: "object", default: {} },
// 	graphQLData: { type: "object", default: {} },
// 	expectedNumberResults: { type: "number", default: 8 },
// };
// export const BLOCK_USER_ATTRIBUTES_COMMON = {
// 	filterDataBy: { type: "string", default: "by_filter" },
// 	numberPerPage: { type: "number", default: 8 },
// 	orderBy: { type: "string", default: "REGISTERED" },
// 	order: { type: "string", default: "DESC" },
// 	userIds: { type: "array", default: [] },
// 	roleIn: { type: "array", default: [] },
// 	blockLayoutStyle: { type: "string", default: "layout-1" },
// 	userCardName: { type: "string", default: "card2" },
// 	heading: { type: "string", default: "Heading of section" },
// 	subHeading: {
// 		type: "string",
// 		default: "This is sub-heading of section",
// 	},
// 	hasBackground: { type: "boolean", default: false },
// 	graphQLvariables: { type: "object", default: {} },
// 	graphQLData: { type: "object", default: {} },
// 	expectedNumberResults: { type: "number", default: 8 },
// };
