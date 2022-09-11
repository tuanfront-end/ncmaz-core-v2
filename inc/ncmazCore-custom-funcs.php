<?php

function ncmazCore_getPosts_byBlockSettings(array $attributes = [])
{
    if (!is_admin()) {
        ncmaz_var_export($attributes);
        die;
    }

    if (defined('_NCMAZ_FRONTEND_VERSION') && function_exists('graphql')) :

        $dataGraphql = graphql([
            'query' => '{
				user(id: "' . get_queried_object_id() . '", idType: DATABASE_ID) {
					id
					avatar {
					  url
					}
					name
					username
					userId
					url
					uri
					description
					ncUserMeta {
					  color
					  ncBio
					  youtubeUrl
					  facebookUrl
					  mediumUrl
					  githubUrl
					  vimeoUrl
					  twitterUrl
					  instagramUrl
					  linkedinUrl
					  pinterestUrl
					  twitchUrl
					  websiteUrl
					  buymeacoffeUrl
					  backgroundImage {
						sourceUrl
					  }
					  featuredImage {
						sourceUrl
						id
					  }
					}
				}
			}'
        ]);

    endif;
}
