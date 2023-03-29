import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
// import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import featuresdiagonal from "../assets/images/vet-logo.png";

export const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1">
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="custom-block-subtitle">
              Checkout our open source tool
            </span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Identify &amp; Evaluate Open Source Risks
            </h2>
            <p className="mb-16 text-customGrayText leading-loose">
            vet is a tool for identifying risks in open source software supply chain. It helps engineering and security teams to identify potential issues in their open source dependencies and evaluate them against organizational policies.
            </p>
            {/* <div
              className="w-[210px] h-12 custom-button-colored mr-10 "
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
            </div> */}
            <a className="custom-button-colored w-80 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0" href="/docs/">
              Get Started
            </a>
            {/* <div className="w-[210px] h-12 custom-button-colored mr-10 ">
              <a className="navbar-link" href="/docs/" aria-label="Home">
                Get Started
              </a>
            </div> */}
          </div>
          <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
            <img
              src={featuresdiagonal}
              alt="f1"
              className="rounded-xl custom-border-gray"
            />
          </div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
