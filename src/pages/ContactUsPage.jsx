import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactSidebar from "../components/contact/ContactSidebar";
import FAQSection from "../components/contact/FAQSection";
import MainLayout from "../layouts/MainLayout";

const ContactUsPage = () => {
  return (
    <>
      <MainLayout>
        <ContactHero />
        <main class="grid grid-cols-1 lg:grid-cols-12 gap-gutter px-margin-desktop max-w-container-max mx-auto pb-stack-xl">
          <ContactForm />
          <ContactSidebar />
        </main>
        <FAQSection />
        {/* <ExpertCTA /> */}
      </MainLayout>
    </>
  );
};

export default ContactUsPage;
