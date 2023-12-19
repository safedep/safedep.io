import React from "react";

const LogosSection: React.FC = () => (
  <section className="bg-blue-100 py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-8">Trusted by Leading Brands</h2>
      <div className="flex justify-center items-center space-x-8">
        {/* Placeholder logos, replace with actual logos */}
        <img
          src="https://via.placeholder.com/150"
          alt="Logo 1"
          className="h-16"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Logo 2"
          className="h-16"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Logo 3"
          className="h-16"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Logo 4"
          className="h-16"
        />
      </div>
    </div>
  </section>
);

export default LogosSection;
