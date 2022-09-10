<?php

/**
 * Plugin Name:       Ncmaz Core
 * Description:       Example block written with ESNext standard and JSX support - NEW VERSION.
 * Requires at least: 5.8
 * Requires PHP:      7.3
 * Version:           2.2.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ncmaz-core
 *
 * @package           create-block
 */

if (!defined('_NCMAZ_CORE_VERSION')) {
	define('_NCMAZ_CORE_VERSION', '2.2.0');
}
require plugin_dir_path(__FILE__) . 'inc/ncmaz-enqueue-scripts.php';

//============================================================================================================================================
// START REGISTER GUTENBERG BLOCKS
//======================================================================================================================================

add_action('init', 'ncmazCore_create_blocks_gutenberg_init');
function ncmazCore_create_blocks_gutenberg_init()
{

	$BLOCK_POST_ATTRIBUTES_COMMON = [
		"filterDataBy" => [
			"type" => "string",
			"default" => "by_filter"
		],
		"posts" => [
			"type" 		=> "array",
			"default" 	=> []
		],
		"categories" => [
			"type" 		=> "array",
			"default" 	=> []
		],
		"authors" => [
			"type" => "array",
			"default" => []
		],
		"tags" => [
			"type" => "array",
			"default" => []
		],
		"orderBy" => [
			"type" => "string",
			"default" => "AUTHOR"
		],
		"order" => [
			"type" => "string",
			"default" => "DESC"
		],
		"viewMoreHref" => [
			"type" => "string",
			"default" => "#"
		],
		"heading" => [
			"type" => "string",
			"default" => "Heading of section"
		],
		"subHeading" => [
			"type" => "string",
			"default" => "This is sub-heading of section",
		],
		"numberPerPage" => [
			"type" => "number",
			"default" => 8
		],
		"showFilterTab" => [
			"type" => "boolean",
			"default" => true
		],
		"hasBackground" => [
			"type" => "boolean",
			"default" => false
		],
		"graphQLvariables" => [
			"type" => "object",
			"default" => (object)[]
		],
		"graphQLData" => [
			"type" => "object",
			"default" => (object)[]
		],
		"expectedNumberResults" => [
			"type" => "number",
			"default" => 8
		],
	];
	$ATTR_SETTINGS_SLIDER = [
		"itemPerView" => [
			"type" => "number", "default" => 4
		],
		"sliderStartAt" => [
			"type" => "number", "default" => 0
		],
		"sliderAutoplayTime" => [
			"type" => "number", "default" => 0
		],
		"sliderHoverpause" => [
			"type" => "boolean", "default" => false
		],
		"sliderAnimationDuration" => [
			"type" => "number", "default" => 400
		],
		"sliderRewind" => [
			"type" => "boolean", "default" => true
		],
	];
	$BLOCK_TERM_ATTRIBUTES_COMMON = [
		"blockLayoutStyle" => [
			"type" => "string", "default" => "layout-1"
		],
		"termCardName" => [
			"type" => "string", "default" => "card2"
		],
		"typeOfTerm" => [
			"type" => "string", "default" => "category"
		],
		"filterDataBy" => [
			"type" => "string", "default" => "by_filter"
		],
		"categories" => [
			"type" => "array", "default" => []
		],
		"tags" => [
			"type" => "array", "default" => []
		],
		"orderBy" => [
			"type" => "string", "default" => "NAME"
		],
		"order" => [
			"type" => "string", "default" => "DESC"
		],
		"heading" => [
			"type" => "string", "default" => "Heading of section"
		],
		"subHeading" => [
			"type" => "string",
			"default" => "This is sub-heading of section",
		],
		"numberPerPage" => [
			"type" => "number", "default" => 10
		],
		"hasBackground" => [
			"type" => "boolean", "default" => false
		],
		"graphQLvariables" => [
			"type" => "object", "default" => (object)[]
		],
		"graphQLData" => [
			"type" => "object", "default" => (object)[]
		],
		"expectedNumberResults" => [
			"type" => "number", "default" => 8
		],
	];
	$BLOCK_USER_ATTRIBUTES_COMMON = [
		"filterDataBy" => [
			"type" => "string", "default" => "by_filter"
		],
		"numberPerPage" => [
			"type" => "number", "default" => 8
		],
		"orderBy" => [
			"type" => "string", "default" => "REGISTERED"
		],
		"order" => [
			"type" => "string", "default" => "DESC"
		],
		"userIds" => [
			"type" => "array", "default" => []
		],
		"roleIn" => [
			"type" => "array", "default" => []
		],
		"blockLayoutStyle" => [
			"type" => "string", "default" => "layout-1"
		],
		"userCardName" => [
			"type" => "string", "default" => "card2"
		],
		"heading" => [
			"type" => "string", "default" => "Heading of section"
		],
		"subHeading" => [
			"type" => "string", "default" => "This is sub-heading of section",
		],
		"hasBackground" => [
			"type" => "boolean", "default" => false
		],
		"graphQLvariables" => [
			"type" => "object", "default" => (object)[]
		],
		"graphQLData" => [
			"type" => "object", "default" => (object)[]
		],
		"expectedNumberResults" => [
			"type" => "number", "default" => 8
		],
	];

	// 
	register_block_type(__DIR__ . '/build/block-become-author', [
		// "editor_style"	=> "ncmaz-core-block-become-author-editor-style",
		"editor_style"	=> "ncmaz-core-block-become-author-style",
		'style'         => null,
	]);
	register_block_type(__DIR__ . '/build/block-videos', [
		'style'         => null,
	]);
	register_block_type(__DIR__ . '/build/block-newsletter', [
		'style'         => null,
	]);
	//  ======== block-magazine =================
	register_block_type(__DIR__ . '/build/block-magazine', [
		"render_callback" 	=> "render_callback_block_magazine",
		"attributes"		=> array_merge(
			[
				"sectionName" 	=> [
					"type" 		=> "string",
					"default" 	=> "magazine-1"
				],
			],
			$BLOCK_POST_ATTRIBUTES_COMMON
		),
		'style'         => null,
	]);

	//  ======== block-posts-grid =================
	register_block_type(
		__DIR__ . '/build/block-posts-grid',
		[
			"render_callback" 	=> "render_callback_block_posts_grid",
			"attributes"		=> array_merge(
				$BLOCK_POST_ATTRIBUTES_COMMON,
				[
					"blockLayoutStyle" 		=> ["type" => "string", "default" => "layout-1"],
					"postCardName" 			=> ["type" => "string", "default" => "card4"],
					"gridClass" 			=> [
						"type" 		=> "string",
						"default" 	=> "grid-cols-1 sm:grid-cols-2 lg:md:grid-cols-3 xl:grid-cols-4",
					],
					"gridClassCustom" 		=> ["type" => "string", "default" => ""],
					"enableLoadMoreButton" 	=> ["type" => "boolean", "default" => true],
					"loadMoreButtonHref" 	=> ["type" => "string", "default" => ""]
				]
			),
			'style'         => null,
		]
	);

	//  ======== block-posts-slider =================
	register_block_type(
		__DIR__ . '/build/block-posts-slider',
		[
			"render_callback" 	=> "render_callback_block_posts_slider",
			"attributes"		=> array_merge(
				[
					"blockLayoutStyle" 	=> ["type" => "string", "default" => "layout-1"],
					"postCardName" 		=> ["type" => "string", "default" => "card4"],
					"sectionId" 		=> ["type" => "string", "default" => "gutenberg_section_id"],
				],
				$ATTR_SETTINGS_SLIDER,
				$BLOCK_POST_ATTRIBUTES_COMMON,
			),
			'style'         => null,
		]
	);

	//  ======== block-terms-grid =================
	register_block_type(
		__DIR__ . '/build/block-terms-grid',
		[
			"render_callback" 	=> "render_callback_block_terms_grid",
			"attributes"		=> array_merge(
				[
					"gridClass" 		=> [
						"type" 		=> "string",
						"default" 	=> "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
					],
					"gridClassCustom" 	=> ["type" => "string", "default" => ""],
					"sectionId" 		=> ["type" => "string", "default" => "gutenberg_section_term_grid"]
				],
				$BLOCK_TERM_ATTRIBUTES_COMMON,
			),
			'style'         => null,
		]
	);

	//  ======== block-terms-slider =================
	register_block_type(
		__DIR__ . '/build/block-terms-slider',
		[
			"render_callback" 	=> "render_callback_block_terms_slider",
			"attributes"		=> array_merge(
				[
					"sectionId" => [
						"type" => "string", "default" => "gutenberg_section_term_slider"
					]
				],
				$ATTR_SETTINGS_SLIDER,
				$BLOCK_TERM_ATTRIBUTES_COMMON,
			),
			'style'         => null,
		]
	);

	//  ======== block-users-grid =================
	register_block_type(
		__DIR__ . '/build/block-users-grid',
		[
			"render_callback" 	=> "render_callback_block_users_grid",
			"attributes"		=> array_merge(
				[
					"gridClass" => [
						"type" 		=> "string",
						"default" 	=> "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
					],
					"gridClassCustom" => ["type" => "string", "default" => ""],
				],
				$BLOCK_USER_ATTRIBUTES_COMMON,
			),
			'style'         => null,
		]
	);

	//  ======== block-users-slider =================
	register_block_type(
		__DIR__ . '/build/block-users-slider',
		[
			"render_callback" 	=> "render_callback_block_users_slider",
			"attributes"		=> array_merge(
				$ATTR_SETTINGS_SLIDER,
				$BLOCK_USER_ATTRIBUTES_COMMON,
			),
			'style'         => null,
		]
	);

	//  ======== block-widget-posts =================
	register_block_type(
		__DIR__ . '/build/block-widget-posts',
		[
			"render_callback" 	=> "render_callback_block_widget_posts",
			"attributes"		=> array_merge(
				$BLOCK_POST_ATTRIBUTES_COMMON,
				[
					"postCardName" => ["type" => "string", "default" => "card4"],
				]
			),
			'style'         => null,
		]
	);

	//  ======== block-widget-terms =================
	register_block_type(
		__DIR__ . '/build/block-widget-terms',
		[
			"render_callback" 	=> "render_callback_block_widget_terms",
			"attributes"		=> $BLOCK_TERM_ATTRIBUTES_COMMON,
			'style'         => null,
		]
	);

	//  ======== block-widget-users =================
	register_block_type(
		__DIR__ . '/build/block-widget-users',
		[
			"render_callback" 	=> "render_callback_block_widget_users",
			"attributes"		=> $BLOCK_USER_ATTRIBUTES_COMMON,
			'style'         => null,
		]
	);
}

