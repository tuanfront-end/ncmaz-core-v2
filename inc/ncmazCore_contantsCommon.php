<?php
global $ncmaz_redux_demo;

$NCMAZCORE_PLL_CURRENT_LANGUAGE   = function_exists('pll_current_language') ? strtoupper(pll_current_language()) : null;
$NCMAZCORE_PLL_THEMEOPTION_ACTIVED = !empty($ncmaz_redux_demo) && boolval($ncmaz_redux_demo['nc-general-settings--general-switch-polylang']);
$IS_ENABLE_PLL = boolval($NCMAZCORE_PLL_CURRENT_LANGUAGE) && $NCMAZCORE_PLL_THEMEOPTION_ACTIVED;

$NCMAZ_CORE_INIT_POSTS = [];
$NCMAZ_CORE_INIT_TERMS = [];
$NCMAZ_CORE_INIT_USERS = [];

$NCMAZ_CORE_FEATURED_IMAGE_COMMONT =  '
id
altText
caption
databaseId
sizes
sourceUrl
srcSet
';

// ===================== POSTS =================================================
$EDGES_POST_COMMONT_FIELDS = 'edges {
    node {
      id
      link
      author {
        node {
          id
          avatar {
            url
          }
          url
          uri
          username
          name
          slug
          ncUserMeta {
            featuredImage {
              ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
            }
          }
        }
      }
      categories {
        edges {
          node {
            id
            link
            name
            uri
            slug
            count
            categoryId
            ncTaxonomyMeta {
              color
            }
          }
        }
      }
      commentCount
      date
      excerpt
      featuredImage {
        node {
          ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
        }
      }
      postFormats {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
      postId
      slug
      title
      ncmazVideoUrl {
        fieldGroupName
        videoUrl
      }
      ncmazAudioUrl {
        fieldGroupName
        audioUrl
      }
      ncPostMetaData {
        favoriteButtonShortcode
        readingTimeShortcode
        viewsCount
        fieldGroupName
      }
      ncmazGalleryImgs {
        fieldGroupName
        image1 {
          ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
        }
        image2 {
          ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
        }
        image3 {
          ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
        }
        image4 {
          ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
        }
        image5 {
          ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
        }
        image6 {
          ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
        }
        image7 {
          ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
        }
        image8 {
          ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
        }
      }
    }
  }';

// ===================== USERS =================================================
$EDGES_USER_COMMONT_FIELDS = 'edges {
	node {
		id
		name
		username
		userId
		url
		uri
    ncUserMeta {
			color
			ncBio
			featuredImage {
        ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
			}
			backgroundImage {
        ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
			}
		}
    posts {
      pageInfo {
        total
      }
    }
	}
}';

// ===================== TERMS - TAGS | CATEGORIES =========================================
$EDGES_TERMS_COMMONT_FIELDS = 'edges {
    node {
        id
        slug
        count
        name
        databaseId
        description
        link
        ncTaxonomyMeta {
            color                                     
            featuredImage {
              ' . $NCMAZ_CORE_FEATURED_IMAGE_COMMONT . '
            }
        }
    }
}';
