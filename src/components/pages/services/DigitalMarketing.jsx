import { digitalMarketingData } from "../../../data/services/DigitalMarketingData";
import ServicePage from "./ServicePage.jsx";

function DigitalMarketing() {
  return (
    <ServicePage
      data={digitalMarketingData}
    />
  );
}

export default DigitalMarketing;