// Weber County Hive — Data Centers HEARING Docket data file (Aug. 19, 2026 EDWS interim hearing)
// This file is ONLY for the hearing docket (weber-hive-datacenters-docket.html).
// The bills docket uses a different file: weber-hive-datacenters-bills-data.js
// Bump the version query param in the docket HTML on every update.

const DATACENTERS_DOCS = [
  {
    id: "oed-sb132",
    title: "Data Centers & SB 132",
    presenter: "Office of Energy Development",
    date: "2026-08-19",
    hearing: "EDWS Interim, Aug. 19, 2026 · Case file 1 of 5",
    summary: "The Office of Energy Development's pitch to lawmakers: Utah is a national leader on data center policy, and SB 132 protects ratepayers. Here's what the slide says, and what the bill it's describing actually does.",
    tags: ["OED", "SB 132", "PSC", "ratepayers", "2026"],
    status: "live",
    page: "weber-hive-dc-oed-sb132.html"
  },
  {
    id: "deq-abundance",
    title: "Abundance Accelerator Initiative",
    presenter: "Dept. of Environmental Quality (Commissioner Tim Davis)",
    date: "2026-08-19",
    hearing: "EDWS Interim, Aug. 19, 2026 · Case file 2 of 5",
    summary: "The Department of Environmental Quality's own map of who approves a data center in Utah, and its answer: no single agency does.",
    tags: ["DEQ", "DAQ", "air permits", "water rights", "2026"],
    status: "live",
    page: "weber-hive-dc-deq-abundance.html"
  },
  {
    id: "goed-initiatives",
    title: "Data Center Initiatives",
    presenter: "Governor's Office of Economic Development",
    date: "2026-08-19",
    hearing: "EDWS Interim, Aug. 19, 2026 · Case file 3 of 5",
    summary: "GOED's own posture: \"We aren't actively recruiting data centers. We work to match communities to projects.\" What its incentive tools offer, the one deal it's made, and where its 2026 Opportunity Zone map lands.",
    tags: ["GOED", "incentives", "PID", "TIF", "Opportunity Zones", "2026"],
    status: "live",
    page: "weber-hive-dc-goed-initiatives.html"
  },
  {
    id: "usc-summary",
    title: "Data Center Growth: Policy Choices Facing Utah and Other States",
    presenter: "Shon R. Hiatt, USC Marshall",
    date: "2026-08-19",
    hearing: "EDWS Interim, Aug. 19, 2026 · Case file 4 of 5",
    summary: "The one presentation at this hearing that didn't come from a state agency: the moratorium wave hitting Utah counties, national cancellation numbers, and how Utah's incentives compare to its neighbors.",
    tags: ["USC Marshall", "moratoriums", "incentives", "academic", "2026"],
    status: "live",
    page: "weber-hive-dc-usc-summary.html"
  },
  {
    id: "usc-brief",
    title: "Data Center Entry and U.S. Electricity Prices",
    presenter: "Angela Ryu & Shon R. Hiatt, USC Marshall",
    date: "2026-05-22",
    hearing: "EDWS Interim, Aug. 19, 2026 · Case file 5 of 5",
    summary: "The full academic study behind Case File 4's slides. Its headline finding: data centers raise electricity prices, but the effect falls almost entirely on electric cooperatives and municipal utilities, not investor-owned utilities like Rocky Mountain Power.",
    tags: ["USC Marshall", "electricity prices", "co-ops", "study", "2026"],
    status: "live",
    page: "weber-hive-dc-usc-brief.html"
  }
];
