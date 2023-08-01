import { PaywallLocalization } from "@stigg/react-sdk";

export const TEXT_OVERRIDES: Partial<PaywallLocalization> = {
  planCTAButton: {
    startTrial: (plan) => `Get started with ${plan.displayName}`
  },
  highlightChip: "",
  price: {
    free: { price: "Free for everyone" },
    custom: "Contact Sales"
  }
};
