import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import cIcon2 from '../../images/icon/loc-icon.svg';
import cIcon3 from '../../images/icon/clock-icon.svg';

const jobListings = [
    {
        id: 1,
        title: "Human Resources Manager",
        location: "Remote (USA)",
        type: "Full Time",
        slug: "human-resources-manager",
        categories: ["cat1", "cat3", "cat5"],
        experience: "0–1 years",
        desc: "Manage recruitment, employee engagement, and HR operations. Ensure compliance with labor laws and foster a positive workplace culture. Coordinate with leadership to support organizational growth."

    },
    {
        id: 2,
        title: "IT Infrastructure Manager",
        location: "Remote, Colombia",
        type: "Full time",
        slug: "it-infrastructure-manager",
        categories: ["cat2", "cat4"],
        experience: "1+ years preferred",
        desc: "Maintain and scale cloud-based infrastructure for ERP deployment, ensuring high availability and security compliance.",
    },
    {
        id: 3,
        title: "Technical Project Manager",
        location: "Warsaw, Poland",
        type: "Full time",
        slug: "technical-project-manager",
        categories: ["cat1", "cat5"],
        experience: "0–1 years",
        desc: "Coordinate across teams to ensure timely ERP project delivery. Manage agile workflows and client communications.",
    },
    {
        id: 4,
        title: "Cloud Solutions Architect",
        location: "Bangalore (Hybrid)",
        type: "Full time",
        slug: "cloud-solutions-architect",
        categories: ["cat2", "cat3"],
        experience: "1–2 years",
        desc: "Design scalable cloud infrastructure for ERP services across web and mobile platforms. Knowledge of AWS or Azure is a plus.",
    },
    {
        id: 5,
        title: "IT Support Engineer",
        location: "Remote, Argentina",
        type: "Full time",
        slug: "it-support-engineer",
        categories: ["cat1", "cat4"],
        experience: "0–1 years",
        desc: "Assist ERP clients with technical issues via remote tools. Maintain documentation and ensure timely resolution.",
    },
    {
        id: 6,
        title: "Global Benefits Manager",
        location: "Remote, Canada",
        type: "Full time",
        slug: "global-benefits-manager",
        categories: ["cat2", "cat3", "cat5"],
        experience: "1+ years",
        desc: "Oversee employee benefits and HR systems globally, aligning policies with Soft Trade’s growth and values.",
    },
];

const CareerTeam = () => {
    const [activeFilter, setActiveFilter] = useState("*");

    const handleFilter = (category) => {
        setActiveFilter(category);
    };

    const filters = [
        { key: "*", label: "View All" },
        { key: "cat1", label: "Development" },
        { key: "cat2", label: "Design" },
        { key: "cat3", label: "Marketing" },
        { key: "cat4", label: "Customer Services" },
        { key: "cat5", label: "Management" },
    ];

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <section className="team pt-50 pb-50">
            <div className="container">
                <div className="sec-title--two text-center mb-50">
                    <Fade direction="down" triggerOnce={false} duration={1200} delay={9}>
                        <div>
                            <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">
                                Join our team
                            </h2>
                        </div>
                    </Fade>

                    <Fade direction="down" triggerOnce={false} duration={1000} delay={9}>
                        <div className="py-3">
                            <div className="wow fadeInDown" data-wow-duration="600ms">

                                <p style={{ fontSize: "16px", color: "#777", marginTop: "5px" }}>
                                    Explore exciting opportunities and grow your career in ERP innovation.
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>


                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div className="team-menu mb-50">
                            {filters.map((filter, index) => (
                                <button
                                    key={index}
                                    className={activeFilter === filter.key ? "active" : ""}
                                    onClick={() => handleFilter(filter.key)}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="cp-team-wrap grid">
                            <AnimatePresence>
                                {jobListings
                                    .filter(
                                        (job) => activeFilter === "*" || job.categories.includes(activeFilter)
                                    )
                                    .map((job) => (
                                        <motion.div
                                            key={job.id}
                                            className={`cp-team-item px-5 py-3 grid-item ${job.categories.join(" ")}`}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="xb-item--inner ul_li_between">
                                                <div className="row align-items-center justify-content-center">
                                                    <div className="col-lg-9">

                                                        <div className="xb-item--content">

                                                            <h3 className="xb-item--title">
                                                                <Link onClick={scrollToTop} to="/career-details">
                                                                    {job.title}
                                                                </Link>
                                                            </h3>
                                                            <div className="xb-item--holder ul_li">
                                                                <span className="xb-item--meta">
                                                                    <img src={cIcon2} alt="location" />
                                                                    {job.location}
                                                                </span>
                                                                <span className="xb-item--meta">
                                                                    <img src={cIcon3} alt="time" />
                                                                    {job.type}
                                                                </span>
                                                                <span className="xb-item--meta">
                                                                    <img src={cIcon3} alt="experience" />
                                                                    {job.experience}
                                                                </span>
                                                            </div>
                                                            <p className="pt-4 pb-2">{job.desc}</p>
                                                        </div>

                                                    </div>

                                                    <div className="col-lg-3">
                                                        <div className="cp-team-btn">
                                                            <Link onClick={scrollToTop} to="/career-details" className="cp-btn">
                                                                View job <i className="fal fa-arrow-right"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerTeam;
