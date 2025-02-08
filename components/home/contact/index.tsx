import ContactForm from "./contact-form";
import ContactHeader from "./contact-header";

const Contact = () => {
  return (
    <section id="contact" className="pt-20 pb-32">
      <div className="px-4 md:px-8 lg:px-64 mx-auto max-w-[1200px]">
        <ContactHeader />
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;