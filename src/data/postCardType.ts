import { PageInfo } from "./commentType";

export interface ListPosts {
	edges: Post[];
	pageInfo?: PageInfo;
}
export interface ListTerms {
	edges: CategoriesEdge2[];
	pageInfo?: PageInfo;
}

interface Post {
	node: PostNode;
}

export interface PostNodeFullData {
	id: string;
	link: string;
	status: string;
	commentStatus: string;
	content: string;
	tags: Tags;
	author?: Author;
	categories?: Categories;
	commentCount?: any;
	date?: string;
	excerpt?: string;
	featuredImage?: FeaturedImage;
	postFormats?: PostFormats;
	postId: number;
	slug: string;
	title: string;
	ncmazVideoUrl: {
		fieldGroupName: string;
		videoUrl?: string;
	};
	ncmazAudioUrl: {
		fieldGroupName: string;
		audioUrl?: string;
	};
	ncPostMetaData: {
		favoriteButtonShortcode?: string;
		readingTimeShortcode?: string;
		viewsCount?: number;
		fieldGroupName: "ncPostMetaData";
	};
	ncmazGalleryImgs: {
		fieldGroupName: string;
		image1?: FeaturedImage["node"];
		image2?: FeaturedImage["node"];
		image3?: FeaturedImage["node"];
		image4?: FeaturedImage["node"];
		image5?: FeaturedImage["node"];
		image6?: FeaturedImage["node"];
		image7?: FeaturedImage["node"];
		image8?: FeaturedImage["node"];
		image9?: FeaturedImage["node"];
		image10?: FeaturedImage["node"];
	};
	__typename: string;
}
export interface PostNode {
	id: string;
	link: string;
	status: string;
	author?: Author;
	categories?: Categories;
	commentCount?: any;
	date?: string;
	excerpt?: string;
	featuredImage?: FeaturedImage;
	postFormats?: PostFormats;
	postId: number;
	slug: string;
	title: string;
	ncmazVideoUrl: {
		fieldGroupName: string;
		videoUrl?: string;
	};
	ncmazAudioUrl: {
		fieldGroupName: string;
		audioUrl?: string;
	};
	ncPostMetaData: {
		favoriteButtonShortcode?: string;
		readingTimeShortcode?: string;
		viewsCount?: number;
		fieldGroupName: "ncPostMetaData";
	};
	ncmazGalleryImgs: {
		fieldGroupName: string;
		image1?: FeaturedImage["node"];
		image2?: FeaturedImage["node"];
		image3?: FeaturedImage["node"];
		image4?: FeaturedImage["node"];
		image5?: FeaturedImage["node"];
		image6?: FeaturedImage["node"];
		image7?: FeaturedImage["node"];
		image8?: FeaturedImage["node"];
		image9?: FeaturedImage["node"];
		image10?: FeaturedImage["node"];
	};
	__typename: string;
}

interface Author {
	node: AuthorNode2;
	__typename?: string;
}

interface AuthorNode2 {
	id: string;
	avatar?: Avatar;
	url: any;
	uri: string;
	username: string;
	name: string;
	slug: string;
	ncUserMeta?: {
		featuredImage?: FeaturedImage["node"];
	};
	__typename: string;
}

export interface AuthorNode {
	id: string;
	name: string;
	avatar?: Avatar;
	ncUserMeta: NcUserMeta;
	url: string;
	uri: string;
	username: string;
	description?: string;
	userId: number;
	posts?: {
		pageInfo: {
			total: number;
		};
	};
}

export interface NcUserMeta {
	color?: string;
	ncBio?: string;
	featuredImage?: FeaturedImage["node"];
	backgroundImage?: FeaturedImage["node"];
	//
	youtubeUrl?: string;
	facebookUrl?: string;
	mediumUrl?: string;
	githubUrl?: string;
	vimeoUrl?: string;
	twitterUrl?: string;
	instagramUrl?: string;
	linkedinUrl?: string;
	pinterestUrl?: string;
	twitchUrl?: string;
	websiteUrl?: string;
	buymeacoffeUrl?: string;
}

interface Avatar {
	default: string;
	extraAttr: any;
	forceDefault: boolean;
	foundAvatar: boolean;
	height: number;
	size: number;
	url: string;
	width: number;
	__typename?: string;
}

interface Categories {
	edges: CategoriesEdge2[];
	__typename?: string;
}

export interface CategoriesEdge2 {
	node: CategoriesNode3;
	__typename?: string;
}

export interface CategoriesNode3 {
	id: string;
	link: string;
	name: string;
	uri: string;
	slug: string;
	count: number;
	categoryId: number;
	ncTaxonomyMeta: NcTaxonomyMeta;
	__typename?: string;
}

export interface Tags {
	edges: {
		node: TagNode3;
		__typename?: string;
	}[];
	__typename?: string;
}

export interface TagNode3 {
	id: string;
	link: string;
	name: string;
	uri: string;
	slug: string;
	count: number;
	tagId: number;
	ncTaxonomyMeta: NcTaxonomyMeta;
	__typename?: string;
}

export interface TermNode {
	id: string;
	link: string;
	name: string;
	uri: string;
	slug: string;
	count: number;
	databaseId: number;
	ncTaxonomyMeta: NcTaxonomyMeta;
	__typename?: string;
}

export interface NcTaxonomyMeta {
	color?: string;
	featuredImage?: FeaturedImage["node"];
}

export interface FeaturedImage {
	node: Node4;
	__typename?: string;
}

interface Node4 {
	databaseId?: string;
	id?: string;
	altText?: string;
	caption?: string;
	sourceUrl: string;
	sizes?: string;
	srcSet?: string;
	__typename?: string;
}

export type PostFormatsType =
	| "post-format-gallery"
	| "post-format-video"
	| "post-format-audio"
	| "Standard";

interface PostFormats {
	edges:
		| {
				node: {
					id: string;
					name: string;
					slug: PostFormatsType;
				};
		  }[]
		| [];
	__typename: string;
}

interface Extensions {
	debug: Debug[];
}

interface Debug {
	type: string;
	message: string;
}
