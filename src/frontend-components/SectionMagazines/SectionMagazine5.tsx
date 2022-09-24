import React, { FC } from "react";

import Card12 from "../Card12/Card12";
import Card13 from "../Card13/Card13";

const SectionMagazine5 = ({ activePosts, isLoading = false }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
			{activePosts[0] && <Card12 post={activePosts[0].node} />}
			<div className="grid grid-cols-1 gap-5 md:gap-7">
				{activePosts
					.filter((_, i) => i < 4 && i > 0)
					.map((item, index) => (
						<Card13 isSkeleton={isLoading} key={index} post={item.node} />
					))}
			</div>
		</div>
	);
};

export default SectionMagazine5;
