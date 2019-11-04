module.exports=[
    { name: `首页`, path: `/`, icon: "dashboard", hasChildren: false },
    {
      name: `统计`,
      path: `/ppx`,
      icon: "line-chart",
      hasChildren: true,
      children: [{ name: `001`, path: `/ppx/01`, icon: "", hasChildren: false }]
    }
  ];
  