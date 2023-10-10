import { useState } from "react";
import { ServiceNavbar } from "./ServiceNavbar";
import { ServiceCard } from "./ServiceCard";

export const ServiceBody = ({ services }: { services: any[] }) => {
  const [selectedTab, setSelectedTab] = useState(services[0]);

  return (
    <section className="grid grid-cols-service">
      <ServiceNavbar
        services={services}
        selected={setSelectedTab}
        selectedTab={selectedTab}
      />

      <ServiceCard service={selectedTab} />
    </section>
  );
};
