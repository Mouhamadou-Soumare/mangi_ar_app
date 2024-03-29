import carrefour from "../assets/carrefour.png"
import casino from "../assets/casino.png"
import auchan from "../assets/auchan.png"
import lidl from "../assets/lidl.png"
import franprix from "../assets/franprix.png"


export default function Partners() {
    return (

      <div className="section-background-primary section">
        <div className="pt-32 pb-32 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-3xl font-bold tracking-tight title-secondary sm:text-4xl">Partenariats et Collaborations </h2>
              <p className="mt-6 text-lg leading-8 text-desc">
                  Chez Manĝi, nous sommes fiers de travailler avec certaines des enseignes alimentaires les plus renommées en France. Leur confiance en notre service témoigne de notre engagement envers la qualité et la satisfaction de nos clients.
              </p>
            <div className="mx-auto mt-10 pt-9   grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <div className="background-card-partners">
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 img-back"
                  src={carrefour}
                  alt="Transistor"
                  width={158}
                  height={48}
                />
              </div> 
              <div className="background-card-partners">
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 img-back"
                  src={casino}
                  alt="Reform"
                  width={158}
                  height={48}
                />
              </div>
              <div className="background-card-partners">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 img-back"
                src={auchan}
                alt="Tuple"
                width={158}
                height={48}
              />
              </div>
              <div className="background-card-partners">
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 img-back"
                src={lidl}
                alt="SavvyCal"
                width={158}
                height={48}
              />
              </div>
              <div className="background-card-partners">

              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 img-back"
                src={franprix}
                alt="Statamic"
                width={158}
                height={48}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  