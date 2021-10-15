import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import { requestAccount } from "../utils/common";
import { isIssuer } from "../utils/ContractProvider";

function Home() {
  let history = useHistory();

  async function signIn() {
    await requestAccount();
    const canIssueContract = await isIssuer();
    if (canIssueContract) {
      history.push("/issue");
    } else {
      history.push("/my-profile");
    }
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Mint your certificates as NFT
            <br className="hidden lg:inline-block" />
            on Ethereum Blockchain
          </h1>
          <p className="text-2xl font-bold">
            Let the blockchain take care of your achievements
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full py-4 md:w-1/2 w-5/6 text-center border-2 border-fuchsia-600 rounded-md">
          <img
            className="inline-block object-cover object-center rounded"
            alt="hero"
            src="/sign-in-metamask.png"
          />
          <div className="flex justify-center">
            <Button label="Sign In to Metamask " handleClick={signIn} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
