
'use client'
import { cn } from "@/lib/utils";
import dynamic from 'next/dynamic';
import HeadingOne from "../Headings/HeadingOne";


const Marquee = dynamic(() => import('../ui/marquee'), { ssr: false });

const Fade = dynamic(() => import('react-awesome-reveal').then((mod) => mod.Fade), { ssr: false });

const reviews = [
  {
    img: "/Images/ourclients/cr.webp",
  },
  {
    img: "/Images/ourclients/afk.webp",
  },
  {
    img: "/Images/ourclients/riot.webp",
  },
  {
    img: "/Images/ourclients/thefinals.webp",
  },
  {
    img: "/Images/ourclients/ampverse.webp",
  },
  {
    img: "/Images/ourclients/amazon_pay.webp",
  },
  {
    img: "/Images/ourclients/apna.webp",
  },
  {
    img: "/Images/ourclients/asaya.webp",
  },
  {
    img: "/Images/ourclients/castrol.webp",
  },
  {
    img: "/Images/ourclients/colors.webp",
  },
  {
    img: "/Images/ourclients/doritos.webp",
  },
  {
    img: "/Images/ourclients/dr_vaidya.webp",
  },
  {
    img: "/Images/ourclients/dreamhack.webp",
  },
  {
    img: "/Images/ourclients/eatclub.webp",
  },
  {
    img: "/Images/ourclients/grabon.webp",
  },
  {
    img: "/Images/ourclients/groww.webp",
  },
  {
    img: "/Images/ourclients/harappa.webp",
  },
  {
    img: "/Images/ourclients/hipi.webp",
  },
  {
    img: "/Images/ourclients/insider.webp",
  },
  {
    img: "/Images/ourclients/moj.webp",
  },
  {
    img: "/Images/ourclients/mtv.webp",
  },
  {
    img: "/Images/ourclients/nodwin.webp",
  },
  {
    img: "/Images/ourclients/pcf.webp",
  },
  {
    img: "/Images/ourclients/rapido.webp",
  },
  {
    img: "/Images/ourclients/sunburn.webp",
  },
  {
    img: "/Images/ourclients/swiggy.webp",
  },
  {
    img: "/Images/ourclients/tata.webp",
  },
  {
    img: "/Images/ourclients/times_internet.webp",
  },
  {
    img: "/Images/ourclients/unsweetened_beauty.webp",
  },
  {

    img: "/Images/ourclients/wakao.webp",
  },
  {
    img: "/Images/ourclients/weekender.webp",
  },
  {
    img: "/Images/ourclients/wishcare.webp",
  },
  {
    img: "/Images/ourclients/zee.webp",
  },
  {
    img: "/Images/ourclients/zomato.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string; }) => {
  return (
    <figure className={cn("relative w-32 md:w-60 cursor-pointer overflow-hidden rounded-lg md:rounded-xl border ")}>
      <div className="">
        <img className="w-full object-cover" alt="" src={img} />
      </div>
    </figure>
  );
};

const Ourclients = () => {
  return (
    <section className="px-4 lg:px-20 " id="ourclients">
      <HeadingOne >
        Our Clients
      </HeadingOne>
      <div>
        <Fade>
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl  py-3 lg:py-5">
            <Marquee pauseOnHover className="[--duration:40s] md:my-2">
              {firstRow.map((review) => (
                <ReviewCard key={review.img} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s] md:my-2">
              {secondRow.map((review) => (
                <ReviewCard key={review.img} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none  absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/5 "></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/5 "></div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Ourclients;
