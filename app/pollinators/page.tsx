// app/pollinators/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Maryland Native Pollinators - Sugar Snap Pea Farm',
  description:
    'Learn about important Maryland native pollinators that help our native plants thrive.'
};

// Define types for pollinator data
interface Pollinator {
  title: string;
  subtitle: string;
  identification: string[];
  flowers: string[];
  ecological: string[];
  habitat: string[];
  color: string;
}

// Array of pollinator data
const pollinators: Pollinator[] = [
  {
    title: 'Eastern Carpenter Bee',
    subtitle: 'Xylocopa virginica',
    identification: [
      'Large bee (3/4 to 1 inch long)',
      'Shiny black, hairless abdomen',
      'Yellow fuzzy thorax (middle section)',
      'Males have white facial markings'
    ],
    flowers: ['Tomatoes', 'Blueberries', 'Sunflowers', 'Wild bergamot', 'Goldenrod'],
    ecological: [
      'Creates nest holes in wood that can later be used by other wildlife',
      'Helps break down dead and decaying wood',
      'Serves as food for birds and other predators'
    ],
    habitat: [
      'Nests in softwood by drilling perfectly circular tunnels',
      'Found in gardens, forests, and parks across Maryland',
      'Active from spring through fall, preferring warm sunny days'
    ],
    color: '#8B4513' // SaddleBrown
  },
  {
    title: 'Eastern Yellowjacket',
    subtitle: 'Vespula maculifrons',
    identification: [
      'Medium-sized (1/2 inch) black and yellow wasp',
      'Has anchor-shaped black marking on first abdominal segment',
      'Black bands are flat on top and wavy on bottom',
      'Smooth, not fuzzy body'
    ],
    flowers: ['Goldenrod', 'Asters', 'Late summer wildflowers', "Queen Anne's lace", 'Fruit trees'],
    ecological: [
      'Controls garden pests by hunting caterpillars and flies',
      'Helps break down fallen fruit and carrion',
      'Contributes to natural decomposition cycles'
    ],
    habitat: [
      'Typically nests underground in abandoned rodent burrows',
      'Common in forests, meadows, gardens, and parks',
      'Found throughout eastern Maryland'
    ],
    color: '#B8860B' // DarkGoldenrod
  },
  {
    title: 'Southern Yellowjacket',
    subtitle: 'Vespula squamosa',
    identification: [
      'Queens are larger and more orange in color',
      'Workers have distinctive yellow stripes on the upper thorax',
      'Slightly larger than Eastern yellowjackets',
      'Black and yellow striped pattern on entire body'
    ],
    flowers: ['Late wildflowers', 'Goldenrod', 'Asters', 'Fruit trees', 'Garden crops'],
    ecological: [
      'Preys on agricultural and garden pests',
      'Hunts other insects including flies and caterpillars',
      'May take over nests of other yellowjacket species'
    ],
    habitat: [
      'Typically builds nests underground',
      'Often found in disturbed areas like yards, parks, and roadsides',
      'Prefers warmer climates, common in southern Maryland'
    ],
    color: '#B8860B' // DarkGoldenrod
  },
  {
    title: 'Bald-Faced Hornet',
    subtitle: 'Dolichovespula maculata',
    identification: [
      'Medium to large (5/8 to 3/4 inch) black and white wasp',
      "Distinctive white face ('bald-faced')",
      'Black body with white markings on face, thorax, and abdomen tip',
      'Not a true hornet - actually a type of yellowjacket'
    ],
    flowers: ['Goldenrod', 'Late wildflowers', 'Joe-pye weed', 'Fruit trees', 'Flowering shrubs'],
    ecological: [
      'Controls pest insect populations',
      'Hunts and eats flies, caterpillars, and yellowjackets',
      'Creates elaborate paper nests that shelter other insects after abandonment'
    ],
    habitat: [
      'Builds large paper nests above ground in trees and shrubs',
      'Found in woodlands, meadows, and suburban areas',
      'Widespread across Maryland'
    ],
    color: '#2F4F4F' // DarkSlateGray
  },
  {
    title: 'Sweat Bee',
    subtitle: 'Family Halictidae',
    identification: [
      'Small bees (1/4 to 1/2 inch)',
      'Many species have metallic green or blue bodies',
      'Some species are black with yellow markings',
      'Attracted to human sweat for the salt'
    ],
    flowers: ['Native wildflowers', 'Sunflowers', 'Fruit trees', 'Garden crops', 'Alfalfa'],
    ecological: [
      'Generalist pollinator',
      'Has learned how to access different flower types',
      'Helps improve soil quality through nest-building'
    ],
    habitat: [
      'Most nest underground in bare soil exposed to sun',
      'Some species nest in rotting wood',
      'Found in gardens, meadows, and natural areas across Maryland'
    ],
    color: '#556B2F' // DarkOliveGreen
  },
  {
    title: 'Squash Bee',
    subtitle: 'Peponapis pruinosa',
    identification: [
      'Medium-sized bee (about 1/2 inch)',
      'Black and yellow striped abdomen',
      'Bulkier build than honey bees',
      'Active at dawn when squash flowers open, asleep in flowers by noon'
    ],
    flowers: ['Pumpkins', 'Squash', 'Zucchini', 'Gourds', 'Other cucurbits'],
    ecological: [
      'Specialized pollinator essential for squash production',
      'Creates tunnels in soil that aerate and improve soil health',
      'Supports biodiversity in garden ecosystems'
    ],
    habitat: [
      'Nests in the ground, often right under squash plants',
      'Active very early in the morning when squash flowers open',
      'Found wherever squash plants are grown in Maryland'
    ],
    color: '#A0522D' // Sienna
  },
  {
    title: 'Mining Bee',
    subtitle: 'Family Andrenidae',
    identification: [
      'Small to medium-sized bees (1/4 to 1/2 inch)',
      'Usually dark colored (black or reddish)',
      "Many have facial 'mustaches' below antennae",
      'Often seen in early spring when few other bees are active'
    ],
    flowers: [
      'Spring beauty',
      'Fruit trees',
      'Blueberries',
      'Violets and bloodroot',
      'Early spring wildflowers'
    ],
    ecological: [
      'Aerates soil through nest building',
      'Creates habitat for other insects',
      'First bees active in early spring, supporting early ecosystem awakening'
    ],
    habitat: [
      'Nests in the ground in sandy or well-drained soils',
      'Creates small mounds with center holes where females dig',
      'Common in gardens, meadows, and woodland edges'
    ],
    color: '#8B4513' // SaddleBrown
  },
  {
    title: 'Mason Bee',
    subtitle: 'Genus Osmia',
    identification: [
      'Small to medium-sized bees (3/8 to 5/8 inch)',
      'Often metallic blue or green in color',
      'Carries pollen on special hairs under the abdomen',
      'Active in early spring when fruit trees bloom'
    ],
    flowers: [
      'Fruit trees',
      'Blueberries',
      'Early spring wildflowers',
      'Native wildflowers',
      'Berry plants'
    ],
    ecological: [
      'Extremely efficient pollinators (better than honey bees for many crops)',
      'Creates habitat for other insects in abandoned nests',
      'Helps decompose dead plant material'
    ],
    habitat: [
      'Nests in hollow reeds, stems, or existing holes in wood',
      'Does not drill holes but uses pre-existing cavities',
      'Found in gardens, orchards, and natural areas across Maryland'
    ],
    color: '#4682B4' // SteelBlue
  },
  {
    title: 'Honey Bee',
    subtitle: 'Apis mellifera (Non-native)',
    identification: [
      'Medium-sized bee (1/2 inch)',
      'Golden brown with black stripes on abdomen',
      'Hairy body with pollen baskets on hind legs',
      'Lives in large colonies with thousands of workers'
    ],
    flowers: ['Clover', 'Fruit trees', 'Garden crops', 'Goldenrod', 'Asters'],
    ecological: [
      'Produces honey and beeswax',
      'Major commercial crop pollinator',
      'Not native to Maryland'
    ],
    habitat: [
      'Lives in hives (wild or managed)',
      'Prefers cavities like hollow trees in the wild',
      'Found throughout Maryland in both natural and agricultural areas'
    ],
    color: '#DAA520' // GoldenRod
  }
];

