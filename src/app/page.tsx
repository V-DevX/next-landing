// app/page.tsx or src/app/page.tsx
import Hero from "@/components/Hero/Hero";
import Section1 from "@/components/Sections/Section1";
import Section2 from "@/components/Sections/Section2";
import Banner1 from "@/components/Sections/Banner1";
import Section3 from "@/components/Sections/Section3";
import Section4 from "@/components/Sections/Section4";
import Banner2 from "@/components/Sections/Banner2";
import Form from "@/components/Sections/Form";
import Section5 from "@/components/Sections/Section5";
import Section6 from "@/components/Sections/Section6";
import Section7 from "@/components/Sections/Section7";
import Section8 from "@/components/Sections/Section8";
import Section9 from "@/components/Sections/Section9";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="space-y-24">
        <Hero />
        <Section1 />
        <Section2 />
        <Banner1 />
        <Section3 />
        <Section4 />
        <Banner2 />
        <Form />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </div>
    </main>
  );
}
