'use client'
import React from 'react'
import HeadingOne from '../Headings/HeadingOne';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { HiChevronDoubleDown } from "react-icons/hi";
import { Fade, Slide } from 'react-awesome-reveal';


const Faq = () => {

    const faqs = [
        {
            question: "What is BoomPanda Sampling ?",
            answer: "Boom Sampling is a cutting-edge product sampling platform tailored for youth-focused brands. It connects you with a dynamic, ready-to-engage audience while offering real-time insights through sleek digital dashboards. From tracking inventory and campaign spending to capturing authentic youth feedback, Boom Sampling helps you create impactful connections and drive results seamlessly."
        },
        {
            question: "How Does BoomPanda Sampling Work ?",
            answer: "Boom Sampling creates tailored product sampling campaigns targeting youth. After signing up on the merchant dashboard, you can track and analyze campaign activities. We set up QR-enabled promotional materials at youth-centric locations. Users scan, select samples, and share feedback, providing you with a detailed report and real insights at the campaign's end."
        },
        {
            question: "What insights will I get as a merchant ?",
            answer: "As a merchant with Boom Sampling, you'll have access to a personalized dashboard where you can track your youth-focused product sampling campaigns. Get a quick overview of campaign performance, total inventory, spending, samples distributed, and user feedback to optimize your strategy."
        },
        {
            question: "Will I be able to share my feedback once my campaign is live ?",
            answer: "Yes, with Boom Sampling, you’ll have a dedicated client manager to assist you. You can share your feedback anytime, and we’ll work to improve your campaign experience."
        },
        {
            question: "How does Boom Sampling help my brand ?",
            answer: "Boom Sampling helps your brand connect directly with the youth audience. Through engaging kiosks and QR codes, you get valuable insights from interested users. Your brand also gains exposure to a wider audience, ensuring maximum visibility. After your campaign, you can remarket to your target audience and access detailed insights for future strategies."
        },
        {
            question: "How can I associate with Boom Sampling ?",
            answer: "To associate with Boom Sampling, simply fill out our enquiry form, and one of our team members will reach out to guide you through the next steps. Let’s get started!"
        },
        {
            question: "Can I sample more than one product at a given time ?",
            answer: "Yes, you can sample multiple products in the same campaign with Boom Sampling. You’ll also receive separate user feedback for each product to help you analyze their performance."
        },
        {
            question: "Is there a minimum or maximum duration for product sampling ?",
            answer: "There’s no fixed duration for product sampling with Boom Sampling—you can run a campaign for as little as one day or as long as needed. You can also expand your reach across multiple locations or run multiple campaigns simultaneously. "
        },
        {
            question: "How will I receive the feedback from my users ?",
            answer: "After your product sampling campaign ends, users will be asked to share their feedback via an SMS link. You can view real-time feedback and detailed reports directly through your dashboard."
        }
    ];


    return (
        <section className='px-4  pt-16 lg:py-20 lg:px-20 space-y-5 lg:space-y-10 text-center' id='FAQS'>
            <HeadingOne>
                Frequently asked questions
            </HeadingOne>
            <div className='w-full mx-auto max-w-screen-lg '>
            
                    <Accordion variant="splitted" selectionMode="multiple"
                        className="gap-4 lg:gap-5  flex flex-col px-0"
                        defaultExpandedKeys={["0"]}
                        itemClasses={{
                            base: " text-start lg:p-4",
                            title: `text-xl lg:text-3xl  uppercase font-medium bebas-neue-regular `,
                            indicator: "text-primary text-3xl  data-[open=true]:-rotate-90 ",
                            trigger: " flex items-start  ",
                            content: 'pt-0 text-gray-500 text-sm lg:text-base font-semibold'
                        }}>
                        {faqs.map((faq, index) => (

                            <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={faq.question} indicator={<HiChevronDoubleDown />}>
                                <Fade direction='down'><p>{faq.answer}</p></Fade>
                            </AccordionItem>

                        ))}
                    </Accordion>
            
            </div>
        </section>
    )
}

export default Faq