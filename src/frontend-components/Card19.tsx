import React, { FC } from "react";
import NcImage from "./NcImage/NcImage";
import PostCardMeta from "./PostCardMeta/PostCardMeta";
import PostTypeFeaturedIcon from "./PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import { PostNode } from "../data/postCardType";

export interface Card19Props {
	className?: string;
	post: PostNode;
}

const Card19: FC<Card19Props> = ({ className = "", post }) => {
	const { title, link, featuredImage, postFormats } = post;

	return (
		<div
			className={`nc-Card19 group relative flex flex-col ${className}`}
			data-nc-id="Card19"
		>
			<a
				href={link}
				className="block flex-shrink-0 relative w-full h-0 aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden z-0"
			>
				<NcImage
					containerClassName="absolute inset-0"
					src={featuredImage?.node.sourceUrl || "."}
					srcSet={featuredImage?.node.srcSet}
				/>
				<span>
					<PostTypeFeaturedIcon
						className="absolute bottom-2 left-2"
						postType={postFormats?.edges[0]?.node.slug}
						wrapSize="w-8 h-8"
						iconSize="w-4 h-4"
					/>
				</span>
			</a>

			<div className=" mt-5 flex flex-col">
				<h3 className="nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-base sm:text-lg">
					<a href={link} className="line-clamp-2" title={title}>
						{title}
					</a>
				</h3>

				<PostCardMeta className="mt-3.5" meta={post} />
			</div>
		</div>
	);
};

export default Card19;
