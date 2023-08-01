import { PaywallLocalization, PaywallPlan } from "@stigg/react-sdk";

type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object
      ? Subset<K[attr]>
      : K[attr] extends object | null
      ? Subset<K[attr]> | null
      : K[attr] extends object | null | undefined
      ? Subset<K[attr]> | null | undefined
      : K[attr];
};

export const TEXT_OVERRIDES: Subset<PaywallLocalization> = {
  planCTAButton: {
    startTrial: (plan: PaywallPlan) => `Get started with ${plan.displayName}`
  },
  highlightChip: "",
  price: {
    free: { price: "Free for everyone" },
    custom: "Contact Sales"
  }
};
