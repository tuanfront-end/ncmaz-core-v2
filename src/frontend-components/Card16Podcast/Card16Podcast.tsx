import React, { FC } from "react";
import CategoryBadgeList from "../CategoryBadgeList/CategoryBadgeList";
import NcImage from "../NcImage/NcImage";
import PostCardDropdownShare from "../PostCardDropdownShare/PostCardDropdownShare";
import PostCardLikeAndComment from "../PostCardLikeAndComment/PostCardLikeAndComment";
import PostTypeFeaturedIcon from "../PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostCardMeta from "../PostCardMeta/PostCardMeta";
import PostCardMetaV2 from "../PostCardMeta/PostCardMetaV2";
import PostCardLikeAction from "../PostCardLikeAction/PostCardLikeAction";
import CardAuthor2 from "../CardAuthor2/CardAuthor2";
import ncFormatDate from "../../utils/formatDate";
import Avatar from "../Avatar/Avatar";

const Card16Podcast = ({
	className = "h-full",
	post,
	ratio = "aspect-w-3 xl:aspect-w-4 aspect-h-3",
	isSkeleton,
}) => {
	const { title, link, categories, excerpt, featuredImage, postFormats } = post;
	const postFormatName = postFormats.edges[0]?.node.slug ;

	const renderIcon = (state) => {
		if (!state) {
			return (
				<svg className="ml-0.5 w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
					></path>
				</svg>
			);
		}

		return (
			<svg className=" w-9 h-9" fill="none" viewBox="0 0 24 24">
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M15.25 6.75V17.25"
				></path>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M8.75 6.75V17.25"
				></path>
			</svg>
		);
	};

	const renderListenButtonDefault = (state) => {
		return (
			<div className="w-14 h-14 flex items-center justify-center rounded-full bg-neutral-50 text-primary-500 cursor-pointer">
				{renderIcon(state)}
			</div>
		);
	};

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
					src={isSkeleton ? "." : featuredImage?.node.sourceUrl || "."}
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
						<img src={ncmazcoreJsData.img_musicWave_png} alt="musicWave" />
					</div>
					{(postFormatName === "post-format-video" || postFormatName === "post-format-audio") &&
						renderListenButtonDefault()}
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
