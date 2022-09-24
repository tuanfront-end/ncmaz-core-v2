import React, { FC } from "react";
import NcImage from "../NcImage/NcImage";

const Card15Podcast = ({ className = "h-full", post }) => {
	const { title, link, featuredImage, postFormats, excerpt } = post;

	return (
		<div
			className={`nc-Card15Podcast relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
			data-nc-id="Card15Podcast"
		>
			<div className="w-1/4 flex-shrink-0">
				<a
					href={link}
					className={`block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg `}
				>
					<NcImage
						containerClassName="absolute inset-0"
						className="object-cover w-full h-full "
						src={featuredImage?.node.sourceUrl}
						srcSet={featuredImage?.node.srcSet}
					/>
				</a>
			</div>

			<div className="flex flex-col flex-grow ml-4 overflow-hidden">
				<h2 className={`nc-card-title block font-semibold text-lg`}>
					<a href={link} className="line-clamp-1" title={title}>
						{title}
					</a>
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
		</div>
	);
};

export default Card15Podcast;
