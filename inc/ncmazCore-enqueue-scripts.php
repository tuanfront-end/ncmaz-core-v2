<?php

// ENQUEUE FOR BACKEND EDITOR
function ncmaz_core_enqueue_admin_style($hook)
{
    if ($hook !== 'post.php') {
        return;
    }
    // 
    wp_register_style('ncmaz-core-style', plugins_url('../public/css/styles.css', __FILE__), [], _NCMAZ_CORE_VERSION, 'all');
    wp_enqueue_style('ncmaz-core-style');
    // 
    wp_register_style('Line_Awesome', 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css');
    wp_enqueue_style('Line_Awesome');
}
add_action('admin_enqueue_scripts', 'ncmaz_core_enqueue_admin_style');

// 
//  ======================= wp_enqueue_script ===========================
add_action('init', function () {
    if (is_admin()) {
        ncmazcorePluginEnqueueScript();
    }
});

function ncmazcorePluginEnqueueScript()
{
    global $ncmaz_redux_demo;
    if (empty($ncmaz_redux_demo)) {
        return;
    }

    wp_enqueue_script(
        'ncmazcore-customizer-script',
        plugins_url('../public/js/customizer.js', __FILE__),
        [],
        '',
        false
    );

    wp_add_inline_script('ncmazcore-customizer-script', 'window.ncmazcoreJsData = ' . json_encode(
        [
            'ajaxurl'                   => admin_url('admin-ajax.php'),
            'restUrl'                   => get_rest_url(),
            'graphQLBasePath'           => get_site_url(null, '/graphql'),
            'img_empty_png'             => plugins_url('../public/images/empty.png', __FILE__),
            'img_musicWave_png'         => plugins_url('../public/images/musicWave.png', __FILE__),
            'homeURL'                   => get_site_url(),
            'pll_current_language'        => function_exists('pll_current_language') ? strtoupper(pll_current_language()) : null,
            'pll_themeoption_actived'     => boolval($ncmaz_redux_demo['nc-general-settings--general-switch-polylang']) ? 'true' : null,
            'gqlQueries'                => (object)[
                'NCMAZCORE_PLL_CURRENT_LANGUAGE'        => $NCMAZCORE_PLL_CURRENT_LANGUAGE,
                'NCMAZCORE_PLL_THEMEOPTION_ACTIVED'     => $NCMAZCORE_PLL_THEMEOPTION_ACTIVED,
                'IS_ENABLE_PLL'                         => $IS_ENABLE_PLL,
                'EDGES_POST_COMMONT_FIELDS'             => $EDGES_POST_COMMONT_FIELDS,
                'EDGES_USER_COMMONT_FIELDS'             => $EDGES_USER_COMMONT_FIELDS,
                'EDGES_TERMS_COMMONT_FIELDS'            => $EDGES_TERMS_COMMONT_FIELDS,
                //  
                'GQL_QUERY_GET_POSTS_BY_FILTER'         => $GQL_QUERY_GET_POSTS_BY_FILTER,
                'GQL_QUERY_GET_POSTS_BY_SPECIFIC'       => $GQL_QUERY_GET_POSTS_BY_SPECIFIC,
                'GQL_QUERY_GET_USERS_BY_FILTER'         => $GQL_QUERY_GET_USERS_BY_FILTER,
                'GQL_QUERY_GET_USERS_BY_SPECIFIC'       => $GQL_QUERY_GET_USERS_BY_SPECIFIC,
                'GQL_QUERY_GET_CATEGORIES_BY_FILTER'    => $GQL_QUERY_GET_CATEGORIES_BY_FILTER,
                'GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC'  => $GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC,
                'GQL_QUERY_GET_TAGS_BY_FILTER'          => $GQL_QUERY_GET_TAGS_BY_FILTER,
                'GQL_QUERY_GET_TAGS_BY_SPECIFIC'        => $GQL_QUERY_GET_TAGS_BY_SPECIFIC,
                'GQL_QUERY_SEARCH_POSTS'                => $GQL_QUERY_SEARCH_POSTS,
                'GQL_QUERY_SEARCH_USER'                 => $GQL_QUERY_SEARCH_USER,
                'GQL_QUERY_SEARCH_CATEGORIES'           => $GQL_QUERY_SEARCH_CATEGORIES,
                'GQL_QUERY_SEARCH_TAGS'                 => $GQL_QUERY_SEARCH_TAGS,
            ]
        ]
    ), 'before');
}