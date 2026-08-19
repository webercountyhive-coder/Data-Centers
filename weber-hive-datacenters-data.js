// Weber County Hive — Data Centers Docket data file
// Add one object per document. Bump the version query param in the docket HTML on every update.

const DATACENTERS_DOCS = [
  {
    id: "oed-sb132",
    title: "Data Centers — SB 132 & Utah's Data Center Landscape",
    presenter: "Office of Energy Development",
    date: "2026-08-19",
    hearing: "Economic Development and Workforce Services Interim Committee",
    summary: "OED's promotional framing of SB 132 as a national 'cost-causer pays' model — checked against the bill's actual text, which also creates a closed private generation pathway with no PSC oversight at all.",
    tags: ["SB 132", "PSC", "closed private generation", "MIDA", "electricity"],
    status: "live",
    page: "weber-hive-dc-oed-sb132.html"
  },
  {
    id: "deq-abundance",
    title: "Data Centers — Abundance Accelerator Initiative",
    presenter: "Dept. of Environmental Quality (Commissioner Tim Davis)",
    date: "2026-08-19",
    hearing: "Economic Development and Workforce Services Interim Committee",
    summary: "DEQ's own map of who actually regulates a data center in Utah — no single approving agency, the 6-phase development process, and the full agency-by-agency approval matrix, including where public comment is and isn't guaranteed.",
    tags: ["DEQ", "HB 76", "SB 132", "MIDA", "permitting", "agency matrix"],
    status: "live",
    page: "weber-hive-dc-deq-abundance.html"
  },
  {
    id: "goed-initiatives",
    title: "Data Center Initiatives",
    presenter: "Governor's Office of Economic Development",
    date: "2026-08-19",
    hearing: "Economic Development and Workforce Services Interim Committee",
    summary: "GOED's posture, its EDTIF/REDTIF tax tools, the Creekstone Energy deal (the only state post-performance incentive given to a data center), and the Opportunity Zone map — checked against UIPA's own 15-project-area statewide map and the Tyson Eagle Mountain closure as a real accountability test case.",
    tags: ["GOED", "Creekstone", "Opportunity Zones", "EDTIF", "UIPA", "Tyson"],
    status: "live",
    page: "weber-hive-dc-goed-initiatives.html"
  },
  {
    id: "usc-marshall-summary",
    title: "Data Center Growth: Policy Choices Facing Utah and Other States",
    presenter: "Shon R. Hiatt, USC Marshall — Zage Business of Energy Initiative",
    date: "2026-08-19",
    hearing: "Economic Development and Workforce Services Interim Committee",
    summary: "The county-by-county moratorium wave (Iron, Box Elder, Cache, SLC, Logan, Grand, Wayne), national cancellation data, and Utah's incentive comparison to its neighbors — including a correction on Utah's property tax picture, sourced to UIPA, MIDA/Stratos, and Meta/Eagle Mountain.",
    tags: ["moratoriums", "Iron County", "Box Elder", "Stratos", "property tax", "national comparison"],
    status: "live",
    page: "weber-hive-dc-usc-summary.html"
  },
  {
    id: "usc-marshall-brief",
    title: "Data Center Entry and U.S. Electricity Prices (full academic brief)",
    presenter: "Angela Ryu & Shon R. Hiatt, USC Marshall",
    date: "2026-05-22",
    hearing: "Submitted to Economic Development and Workforce Services Interim Committee, 2026-08-19",
    summary: "The underlying study behind the summary deck. Key finding: no statistically significant retail price effect for investor-owned utilities like RMP, concentrated instead in cooperatives and municipals — read against RMP's own public denial of a data-center-driven rate hike and its pending PSC large-load tariff investigation.",
    tags: ["electricity prices", "RMP", "PSC", "EDAM", "IOU", "academic study"],
    status: "live",
    page: "weber-hive-dc-usc-brief.html"
  }
];
