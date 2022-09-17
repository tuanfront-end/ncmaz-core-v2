<?php
// START FUNCTIONS RENDER CALLBACK
//==============================================================================================================================================


//=============================================render_callback_block_widget_users===============================================================
function render_callback_block_widget_users($attributes)
{
    ob_start();
    $hasSSrInitData = boolval($attributes['hasSSrInitData']);
    $initUserIDs = [];

    if ($hasSSrInitData) {
        $edges = ncmazCore_useUserGqlQuery($attributes);
        $initUserIDs = ncmazCore_getIDsFromUsersAndSetToJsVariable($edges);
    }

    $ncGutenbergSectionsData = (object)[
        "blockName"         => "nc-block-widget-users",
        "graphQLvariables"     => $attributes["graphQLvariables"],
        "hasSSrInitData"        =>     (object)[
            "hasSSrInitData"    => $hasSSrInitData,
            "initUserIDs"       => $initUserIDs,
        ],
        "settings"             => (object)[
            "heading"                 => $attributes["heading"],
            "expectedNumberResults" => $attributes["expectedNumberResults"],
        ]
    ];
?>
    <div class="<?php echo esc_attr(!empty($attributes['className']) ? $attributes['className'] : ''); ?>" data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-widget-users" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}

// =============================================render_callback_block_widget_terms=====================================================================
function render_callback_block_widget_terms($attributes)
{
    ob_start();

    $hasSSrInitData = boolval($attributes['hasSSrInitData']);
    $initTermIDs = [];

    if ($hasSSrInitData) {
        $edges = ncmazCore_useTermGqlQuery($attributes);
        $initTermIDs = ncmazCore_getIDsFromTermsAndSetToJsVariable($edges);
    }

    $ncGutenbergSectionsData = (object)[
        "blockName"         => "nc-block-widget-terms",
        "graphQLvariables"     => $attributes["graphQLvariables"],
        "hasSSrInitData"        =>     (object)[
            "hasSSrInitData"    => $hasSSrInitData,
            "initTermIDs"       => $initTermIDs,
        ],
        "settings"             => (object)[
            "termCardName"             => $attributes["termCardName"],
            "heading"                 => $attributes["heading"],
            "expectedNumberResults" => $attributes["expectedNumberResults"],
        ]
    ];
?>
    <div class="<?php echo esc_attr(!empty($attributes['className']) ? $attributes['className'] : ''); ?>" data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-widget-terms" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}

// =============================================render_callback_block_widget_posts=====================================================================
function render_callback_block_widget_posts($attributes)
{
    ob_start();
    $hasSSrInitData = boolval($attributes['hasSSrInitData']);
    $initPostIDs = [];
    $pageInfo = [];

    if ($hasSSrInitData) {
        $aPostGqlQuery = ncmazCore_usePostGqlQuery($attributes);
        $edges = !empty($aPostGqlQuery['edges']) ? $aPostGqlQuery['edges'] : [];
        $pageInfo = !empty($aPostGqlQuery['pageInfo']) ? $aPostGqlQuery['pageInfo'] : [];

        $initPostIDs = ncmazCore_getIDsFromPostsAndSetToJsVariable($edges);
    }

    $ncGutenbergSectionsData = (object)[
        "blockName"         => "nc-block-widget-posts",
        "graphQLvariables"     => $attributes["graphQLvariables"],
        "hasSSrInitData"        =>     (object)[
            "hasSSrInitData"    => $hasSSrInitData,
            "initPostIDs"       => $initPostIDs,
            "initPageInfo"       => $pageInfo,
        ],
        "settings"             => (object)[
            "postCardName"             => $attributes["postCardName"],
            "heading"                 => $attributes["heading"],
            "expectedNumberResults" => $attributes["expectedNumberResults"],
        ]
    ];
?>
    <div class="<?php echo esc_attr(!empty($attributes['className']) ? $attributes['className'] : ''); ?>" data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-widget-posts" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}

// =============================================render_callback_block_users_slider=====================================================================
function render_callback_block_users_slider($attributes)
{
    ob_start();

    $hasSSrInitData = boolval($attributes['hasSSrInitData']);
    $initUserIDs = [];

    if ($hasSSrInitData) {
        $edges = ncmazCore_useUserGqlQuery($attributes);
        $initUserIDs = ncmazCore_getIDsFromUsersAndSetToJsVariable($edges);
    }

    $ncGutenbergSectionsData = (object)[
        "blockName"         => "nc-block-terms-slider",
        "graphQLvariables"     => $attributes["graphQLvariables"],
        "hasSSrInitData"        =>     (object)[
            "hasSSrInitData"    => $hasSSrInitData,
            "initUserIDs"       => $initUserIDs,
        ],
        "settings"             => (object)[
            "userCardName"                 => $attributes["userCardName"],
            "heading"                     => $attributes["heading"],
            "subHeading"                 => $attributes["subHeading"],
            "hasBackground"             => $attributes["hasBackground"],
            "blockLayoutStyle"             => $attributes["blockLayoutStyle"],
            // slider settings
            "itemPerView"                 => $attributes["itemPerView"],
            "sliderStartAt"             => $attributes["sliderStartAt"],
            "sliderAutoplayTime"         => $attributes["sliderAutoplayTime"],
            "sliderHoverpause"             => $attributes["sliderHoverpause"],
            "sliderAnimationDuration"     => $attributes["sliderAnimationDuration"],
            "sliderRewind"                 => $attributes["sliderRewind"],
            "expectedNumberResults"     => $attributes["expectedNumberResults"],
        ],
    ];
?>
    <div class="<?php echo esc_attr(!empty($attributes['className']) ? $attributes['className'] : ''); ?>" data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-users-slider" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}

// =============================================render_callback_block_users_grid=====================================================================
function render_callback_block_users_grid($attributes)
{
    ob_start();

    $hasSSrInitData = boolval($attributes['hasSSrInitData']);
    $initUserIDs = [];

    if ($hasSSrInitData) {
        $edges = ncmazCore_useUserGqlQuery($attributes);
        $initUserIDs = ncmazCore_getIDsFromUsersAndSetToJsVariable($edges);
    }
    $ncGutenbergSectionsData = (object)[
        "blockName"         => "nc-block-user-grid",
        "graphQLvariables"     => $attributes["graphQLvariables"],
        "hasSSrInitData"        =>     (object)[
            "hasSSrInitData"    => $hasSSrInitData,
            "initUserIDs"       => $initUserIDs,
        ],
        "settings"             => (object)[
            "userCardName"             => $attributes["userCardName"],
            "gridClass"             => $attributes["gridClass"],
            "gridClassCustom"         => $attributes["gridClassCustom"],
            "heading"                 => $attributes["heading"],
            "subHeading"             => $attributes["subHeading"],
            "hasBackground"         => $attributes["hasBackground"],
            "blockLayoutStyle"         => $attributes["blockLayoutStyle"],
            "expectedNumberResults" => $attributes["expectedNumberResults"],
        ],
    ];
?>
    <div class="<?php echo esc_attr(!empty($attributes['className']) ? $attributes['className'] : ''); ?>" data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-users-grid" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}

// =============================================render_callback_block_terms_slider=====================================================================
function render_callback_block_terms_slider($attributes)
{
    ob_start();

    $hasSSrInitData = boolval($attributes['hasSSrInitData']);
    $initTermIDs = [];

    if ($hasSSrInitData) {
        $edges = ncmazCore_useTermGqlQuery($attributes);
        $initTermIDs = ncmazCore_getIDsFromTermsAndSetToJsVariable($edges);
    }

    $ncGutenbergSectionsData = (object)[
        "blockName"         => "nc-block-terms-slider",
        "graphQLvariables"     => $attributes["graphQLvariables"],
        "hasSSrInitData"        =>     (object)[
            "hasSSrInitData"    => $hasSSrInitData,
            "initTermIDs"       => $initTermIDs,
        ],
        "settings"             => (object)[
            "blockLayoutStyle"             => $attributes["blockLayoutStyle"],
            "termCardName"                 => $attributes["termCardName"],
            "heading"                     => $attributes["heading"],
            "subHeading"                 => $attributes["subHeading"],
            "hasBackground"             => $attributes["hasBackground"],
            // slider settings
            "itemPerView"                 => $attributes["itemPerView"],
            "sliderStartAt"             => $attributes["sliderStartAt"],
            "sliderAutoplayTime"         => $attributes["sliderAutoplayTime"],
            "sliderHoverpause"             => $attributes["sliderHoverpause"],
            "sliderAnimationDuration"     => $attributes["sliderAnimationDuration"],
            "sliderRewind"                 => $attributes["sliderRewind"],
            "expectedNumberResults"     => $attributes["expectedNumberResults"],
        ],
    ];
?>
    <div class="<?php echo esc_attr(!empty($attributes['className']) ? $attributes['className'] : ''); ?>" data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-terms-slider" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}

// =============================================render_callback_block_terms_grid=====================================================================
function render_callback_block_terms_grid($attributes)
{
    ob_start();

    $hasSSrInitData = boolval($attributes['hasSSrInitData']);
    $initTermIDs = [];

    if ($hasSSrInitData) {
        $edges = ncmazCore_useTermGqlQuery($attributes);
        $initTermIDs = ncmazCore_getIDsFromTermsAndSetToJsVariable($edges);
    }

    $ncGutenbergSectionsData = (object)[
        "blockName"         => "nc-block-terms-grid",
        "graphQLvariables"     => $attributes['graphQLvariables'],
        "hasSSrInitData"        =>     (object)[
            "hasSSrInitData"    => $hasSSrInitData,
            "initTermIDs"       => $initTermIDs,
        ],
        "settings"             => (object)[
            "blockLayoutStyle"         => $attributes['blockLayoutStyle'],
            "termCardName"             => $attributes['termCardName'],
            "heading"                 => $attributes['heading'],
            "subHeading"             => $attributes['subHeading'],
            "hasBackground"         => $attributes['hasBackground'],
            "gridClass"             => $attributes['gridClass'],
            "gridClassCustom"         => $attributes['gridClassCustom'],
            "expectedNumberResults" => $attributes['expectedNumberResults'],
        ],
    ];
?>
    <div class="<?php echo esc_attr(!empty($attributes['className']) ? $attributes['className'] : ''); ?>" data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-terms-grid" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}

// =============================================render_callback_block_posts_slider=====================================================================
function render_callback_block_posts_slider($attributes)
{
    ob_start();
    $hasSSrInitData = boolval($attributes['hasSSrInitData']);
    $initPostIDs = [];
    $pageInfo = [];

    if ($hasSSrInitData) {
        $aPostGqlQuery = ncmazCore_usePostGqlQuery($attributes);
        $edges = !empty($aPostGqlQuery['edges']) ? $aPostGqlQuery['edges'] : [];
        $pageInfo = !empty($aPostGqlQuery['pageInfo']) ? $aPostGqlQuery['pageInfo'] : [];

        $initPostIDs = ncmazCore_getIDsFromPostsAndSetToJsVariable($edges);
    }
    $ncGutenbergSectionsData = (object)[
        "blockName"         => "nc-block-posts-slider",
        "graphQLvariables"     => $attributes["graphQLvariables"],
        "hasSSrInitData"        =>     (object)[
            "hasSSrInitData"    => $hasSSrInitData,
            "initPostIDs"       => $initPostIDs,
            "initPageInfo"       => $pageInfo,
        ],
        "settings"             => (object)[
            "blockLayoutStyle"             => $attributes["blockLayoutStyle"],
            "postCardName"                 => $attributes["postCardName"],
            "showFilterTab"             => $attributes["showFilterTab"],
            "viewMoreHref"                 => $attributes["viewMoreHref"],
            "heading"                     => $attributes["heading"],
            "subHeading"                 => $attributes["subHeading"],
            "hasBackground"             => $attributes["hasBackground"],
            "categories"                 => $attributes["categories"],
            // slider settings
            "itemPerView"                 => $attributes["itemPerView"],
            "sliderStartAt"             => $attributes["sliderStartAt"],
            "sliderAutoplayTime"         => $attributes["sliderAutoplayTime"],
            "sliderHoverpause"             => $attributes["sliderHoverpause"],
            "sliderAnimationDuration"     => $attributes["sliderAnimationDuration"],
            "sliderRewind"                 => $attributes["sliderRewind"],
            "expectedNumberResults"     => $attributes["expectedNumberResults"],
        ],
    ];
?>
    <div class="<?php echo esc_attr(!empty($attributes['className']) ? $attributes['className'] : ''); ?>" data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-posts-slider" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}

// =============================================render_callback_block_posts_grid=====================================================================
function render_callback_block_posts_grid($attributes)
{
    ob_start();
    $hasSSrInitData = boolval($attributes['hasSSrInitData']);
    $initPostIDs = [];
    $pageInfo = [];

    if ($hasSSrInitData) {
        $aPostGqlQuery = ncmazCore_usePostGqlQuery($attributes);
        $edges = !empty($aPostGqlQuery['edges']) ? $aPostGqlQuery['edges'] : [];
        $pageInfo = !empty($aPostGqlQuery['pageInfo']) ? $aPostGqlQuery['pageInfo'] : [];

        $initPostIDs = ncmazCore_getIDsFromPostsAndSetToJsVariable($edges);
    }

    $ncGutenbergSectionsData = (object)[
        "blockName"         => "nc-block-posts-grid",
        "graphQLvariables"     => $attributes["graphQLvariables"],
        "hasSSrInitData"        =>     (object)[
            "hasSSrInitData"    => $hasSSrInitData,
            "initPostIDs"       => $initPostIDs,
            "initPageInfo"       => $pageInfo,
        ],
        "settings"             => (object)[
            "blockLayoutStyle"         => $attributes["blockLayoutStyle"],
            "postCardName"             => $attributes["postCardName"],
            "gridClass"             => $attributes["gridClass"],
            "gridClassCustom"         => $attributes["gridClassCustom"],
            "showFilterTab"         => $attributes["showFilterTab"],
            "viewMoreHref"             => $attributes["viewMoreHref"],
            "heading"                 => $attributes["heading"],
            "subHeading"             => $attributes["subHeading"],
            "hasBackground"         => $attributes["hasBackground"],
            "categories"             => $attributes["categories"],
            "enableLoadMoreButton"     => $attributes["enableLoadMoreButton"],
            "loadMoreButtonHref"     => $attributes["loadMoreButtonHref"],
            "filterDataBy"             => $attributes["filterDataBy"],
            "expectedNumberResults" => $attributes["expectedNumberResults"],
        ],
    ];
?>
    <div class="<?php echo esc_attr(!empty($attributes['className']) ? $attributes['className'] : ''); ?>" data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-posts-grid" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}

// =============================================render_callback_block_magazine=====================================================================
function render_callback_block_magazine($attributes)
{
    ob_start();
    $hasSSrInitData = boolval($attributes['hasSSrInitData']);
    $initPostIDs = [];
    $pageInfo = [];
    if ($hasSSrInitData) {
        $aPostGqlQuery = ncmazCore_usePostGqlQuery($attributes);
        $edges = !empty($aPostGqlQuery['edges']) ? $aPostGqlQuery['edges'] : [];
        $pageInfo = !empty($aPostGqlQuery['pageInfo']) ? $aPostGqlQuery['pageInfo'] : [];
        $initPostIDs = ncmazCore_getIDsFromPostsAndSetToJsVariable($edges);
    }
    $ncGutenbergSectionsData = (object)[
        "blockName"             => "nc-block-magazine",
        "graphQLvariables"      => $attributes['graphQLvariables'],
        "hasSSrInitData"        =>     (object)[
            "hasSSrInitData"    => $hasSSrInitData,
            "initPostIDs"       => $initPostIDs,
            "initPageInfo"      => $pageInfo,
        ],
        "settings"              => (object)[
            "sectionName"             => $attributes['sectionName'],
            "showFilterTab"         => $attributes['showFilterTab'],
            "viewMoreHref"             => $attributes['viewMoreHref'],
            "heading"                 => $attributes['heading'],
            "subHeading"             => $attributes['subHeading'],
            "hasBackground"         => $attributes['hasBackground'],
            "categories"             => $attributes['categories'],
            "expectedNumberResults" => $attributes['expectedNumberResults'],
        ]
    ];
?>
    <div class="<?php echo esc_attr(!empty($attributes['className']) ? $attributes['className'] : ''); ?>" data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-magazine" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
    $output = ob_get_contents(); // collect output
    ob_end_clean(); // Turn off ouput buffer
    return $output; // Print output
}