//================================================================================================================================================
// START FUNCTIONS RENDER CALLBACK
//==============================================================================================================================================

//=============================================render_callback_block_widget_users===============================================================
function render_callback_block_widget_users($attributes)
{
	ob_start();
	$ncGutenbergSectionsData = (object)[
		"blockName" 		=> "nc-block-widget-users",
		"graphQLvariables" 	=> $attributes["graphQLvariables"],
		"settings" 			=> (object)[
			"heading" 				=> $attributes["heading"],
			"expectedNumberResults" => $attributes["expectedNumberResults"],
		]
	];
?>
	<div data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-widget-users" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer
	return $output; // Print output
}

// =============================================render_callback_block_widget_terms=====================================================================
function render_callback_block_widget_terms($attributes)
{
	ob_start();
	$ncGutenbergSectionsData = (object)[
		"blockName" 		=> "nc-block-widget-terms",
		"graphQLvariables" 	=> $attributes["graphQLvariables"],
		"settings" 			=> (object)[
			"termCardName" 			=> $attributes["termCardName"],
			"heading" 				=> $attributes["heading"],
			"expectedNumberResults" => $attributes["expectedNumberResults"],
		]
	];
?>
	<div data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-widget-terms" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer
	return $output; // Print output
}

// =============================================render_callback_block_widget_posts=====================================================================
function render_callback_block_widget_posts($attributes, $content)
{
	ob_start();
	$ncGutenbergSectionsData = (object)[
		"blockName" 		=> "nc-block-widget-posts",
		"graphQLvariables" 	=> $attributes["graphQLvariables"],
		"settings" 			=> (object)[
			"postCardName" 			=> $attributes["postCardName"],
			"heading" 				=> $attributes["heading"],
			"expectedNumberResults" => $attributes["expectedNumberResults"],
		]
	];
?>
	<div data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-widget-posts" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer
	return $output; // Print output
}

