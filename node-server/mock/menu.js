module.exports=[
    { name: `首页`, path: `/main`, icon: "dashboard", hasChildren: false },
    {
      name: `统计`,
      path: `/main/ppx`,
      icon: "line-chart",
      hasChildren: true,
      children: [{ name: `001`, path: `/main/ppx/01`, icon: "", hasChildren: false }]
    }
  ];
  