import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<div className="home">
			<Head>
				<title>SAGE</title>
			</Head>
			<section className="hero">
				<h1 className="hero__title">SAGE</h1>
				<h2 className="hero__subtitle">Crafting most fair products in Web3</h2>
			</section>
			<section className="second">
				<div className="second__circle">
					<h1>A Circle Based Ecosystem</h1>
				</div>
			</section>
			<section className="third">
				<div>NFT</div>
				<div>ASH</div>
				<div>DEFI</div>
				<div>TAU</div>
				<div>DAO</div>
			</section>
		</div>
	);
}
