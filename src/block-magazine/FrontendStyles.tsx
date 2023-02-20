import React, { FC } from "react";
import ReactDOM from "react-dom";

interface Props {}

const FrontendStyles: FC<Props> = (attrs) => {
	return <div>tuan</div>;
};

//
const divsToUpdate = document.querySelectorAll(
	".wcb-magazine__wrap.wcb-update-div"
);
divsToUpdate.forEach((div) => {
	const preEl = div.querySelector(
		`pre[data-wcb-block-attrs=${"uniqueId"}]`
	) as HTMLElement | null;

	const divRenderCssEl = div.querySelector(
		`div[data-wcb-global-styles=${"uniqueId"}]`
	) as HTMLElement | null;

	if (!preEl || !preEl.innerText || !divRenderCssEl) {
		return;
	}
	//
	const props = JSON.parse(preEl?.innerText);
	//
	ReactDOM.render(<FrontendStyles {...props} />, divRenderCssEl);
	//
	div.classList.remove("wcb-update-div");
	preEl.remove();
});