// =============================================render_callback_block_users_slider=====================================================================
function render_callback_block_users_slider($attributes)
{
	ob_start();
	$ncGutenbergSectionsData = (object)[
		"blockName" 		=> "nc-block-terms-slider",
		"graphQLvariables" 	=> $attributes["graphQLvariables"],
		"settings" 			=> (object)[
			"userCardName" 				=> $attributes["userCardName"],
			"heading" 					=> $attributes["heading"],
			"subHeading" 				=> $attributes["subHeading"],
			"hasBackground" 			=> $attributes["hasBackground"],
			"blockLayoutStyle" 			=> $attributes["blockLayoutStyle"],
			// slider settings
			"itemPerView" 				=> $attributes["itemPerView"],
			"sliderStartAt" 			=> $attributes["sliderStartAt"],
			"sliderAutoplayTime" 		=> $attributes["sliderAutoplayTime"],
			"sliderHoverpause" 			=> $attributes["sliderHoverpause"],
			"sliderAnimationDuration" 	=> $attributes["sliderAnimationDuration"],
			"sliderRewind" 				=> $attributes["sliderRewind"],
			"expectedNumberResults" 	=> $attributes["expectedNumberResults"],
		],
	];
?>
	<div data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-users-slider" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer
	return $output; // Print output
}