const pollinatorImages: Record<string, string> = {
  'Eastern Carpenter Bee':
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TbI60Wm7d8G3HWtHzmhDdAHaFw%26pid%3DApi&f=1&ipt=3c11205b41422e942aa09eb041aa720fb706f93b4248ad017e59fc0f589b0e55',
  'Squash Bee':
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffacts.net%2Fwp-content%2Fuploads%2F2021%2F04%2FSquash-Bee.jpg&f=1&nofb=1&ipt=d8c72ea2fc4dc0f860cef735b866cba30c4057a52db22d23442e467bb80b4b75',
  'Mason Bee':
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F15%2F240415-050-FFA90839%2Fred-mason-bee.jpg&f=1&nofb=1&ipt=0e5ab1b16edc73c46c60dadcda15d1766c5629efcf4e3ee5b593a3fc4ad06e14',
  'Mining Bee':
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F17%2F240417-050-D8B8AEC6%2Ftawny-mining-bee.jpg&f=1&nofb=1&ipt=6f3aa72864e77a815060babfc8ca4b5da757b1d44097b3b168dd42c4959d0b15',
  'Sweat Bee':
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ecoshieldpest.com%2Fhubfs%2FSweat%2520Bee%2520Covered%2520in%2520Pollen.png&f=1&nofb=1&ipt=5bd298e529daf3baacba34e8342da5a620a0f169c11bad3c7668748ed8c11d43',
  'Eastern Yellowjacket':
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fentomologytoday.org%2Fwp-content%2Fuploads%2F2019%2F03%2Feastern-yellowjacket-Vespula-maculifrons.jpg&f=1&nofb=1&ipt=236f69b406f0474a37d28199dd788bb76290cb57345328f89ad1db9bb08743e6',
  'Southern Yellowjacket':
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fobjects.liquidweb.services%2Fimages%2F201811%2Fjesse_christopherson_45640080302_d863cf3bf4_b.jpg&f=1&nofb=1&ipt=053581c45d79feb9b92bd15e8e448929c1c31f755c5fb9b7be22e5b5e68242aa',
  'Bald-Faced Hornet':
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.statically.io%2Fimg%2Fi.pinimg.com%2Foriginals%2Fa0%2F42%2F32%2Fa042329702a33d3325334e2a05157ec4.jpg&f=1&nofb=1&ipt=f8f1b2956869c3067d1f1eda56b1f53289a6ffe7f89abe1ca40c02787bb8b405',
  'Honey Bee':
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcarolinahoneybees.com%2Fwp-content%2Fuploads%2F2022%2F11%2Fvisual-looks-honey-bee.jpg&f=1&nofb=1&ipt=d2fba2c164ddc15b84444cef67b33e9ff8d20c888fc8f5f5097f7db294a32b0b'
};

