import  hero from  "@/app/style/herosection.module.css";
import  styles from "@/app/style/common.module.css"
import Image from "next/image";
import Link from "next/link";
import {Mulish} from "next/font/google";
const mulish = Mulish({
    weight: ['300','400','500','600','700','800','900'],
    subsets: ['latin'],
    display : "swap"
})

const Herosection = ({title, imageUrl}) => {
    return (
        <main className={hero.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={hero.hero_content}>
                        <h1>{title}</h1>
                        <p>lorem10 sni div hd ihcschsdbc hcdshchs wddjak csc ss effsdza dss dew asvs daef wvsa efr sad
                            fwra qfewadefw a</p>
                        <Link href="./movie">
                            <button className={mulish.className}>
                                Expore Movie
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Image src={imageUrl} alt="Watching netflix" width={450} height={450}/>
                    </div>

                </div>

            </div>
            <div className={hero['custom-shape-divider-bottom-1681647578']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={hero["shape-fill"]}></path>
                </svg>
            </div>

        </main>
    );
};

export default Herosection;