// =============================================render_callback_block_users_grid=====================================================================
function render_callback_block_users_grid($attributes)
{
	ob_start();
	$ncGutenbergSectionsData = (object)[
		"blockName" 		=> "nc-block-user-grid",
		"graphQLvariables" 	=> $attributes["graphQLvariables"],
		"settings" 			=> (object)[
			"userCardName" 			=> $attributes["userCardName"],
			"gridClass" 			=> $attributes["gridClass"],
			"gridClassCustom" 		=> $attributes["gridClassCustom"],
			"heading" 				=> $attributes["heading"],
			"subHeading" 			=> $attributes["subHeading"],
			"hasBackground" 		=> $attributes["hasBackground"],
			"blockLayoutStyle" 		=> $attributes["blockLayoutStyle"],
			"expectedNumberResults" => $attributes["expectedNumberResults"],
		],
	];
?>
	<div data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-users-grid" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer
	return $output; // Print output
}

// =============================================render_callback_block_terms_slider=====================================================================
function render_callback_block_terms_slider($attributes)
{
	ob_start();
	$ncGutenbergSectionsData = (object)[
		"blockName" 		=> "nc-block-terms-grid",
		"graphQLvariables" 	=> $attributes["graphQLvariables"],
		"settings" 			=> (object)[
			"blockLayoutStyle" 			=> $attributes["blockLayoutStyle"],
			"termCardName" 				=> $attributes["termCardName"],
			"heading" 					=> $attributes["heading"],
			"subHeading" 				=> $attributes["subHeading"],
			"hasBackground" 			=> $attributes["hasBackground"],
			// slider settings
			"itemPerView" 				=> $attributes["itemPerView"],
			"sliderStartAt" 			=> $attributes["sliderStartAt"],
			"sliderAutoplayTime" 		=> $attributes["sliderAutoplayTime"],
			"sliderHoverpause" 			=> $attributes["sliderHoverpause"],
			"sliderAnimationDuration" 	=> $attributes["sliderAnimationDuration"],
			"sliderRewind" 				=> $attributes["sliderRewind"],
			"expectedNumberResults" 	=> $attributes["expectedNumberResults"],
		],
	];
?>
	<div data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-terms-slider" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer
	return $output; // Print output
}

// =============================================render_callback_block_terms_grid=====================================================================
function render_callback_block_terms_grid($attributes)
{
	ob_start();
	$ncGutenbergSectionsData = (object)[
		"blockName" 		=> "nc-block-terms-grid",
		"graphQLvariables" 	=> $attributes['graphQLvariables'],
		"settings" 			=> (object)[
			"blockLayoutStyle" 		=> $attributes['blockLayoutStyle'],
			"termCardName" 			=> $attributes['termCardName'],
			"heading" 				=> $attributes['heading'],
			"subHeading" 			=> $attributes['subHeading'],
			"hasBackground" 		=> $attributes['hasBackground'],
			"gridClass" 			=> $attributes['gridClass'],
			"gridClassCustom" 		=> $attributes['gridClassCustom'],
			"expectedNumberResults" => $attributes['expectedNumberResults'],
		],
	];
?>
	<div data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-terms-grid" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer
	return $output; // Print output
}

