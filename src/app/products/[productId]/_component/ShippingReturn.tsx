import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const ShippingReturn = () => {
  return (
     <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-5xl leading-11 font-medium text-[#3F4919]">
           Shipping & Return
          </AccordionTrigger>
          <AccordionContent className="text-2xl leading-11">
            <span className="underline"><Link href="/shipping-and-returns">Shipping Policy</Link></span> <br />
            <span className="underline"><Link href="/shipping-and-returns">Return Policy</Link></span>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
  )
}

export default ShippingReturn
