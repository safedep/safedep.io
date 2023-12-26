import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, { Fragment } from "react";
import { FaGithub, FaIdBadge, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BRAND_NAME, TECHNOLOGY_SECTION_NAME } from "../Constants";

const navigationLinks = [
  {
    name: "Technology",
    href: TECHNOLOGY_SECTION_NAME,
    scroll: true,
  },
  {
    name: "Blog",
    href: "https://safedep.substack.com/",
    target: "_blank",
    scroll: false,
  },
];

const openSourceProjects = [
  {
    name: "vet: OSS Component Security",
    href: "https://github.com/safedep/vet",
  },
  {
    name: "COFE: Vulnerability Prioritization",
    href: "https://github.com/safedep/cofe",
  },
];

const TopNavigationBar: React.FC = () => {
  const scrollToSectionName = (sectionName: string): void => {
    const section = document.querySelector(`#${sectionName}`);
    if (section !== null) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="bg-blue-700 text-white p-2"
      style={{ position: "fixed", top: 0, left: 0, right: 0 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <FaIdBadge className="inline-block pr-1" />
          <p className="text-xl font-semibold">
            <Link to={"/"}>{BRAND_NAME}</Link>
          </p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {navigationLinks.map((link, index) => {
            return (
              <a
                href={link.scroll ? "#" : link.href}
                target={link.target}
                key={index}
                className="hover:text-blue-300"
                onClick={() => {
                  if (link.scroll) {
                    scrollToSectionName(link.href ?? "");
                  }
                }}
              >
                {link.name}
              </a>
            );
          })}

          <Menu as="div" className="relative inline-block">
            <div>
              <Menu.Button
                className={clsx(
                  "inline-flex",
                  "items-center",
                  "hover:text-blue-300",
                )}
              >
                <FaGithub className="inline-block pr-1" />
                Open Source
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {openSourceProjects.map((item, index) => {
                    return (
                      <>
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              target="_blank"
                              className={clsx(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm",
                              )}
                              rel="noreferrer"
                            >
                              <FaGithub className="inline-block pr-1" />
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      </>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-blue-200 bg-blue-800 rounded-lg p-2"
          >
            <FaPhone className="inline-block pr-1 mr-1" />
            Schedule a Demo
          </a>
          <a
            href="https://github.com/safedep/vet"
            target="_blank"
            className="hover:text-blue-300 flex items-center"
            rel="noreferrer"
          ></a>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigationBar;
