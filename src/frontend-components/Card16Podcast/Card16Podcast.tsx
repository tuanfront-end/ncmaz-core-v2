import React, { FC } from "react";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import NcImage from "../NcImage/NcImage";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";

const Card16Podcast = ({
	className = "h-full",
	post,
	ratio = "aspect-w-3 xl:aspect-w-4 aspect-h-3",
}) => {
	const { title, link, categories, excerpt, featuredImage, postFormats } = post;

	return (
		<div
			className={`nc-Card16Podcast relative flex flex-col ${className}`}
			data-nc-id="Card16Podcast"
		>
			<a
				href={link}
				className={`block flex-shrink-0 relative w-full rounded-3xl overflow-hidden ${ratio}`}
			>
				<NcImage
					src={featuredImage?.node.sourceUrl || "."}
					srcSet={featuredImage?.node.srcSet}
				/>
				<span className="bg-neutral-900 bg-opacity-30"></span>
			</a>

			{/* ABSOLUTE */}
			<a href={link} className="absolute inset-0"></a>
			<span className="absolute top-3 inset-x-3">
				<CategoryBadgeList categories={categories} />
			</span>

			{/* MAIN CONTENT */}
			<div className="w-11/12 transform -mt-32 ">
				<div className="px-5 flex items-center space-x-4">
					<div className="flex-grow ">
						{/* <img
							src={window.ncmazcoreJsData.img_musicWave_png}
							alt="musicWave"
						/> */}
					</div>
				</div>
				<div className="p-5 mt-5 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-3xl rounded-tl-none flex flex-col flex-grow ">
					<h2 className="nc-card-title block text-xl font-semibold text-neutral-900 dark:text-neutral-100 ">
						<a href={link} className="line-clamp-1" title={title}>
							{title}
						</a>
					</h2>
					<span className="block text-sm text-neutral-500 dark:text-neutral-400 mt-3 mb-5">
						<span
							className="line-clamp-2"
							dangerouslySetInnerHTML={{ __html: excerpt }}
						/>
					</span>
					<div className="flex items-end justify-between mt-auto">
						<PostCardLikeAndComment className="relative" postData={post} />
						<PostCardDropdownShare />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card16Podcast;
