import { QRCodeSVG } from 'qrcode.react';
import { flowerImages, pollinatorImages, pollinators } from './data/pollinators';

export default function PrintablePollinatorCards() {
  return (
    <div className="print-container p-8">
      <style jsx global>{`
        @media print {
          @page {
            size: letter portrait;
            margin: 0.5in;
          }
          body {
            background-color: white;
          }
          .pollinator-card {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .qr-code {
            display: block !important;
          }
        }
      `}</style>

      <div className="mb-8 grid grid-cols-1 gap-8">
        {pollinators.map((pollinator, index) => (
          <div
            key={index}
            className="pollinator-card mb-8 overflow-hidden rounded-lg border-2"
            style={{ borderColor: pollinator.color }}
          >
            {/* Card Header */}
            <div
              className="px-3 py-4 text-center text-white"
              style={{ backgroundColor: pollinator.color }}
            >
              <h2 className="text-xl font-bold">{pollinator.title}</h2>
              <p className="text-sm italic">{pollinator.subtitle}</p>
            </div>

            {/* Card Body */}
            <div className="p-4" style={{ backgroundColor: `${pollinator.color}20` }}>
              {/* Main Image */}
              <div className="mb-4 w-full overflow-hidden rounded-lg border bg-white shadow-sm">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={
                      typeof pollinator.title === 'string' &&
                      pollinatorImages &&
                      pollinator.title in pollinatorImages
                        ? pollinatorImages[pollinator.title]
                        : '/placeholder-image.jpg'
                    }
                    alt={`${pollinator.title} diagram`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Identification */}
              <div className="mb-4 w-full rounded-lg border bg-white p-3 shadow-sm">
                <h3
                  className="mb-2 border-b pb-1 text-center font-semibold"
                  style={{ color: pollinator.color }}
                >
                  Identification
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {pollinator.identification.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div
                        className="mt-1 h-3 w-3 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: pollinator.color }}
                      ></div>
                      <div className="text-gray-800">{point}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flowers Pollinated and Flower Image */}
              <div className="mb-4 flex flex-col gap-4 sm:flex-row">
                <div className="w-full rounded-lg border bg-white p-3 shadow-sm sm:w-2/3">
                  <h3
                    className="mb-2 border-b pb-1 text-center font-semibold"
                    style={{ color: pollinator.color }}
                  >
                    Flowers Pollinated
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {pollinator.flowers.map((flower, idx) => (
                      <div
                        key={idx}
                        className="text-xs rounded-full px-3 py-1 font-medium text-white"
                        style={{
                          backgroundColor: pollinator.color,
                          opacity: 1 - idx * 0.15
                        }}
                      >
                        {flower}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full rounded-lg border bg-white p-3 shadow-sm sm:w-1/3">
                  <h3
                    className="mb-2 border-b pb-1 text-center font-semibold"
                    style={{ color: pollinator.color }}
                  >
                    {pollinator.flowers.length > 0 ? pollinator.flowers[0] : 'Flowers'}
                  </h3>
                  <div className="aspect-square w-full overflow-hidden">
                    {pollinator.flowers.length > 0 && (
                      <img
                        src={
                          flowerImages &&
                          typeof pollinator.flowers[0] === 'string' &&
                          pollinator.flowers[0] in flowerImages
                            ? flowerImages[pollinator.flowers[0]]
                            : '/placeholder-flower.jpg'
                        }
                        alt={pollinator.flowers[0] || 'Flower'}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Ecological Importance and Habitat */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="w-full rounded-lg border bg-white p-3 shadow-sm sm:w-1/2">
                  <h3
                    className="mb-2 border-b pb-1 text-center font-semibold"
                    style={{ color: pollinator.color }}
                  >
                    Ecological Importance
                  </h3>
                  <div className="text-sm">
                    {pollinator.ecological.map((point, idx) => (
                      <div key={idx} className="mb-2 flex items-center">
                        <div
                          className="text-xs mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full font-bold text-white"
                          style={{ backgroundColor: pollinator.color }}
                        >
                          {idx + 1}
                        </div>
                        <div>{point}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full rounded-lg border bg-white p-3 shadow-sm sm:w-1/2">
                  <h3
                    className="mb-2 border-b pb-1 text-center font-semibold"
                    style={{ color: pollinator.color }}
                  >
                    Habitat
                  </h3>
                  <div className="space-y-2 text-sm">
                    {pollinator.habitat.map((point, idx) => (
                      <div
                        key={idx}
                        className="border-l-4 pl-2"
                        style={{ borderColor: pollinator.color }}
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* QR code */}
              <div className="qr-code absolute bottom-4 right-4">
                <QRCodeSVG value="https://www.sugarsnappeafarm.com/pollinators" size={80} />
                <p className="text-xs mt-1 text-center">Scan for more info</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="screen-only mb-8 text-center">
        <button
          onClick={() => window.print()}
          className="rounded-md bg-amber-800 px-6 py-2 text-white hover:bg-amber-900"
        >
          Print All Cards
        </button>
      </div>
    </div>
  );
}
