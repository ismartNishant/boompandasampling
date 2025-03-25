'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Slide, Zoom } from "react-awesome-reveal";

const Footer = () => {
    const pathname = usePathname();
    // Check if it's the home page
    const isHomePage = pathname === '/';
    const links = [
        { href: isHomePage ? "#about-us" : "/#about-us", label: "About Us" },
        { href: isHomePage ? "#how-it-works" : "/#how-it-works", label: "How it Works" },
        { href: isHomePage ? "#FAQS" : "/#FAQS", label: "FAQs" },
        { href: isHomePage ? "#enquire-now" : "/#enquire-now", label: "Enquire-now" },
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
                                className="object-contain w-52 md:w-80"
                                height={40}
                                src="/Images/logo.svg"
                                width={180}
                            />
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
                    <h4 className="text-2xl uppercase font-bold tracking-wide text-gray-800 ">Company</h4>
                    <ul className="space-y-2">
                        {links.map((link, index) => (
                            <Slide key={index} delay={index * 100} direction="down">
                                <li className="text-gray-600 duration-300 ease-linear transition-all hover:text-primary  font-semibold hover:ml-2">
                                    <Link
                                        href={link.href}
                                        className=""
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
                    <h4 className="text-2xl uppercase font-bold tracking-wide text-gray-800">Legal</h4>
                    <ul className=" space-y-2">
                        {legalLinks.map((link, index) => (
                            <Slide key={index} delay={index * 100} direction="down">
                                <li>
                                    <Link
                                        href={link.link}
                                        className="text-gray-600 duration-300 ease-linear transition-all hover:text-primary  font-semibold hover:ml-2"
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
                        © {new Date().getFullYear()} | All rights reserved | Genjee Technologies Private Limited
                    </p>
                </Slide>
            </div>
        </footer>

    );
};

export default Footer;
