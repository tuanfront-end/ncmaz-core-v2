import React, { useState, useEffect } from "react";
import { __ } from "@wordpress/i18n";
import InputSearchPosts from "../components/InputSearchPosts";
import InputSearchCategories from "../components/InputSearchCategories";
import InputSearchTags from "../components/InputSearchTags";
import {
	BaseControl,
	TextControl,
	Panel,
	PanelBody,
	PanelRow,
	RadioControl,
	FormToggle,
	SelectControl,
	Spinner,
} from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import SelectOrderBy from "../components/SelectOrderBy";
import SelectOrder from "../components/SelectOrder";
import InputNumberPerPage from "../components/InputNumberPerPage";
import InputSearchAuthors from "../components/InputSearchAuthors";
import SectionGridPosts from "./SectionGridPosts";
import EmptyState from "../frontend-components/EmptyState/EmptyState";
import BackgroundSection from "../frontend-components/BackgroundSection/BackgroundSection";
import { BlockPostAttributesCommon, EditProps } from "../block-magazine/Edit";
import {
	OPTIONS_FILTER_DATA_BY,
	ValueOfOptionFilterDataBy,
} from "../contains/common";
import usePostGqlQuery from "../hooks/usePostGqlQuery";

interface BlockPostsGridEditAttributes extends BlockPostAttributesCommon {
	blockLayoutStyle: string;
	postCardName: string;
	gridClass: string;
	gridClassCustom: string;
	// new
	enableLoadMoreButton: boolean;
	loadMoreButtonHref: string;
}

export default function Edit(props: EditProps<BlockPostsGridEditAttributes>) {
	const { attributes, setAttributes, clientId } = props;
	//

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
		blockLayoutStyle,
		postCardName,
		gridClass,
		gridClassCustom,
		showFilterTab,
		viewMoreHref,
		heading,
		subHeading,
		hasBackground,
		//NEWS
		enableLoadMoreButton,
		loadMoreButtonHref,
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
				<InputNumberPerPage
					defaultValue={numberPerPage}
					onChange={(numberPerPage) => setAttributes({ numberPerPage })}
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
					onChange={(postCardName) => {
						setAttributes({ postCardName });
						const horizontalCol2 = ["card3", "card6", "card13"];
						const boxBorderCol4_phone1 = [
							"card2",
							"card4",
							"card5",
							"card7",
							"card9",
							"card11",
							"card14",
							"card17Podcast",
						];
						const cardLargeCol3 = [
							"card1",
							"card8",
							"card10V2",
							"card12",
							"card15Podcast",
							"card16Podcast",
						];
						if (boxBorderCol4_phone1.includes(postCardName)) {
							setAttributes({
								gridClass:
									"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
							});
						} else if (horizontalCol2.includes(postCardName)) {
							setAttributes({ gridClass: "grid-cols-1 sm:grid-cols-2" });
						} else if (cardLargeCol3.includes(postCardName)) {
							setAttributes({
								gridClass: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
							});
						} else {
							setAttributes({
								gridClass:
									"grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
							});
						}
					}}
				/>

				<SelectControl
					label={__("Choose items per row", "ncmaz-core")}
					value={gridClass}
					help={__(`Large: Other larger devices`, "ncmaz-core")}
					options={[
						{
							label: "Only 1 for all devices",
							value: "grid-cols-1",
						},
						{
							label: "Phone:1/Larger:2",
							value: "grid-cols-1 sm:grid-cols-2",
						},
						{
							label: "Phone:1/Tablet:2/Larger:3",
							value: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
						},
						{
							label: "Phone:1/Tablet:2/Laptop:3/Larger:4",
							value: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
						},
						{
							label: "Phone:2/Tablet:2/Laptop:3/Larger:4",
							value: "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
						},
					]}
					onChange={(gridClass) => setAttributes({ gridClass })}
				/>

				<div>
					<TextControl
						label={__(
							"Items per row overwrite class(es) (advance)",
							"ncmaz-core"
						)}
						value={gridClassCustom}
						type="text"
						onChange={(gridClassCustom) => setAttributes({ gridClassCustom })}
						help={
							<span>
								If you enter this field will overwrite the field "Choose items
								per row" above (
								<a
									href="https://tailwindcss.com/docs/responsive-design"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sky-500"
								>
									Tailwindcss responsive-design
								</a>
								)
							</span>
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

				{filterDataBy !== "by_specific" && showFilterTab && (
					<TextControl
						label={__("View more href", "ncmaz-core")}
						value={viewMoreHref}
						type="url"
						onChange={(viewMoreHref) => setAttributes({ viewMoreHref })}
					/>
				)}

				<>
					<div className="w-full space-x-3 flex ">
						<BaseControl
							id="FormToggle-1-Enable-Loadmore-mode"
							label={__("Enable Loadmore button", "ncmaz-core")}
							help={__(
								"Show Load-more button (Load more infinite mode only work at select posts by-filter)",
								"ncmaz-core"
							)}
						>
							<FormToggle
								id="FormToggle-1-Enable-Loadmore-mode"
								checked={enableLoadMoreButton}
								onChange={() =>
									setAttributes({ enableLoadMoreButton: !enableLoadMoreButton })
								}
							/>
						</BaseControl>
					</div>
					<TextControl
						label={__(
							"Load-more button href (Leave empty and select posts by-filter if want use load more infinite post)",
							"ncmaz-core"
						)}
						help={__(
							"If you want use load-more mode please do not enter this field.",
							"ncmaz-core"
						)}
						value={loadMoreButtonHref}
						type="text"
						onChange={(loadMoreButtonHref) =>
							setAttributes({ loadMoreButtonHref })
						}
					/>
				</>

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
							<hr />
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
			<div className={hasBackground ? "relative py-16" : "relative"}>
				{hasBackground && <BackgroundSection />}
				<SectionGridPosts
					{...attributes}
					listPosts={dataLists}
					loading={loading}
					tabActiveId={tabActiveId}
					handleClickTab={handleClickTab}
				/>

				<div className="relative">
					{/*  */}
					{loading && <Spinner />}
					{error && (
						<pre className="text-xs text-red-500 ">
							<code>{JSON.stringify(error)}</code>
						</pre>
					)}
					{!dataLists.length && !loading && <EmptyState />}
					{/*  */}
				</div>
			</div>
		</div>
	);
}