// =============================================render_callback_block_posts_slider=====================================================================
function render_callback_block_posts_slider($attributes, $content)
{
	ob_start();
	$ncGutenbergSectionsData = (object)[
		"blockName" 		=> "nc-block-posts-slider",
		"graphQLvariables" 	=> $attributes["graphQLvariables"],
		"settings" 			=> (object)[
			"blockLayoutStyle" 			=> $attributes["blockLayoutStyle"],
			"postCardName" 				=> $attributes["postCardName"],
			"showFilterTab" 			=> $attributes["showFilterTab"],
			"viewMoreHref" 				=> $attributes["viewMoreHref"],
			"heading" 					=> $attributes["heading"],
			"subHeading" 				=> $attributes["subHeading"],
			"hasBackground" 			=> $attributes["hasBackground"],
			"categories" 				=> $attributes["categories"],
			// slider settings
			"itemPerView" 				=> $attributes["itemPerView"],
			"sliderStartAt" 			=> $attributes["sliderStartAt"],
			"sliderAutoplayTime" 		=> $attributes["sliderAutoplayTime"],
			"sliderHoverpause" 			=> $attributes["sliderHoverpause"],
			"sliderAnimationDuration" 	=> $attributes["sliderAnimationDuration"],
			"sliderRewind" 				=> $attributes["sliderRewind"],
			"expectedNumberResults" 	=> $attributes["expectedNumberResults"],
		],
	];
?>
	<div data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-posts-slider" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer
	return $output; // Print output
}

// =============================================render_callback_block_posts_grid=====================================================================
function render_callback_block_posts_grid($attributes)
{
	ob_start();
	$ncGutenbergSectionsData = (object)[
		"blockName" 		=> "nc-block-posts-grid",
		"graphQLvariables" 	=> $attributes["graphQLvariables"],
		"settings" 			=> (object)[
			"blockLayoutStyle" 		=> $attributes["blockLayoutStyle"],
			"postCardName" 			=> $attributes["postCardName"],
			"gridClass" 			=> $attributes["gridClass"],
			"gridClassCustom" 		=> $attributes["gridClassCustom"],
			"showFilterTab" 		=> $attributes["showFilterTab"],
			"viewMoreHref" 			=> $attributes["viewMoreHref"],
			"heading" 				=> $attributes["heading"],
			"subHeading" 			=> $attributes["subHeading"],
			"hasBackground" 		=> $attributes["hasBackground"],
			"categories" 			=> $attributes["categories"],
			"enableLoadMoreButton" 	=> $attributes["enableLoadMoreButton"],
			"loadMoreButtonHref" 	=> $attributes["loadMoreButtonHref"],
			"filterDataBy" 			=> $attributes["filterDataBy"],
			"expectedNumberResults" => $attributes["expectedNumberResults"],
		],
	];
?>
	<div data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-posts-grid" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer
	return $output; // Print output
}

// =============================================render_callback_block_magazine=====================================================================
function render_callback_block_magazine($attributes)
{
	ob_start();
	$ncGutenbergSectionsData = (object)[
		"blockName" 		=> "nc-block-magazine",
		"graphQLvariables" 	=> $attributes['graphQLvariables'],
		"settings" 			=> (object)[
			"sectionName" 			=> $attributes['sectionName'],
			"showFilterTab" 		=> $attributes['showFilterTab'],
			"viewMoreHref" 			=> $attributes['viewMoreHref'],
			"heading" 				=> $attributes['heading'],
			"subHeading" 			=> $attributes['subHeading'],
			"hasBackground" 		=> $attributes['hasBackground'],
			"categories" 			=> $attributes['categories'],
			"expectedNumberResults" => $attributes['expectedNumberResults'],
		]
	];
?>
	<div data-nc-gutenberg-section="true" data-nc-gutenberg-section-type="block-magazine" data-nc-gutenberg-section-api="<?php echo esc_attr(wp_json_encode($ncGutenbergSectionsData)); ?>"></div>
<?php
	$output = ob_get_contents(); // collect output
	ob_end_clean(); // Turn off ouput buffer
	return $output; // Print output
}
