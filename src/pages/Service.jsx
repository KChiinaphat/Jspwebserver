import { Link } from "react-router-dom";

function Service() {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg mt-4">We offer a wide range of services to help you achieve your goals. Explore our offerings below.</p>
      </header>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="service-card bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">Service 1</h2>
          <p className="mt-4">Detailed description of the service. What it does and how it can help you.</p>
          <Link to="/service1" className="text-blue-500 mt-4 inline-block">Learn more</Link>
        </div>

        <div className="service-card bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">Service 2</h2>
          <p className="mt-4">Detailed description of the service. What it does and how it can help you.</p>
          <Link to="/service2" className="text-blue-500 mt-4 inline-block">Learn more</Link>
        </div>

        <div className="service-card bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold">Service 3</h2>
          <p className="mt-4">Detailed description of the service. What it does and how it can help you.</p>
          <Link to="/service3" className="text-blue-500 mt-4 inline-block">Learn more</Link>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold">Client Testimonials</h2>
        <p className="mt-4 italic">"This service changed the way we work! Highly recommend it to anyone looking for quality solutions." – Client Name</p>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="mt-4">Interested in learning more about our services? Get in touch with us today!</p>
        <Link to="/contact" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg">Contact Us</Link>
      </section>
    </div>
  );
}

export default Service;
