import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ABOUT_SECTION_NAME } from "../Constants";

const Founders = [
  {
    image: "https://via.placeholder.com/150",
    name: "John Doe",
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    profile: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam euismod, nisl eget ultricies aliquam, nunc nisi
      ultricies nunc, vitae ultricies nisl nunc eget nunc.
    `,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Jane Doe",
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    profile: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam euismod, nisl eget ultricies aliquam, nunc nisi
      ultricies nunc, vitae ultricies nisl nunc eget nunc.
    `,
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-100" id={ABOUT_SECTION_NAME}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Hello 👋</h2>
        <p className="text-lg mb-8">
          Meet the team behind SafeDep, a group of security engineers and
          researchers.
        </p>

        {/* Founder Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Founders.map((founder, index) => {
            return (
              <div className="bg-white p-4 rounded-lg shadow-md" key={index}>
                <div className="flex justify-center items-center">
                  <img
                    src={founder.image}
                    alt={`${founder.name} Profile Picture`}
                    className="h-40 object-cover rounded-full mb-4"
                  />
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="inline-block pr-1" /> GitHub
                  </a>
                  <a
                    href={founder.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="inline-block pr-1" /> Twitter
                  </a>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="inline-block pr-1" /> LinkedIn
                  </a>
                </div>
                <div className="flex flex-col justify-center items-center space-x-4">
                  <div className="flex">
                    <p className="text-xl font-semibold p-6">{founder.name}</p>
                  </div>
                  <div className="flex">
                    <p className="text-xl p-6">{founder.profile}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
