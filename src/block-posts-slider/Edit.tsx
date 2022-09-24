import React from "react";
import { __ } from "@wordpress/i18n";
import InputSearchPosts from "../components/InputSearchPosts";
import InputSearchCategories from "../components/InputSearchCategories";
import InputSearchTags from "../components/InputSearchTags";
import { useEffect, useState } from "react";
import {
	TextControl,
	Panel,
	PanelBody,
	PanelRow,
	RadioControl,
	FormToggle,
	SelectControl,
	Spinner,
	RangeControl,
} from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import SelectOrderBy from "../components/SelectOrderBy";
import SelectOrder from "../components/SelectOrder";
import InputSearchAuthors from "../components/InputSearchAuthors";
import SectionSliderPosts from "./SectionSliderPosts";
import EmptyState from "../frontend-components/EmptyState/EmptyState";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import SliderSettings from "../components/SliderSettings";
import { BlockPostAttributesCommon, EditProps } from "../block-magazine/Edit";
import usePostGqlQuery from "../hooks/usePostGqlQuery";
import {
	OPTIONS_FILTER_DATA_BY,
	ValueOfOptionFilterDataBy,
} from "../contains/common";

export interface TypeSliderSettings {
	itemPerView: number;
	sliderStartAt: number;
	sliderAutoplayTime: number;
	sliderHoverpause: boolean;
	sliderAnimationDuration: number;
	sliderRewind: boolean;
}

export interface BlockPostsSliderEditAttributes
	extends BlockPostAttributesCommon,
		TypeSliderSettings {
	blockLayoutStyle: string;
	postCardName: string;
	sectionId: string;
}

