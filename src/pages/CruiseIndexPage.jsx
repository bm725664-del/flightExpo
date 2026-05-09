import MainLayout from "../layouts/MainLayout";
import HeroSection from "../components/hero/HeroSection";
import DestinationsSection from "../components/destination/DestinationsSection";
import cruiseCategories from "../data/cruiseCategories";
import CTASection from "../components/cruises/CTASection";
import VoyageSection from "../components/cruises/VoyageSection";
import CuratedItineraries from "../components/cruises/CuratedItineraries";
import CruiseSearchCard from "../components/form/CruiseSearchCard";
export default function CruiseIndexPage() {
  return (
    <MainLayout>
      <HeroSection
        BannerForm={<CruiseSearchCard />}
        title={""}
        subtitle={""}
        bgImage={
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC27RhT9ee4XpVHuBOarqR1nLjPWRZpnt50FdlvXdm2NFeJ2IQgA8jr9Xyk8Vbf6hxwI6CxSzMwFs2cOu-RvTkzzGZZlE70-ybs-9H5Ht76mSonXvtVRte4tnPfs4361euCDrXt9hEja79zVDMjdCdihxIHHGnrD9vj70tn1XqMs86gNXpv4V0kS8bVLejtj4s0naTLikptLfPeklzFoSKgXLNq542cqM8k4Su-XYkbrIL2XeCy7s8zh5KdJ0E_AqGyVECEZAsAkTU"
        }
      />
      <DestinationsSection
        heading="Sail Your Way"
        subHeading=""
        cardjson={cruiseCategories}
      />
      <CuratedItineraries />
      <VoyageSection />
      <CTASection />0
    </MainLayout>
  );
}
