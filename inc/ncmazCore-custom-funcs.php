<?php

//  ======= POSTS ==================================================================
function ncmazCore_usePostGqlQuery(array $attributes = [])
{

	if (!defined('_NCMAZ_FRONTEND_VERSION') || !function_exists('do_graphql_request')) {
		return [];
	}

	global $GQL_QUERY_GET_POSTS_BY_SPECIFIC, $GQL_QUERY_GET_POSTS_BY_FILTER;

	$filterDataBy = $attributes['filterDataBy'];
	$posts = $attributes['posts'];
	$categories = $attributes['categories'];
	$tags = $attributes['tags'];
	$orderBy = $attributes['orderBy'];
	$order = $attributes['order'];
	$numberPerPage = $attributes['numberPerPage'];
	$authors = $attributes['authors'];

	//
	$GQL_QUERY__string = "";
	$variables = (object)[];
	//

	if ($filterDataBy === "by_specific") {
		$variables = [
			"nameIn" => array_map(function ($p) {
				return $p["value"];
			}, $posts)
		];
		$GQL_QUERY__string = $GQL_QUERY_GET_POSTS_BY_SPECIFIC;
	} else {
		$GQL_QUERY__string = $GQL_QUERY_GET_POSTS_BY_FILTER;
		$variables = [
			// term IDs
			"categoryIn" => array_map(function ($p) {
				return $p["value"];
			}, $categories),
			"tagIn" => array_map(function ($p) {
				return $p["value"];
			}, $tags),
			"authorIn" => array_map(function ($p) {
				return $p["value"];
			}, $authors),
			"order" => $order,
			"field" => $orderBy,
			"first" => intval($numberPerPage),
		];
	}

	// =================== QUERY GRAPHQL ===================
	$data =  do_graphql_request($GQL_QUERY__string, 'GQL_QUERY_GET_POSTS_BY_CALLBACK', $variables);

	$edges = !empty($data['data']['posts']['edges']) ? $data['data']['posts']['edges'] : [];
	$pageInfo = !empty($data['data']['posts']['pageInfo']) ? $data['data']['posts']['pageInfo'] : [];

	if (!empty($edges) && is_array($edges)) {
		return [
			'edges' 	=>	$edges,
			'pageInfo' 	=>	$pageInfo,
		];
	}
	return [];
}

function ncmazCore_getIDsFromPostsAndSetToJsVariable($edges = [])
{
	global $NCMAZ_CORE_INIT_POSTS;
	// 
	$postIDs = [];

	foreach ($edges as $edg) {
		$postIDs[] = $edg['node']['postId'];
		$NCMAZ_CORE_INIT_POSTS[$edg['node']['postId']] = $edg['node'];
	}

	return $postIDs;
}

