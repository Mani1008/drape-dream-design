
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GuideSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Size Guide */}
          <div>
            <h2 className="font-playfair text-3xl font-semibold mb-8">Size Guide</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h3 className="font-playfair text-xl mb-4">Standard Measurements</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-saree-cream/30">
                        <th className="p-3">Measurement</th>
                        <th className="p-3">Standard Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="p-3">Saree Length</td>
                        <td className="p-3">5.5 - 6 meters</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3">Saree Width</td>
                        <td className="p-3">45 - 48 inches</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3">Blouse Piece</td>
                        <td className="p-3">0.8 - 1 meter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-4">Blouse Measurements</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-saree-cream/30">
                        <th className="p-3">Size</th>
                        <th className="p-3">Bust (inches)</th>
                        <th className="p-3">Waist (inches)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="p-3">XS</td>
                        <td className="p-3">30 - 32</td>
                        <td className="p-3">24 - 26</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3">S</td>
                        <td className="p-3">32 - 34</td>
                        <td className="p-3">26 - 28</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3">M</td>
                        <td className="p-3">34 - 36</td>
                        <td className="p-3">28 - 30</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3">L</td>
                        <td className="p-3">36 - 38</td>
                        <td className="p-3">30 - 32</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3">XL</td>
                        <td className="p-3">38 - 40</td>
                        <td className="p-3">32 - 34</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fabric Care */}
          <div>
            <h2 className="font-playfair text-3xl font-semibold mb-8">Fabric Care</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="silk">
                  <AccordionTrigger className="font-playfair text-lg">Silk Sarees</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Dry clean only for best results</li>
                      <li>Store in a muslin cloth away from direct sunlight</li>
                      <li>Avoid spraying perfume directly on the fabric</li>
                      <li>If ironing is needed, use low heat with a cloth barrier</li>
                      <li>For storage, roll the saree instead of folding to avoid creases</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cotton">
                  <AccordionTrigger className="font-playfair text-lg">Cotton Sarees</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Hand wash with mild detergent in cold water</li>
                      <li>Do not soak for extended periods</li>
                      <li>Dry in shade, avoid direct sunlight</li>
                      <li>Iron when slightly damp for best results</li>
                      <li>Store in a cool, dry place</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="designer">
                  <AccordionTrigger className="font-playfair text-lg">Designer & Embellished Sarees</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Always dry clean to preserve embellishments</li>
                      <li>Store flat or rolled with tissue paper between folds</li>
                      <li>Keep away from water and moisture</li>
                      <li>Avoid ironing directly over embroidery or embellishments</li>
                      <li>If needed, steam from a distance to remove wrinkles</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="synthetic">
                  <AccordionTrigger className="font-playfair text-lg">Synthetic Sarees</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Machine wash in cold water with mild detergent</li>
                      <li>Use gentle cycle and avoid harsh wringing</li>
                      <li>Dry in shade</li>
                      <li>Iron on medium heat if needed</li>
                      <li>Store folded in a dry place</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-8 p-4 bg-saree-cream/30 rounded-md">
                <h4 className="font-medium mb-2">Special Care Tip</h4>
                <p className="text-gray-700 text-sm">
                  For all sarees with gold or silver zari work, it's recommended to air them out periodically to prevent tarnishing. Store with silica gel packets in humid climates to maintain fabric integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
