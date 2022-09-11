<?php
global $ncmaz_redux_demo;

$NCMAZCORE_PLL_CURRENT_LANGUAGE   = function_exists('pll_current_language') ? strtoupper(pll_current_language()) : null;
$NCMAZCORE_PLL_THEMEOPTION_ACTIVED = !empty($ncmaz_redux_demo) && boolval($ncmaz_redux_demo['nc-general-settings--general-switch-polylang']);
$IS_ENABLE_PLL = boolval($NCMAZCORE_PLL_CURRENT_LANGUAGE) && $NCMAZCORE_PLL_THEMEOPTION_ACTIVED;

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
              sourceUrl
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
          id
          altText
          caption
          sourceUrl
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
          id
          sourceUrl
        }
        image2 {
          id
          sourceUrl
        }
        image3 {
          id
          sourceUrl
        }
        image4 {
          id
          sourceUrl
        }
        image5 {
          id
          sourceUrl
        }
        image6 {
          id
          sourceUrl
        }
        image7 {
          id
          sourceUrl
        }
        image8 {
          id
          sourceUrl
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
				sourceUrl
				id
			}
			backgroundImage {
				sourceUrl
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
                sourceUrl
            }
        }
    }
}';