//  ======= TERMS ==================================================================
function ncmazCore_useTermGqlQuery(array $attributes = [])
{
	if (!defined('_NCMAZ_FRONTEND_VERSION') || !function_exists('do_graphql_request')) {
		return [];
	}

	global $GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC, $GQL_QUERY_GET_CATEGORIES_BY_FILTER, $GQL_QUERY_GET_TAGS_BY_FILTER, $GQL_QUERY_GET_TAGS_BY_SPECIFIC;

	$filterDataBy = $attributes['filterDataBy'];
	$numberPerPage = $attributes['numberPerPage'];
	$orderBy = $attributes['orderBy'];
	$order = $attributes['order'];
	$typeOfTerm = $attributes['typeOfTerm'];
	$categories = $attributes['categories'];
	$tags = $attributes['tags'];

	//
	$GQL_QUERY__string = "";
	$variables = (object)[];
	//

	// CATEGORIES
	if ($typeOfTerm === "category") {
		if ($filterDataBy === "by_filter") {
			$variables = [
				"order" => $order,
				"orderby" => $orderBy,
				"first" => intval($numberPerPage),
			];
			$GQL_QUERY__string = $GQL_QUERY_GET_CATEGORIES_BY_FILTER;
		} else {
			$variables = [
				// "termTaxonomId" => (categories || []).map((item) => item.value),
				"termTaxonomId" => array_map(function ($p) {
					return $p["value"];
				}, $categories)
			];
			$GQL_QUERY__string = $GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC;
		}
	}

	// TAGS;
	if ($typeOfTerm === "tag") {
		if ($filterDataBy === "by_filter") {
			$variables = [
				"order" => $order,
				"orderby" => $orderBy,
				"first" => intval($numberPerPage),
			];
			$GQL_QUERY__string = $GQL_QUERY_GET_TAGS_BY_FILTER;
		} else {
			$variables = [
				// termTaxonomId: (tags || []).map((item) => item.value) 
				"termTaxonomId" => array_map(function ($p) {
					return $p["value"];
				}, $tags)
			];
			$GQL_QUERY__string = $GQL_QUERY_GET_TAGS_BY_SPECIFIC;
		}
	}

	// =================== QUERY GRAPHQL ===================
	$data =  do_graphql_request($GQL_QUERY__string, 'GQL_QUERY_GET_TERMS_BY_CALLBACK', $variables);
	if (!empty($data['data']['tags'])) {
		$edges = !empty($data['data']['tags']['edges']) ? $data['data']['tags']['edges'] : [];
	} elseif (!empty($data['data']['categories'])) {
		$edges = !empty($data['data']['categories']['edges']) ? $data['data']['categories']['edges'] : [];
	}

	if (!empty($edges) && is_array($edges)) {
		return $edges;
	}
	return [];
}

function ncmazCore_getIDsFromTermsAndSetToJsVariable($edges = [])
{
	global $NCMAZ_CORE_INIT_TERMS;
	// 
	$termIDs = [];

	foreach ($edges as $edg) {
		$termIDs[] = $edg['node']['databaseId'];
		$NCMAZ_CORE_INIT_TERMS[$edg['node']['databaseId']] = $edg['node'];
	}

	return $termIDs;
}

//  ======= USERS ==================================================================

function ncmazCore_useUserGqlQuery(array $attributes = [])
{
	//
	if (!defined('_NCMAZ_FRONTEND_VERSION') || !function_exists('do_graphql_request')) {
		return [];
	}

	global $GQL_QUERY_GET_USERS_BY_SPECIFIC, $GQL_QUERY_GET_USERS_BY_FILTER;

	$filterDataBy = $attributes['filterDataBy'];
	$numberPerPage = $attributes['numberPerPage'];
	$orderBy = $attributes['orderBy'];
	$order = $attributes['order'];
	$userIds = $attributes['userIds'];
	$roleIn = $attributes['roleIn'];

	//
	$GQL_QUERY__string = "";
	$variables = (object)[];
	//

	if ($filterDataBy === "by_specific") {
		$variables = [
			// include: userIds.map((item) => item.value)
			"include" => array_map(function ($p) {
				return $p["value"];
			}, $userIds)
		];
		$GQL_QUERY__string = $GQL_QUERY_GET_USERS_BY_SPECIFIC;
	} else {
		$GQL_QUERY__string = $GQL_QUERY_GET_USERS_BY_FILTER;
		$variables = [
			"first" => $numberPerPage,
			"field" => $orderBy,
			"order" => $order,
			// "roleIn" => roleIn.map((item) => item.value),
			"roleIn" =>  array_map(function ($p) {
				return $p["value"];
			}, $roleIn)
		];
	}

	// =================== QUERY GRAPHQL ===================
	$data =  do_graphql_request($GQL_QUERY__string, 'GQL_QUERY_GET_USERS_BY_CALLBACK', $variables);
	$edges = !empty($data['data']['users']['edges']) ? $data['data']['users']['edges'] : [];

	if (!empty($edges) && is_array($edges)) {
		return $edges;
	}
	return [];
}

function ncmazCore_getIDsFromUsersAndSetToJsVariable($edges = [])
{
	global  $NCMAZ_CORE_INIT_USERS;
	// 
	$userIDs = [];
	foreach ($edges as $edg) {
		$userIDs[] = $edg['node']['userId'];
		$NCMAZ_CORE_INIT_USERS[$edg['node']['userId']] = $edg['node'];
	}

	return $userIDs;
}
