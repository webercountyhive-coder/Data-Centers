// Weber County Hive — Data Centers Docket data file
// Add one object per document. Bump the version query param in the docket HTML on every update.

const DATACENTERS_DOCS = [
  {
    id: "oed-sb132",
    title: "Data Centers — SB 132 & Utah's Data Center Landscape",
    presenter: "Office of Energy Development",
    date: "2026-08-19",
    hearing: "Economic Development and Workforce Services Interim Committee",
    summary: "OED's promotional framing of SB 132 as a national 'cost-causer pays' model, plus the statewide data center map, cooling technology, and Utah project examples (Novva, Valar Atomics, Fervo, Faraday Solar, Creekstone).",
    tags: ["SB 132", "electricity", "cooling", "Creekstone", "Novva"],
    status: "live",
    page: "weber-hive-dc-oed-sb132.html"
  },
  {
    id: "deq-abundance",
    title: "Data Centers — Abundance Accelerator Initiative",
    presenter: "Dept. of Environmental Quality (Commissioner Tim Davis)",
    date: "2026-08-19",
    hearing: "Economic Development and Workforce Services Interim Committee",
    summary: "DEQ's own map of who actually regulates a data center in Utah — no single approving agency, the 7-phase development process, and the full agency-by-agency approval matrix (PSC, Air Quality, Water Rights, Water Quality, Drinking Water, DWR, local building/fire).",
    tags: ["DEQ", "HB 76", "SB 132", "permitting", "agency matrix"],
    status: "planned",
    page: "weber-hive-dc-deq-abundance.html"
  },
  {
    id: "goed-initiatives",
    title: "Data Center Initiatives",
    presenter: "Governor's Office of Economic Development",
    date: "2026-08-19",
    hearing: "Economic Development and Workforce Services Interim Committee",
    summary: "GOED's posture on data centers, its Opportunity Zone map, tax increment financing tools (EDTIF/REDTIF), the incentive approval process, and the Creekstone Energy deal — the only state post-performance incentive given to a data center to date.",
    tags: ["GOED", "Creekstone", "Opportunity Zones", "EDTIF", "incentives"],
    status: "planned",
    page: "weber-hive-dc-goed-initiatives.html"
  },
  {
    id: "usc-marshall-summary",
    title: "Data Center Growth: Policy Choices Facing Utah and Other States",
    presenter: "Shon R. Hiatt, USC Marshall — Zage Business of Energy Initiative",
    date: "2026-08-19",
    hearing: "Economic Development and Workforce Services Interim Committee",
    summary: "Independent academic overview: Utah's water/energy definitions, the county-by-county moratorium wave, cancellations and opposition data, and the national incentive/policy comparison.",
    tags: ["moratoriums", "Iron County", "Box Elder", "Stratos", "national comparison"],
    status: "planned",
    page: "weber-hive-dc-usc-summary.html"
  },
  {
    id: "usc-marshall-brief",
    title: "Data Center Entry and U.S. Electricity Prices (full academic brief)",
    presenter: "Angela Ryu & Shon R. Hiatt, USC Marshall",
    date: "2026-05-22",
    hearing: "Submitted to Economic Development and Workforce Services Interim Committee, 2026-08-19",
    summary: "The underlying study behind the USC Marshall summary deck — wholesale and retail price effects of data center entry, broken out by utility ownership type. Key finding: no statistically significant retail price effect for investor-owned utilities (RMP's category); effect concentrated in cooperatives and municipals.",
    tags: ["electricity prices", "RMP", "academic study", "IOU"],
    status: "planned",
    page: "weber-hive-dc-usc-brief.html"
  }
];
