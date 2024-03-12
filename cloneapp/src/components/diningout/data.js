const data = [
    {
        image:"https://b.zmtcdn.com/data/pictures/chains/1/2800901/a339bbb67c515ac43d4891990a731dbb_featured_v2.jpg?output-format=webp",
        title:"Paradise Biriyani with mutton kheema",
        des:"Biriyani,Kebab,North india",
        loc:"Gajuwaka,Vizag",
        time:"Closes in 4 minutes",
        rating:"4.0",
        price:"₹850 for two",
        dist:"1.6km"
    },
    {
      "title": "Paradise Biriyani with mutton kheema",
      "des": "Biriyani, Kebab, North India",
      "loc": "Gajuwaka, Vizag",
      "time": "Closes in 4 minutes",
      "rating": "4.0",
      "price": "₹850 for two",
      "dist": "1.6km",
      "image": "https://b.zmtcdn.com/data/pictures/chains/2/19082182/08c9ca1fa6ab9ac6aeafe2f4dcda1600_featured_v2.jpg"
    },
    {
      "title": "Royal Indian Cuisine",
      "des": "Indian, Tandoor, Biryani",
      "loc": "Dwaraka Nagar, Vizag",
      "time": "Open until 10:00 PM",
      "rating": "4.5",
      "price": "₹800 for two",
      "dist": "2.3km",
      "image": "https://b.zmtcdn.com/data/pictures/3/20619703/93fbdbc120ccfddb5fc83accab29a7d7_featured_v2.jpg"
    },
    {
      "title": "The Great Kebab Factory",
      "des": "Kebab, North Indian, Mughlai",
      "loc": "Asilmetta, Vizag",
      "time": "Open until 11:00 PM",
      "rating": "4.2",
      "price": "₹1000 for two",
      "dist": "3.1km",
      "image": "https://b.zmtcdn.com/data/pictures/3/20866143/108c498720854c614cf057e41000a40b_featured_v2.jpg"
    },
    {
      "title": "Coastal Curry House",
      "des": "Seafood, South Indian, Andhra",
      "loc": "Rushikonda, Vizag",
      "time": "Open until 9:30 PM",
      "rating": "4.3",
      "price": "₹900 for two",
      "dist": "5.5km",
      "image": "https://b.zmtcdn.com/data/pictures/2/18998732/8efd5343d27ad0601a41f52d760be8bf_featured_v2.jpg"
    },
    {
      "title": "Spice Route",
      "des": "Asian, Chinese, Thai",
      "loc": "Waltair Uplands, Vizag",
      "time": "Open until 10:30 PM",
      "rating": "4.6",
      "price": "₹1200 for two",
      "dist": "4.2km",
      "image": "https://b.zmtcdn.com/data/pictures/chains/3/2800163/ddfc95949e3a5c40d0c0a2e55e8f293f_featured_v2.jpg"
    },
    {
      "title": "Café Coffee Day",
      "des": "Cafe, Beverages, Fast Food",
      "loc": "Diamond Park, Vizag",
      "time": "Open until 11:30 PM",
      "rating": "4.1",
      "price": "₹600 for two",
      "dist": "1.9km",
      "image": "https://b.zmtcdn.com/data/pictures/4/19866324/61eed6534a3c0867a7938b166ca4c7d7_featured_v2.jpg"
    },
    {
      "title": "Pizza Hut",
      "des": "Pizza, Fast Food, Italian",
      "loc": "CBM Compound, Vizag",
      "time": "Open until 10:45 PM",
      "rating": "4.4",
      "price": "₹700 for two",
      "dist": "3.8km",
      "image": "https://b.zmtcdn.com/data/pictures/4/2800774/0e8f1f6d4979cde9286ed8e949008e81_featured_v2.jpg"
    },
    {
      "title": "Bakersville India Pvt Ltd",
      "des": "Bakery, Desserts, Fast Food",
      "loc": "Gopalapatnam, Vizag",
      "time": "Open until 9:00 PM",
      "rating": "4.0",
      "price": "₹500 for two",
      "dist": "6.1km",
      "image": "https://b.zmtcdn.com/data/pictures/2/18766632/bab8974ae86995566141c1174209547b_featured_v2.jpg"
    },
    {
      "title": "Chill & Grill",
      "des": "Fast Food, Burger, Sandwich",
      "loc": "Madhurawada, Vizag",
      "time": "Open until 10:15 PM",
      "rating": "4.2",
      "price": "₹750 for two",
      "dist": "7.3km",
      "image": "https://b.zmtcdn.com/data/pictures/8/20529238/e4683618d51d3d7e12c027e2be79954f_featured_v2.jpg"
    },
    {
      "title": "Ming Garden",
      "des": "Chinese, Thai, Asian",
      "loc": "Beach Road, Vizag",
      "time": "Open until 10:30 PM",
      "rating": "4.3",
      "price": "₹1100 for two",
      "dist": "2.9km",
      "image": "https://b.zmtcdn.com/data/pictures/chains/6/18795866/c3d6f57c37e50c9ae16f0fdfe32fc9ff_featured_v2.jpg"
    },
    {
      "title": "Cream Stone",
      "des": "Ice Cream, Desserts",
      "loc": "Kancharapalem, Vizag",
      "rating": "4.5",
      "price": "₹400 for two",
      "dist": "4.8km",
      "image": "https://b.zmtcdn.com/data/pictures/2/20012532/4d96019cdb722e1be82bffff2af47274_featured_v2.jpg"
    },
    {
      "title": "Barbeque Nation",
      "des": "North Indian, Kebab, Grill",
      "loc": "Siripuram, Vizag",
      "time": "Open until 11:30 PM",
      "rating": "4.7",
      "price": "₹1500 for two",
      "dist": "1.2km",
      "image": "https://b.zmtcdn.com/data/pictures/chains/0/18757190/38b719c0496a4d499d7ee00cfa52e696_featured_v2.jpg"
    },
    {
      "title": "Subway",
      "des": "Sandwich, Fast Food, Salad",
      "loc": "Rama Talkies Road, Vizag",
      "time": "Open until 10:00 PM",
      "rating": "4.0",
      "price": "₹450 for two",
      "dist": "3.5km",
      "image": "https://b.zmtcdn.com/data/pictures/8/2800088/7d5ff0741f843fddccf85ce113709364_featured_v2.jpg"
    },
    {
      "title": "McDonald's",
      "des": "Burger, Fast Food, Beverages",
      "loc": "Dondaparthy, Vizag",
      "time": "Open until 10:45 PM",
      "rating": "4.4",
      "price": "₹600 for two",
      "dist": "2.5km",
      "image": "https://b.zmtcdn.com/data/pictures/4/19548124/3c2358c42d3dc1cca825e154f7ab39dd_featured_v2.jpg"
    },
    {
      "title": "Gadala's Kitchen",
      "des": "Andhra, South Indian, Biryani",
      "loc": "Simhachalam, Vizag",
      "rating": "4.3",
      "price": "₹700 for two",
      "dist": "8.7km",
      "image": "https://b.zmtcdn.com/data/pictures/8/20922458/6b3b7de09cc3b2e16baa591275cb963b_featured_v2.jpg"
    },
    {
      "title": "Domino's Pizza",
      "des": "Pizza, Fast Food, Italian",
      "loc": "Sriharipuram, Vizag",
      "time": "Open until 10:30 PM",
      "rating": "4.2",
      "price": "₹800 for two",
      "dist": "4.1km",
      "image": "https://b.zmtcdn.com/data/pictures/3/20955383/be65becacdf26cb1c391bda803de1197_o2_featured_v2.jpg"
    },
    {
      "title": "KFC",
      "des": "Fried Chicken, Fast Food, Burger",
      "loc": "Isukathota, Vizag",
      "rating": "4.5",
      "price": "₹900 for two",
      "dist": "5.9km",
      "image": "https://b.zmtcdn.com/data/pictures/chains/4/19043124/e871a905fa062a6e7052f5656303d8f5_featured_v2.jpg"
    },
    {
      "title": "Indian Paratha Company",
      "des": "North Indian, Paratha, Rolls",
      "loc": "MVP Colony, Vizag",
      "time": "Open until 10:15 PM",
      "rating": "4.1",
      "price": "₹650 for two",
      "dist": "3.2km",
      "image": "https://b.zmtcdn.com/data/pictures/4/19168814/5f997f24e2874063971136aa76874ab8_featured_v2.jpg"
    },
    {
      "title": "Dosa Plaza",
      "des": "South Indian, Dosa, Idli",
      "loc": "Waltair Main Road, Vizag",
      "time": "Open until 11:30 PM",
      "rating": "4.3",
      "price": "₹500 for two",
      "dist": "2.4km",
      "image": "https://b.zmtcdn.com/data/pictures/9/18753389/eb74c827c3319e48a0980c459dd9528c_featured_v2.jpg"
    },
    {
      "title": "The Bake Shop",
      "des": "Bakery, Desserts, Cakes",
      "loc": "Seethammadhara, Vizag",
      "rating": "4.4",
      "price": "₹350 for two",
      "dist": "4.7km",
      "image": "https://b.zmtcdn.com/data/pictures/9/19497699/ce0caeb42cb2f3f0245b54b7db5ce07e_featured_v2.jpg"
    }
  ]

  export default data ;
  