const flowerImages: Record<string, string> = {
  Tomatoes:
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg-aws.ehowcdn.com%2F877x500p%2Fphotos.demandstudios.com%2F25%2F135%2Ffotolia_3817158_XS.jpg&f=1&nofb=1&ipt=a17bac88d46f716439c062a7cc3c06eddb2505368b2278c3eaeb9accc40871dc',
  Pumpkins:
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdiy.sndimg.com%2Fcontent%2Fdam%2Fimages%2Fdiy%2Ffullset%2F2005%2F5%2F25%2F2%2FFFTG107-_Step_17.jpg.rend.hgtvcom.1280.960.suffix%2F1454185087193.jpeg&f=1&nofb=1&ipt=9ccecbaebd0f08c0abcb533977400b42a38d8766cd98e983b6bb9ec164fe1f82',
  'Fruit trees':
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.photos-public-domain.com%2Fwp-content%2Fuploads%2F2011%2F04%2Fapple-blossoms-close-up.jpg&f=1&nofb=1&ipt=13a70bcb50b5455323955f22533f64045da5a1798846144d3c9e34db83efcb88',
  'Spring beauty':
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-XMQnOHPL0B4%2FTygdCevZ8RI%2FAAAAAAAAH4M%2Fyy_L_qfGpM8%2Fs1600%2FSpring-beauty-flower%252B%2525284%252529.jpg&f=1&nofb=1&ipt=ed6e96dace8a57b9b4be0efdd76899b8feddff3e955357ae965e78ead12a5da5',
  'Native wildflowers':
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.keystonewildflowers.com%2Fmedia%2FMertensia-virginica-virginia-bluebells.jpg&f=1&nofb=1&ipt=8ea53f6b0ec3251d9429600c0af7717c92392af1ff281d487d7cfad3f17c132a',
  Goldenrod:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thespruce.com%2Fthmb%2FadYGODvCJjh1gm-YkAU2Q9mF1LM%3D%2F6720x4480%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fgoldenrod-wildflowers-2132951-06-ac848e5f75204d4daf11efd3044d911e.jpg&f=1&nofb=1&ipt=3591e68965ccb4c3cd9084be099d14ae91bb942fd01210e0eedd3af861a99934',
  'Late wildflowers':
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2022%2F01%2F14%2F19%2F58%2Fchicory-6938101_1280.jpg&f=1&nofb=1&ipt=f64d0f7dcc6c224bbb50b53b094114fe729d7b21b4e594aed2f7147c9307aac8',
  Blueberries:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdirectnativeplants.com%2Fwp-content%2Fuploads%2F2018%2F08%2Fblueberry2-1-768x576.jpg&f=1&nofb=1&ipt=860b2bc2e432bf9e07c58331acbc3a12c1ad6f1fad4e6c6cd441e7493282d9f5',
  Clover:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fobjects.liquidweb.services%2Fimages%2F201906%2Fdavid_illig_47960396171_2b81da58f0_b.jpg&f=1&nofb=1&ipt=f5d0cf70c1ad8958255608fd6f6102e140a848eac1a40e3666608c15258e1db1'
};

