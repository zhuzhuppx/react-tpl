module.exports = [
  { name: `首页`, path: `/main`, icon: "dashboard", hasChildren: false },
  {
    name: `样例`,
    icon: "dashboard",
    hasChildren: true,
    children: [
      { name: `表格`, path: `/main/samples/table`, icon: "dashboard", hasChildren: false },      
      { name: `复杂表格`, path: `/main/samples/complexTable`, icon: "dashboard", hasChildren: false }
    ]
  }
];
