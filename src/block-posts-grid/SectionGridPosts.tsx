import React, { FC } from "react";
import HeaderSectionFilter, {
	TypeOnClickTabHeaderSectionFilterTabs,
} from "../frontend-components/HeaderSectionFilter/HeaderSectionFilter";
import Heading from "../frontend-components/Heading/Heading";
import Card1 from "../frontend-components/Card1/Card1";
import Card2 from "../frontend-components/Card2/Card2";
import Card3 from "../frontend-components/Card3/Card3";
import Card4 from "../frontend-components/Card4/Card4";
import Card5 from "../frontend-components/Card5/Card5";
import Card7 from "../frontend-components/Card7/Card7";
import Card9 from "../frontend-components/Card9/Card9";
import Card10 from "../frontend-components/Card10/Card10";
import Card10V2 from "../frontend-components/Card10/Card10V2";
import Card11 from "../frontend-components/Card11/Card11";
import Card14 from "../frontend-components/Card14/Card14";
import Card15Podcast from "../frontend-components/Card15Podcast/Card15Podcast";
import Card17Podcast from "../frontend-components/Card17Podcast/Card17Podcast";
import Card16Podcast from "../frontend-components/Card16Podcast/Card16Podcast";
import Card6 from "../frontend-components/Card6/Card6";
import Card8 from "../frontend-components/Card8/Card8";
import Card12 from "../frontend-components/Card12/Card12";
import Card13 from "../frontend-components/Card13/Card13";
import Card18 from "../frontend-components/Card18";
import Card19 from "../frontend-components/Card19";

interface SectionGridPostsProps {
	blockLayoutStyle: string;
	heading: string;
	subHeading: string;
	listPosts: any[];
	gridClassCustom: string;
	gridClass: string;
	showFilterTab: boolean;
	viewMoreHref: string;
	categories: any[];
	postCardName: string;
	hasBackground: boolean;
	loading: boolean;
	tabActiveId: number;
	handleClickTab: TypeOnClickTabHeaderSectionFilterTabs;
}

const SectionGridPosts: FC<SectionGridPostsProps> = ({
	blockLayoutStyle,
	heading,
	subHeading,
	listPosts = [],
	gridClassCustom,
	gridClass,
	showFilterTab,
	viewMoreHref,
	categories = [],
	postCardName,
	hasBackground,
	//
	loading,
	tabActiveId,
	handleClickTab,
}) => {
	const renderHeading = () => {
		if (blockLayoutStyle === "layout-1") {
			return <Heading desc={subHeading}>{heading}</Heading>;
		}
		return (
			<Heading desc={subHeading} isCenter>
				{heading}
			</Heading>
		);
	};

	const renderCard = (post, index: number) => {
		switch (postCardName) {
			case "card1":
				return <Card1 key={post.id} post={post} />;
			case "card2":
				return <Card2 key={post.id} post={post} />;
			case "card3":
				return (
					<div className="w-full" key={post.id}>
						<Card3 post={post} />
					</div>
				);
			case "card4":
				return <Card4 key={post.id} post={post} />;
			case "card5":
				return <Card5 key={post.id} post={post} index={index + 1} />;
			case "card6":
				return <Card6 key={post.id} post={post} />;
			case "card7":
				return <Card7 key={post.id} post={post} />;
			case "card8":
				return <Card8 ratio="pt-[100%] " key={post.id} post={post} />;
			case "card9":
				return <Card9 key={post.id} post={post} />;
			case "card10":
				return <Card10 key={post.id} post={post} />;
			case "card10V2":
				return <Card10V2 key={post.id} post={post} />;
			case "card11":
				return <Card11 key={post.id} post={post} />;
			case "card12":
				return <Card12 key={post.id} post={post} />;
			case "card13":
				return <Card13 key={post.id} post={post} />;
			case "card14":
				return <Card14 key={post.id} post={post} />;
			case "card15Podcast":
				return <Card15Podcast key={post.id} post={post} />;
			case "card16Podcast":
				return <Card16Podcast key={post.id} post={post} />;
			case "card17Podcast":
				return <Card17Podcast key={post.id} post={post} />;
			case "card18":
				return <Card18 key={post.id} post={post} />;
			case "card19":
				return <Card19 key={post.id} post={post} />;
			default:
				return null;
		}
	};

	return (
		<div className={"relative"}>
			{showFilterTab && !!categories?.length ? (
				<HeaderSectionFilter
					tabs={categories}
					viewMoreHref={viewMoreHref}
					heading={heading}
					subHeading={subHeading}
					onClickTab={handleClickTab}
					tabActiveId={tabActiveId}
				/>
			) : (
				renderHeading()
			)}
			<div
				className={`grid gap-6 md:gap-8 ${
					!!gridClassCustom ? gridClassCustom : gridClass
				}`}
			>
				{listPosts?.map((post, index) => renderCard(post.node, index))}
			</div>
		</div>
	);
};

export default SectionGridPosts;
