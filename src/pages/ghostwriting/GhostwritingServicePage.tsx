
import { Navigate } from "react-router-dom";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { ghostwritingPages } from "./ghostwritingPageData";

type Props = {
  slug: string;
};

export default function GhostwritingServicePage({ slug }: Props) {
  const page = ghostwritingPages[slug];

  if (!page) {
    return <Navigate to="/ghostwriting" replace />;
  }

  return <ServiceDetailLayout page={page} />;
}
