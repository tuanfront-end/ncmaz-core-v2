import React, { FC } from "react";

import Card2 from "../Card2/Card2";
import Card9 from "../Card9/Card9";

const SectionMagazine3 = ({ activePosts }) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
			{activePosts[0] && <Card2 size="large" post={activePosts[0].node} />}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
				{activePosts
					.filter((_, i) => i < 5 && i >= 1)
					.map((item, index) => (
						<Card9 ratio="aspect-w-3 aspect-h-3" key={index} post={item.node} />
					))}
			</div>
		</div>
	);
};

export default SectionMagazine3;
