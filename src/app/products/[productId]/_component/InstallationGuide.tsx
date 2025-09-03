import pdfImage from "@/assets/pdf/pdf image.png";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const InstallationGuide = () => {
  const guides = [
    { name: "Guide 01", url: "/guides/guide1.pdf" },
    { name: "Guide 02", url: "/guides/guide2.pdf" },
  ];

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-5xl leading-11 font-medium text-[#3F4919]">
          Installation Guide
        </AccordionTrigger>
        <AccordionContent className="text-2xl leading-11 flex gap-6 mt-4">
          {guides.map((guide, idx) => (
            <Link
              key={idx}
              href={guide.url}
              target="_blank"
              className="flex flex-col items-center space-y-2 hover:opacity-80"
            >
              {/* <FileText className="w-20 h-20 text-red-600" /> */}
              <span className="text-2xl leading-11 ">{guide.name}</span>
              <Image
                src={pdfImage}
                alt={guide.name}
                className="w-20 h-20 object-cover"
              />
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default InstallationGuide;
