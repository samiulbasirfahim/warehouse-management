import React from "react"
import {
	Animator,
	batch,
	Fade,
	FadeIn,
	MoveOut,
	ScrollContainer,
	ScrollPage,
	Sticky,
	StickyIn,
	ZoomIn,
	ZoomOut,
} from "react-scroll-motion"

const HomeBanner = () => {
	const welcomeTo = batch(Fade(), Sticky(), MoveOut(400, -200), ZoomOut())
	const RapidDealer = batch(StickyIn(), FadeIn(), ZoomIn())
	return (
		<div
			className="text-4xl w-full min-h-full
		bg-blend-overlay bg-fixed bg-center bg-no-repeat bg-cover bg-[url('https://i.ibb.co/JsyDd3T/raphael-schaller-o-Xq5-Hbf-c-g-unsplash.jpg')] dark:bg-[url('https://i.ibb.co/mRM8pHR/pexels-sourav-mishra-2710043.jpg')]"
		>
			<ScrollContainer>
				<ScrollPage page={0}>
					<Animator animation={welcomeTo}>
						<span className="text-[#ff5722] font-extrabold lg:text-9xl whitespace-nowrap font-mono">
							Welcome to
						</span>
					</Animator>
				</ScrollPage>
				<ScrollPage page={1}>
					<Animator animation={RapidDealer}>
						<span className="text-[#ff5722] font-extrabold lg:text-9xl whitespace-nowrap font-mono">
							Rapid Dealer
						</span>
					</Animator>
				</ScrollPage>
			</ScrollContainer>
		</div>
	)
}

export default HomeBanner
