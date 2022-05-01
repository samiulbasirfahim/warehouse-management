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
		<div className="text-4xl bg-[url('https://i.ibb.co/WgvQN6K/blue-jeep-parking-public-zone-2.jpg')] bg-cover bg-no-repeat w-full">
			<ScrollContainer>
				<ScrollPage page={0}>
					<Animator animation={welcomeTo}>
						<span
							className="text-white font-extrabold lg:text-6xl whitespace-nowrap"
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
							className="text-white font-extrabold lg:text-6xl whitespace-nowrap"
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
