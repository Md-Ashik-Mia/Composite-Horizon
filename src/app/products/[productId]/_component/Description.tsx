import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type Feature = string | Feature[];

const renderFeatures = (features: Feature[]) => {
  return (
    <ul className="list-disc list-inside ml-6">
      {features.map((feature, index) => {
        if (Array.isArray(feature)) {
          // Nested list
          return <li key={index}>{renderFeatures(feature)}</li>;
        }
        return <li key={index}>{feature}</li>;
      })}
    </ul>
  );
};

const Description = ({
  description,
  features,
}: {
  description: string;
  features: Feature[];
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-5xl leading-11 font-medium text-[#3F4919]">
          Description
        </AccordionTrigger>
        <AccordionContent className="text-2xl leading-11">
          <p>{description}</p>
          <h3 className="text-3xl font-semibold text-[#3F4919] mt-6">
            Key Features:
          </h3>
          {renderFeatures(features)}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Description;
