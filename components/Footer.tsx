import Image from "next/image";
import Link from "next/link";
import { Slide, Zoom } from "react-awesome-reveal";

const Footer = () => {
    const companyLinks = [
        { label: "About Us", link: "#about-us" },
        { label: "How it Works", link: "#how-it-works" },
        { label: "FAQs", link: "#FAQS" },
        { label: "Enquire Now", link: "#enquire-now" },
    ];

    const legalLinks = [
        { label: "Privacy Policy", link: "/privacy-policy" },
        { label: "Terms and Conditions", link: "/terms-and-conditions" },
    ];

    return (
        <footer className="w-full bg-white shadow-md pt-16 ">
            <div className="p-5 lg:px-20 py-5 lg:py-10 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4 lg:gap-8 border-t-2">
                <div className="w-full max-w-sm space-y-4">
                    <Zoom>
                        <Link href="/" className="flex items-center justify-start space-x-1">
                            <Image
                                alt="logo"
                                className="object-contain w-36 h-8 md:h-10 md:w-44"
                                height={40}
                                src="/Images/logo.png"
                                width={180}
                            />
                            <h1 className="text-[28px] sm:text-[34px] font-nunito tracking-normal font-medium leading-none">
                                Sampling
                            </h1>
                        </Link>
                    </Zoom>
                    <Slide direction="up">
                        <p className=" text-gray-600 text-base font-semibold">
                            Genjee Technologies Private Limited is committed to providing innovative and sustainable
                            solutions to empower businesses worldwide.
                        </p>
                    </Slide>
                </div>


                <div className="space-y-2 lg:space-y-4">
                    <h4 className="text-3xl uppercase font-semobold tracking-wide text-gray-800 bebas-neue-regular">Company</h4>
                    <ul className="space-y-2">
                        {companyLinks.map((link, index) => (
                            <Slide key={index} delay={index * 100} direction="down">
                                <li>
                                    <Link
                                        href={link.link}
                                        className="text-gray-600 hover:text-primary transition-colors font-semibold"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            </Slide>
                        ))}
                    </ul>
                </div>

                {/* Third Column */}
                <div className="space-y-2 lg:space-y-4">
                    <h4 className="text-3xl uppercase font-semobold tracking-wide text-gray-800 bebas-neue-regular">Legal</h4>
                    <ul className=" space-y-2">
                        {legalLinks.map((link, index) => (
                            <Slide key={index} delay={index * 100} direction="down">
                                <li>
                                    <Link
                                        href={link.link}
                                        className="text-gray-600 hover:text-primary transition-colors font-semibold"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            </Slide>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-200 p-4">
                <Slide className="" direction="up">
                    <p className="text-center text-sm text-gray-600 uppercase font-semibold">
                        © 2024 | All rights reserved | Genjee Technologies Private Limited
                    </p>
                </Slide>
            </div>
        </footer>

    );
};

export default Footer;