export default function BlockPostsSliderEdit(
	props: EditProps<BlockPostsSliderEditAttributes>
) {
	const { attributes, setAttributes } = props;

	const {
		filterDataBy,
		posts,
		categories,
		tags,
		orderBy,
		order,
		numberPerPage,
		authors,
		//
		itemPerView,
		sliderStartAt,
		sliderAutoplayTime,
		sliderHoverpause,
		sliderAnimationDuration,
		sliderRewind,
		//
		blockLayoutStyle,
		postCardName,
		showFilterTab,
		viewMoreHref,
		heading,
		subHeading,
		hasBackground,
		hasSSrInitData,
	} = attributes;

	//
	const {
		GQL_QUERY__string,
		GQL_QUERY__string_text,
		variables,
		dataLists,
		error,
		loading,
		data,
		handleClickTab,
		tabActiveId,
	} = usePostGqlQuery(attributes);

	// ---- SAVE graphQLvariables ----
	useEffect(() => {
		if (!data) return;
		setAttributes({
			graphQLvariables: {
				variables,
				queryString: GQL_QUERY__string_text,
			},
			expectedNumberResults: dataLists.length || numberPerPage,
		});
	}, [data]);
	//
	const handleChangeFilterDataBy = (value: ValueOfOptionFilterDataBy) => {
		if (value === "by_specific") {
			setAttributes({
				filterDataBy: value,
				showFilterTab: false,
				categories: [],
				tags: [],
				authors: [],
			});
		} else {
			setAttributes({
				filterDataBy: value,
				showFilterTab: true,
				posts: [],
			});
		}
	};
	//
	const renderFilterPostsContent = () => {
		if (filterDataBy === "by_specific") {
			return (
				<InputSearchPosts
					defaultValue={posts}
					onChange={(posts) => setAttributes({ posts })}
				/>
			);
		}

		return (
			<div className="w-full space-y-2.5">
				{/* ------- */}
				<InputSearchCategories
					defaultValue={categories}
					onChange={(categories) => setAttributes({ categories })}
				/>

				{/* ------- */}
				<InputSearchTags
					defaultValue={tags}
					onChange={(tags) => setAttributes({ tags })}
				/>

				{/* ------- */}
				<InputSearchAuthors
					defaultValue={authors}
					onChange={(authors) => setAttributes({ authors })}
				/>

				{/* ------- */}
				<SelectOrderBy
					defaultValue={orderBy}
					onChange={(orderBy) => setAttributes({ orderBy })}
				/>

				{/* ------- */}
				<SelectOrder
					defaultValue={order}
					onChange={(order) => setAttributes({ order })}
				/>

				{/* ------- */}
				<RangeControl
					label={__("Number per page", "ncmaz-core")}
					value={numberPerPage}
					onChange={(numberPerPage) => setAttributes({ numberPerPage })}
					min={1}
					max={20}
				/>
			</div>
		);
	};

	const renderGeneralSetting = () => {
		return (
			<div className="space-y-2.5">
				<SelectControl
					label={__("Choose type of block", "ncmaz-core")}
					value={blockLayoutStyle}
					options={[
						{ label: "Layout type 1", value: "layout-1" },
						{ label: "Layout type 2", value: "layout-2" },
					]}
					onChange={(blockLayoutStyle) => setAttributes({ blockLayoutStyle })}
				/>

				<SelectControl
					label={__("Choose type of post card", "ncmaz-core")}
					value={postCardName}
					options={[
						{ label: "Post card 1", value: "card1" },
						{ label: "Post card 2", value: "card2" },
						{ label: "Post card 3", value: "card3" },
						{ label: "Post card 4", value: "card4" },
						{ label: "Post card 5", value: "card5" },
						{ label: "Post card 6", value: "card6" },
						{ label: "Post card 7", value: "card7" },
						{ label: "Post card 8", value: "card8" },
						{ label: "Post card 9", value: "card9" },
						{ label: "Post card 10", value: "card10" },
						{ label: "Post card 10V2", value: "card10V2" },
						{ label: "Post card 11", value: "card11" },
						{ label: "Post card 12", value: "card12" },
						{ label: "Post card 13", value: "card13" },
						{ label: "Post card 14", value: "card14" },
						{ label: "Post card 15-Podcast", value: "card15Podcast" },
						{ label: "Post card 16-Podcast", value: "card16Podcast" },
						{ label: "Post card 17-Podcast", value: "card17Podcast" },
						{ label: "Post card 18", value: "card18" },
						{ label: "Post card 19", value: "card19" },
					]}
					onChange={(postCardName) => setAttributes({ postCardName })}
				/>

				<div className="w-full space-y-1">
					<SliderSettings
						itemPerView={itemPerView}
						sliderStartAt={sliderStartAt}
						sliderAutoplayTime={sliderAutoplayTime}
						sliderHoverpause={sliderHoverpause}
						sliderAnimationDuration={sliderAnimationDuration}
						sliderRewind={sliderRewind}
						onChangeItemPerView={(itemPerView) =>
							setAttributes({ itemPerView })
						}
						onChangeSliderStartAt={(sliderStartAt) =>
							setAttributes({ sliderStartAt })
						}
						onChangeSliderAutoplayTime={(sliderAutoplayTime) =>
							setAttributes({ sliderAutoplayTime })
						}
						onChangeSliderHoverpause={(sliderHoverpause) =>
							setAttributes({ sliderHoverpause })
						}
						onChangeSliderAnimationDuration={(sliderAnimationDuration) =>
							setAttributes({ sliderAnimationDuration })
						}
						onChangeSliderRewind={(sliderRewind) =>
							setAttributes({ sliderRewind })
						}
					/>
				</div>

				<TextControl
					label={__("Heading", "ncmaz-core")}
					value={heading}
					type="text"
					onChange={(heading) => setAttributes({ heading })}
				/>

				<TextControl
					label={__("Sub heading", "ncmaz-core")}
					value={subHeading}
					type="text"
					onChange={(subHeading) => setAttributes({ subHeading })}
				/>

				{filterDataBy !== "by_specific" && (
					<div className="w-full space-x-3 flex ">
						<FormToggle
							checked={showFilterTab}
							onChange={() => setAttributes({ showFilterTab: !showFilterTab })}
							label={__("Show filter tab", "ncmaz-core")}
						/>
						<legend>{__("Show filter tab", "ncmaz-core")}</legend>
					</div>
				)}

				<TextControl
					label={__("View more href", "ncmaz-core")}
					value={viewMoreHref}
					type="url"
					onChange={(viewMoreHref) => setAttributes({ viewMoreHref })}
				/>

				<div className="w-full space-x-3 flex ">
					<FormToggle
						checked={hasBackground}
						onChange={() => setAttributes({ hasBackground: !hasBackground })}
						label={__("Enable Background", "ncmaz-core")}
					/>
					<legend>{__("Enable Background", "ncmaz-core")}</legend>
				</div>
			</div>
		);
	};

	const renderSidebarSetting = () => {
		return (
			<InspectorControls key="setting">
				<div data-type="ncmaz-core/sidebar-settings">
					<Panel header="Section settings">
						<PanelBody title="General Settings">
							<PanelRow>{renderGeneralSetting()}</PanelRow>
						</PanelBody>
						<PanelBody initialOpen={false} title="Filter data settings">
							<PanelRow>
								<div>
									<div className="w-full space-x-3 flex ">
										<FormToggle
											checked={hasSSrInitData}
											onChange={() =>
												setAttributes({ hasSSrInitData: !hasSSrInitData })
											}
											label={__("Has SSR Init Data", "ncmaz-core")}
										/>
										<legend>{__("Has SSR Init Data", "ncmaz-core")}</legend>
									</div>
									<span className="text-xs block mt-1.5">
										{__(
											"If disabled, the block's data will be loaded when the block is rendered on the client side",
											"ncmaz-core"
										)}
									</span>
								</div>
							</PanelRow>
							<PanelRow>
								<RadioControl
									label=""
									selected={filterDataBy}
									options={OPTIONS_FILTER_DATA_BY}
									onChange={handleChangeFilterDataBy}
								/>
							</PanelRow>
							<div className="border-b border-gray-600 mt-2 mb-4"></div>
							<PanelRow>{renderFilterPostsContent()}</PanelRow>
						</PanelBody>
					</Panel>
				</div>
			</InspectorControls>
		);
	};

	//
	return (
		<div {...useBlockProps()}>
			{renderSidebarSetting()}
			<div
				className={`nc-SectionSliderPosts relative ${
					hasBackground ? "py-16" : ""
				} `}
			>
				{hasBackground && <BackgroundSection />}

				<SectionSliderPosts
					{...attributes}
					listData={dataLists}
					loading={loading}
					tabActiveId={tabActiveId}
					handleClickTab={handleClickTab}
				/>

				<div className="relative">
					{loading && <Spinner />}
					{error && (
						<pre className="text-xs text-red-500">
							<code>{JSON.stringify(error)}</code>
						</pre>
					)}
					{!dataLists.length && !loading && <EmptyState />}
				</div>
			</div>
		</div>
	);
}
