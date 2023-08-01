import "./styles.css";
import "./reset.css";
import { StiggProvider, Paywall } from "@stigg/react-sdk";
import { TEXT_OVERRIDES } from "./stigg.config";

const CLIENT_API_KEY =
  "client-2e7a523d-ce80-4d1a-961c-107169da9471:df78f0c6-163f-401e-86d4-8387c0fb3b6a";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Pricing</h1>
      <h2 style={{ textAlign: "center" }}>
        Use Linear for free with your whole team. Upgrade to enable unlimited
        issues, enhanced security controls, and additional features.
      </h2>
      <StiggProvider apiKey={CLIENT_API_KEY}>
        <Paywall
          textOverrides={TEXT_OVERRIDES}
          highlightedPlanId="plan-the-qa-company-standard"
        />
      </StiggProvider>
    </div>
  );
}
