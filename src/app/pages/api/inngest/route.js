// import { inngest } from "@/lib/inngest/client";
// import { generateIndustryInsights } from "@/lib/inngest/functions";
// import { serve } from "inngest/next";

// // Create an API that serves zero functions
// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [
//     /* your functions will be passed here later! */
//     generateIndustryInsights,
//   ],
// });

// pages/api/inngest.ts
import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/functions";
import { serve } from "inngest/next";

export default serve({
  client: inngest,
  functions: [generateIndustryInsights],
});

