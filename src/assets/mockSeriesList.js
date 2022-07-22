const mockSeriesList = [
    {
    "id": "a0e2e984-f971-44cf-b033-cd49bfdb965b1",
    "title": "Stranger Things",
    "seasons": 4,
    "poster": "https://static.posters.cz/image/750/stranger-things-i106047.jpg",
    "year": 2022,
    "description": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    "genres": [
    "scifi",
    "nostalgic"
    ],
    "new": true,
    "favorite": false,
    "rating": 5,
    "users": [
    2,
    3
    ],
    "cast": [
    "Wynona Rider",
    "Millie Bobby Brown",
    "David Harbour"
    ]
    },

    {
    "id": "dc30b14d-1ced-469f-b454-22ef65f117061",
    "title": "Better call Saul",
    "seasons": 6,
    "poster": "https://images.everyeye.it/img-cover/better-call-saul-stagione-1-v2-26598-320x450.jpg",
    "year": 2022,
    "description": "This Emmy-nominated prequel to \"Breaking Bad\" follows small-time attorney Jimmy McGill as he transforms into morally challenged lawyer Saul Goodman.",
    "genres": [
    "crime",
    "drama"
    ],
    "new": true,
    "favorite": false,
    "rating": 3,
    "users": [
    2
    ],
    "cast": [
    "Bob Odenkirk",
    "Jonathan Banks",
    "Rhea Seehorn"
    ]
    },
    {
    "id": "925c7af2-49ea-4536-8166-26d407b4be031",
    "title": "Ash vs Evil Dead",
    "seasons": 3,
    "poster": "https://m.media-amazon.com/images/I/91rrud8LHZL._SL1500_.jpg",
    "year": 2018,
    "description": "Kelly and Pablo seek help with Ash's demonic diagnosis, but not all is what it seems. Ruby gives the increasingly incredulous Amanda a pep talk.",
    "genres": [
    "horror",
    "comedy"
    ],
    "new": false,
    "favorite": false,
    "rating": 4,
    "users": [
    3
    ],
    "cast": [
    "Bruce Campbell",
    "Lucy Lawless",
    "Ray Santiago"
    ]
    },
    {
    "id": "8c21caf4-e28f-4b83-a5b7-081c36f88da71",
    "title": "The Umbrella Academy",
    "seasons": 3,
    "poster": "https://mr.comingsoon.it/imgdb/serietv/serie/1803/1803.jpg",
    "year": 2020,
    "description": "Years after they rose to fame as young crime-fighting superheroes, the estranged Hargreeves siblings come together to mark their father's death.",
    "genres": [
    "superheroes",
    "scifi"
    ],
    "new": false,
    "favorite": false,
    "rating": 5,
    "users": [
    2
    ],
    "cast": [
    "Elliot Page",
    "Tom Hopper",
    "David Castaneda"
    ]
    },
    {
    "id": "d89305b4-dd7c-4ede-90d7-02cd941237b51",
    "title": "Cobra Kai",
    "seasons": 4,
    "poster": "https://mr.comingsoon.it/imgdb/serietv/serie/1778/1778.jpg",
    "year": 2021,
    "description": "Drinking hard and living in the shadow of his successful former rival, Daniel, Johnny hits rock bottom and decides to reopen the Cobra Kai karate dojo.",
    "genres": [
    "fighting",
    "drama"
    ],
    "new": false,
    "favorite": false,
    "rating": 5,
    "users": [
    3
    ],
    "cast": [
    "Elliot Page",
    "Tom Hopper",
    "David Castaneda"
    ]
    },
    {
    "id": "c567c17d-55b7-4dc5-9056-96d234aa94861",
    "title": "Peaky Blinders",
    "seasons": 5,
    "poster": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e60d59103015959.5f43f7d599ad9.jpg",
    "year": 2018,
    "description": "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
    "genres": [
    "historical fiction",
    "crime drama"
    ],
    "new": false,
    "favorite": true,
    "rating": 4,
    "users": [
    3
    ],
    "cast": [
    "Cillian Murphy",
    "Paul Anderson",
    "Sophie Rundle"
    ]
    },
    {
    "id": "fe2e2c32-1972-4257-89d0-7e7a5d622a4b1",
    "title": "The Last Kingdom",
    "seasons": 5,
    "poster": "https://www.wzuz.com/wp-content/uploads/2022/04/www.wzuz_.com-2022-04-16T205233.340-640x853.jpg",
    "year": 2022,
    "description": "As Alfred the Great defends his kingdom from Norse invaders, Uhtred -- born a Saxon but raised by Vikings -- seeks to claim his ancestral birthright.",
    "genres": [
    "drama",
    "history"
    ],
    "new": true,
    "favorite": false,
    "rating": 2,
    "users": [
    2
    ],
    "cast": [
    "Alexander Dreymon",
    "Emily Cox",
    "David Dawson"
    ]
    },
    {
    "id": "86769ed8-aa8d-461b-a6cd-5bab96197f921",
    "title": "The Lincoln Lawyer",
    "seasons": 1,
    "poster": "https://image.tmdb.org/t/p/original/mxwptTWe5Sy9spXBY5gWjpAP5Ob.jpg",
    "year": 2022,
    "description": "Sidelined after an accident, hotshot Los Angeles lawyer Mickey Haller restarts his career — and his trademark Lincoln — when he takes on a murder case.",
    "genres": [
    "drama",
    "crime"
    ],
    "new": true,
    "favorite": true,
    "rating": 5,
    "users": [
    2,
    3
    ],
    "cast": [
    "Manuel Garcia-Rulfo",
    "Neve Campbell",
    "Becki Newton"
    ]
    },
    {
    "id": "046a02ba-894b-4082-90a2-c0c62308c09f1",
    "title": "Suits",
    "seasons": 9,
    "poster": "https://image.tmdb.org/t/p/original/rN9psvt6KvUg0XnrimbIqR7zzoo.jpg",
    "year": 2019,
    "description": "When he impresses a big lawyer with his razor-sharp mind, a college dropout scores a coveted associate job, even though he has no legal credentials.",
    "genres": [
    "legal drama",
    "comedy"
    ],
    "new": false,
    "favorite": false,
    "rating": 4,
    "users": [
    2,
    3
    ],
    "cast": [
    "Gabriel Macht",
    "Rick Hoffman",
    "Patrick J. Adams"
    ]
    },
    {
    "id": "7058efde-03a1-4d4a-9ebd-6d2748fc145b1",
    "title": "Narcos",
    "seasons": 3,
    "poster": "https://static.posters.cz/image/750/poster/narcos-blow-business-i31851.jpg",
    "year": 2017,
    "description": "The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series.",
    "genres": [
    "thrillers",
    "crime"
    ],
    "new": false,
    "favorite": true,
    "rating": 3,
    "users": [
    1,
    4
    ],
    "cast": [
    "Wagner Mourat",
    "Pedro Pascal",
    "Boyd Holbrook"
    ]
    },
    {
    "id": "205a58dd-ceb3-482d-8c01-233e8bbf6d1c1",
    "title": "Bridgerton",
    "seasons": 2,
    "poster": "https://i.pinimg.com/236x/61/da/f1/61daf15dcb65dec5dfd16379c6147dbe.jpg",
    "year": 2022,
    "description": "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society. Inspired by Julia Quinn's bestselling novels.",
    "genres": [
    "regency romance",
    "period drama"
    ],
    "new": true,
    "favorite": true,
    "rating": 5,
    "users": [
    1,
    4
    ],
    "cast": [
    "Adjoa Andoh",
    "Julie Andrews",
    "Lorraine Ashbourne"
    ]
    },
    {
    "id": "7b3b3475-8061-4490-a411-6e8498138dae1",
    "title": "Emily in Paris",
    "seasons": 2,
    "poster": "https://img.goldposter.com/2022/01/emily-in-paris-season-2_poster_goldposter_com_16.jpg?x-oss-process=image/resize,m_fill,h_800,w_640/quality,q_80",
    "year": 2021,
    "description": "After landing her dream job in Paris, Chicago marketing exec Emily Cooper embraces her adventurous new life while juggling work, friends and romance.",
    "genres": [
    "comedy drama",
    "romantic comedy"
    ],
    "new": false,
    "favorite": false,
    "rating": 2,
    "users": [
    3
    ],
    "cast": [
    "Lily Collins",
    "Philippine Leroy-Beaulieu",
    "Ashley Park"
    ]
    },
    {
    "id": "2b06b3d3-dc47-4b61-b841-60683a218f3d1",
    "title": "Scream",
    "seasons": 2,
    "poster": "https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/1/scream-2-alternative-poster-christopher-ables.jpg",
    "year": 2016,
    "description": "Memories of a town's dark past are stirred when a group of teens become suspects, targets and victims of a killer who’s out for blood.",
    "genres": [
    "horror",
    "gory"
    ],
    "new": false,
    "favorite": true,
    "rating": 3,
    "users": [
    2,
    3
    ],
    "cast": [
    "RJ Cyler",
    "Jessica Sula",
    "Giorgia Whigham"
    ]
    },
    {
    "id": "c2f9bb22-a474-49ba-808b-6edcb12b21a11",
    "title": "Jurassic World Camp Cretaceous",
    "seasons": 4,
    "poster": "https://pictures.betaseries.com/fonds/poster/7477a3123cba250f6c7a4d4111a9924e.jpg",
    "year": 2021,
    "description": "Six teens invited to attend a state-of-the-art adventure camp on Isla Nublar must band together to survive when the dinosaurs break out of captivity.",
    "genres": [
    "cartoons",
    "action-adventure"
    ],
    "new": false,
    "favorite": true,
    "rating": 4,
    "users": [
    1,
    4
    ],
    "cast": [
    "Paul-Mikél Williams",
    "Jenna Ortega",
    "Sean Giambrone"
    ]
    },
    {
    "id": "e1284ab8-0d4b-4176-ab90-a044a659c2e01",
    "title": "The Vampire Diaries",
    "seasons": 8,
    "poster": "https://images.everyeye.it/img-cover/the-vampire-diaries-stagione-8-v2-34029.jpg",
    "year": 2016,
    "description": "Trapped in adolescent bodies, feuding vampire brothers Stefan and Damon vie for the affection of captivating teenager Elena.",
    "genres": [
    "fantasy",
    "dramatic"
    ],
    "new": false,
    "favorite": false,
    "rating": 3,
    "users": [
    2,
    4
    ],
    "cast": [
    "Nina Dobrev",
    "Paul Wesley",
    "Ian Somerhaldere"
    ]
    }
    ]

    export default mockSeriesList