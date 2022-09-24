import React, { FC } from "react";
import NcImage from "../NcImage/NcImage";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostCardMeta from "../PostCardMeta/PostCardMeta";

const Card12 = ({ className = "h-full", post }) => {
	const { title, link, featuredImage, excerpt, postFormats } = post;

	return (
		<div
			className={`nc-Card12 group relative flex flex-col ${className}`}
			data-nc-id="Card12"
		>
			<a
				href={link}
				className="block flex-shrink-0 relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden"
			>
				<NcImage
					containerClassName="absolute inset-0"
					src={featuredImage?.node.sourceUrl || "."}
					srcSet={featuredImage?.node.srcSet}
				/>
				<span>
					<PostTypeFeaturedIcon
						className="absolute bottom-2 left-2"
						postType={postFormats.edges[0]?.node.slug}
						wrapSize="w-8 h-8"
						iconSize="w-4 h-4"
					/>
				</span>
			</a>
			<div className=" mt-8 pr-10 flex flex-col">
				<h2
					className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl`}
				>
					<a href={link} className="line-clamp-2" title={title}>
						{title}
					</a>
				</h2>
				{excerpt && (
					<span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
						<span
							className="line-clamp-2"
							dangerouslySetInnerHTML={{ __html: excerpt }}
						/>
					</span>
				)}
				<PostCardMeta className="mt-5" meta={post} />
			</div>
		</div>
	);
};

export default Card12;
