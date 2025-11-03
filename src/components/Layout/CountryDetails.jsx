import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";


export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }

      console.log(Object.keys(res.data[0].name.nativeName));
    });
  }, []);

  if (isPending) return ;

  console.log(params);
  return (
    <section className="container my-5 pt-5">
  <div className="row justify-content-center">
    {country && (
      <div className="col-md-5 col-lg-4">
        <div className="card shadow-sm border-0 rounded-4 p-2" style={{ fontWeight: 400 }}>
          <img
            className="card-img-top rounded-4"
            src={country.flags.svg}
            alt={country.flags.alt}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title mb-3 fw-semibold">
              {country.name.official}
            </h5>

            <div className="text-start small text-muted">
              <p className="mb-1">
                <strong>Native Names:</strong>{" "}
                {Object.keys(country.name.nativeName)
                  .map((key) => country.name.nativeName[key].common)
                  .join(", ")}
              </p>
              <p className="mb-1">
                <strong>Population:</strong> {country.population.toLocaleString()}
              </p>
              <p className="mb-1">
                <strong>Region:</strong> {country.region}
              </p>
              <p className="mb-1">
                <strong>Sub Region:</strong> {country.subregion}
              </p>
              <p className="mb-1">
                <strong>Capital:</strong> {country.capital}
              </p>
              <p className="mb-1">
                <strong>Top Level Domain:</strong> {country.tld[0]}
              </p>
              <p className="mb-1">
                <strong>Currencies:</strong>{" "}
                {Object.keys(country.currencies)
                  .map((curElem) => country.currencies[curElem].name)
                  .join(", ")}
              </p>
              <p className="mb-1">
                <strong>Languages:</strong>{" "}
                {Object.keys(country.languages)
                  .map((key) => country.languages[key])
                  .join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    )}

    <div className="text-center mt-4">
      <NavLink to="/country">
        <button className="btn btn-outline-primary btn-sm px-3 py-1 rounded-3">
          Go Back
        </button>
      </NavLink>
    </div>
  </div>
</section>

  );
};
