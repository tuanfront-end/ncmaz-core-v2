<?php


$GQL_QUERY_GET_POSTS_BY_FILTER =  '
  query GQL_QUERY_GET_POSTS_BY_FILTER(
    $field: PostObjectsConnectionOrderbyEnum = AUTHOR
    $order: OrderEnum = ASC
    $categoryIn: [ID] = []
    $tagIn: [ID] = []
    $authorIn: [ID] = []
    $last: Int = null
    $first: Int = 10
    $before: String = ""
    $after: String = ""
  ) {
    posts(
      where: {
        orderby: { field: $field, order: $order }
        categoryIn: $categoryIn
        tagIn: $tagIn
        authorIn: $authorIn
      }
      last: $last
      first: $first
      before: $before
      after: $after
    ) {
     ' . $EDGES_POST_COMMONT_FIELDS . '
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
    }
  }
';

$GQL_QUERY_GET_POSTS_BY_SPECIFIC = '
  query GQL_QUERY_GET_POSTS_BY_SPECIFIC($nameIn: [String] = "") {
    posts(where: { nameIn: $nameIn,  orderby: {order: ASC, field: NAME_IN} }) { ' . $EDGES_POST_COMMONT_FIELDS . ' }
  }
';

// ===================== USERS =================================================
$GQL_QUERY_GET_USERS_BY_FILTER = 'query GQL_QUERY_GET_USERS_BY_FILTER(
	$after: String = ""
	$before: String = ""
	$first: Int = 10
	$last: Int = null
	$field: UsersConnectionOrderbyEnum = DISPLAY_NAME
	$order: OrderEnum = ASC
	$roleIn: [UserRoleEnum] = []
) {
	users(
		where: { orderby: { field: $field, order: $order }, roleIn: $roleIn }
		last: $last
		first: $first
		before: $before
		after: $after
	) { ' . $EDGES_USER_COMMONT_FIELDS . ' }
}';

$GQL_QUERY_GET_USERS_BY_SPECIFIC = 'query GQL_QUERY_GET_USERS_BY_SPECIFIC($include: [Int] = null) {
	users(where: { include: $include }) { ' . $EDGES_USER_COMMONT_FIELDS . ' }
}';

// ===================== TERMS - TAGS | CATEGORIES =========================================
$GQL_QUERY_GET_CATEGORIES_BY_FILTER = '
	query GQL_QUERY_GET_CATEGORIES_BY_FILTER(
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
	) {
		categories(
			where: { order: $order, orderby: $orderby, hideEmpty: true  }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ' . $EDGES_TERMS_COMMONT_FIELDS . ' }
	}
';

$GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC = '
	query GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC($termTaxonomId: [ID] = "") {
		categories(where: { termTaxonomId: $termTaxonomId }) { ' . $EDGES_TERMS_COMMONT_FIELDS . ' }
	}
';

// TAGS
$GQL_QUERY_GET_TAGS_BY_FILTER = '
	query GQL_QUERY_GET_TAGS_BY_FILTER(
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
	) {
		tags(
			where: { order: $order, orderby: $orderby, hideEmpty: true }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ' . $EDGES_TERMS_COMMONT_FIELDS . ' }
	}
';

$GQL_QUERY_GET_TAGS_BY_SPECIFIC = '
	query GQL_QUERY_GET_TAGS_BY_SPECIFIC($termTaxonomId: [ID] = "") {
		tags(where: { termTaxonomId: $termTaxonomId }) { ' . $EDGES_TERMS_COMMONT_FIELDS . ' }
	}
';


// SEARCH =======================================
$GQL_QUERY_SEARCH_POSTS = '
  query GQL_QUERY_SEARCH_POSTS($search: String = "") {
    posts(where: {search: $search})
	{ ' . $EDGES_POST_COMMONT_FIELDS . ' }
  }
';

$GQL_QUERY_SEARCH_USER = '
  query GQL_QUERY_SEARCH_USER($search: String = "") {
	users(where: {search: $search})
	{ ' . $EDGES_USER_COMMONT_FIELDS . ' }
  }
';

$GQL_QUERY_SEARCH_CATEGORIES = '
  query GQL_QUERY_SEARCH_CATEGORIES($search: String = "") {
	categories(where: {search: $search})
	{ ' . $EDGES_TERMS_COMMONT_FIELDS . ' }
  }
';

$GQL_QUERY_SEARCH_TAGS = '
  query GQL_QUERY_SEARCH_TAGS($search: String = "") {
	tags(where: {search: $search})
	{ ' . $EDGES_TERMS_COMMONT_FIELDS . ' }
  }
';

// ==============PLLLLL ==============================
if ($IS_ENABLE_PLL) {
    $GQL_QUERY_GET_POSTS_BY_FILTER = $PLL__GQL_QUERY_GET_POSTS_BY_FILTER;

    $GQL_QUERY_GET_POSTS_BY_SPECIFIC = $PLL__GQL_QUERY_GET_POSTS_BY_SPECIFIC;

    $GQL_QUERY_GET_CATEGORIES_BY_FILTER = $PLL__GQL_QUERY_GET_CATEGORIES_BY_FILTER;

    $GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC = $PLL__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC;

    $GQL_QUERY_GET_TAGS_BY_FILTER = $PLL__GQL_QUERY_GET_TAGS_BY_FILTER;

    $GQL_QUERY_GET_TAGS_BY_SPECIFIC = $PLL__GQL_QUERY_GET_TAGS_BY_SPECIFIC;

    $GQL_QUERY_SEARCH_POSTS = $PLL__GQL_QUERY_SEARCH_POSTS;

    $GQL_QUERY_SEARCH_CATEGORIES = $PLL__GQL_QUERY_SEARCH_CATEGORIES;

    $GQL_QUERY_SEARCH_TAGS = $PLL__GQL_QUERY_SEARCH_TAGS;
}
