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
		<div className="text-4xl w-full min-h-full
		bg-blend-overlay bg-fixed bg-center bg-no-repeat bg-cover  bg-[url('https://i.ibb.co/JsyDd3T/raphael-schaller-o-Xq5-Hbf-c-g-unsplash.jpg')]">
			<ScrollContainer>
				<ScrollPage page={0}>
					<Animator animation={welcomeTo}>
						<span
							className="text-gray-800 font-extrabold lg:text-9xl whitespace-nowrap"
							style={{
								fontFamily: "monospace",
							}}
						>
							Welcome to
						</span>
					</Animator>
				</ScrollPage>
				<ScrollPage page={1}>
					<Animator animation={RapidDealer}>
						<span
							className="text-gray-800  font-extrabold lg:text-9xl whitespace-nowrap"
							style={{
								fontFamily: "monospace",
							}}
						>
							Rapid Dealer
						</span>
					</Animator>
				</ScrollPage>
			</ScrollContainer>
		</div>
	)
}

export default HomeBanner