// Helper function to determine the image source
const getFlowerImageSrc = (flowerName: string | undefined): string => {
  if (!flowerName) return '/placeholder-flower.jpg';

  const imageSrc = flowerImages[flowerName];
  return imageSrc || '/placeholder-flower.jpg';
};

export default function PollinatorsPage(): React.ReactNode {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-center text-3xl font-bold text-amber-900">
          Maryland Native Pollinators
        </h1>

        <div className="mx-auto mb-8 max-w-4xl">
          <p className="mb-4">
            At Sugar Snap Pea Farm, we believe in sustainable farming practices that support and
            nurture our local ecosystem. Native pollinators play a crucial role in this system,
            helping to pollinate our native plants and maintain biodiversity.
          </p>
          <p className="mb-4">
            Maryland is home to over{' '}
            <Link
              color="blue"
              href="https://dnr.maryland.gov/wildlife/Pages/habitat/wawhatsthebuzz.aspx"
              style={{ color: 'blue' }}
            >
              400 species of native bees
            </Link>
            , along with various wasps and other pollinators. These fascinating creatures are
            essential for the health of our forest and the surrounding natural areas.
          </p>
          <p className="mb-6">
            Below you&apos;ll find information about some of the key pollinators you might see
            around our farm. Each card provides details about the pollinator&apos;s identifying
            features, habitat, ecological importance, and the flowers they pollinate. Use this guide
            to help identify these beneficial insects on your foray into the natural world!
          </p>
        </div>

        {/* Pollinator Cards Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {pollinators.map((pollinator, index) => (
            <PollinatorCard key={index} pollinator={pollinator} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-4 text-amber-900">
            Want to learn more about supporting pollinators on your property? Do you have a swarm
            you need help with?
          </p>
          <Link
            href="/contact"
            className="rounded-md bg-amber-800 px-6 py-2 text-white transition-colors duration-300 hover:bg-amber-900"
          >
            Contact Us For Tips
          </Link>
        </div>
      </div>
    </div>
  );
}

// Individual pollinator card component
function PollinatorCard({ pollinator }: { pollinator: Pollinator }): React.ReactNode {
  const { title, subtitle, identification, flowers, ecological, habitat, color } = pollinator;

  // Function to get a lighter version of the color for backgrounds
  const getLighterColor = (): string => {
    return color + '20'; // Add 20% opacity
  };

  return (
    <div className="overflow-hidden rounded-lg border shadow-md" style={{ borderColor: color }}>
      {/* Header */}
      <div className="px-3 py-4 text-center text-white" style={{ backgroundColor: color }}>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm italic">{subtitle}</p>
      </div>

      {/* Body */}
      <div className="p-4" style={{ backgroundColor: getLighterColor() }}>
        {/* Identification Section */}
        <div className="mb-4 w-full rounded-lg border bg-white p-3 shadow-sm">
          <h3 className="mb-2 border-b pb-1 text-center font-semibold" style={{ color: color }}>
            Identification
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {identification.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div
                  className="mt-1 h-3 w-3 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
                <div className="text-gray-800">{point}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Insect Image - Full Width */}
        <div className="mb-4 w-full overflow-hidden rounded-lg border bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={pollinatorImages[title] || '/placeholder-image.jpg'}
              alt={`${title} diagram`}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              unoptimized
            />
          </div>
        </div>

        {/* Flowers + Flower Image Row */}
        <div className="mb-4 flex flex-col gap-4 sm:flex-row">
          {/* Flowers Pollinated Section */}
          <div className="w-full rounded-lg border bg-white p-3 shadow-sm sm:w-2/3">
            <h3 className="mb-2 border-b pb-1 text-center font-semibold" style={{ color: color }}>
              Flowers Pollinated
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {flowers.map((flower, idx) => (
                <div
                  key={idx}
                  className="text-xs rounded-full px-3 py-1 font-medium text-white"
                  style={{
                    backgroundColor: color,
                    opacity: 1 - idx * 0.15 // First item is full opacity, gradually fades for less important flowers
                  }}
                >
                  {flower}
                </div>
              ))}
            </div>
          </div>

          {/* Top Flower Image */}
          <div className="w-full rounded-lg border bg-white p-3 shadow-sm sm:w-1/3">
            <h3 className="mb-2 border-b pb-1 text-center font-semibold" style={{ color: color }}>
              {flowers[0]}
            </h3>
            <div className="flex h-24 flex-col items-center justify-center text-center">
              <img
                src={
                  flowers[0] && flowerImages[flowers[0]]
                    ? flowerImages[flowers[0]]
                    : '/placeholder-flower.jpg'
                }
                alt={flowers[0] || 'Flower'}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom sections */}
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Ecological importance */}
          <div className="w-full rounded-lg border bg-white p-3 shadow-sm sm:w-1/2">
            <h3 className="mb-2 border-b pb-1 text-center font-semibold" style={{ color: color }}>
              Ecological Importance
            </h3>
            <div className="text-sm text-gray-800">
              {ecological.map((point, idx) => (
                <div key={idx} className="mb-2 flex items-center">
                  <div
                    className="text-xs mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {idx + 1}
                  </div>
                  <div>{point}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Habitat */}
          <div className="w-full rounded-lg border bg-white p-3 shadow-sm sm:w-1/2">
            <h3 className="mb-2 border-b pb-1 text-center font-semibold" style={{ color: color }}>
              Habitat
            </h3>
            <div className="space-y-2 text-sm text-gray-800">
              {habitat.map((point, idx) => (
                <div key={idx} className="border-l-4 pl-2" style={{ borderColor: color }}>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
