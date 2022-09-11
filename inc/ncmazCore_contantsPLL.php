<?php

$PLL__GQL_QUERY_GET_POSTS_BY_FILTER = '
  query GQL_QUERY_GET_POSTS_BY_FILTER(
    $language: LanguageCodeFilterEnum = ' . $NCMAZCORE_PLL_CURRENT_LANGUAGE . '
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
        language: $language
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

$PLL__GQL_QUERY_GET_POSTS_BY_SPECIFIC =  '
  query GQL_QUERY_GET_POSTS_BY_SPECIFIC(
    $language: LanguageCodeFilterEnum = ' . $NCMAZCORE_PLL_CURRENT_LANGUAGE . '
    $nameIn: [String] = ""
    ) {
    posts(where: {
      language: $language
      nameIn: $nameIn
      orderby: {order: ASC, field: NAME_IN}
     }) { ' . $EDGES_POST_COMMONT_FIELDS . ' }
  }
';

// ===================== TERMS - TAGS | CATEGORIES =========================================
$PLL__GQL_QUERY_GET_CATEGORIES_BY_FILTER =   '
	query GQL_QUERY_GET_CATEGORIES_BY_FILTER(
    $language: LanguageCodeFilterEnum = ' . $NCMAZCORE_PLL_CURRENT_LANGUAGE . '
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
	) {
		categories(
			where: { 
        language: $language,
        order: $order,
        orderby: $orderby 
      }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ' . $EDGES_TERMS_COMMONT_FIELDS . ' }
	}
';

$PLL__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC = '
	query GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(
    $language: LanguageCodeFilterEnum = ' . $NCMAZCORE_PLL_CURRENT_LANGUAGE . '
    $termTaxonomId: [ID] = ""
    ) {
		categories(where: {
      language: $language
      termTaxonomId: $termTaxonomId
     }) { ' . $EDGES_TERMS_COMMONT_FIELDS . ' }
	}
';


// TAGS
$PLL__GQL_QUERY_GET_TAGS_BY_FILTER =  '
	query GQL_QUERY_GET_TAGS_BY_FILTER(
    $language: LanguageCodeFilterEnum =' . $NCMAZCORE_PLL_CURRENT_LANGUAGE . '
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = null
		$before: String = null
		$first: Int = 10
		$last: Int = null
	) {
		tags(
		where: {
        language: $language 
        order: $order
        orderby: $orderby 
      }
			first: $first
			before: $before
			after: $after
			last: $last
		) { ' . $EDGES_TERMS_COMMONT_FIELDS . ' }
	}
';


$PLL__GQL_QUERY_GET_TAGS_BY_SPECIFIC =  '
	query GQL_QUERY_GET_TAGS_BY_SPECIFIC(
    $language: LanguageCodeFilterEnum = ' . $NCMAZCORE_PLL_CURRENT_LANGUAGE . '
    $termTaxonomId: [ID] = ""
    ) {
		tags(where: {
      language: $language
      termTaxonomId: $termTaxonomId
    }) { ' . $EDGES_TERMS_COMMONT_FIELDS . ' }
	}
';


// SEARCH ============================================================
$PLL__GQL_QUERY_SEARCH_POSTS =  '
  query GQL_QUERY_SEARCH_POSTS(
    $search: String = "", $language: LanguageCodeFilterEnum = ' . $NCMAZCORE_PLL_CURRENT_LANGUAGE . '
  ) {
    posts(where: {search: $search,  language: $language})
	{ ' . $EDGES_POST_COMMONT_FIELDS . ' }
  }
';

$PLL__GQL_QUERY_SEARCH_CATEGORIES =  '
  query GQL_QUERY_SEARCH_CATEGORIES($search: String = "", $language: LanguageCodeFilterEnum = ' . $NCMAZCORE_PLL_CURRENT_LANGUAGE . '
  ) {
	categories(where: {language: $language, search: $search})
	{ ' . $EDGES_TERMS_COMMONT_FIELDS . ' }
  }
';

$PLL__GQL_QUERY_SEARCH_TAGS = '
  query GQL_QUERY_SEARCH_TAGS($search: String = "", $language: LanguageCodeFilterEnum = ' . $NCMAZCORE_PLL_CURRENT_LANGUAGE . '
  ) {
	tags(where: {language: $language, search: $search})
	{ ' . $EDGES_TERMS_COMMONT_FIELDS . ' }
  }
';
