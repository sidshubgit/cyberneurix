import {Carousel, TestimonialCard} from "@/components/ui/retro-testimonial";
import {iTestimonial} from "@/components/ui/retro-testimonial";
type TestimonialDetails = {
  [key: string]: iTestimonial & {id: string};
};

const testimonialData = {
  ids: [
    "e60aa346-f6da-11ed-b67e-0242ac120002",
    "e60aa346-f6da-11ed-b67e-0242ac120003",
    "e60aa346-f6da-11ed-b67e-0242ac120004",
    "e60aa346-f6da-11ed-b67e-0242ac120005",
    "e60aa346-f6da-11ed-b67e-0242ac120006",
    "e60aa346-f6da-11ed-b67e-0242ac120007",
  ],
  details: {
    "e60aa346-f6da-11ed-b67e-0242ac120002": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120002",
      profileImage: "/sec-arc.png",
      name: "Security Architecture",
      designation: "",
      description: "",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120003": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120003",
      profileImage: "/sec-op.png",
      name: "Security Operations",
      designation: "",
      description: "",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120004": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120004",
      profileImage: "/threat-intel.png",
      name: "Threat Intelligence",
      designation: "",
      description: "",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120005": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120005",
      profileImage: "/govrc.png",
      name: "Governance, Risk & Compliance",
      designation: "",
      description: "",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120006": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120006",
      profileImage: "/framestand.png",
      name: "Frameworks & Standards",
      designation: "",
      description: "",
    },
    "e60aa346-f6da-11ed-b67e-0242ac120007": {
      id: "e60aa346-f6da-11ed-b67e-0242ac120007",
      profileImage: "/appsec.png",
      name: "Application Security",
      designation: "",
      description: "",
    },
  },
};

// Example 1: Basic Carousel with Testimonials
const cards = testimonialData.ids.map((cardId: string, index: number) => {
  const details = testimonialData.details as TestimonialDetails;
  return (
    <TestimonialCard
      key={cardId}
      testimonial={details[cardId]}
      index={index}
      backgroundImage="https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
});

const RetroTestimonialDemo = () => {
  return (
    <div className="min-h-screen">
      {/* Example 1: Basic Carousel */}
      <section className="py-12 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <Carousel items={cards} />
        </div>
      </section>

      {/* Example 2: Vintage Style */}
    </div>
  );
};

export { RetroTestimonialDemo };