import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import { getImgUrlFromIpfsHash } from "../utils/common";
import { getCertificateDetails } from "../utils/ContractProvider";

function ViewDocument() {
  let { id } = useParams();
  const [document, setDocument] = useState([]);

  useEffect(() => {
    async function fetchDocumentDetail() {
      const details = await getCertificateDetails(id);
      setDocument(details);
    }

    fetchDocumentDetail();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <PageHeading title="Certificate Details" />
      {document && (
        <div className="container px-5 py-5 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden border-2 border-fuchsia-600">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={getImgUrlFromIpfsHash(document[1])}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    {document[0]}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                  <p className="text-base"></p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  <b>Issued On:</b> 29th August 2021
                  <br />
                  <b>IPFS Hash:</b> {document[1]}
                  <br />
                  <b>IPFS url:</b>{" "}
                  <small>
                    <a href={getImgUrlFromIpfsHash(document[1])}>
                      {getImgUrlFromIpfsHash(document[1])}
                    </a>
                  </small>
                </p>
                <a
                  href="https://etherscan.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-500 inline-flex items-center"
                >
                  View on Etherscan
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ViewDocument;
