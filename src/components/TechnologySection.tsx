import React from "react";
import { TECHNOLOGY_SECTION_NAME } from "../Constants";

const TechnologySection: React.FC = () => (
  <section className="py-16 bg-slate-100" id={TECHNOLOGY_SECTION_NAME}>
    <div className="container text-center mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Technology</h2>
      <div className="grid lg:grid-cols-2 md:grid-flow-row gap-8">
        <div className="flex flex-col items-center text-left">
          <div className="mb-12">
            <h3 className="font-semibold mb-4 text-2xl">Inventory</h3>
            <p className="text-gray-500 font-mono text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="font-semibold mb-4 text-2xl">Prioritization</h3>
            <p className="text-gray-500 font-mono text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="font-semibold mb-4 text-2xl">Attack Detection</h3>
            <p className="text-gray-500 font-mono text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="font-semibold mb-4 text-2xl">One Click Rollout</h3>
            <p className="text-gray-500 font-mono text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800"
            alt="Large Placeholder Image"
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
);

export default TechnologySection;
