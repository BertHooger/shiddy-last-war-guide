import Image from 'next/image';
import ResourceItem from '@/components/functions/blocks/ResourceItem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Box } from 'lucide-react';

const resources = [
  {
    name: "Immune Protein",
    icons: ["/images/season-one/resources/immune-protein.png"],
    description: "Used for constructing and upgrading the Virus Research Institute and Military Bases.",
    sources: [
      { text: "Protein Farm" },
      { text: "First Time Level Zombie Kill Rewards" },
      { text: "Completing Season 1 Goals for the Virus Resistance increase" },
      { text: "Using Hero's Return Recruitment ticket", icon: "/images/season-one/tickets/heroes-return-ticket.png" }
    ]
  },
  {
    name: "Mutant Crystal",
    icons: ["/images/season-one/resources/mutant-crystal.png"],
    description: "Used for constructing and upgrading the Protein Farm and Military Bases.",
    sources: [
      { text: "First Time Level Zombie Kill Rewards" },
      { text: "Completing Season Quest missions" },
      { text: "Completing Season 1 Goals for the Virus Resistance increase" },
      { text: "Doom Walker First Blood Kill (First DW kill of a day)" },
      { text: "Genetic Recombination" },
      { text: "Using Hero's Return Recruitment ticket", icon: "/images/season-one/tickets/heroes-return-ticket.png" },
      { text: "Weekly Pass and Season Battle Pass" }
    ]
  },
  {
    name: "Gene Fragment",
    icons: [
      "/images/season-one/resources/genetic-fragment-i.png",
      "/images/season-one/resources/genetic-fragment-ii.png",
      "/images/season-one/resources/genetic-fragment-iii.png",
      "/images/season-one/resources/genetic-fragment-iv.png",
      "/images/season-one/resources/genetic-fragment-v.png",
      "/images/season-one/resources/genetic-fragment-vi.png"
    ],
    description: "There are 6 types of gene fragments. Recombine them to obtain mutant crystals and rewards. Gene fragments can be exchanged with your allies.",
    sources: [
      { text: "Completing radar missions: Kill Doom Elite, Gather resource, Kill Doom Walker give you type I,II,III" },
      { text: "Killing Crimson Zombies (any level) gives you type I,II,III" },
      { text: "Killing Infected Zombies (any level) gives you type I,II,III" },
      { text: "Killing Doom Elite (any level) gives you type I,II,III" },
      { text: "Curing allies gives you type IV,V,VI (check mail for claim)" },
      { text: "Attacking cities" }
    ]
  }
];

export default function NewS1Resources() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold text-primary flex items-center">
          <Box className="w-8 h-8 mr-2" /> {/* Add an icon */}
          New Basic Resources
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg">
          Additional resources are now available in the game. Two of these (immune protein and mutant crystal) will be managed similarly to the existing food, iron, and gold resources.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource, index) => (
            <ResourceItem key={index} {...resource} />
          ))}
        </div>

        {/* Style the nested card */}
        <Card className="bg-secondary/20 p-4 rounded-lg shadow-md">
          <CardContent>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="flex-grow">
                <p>
                  You can control the amount of these resources (except gene fragments) in the upper part of the game display, similar to other resources. Remember to check your inventory, as rewards are usually available there.
                </p>
              </div>
              <div className="flex-shrink-0" >
                <div className="rounded-lg shadow-md overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src="/images/season-one/resources/resource-display.png"
                    alt="Resource Display"
                    width={268}
                    height={101}
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}