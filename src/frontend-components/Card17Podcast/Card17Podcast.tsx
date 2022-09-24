import React, { FC } from "react";
import NcImage from "../NcImage/NcImage";

const Card17Podcast = ({ className = "", post }) => {
	const { title, link, featuredImage, postFormats, excerpt } = post;
	const postFormatName = postFormats.edges[0]?.node.slug;

	return (
		<div
			className={`nc-Card17Podcast relative flex items-center justify-between p-2.5 space-x-5 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow ${className}`}
			data-nc-id="Card17Podcast"
		>
			<a href={link} className="flex  items-center space-x-4">
				<div className="block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg">
					<NcImage
						containerClassName="absolute inset-0"
						className="object-cover w-full h-full "
						src={featuredImage?.node.sourceUrl || "."}
						srcSet={featuredImage?.node.srcSet}
					/>
				</div>
				<div className="flex flex-col flex-grow">
					<h2 className={`block font-semibold text-lg`}>
						<span className="line-clamp-1" title={title}>
							{title}
						</span>
					</h2>
					{excerpt ? (
						<span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 ">
							<span
								className="line-clamp-1"
								dangerouslySetInnerHTML={{ __html: excerpt }}
							></span>
						</span>
					) : null}
				</div>
			</a>
		</div>
	);
};

export default Card17Podcast;
