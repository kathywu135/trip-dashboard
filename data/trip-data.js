window.tripData = {
  meta: {
    title: "2026 岡山・神戶行",
    subtitle: "Mobile Travel Dashboard",
    dateRange: "2026/06/27 - 2026/07/04",
    destinations: ["岡山", "神戶", "尾道", "廣島", "門司港", "高松"]
  },
  lodging: [
    {
      city: "岡山",
      nights: "6/27 - 7/2",
      name: "Via Inn 岡山",
      note: "入住資料請以 Booking / 飯店官方紀錄為準",
      address: "岡山県岡山市北区駅元町1-25",
      postalCode: "7000024",
      phone: "0862515489",
      mapsQuery: "Via Inn Okayama"
    },
    {
      city: "神戶",
      nights: "7/2 - 7/4",
      name: "remm plus Kobe Sannomiya",
      note: "回程日上午從三宮搭 Port Liner 去神戶機場",
      address: "兵庫県神戸市中央区加納町4-2-1",
      postalCode: "6500001",
      phone: "0785710606",
      mapsQuery: "remm plus Kobe Sannomiya"
    }
  ],
  backupDays: [
    {
      id: "himeji-half-day",
      title: "Day X-1｜姬路（半日高效率）",
      score: "6",
      summary: "岡山 -> 姬路 -> 城＋庭園 -> 午餐 -> 返回。半天完成、低體力、效率最高。",
      highlights: ["新幹線 20 分鐘直達", "姬路城", "好古園", "穴子飯午餐", "下午回岡山"],
      timeline: [
        { time: "08:40", activity: "岡山 -> 姬路", transport: "新幹線", note: "約 20 分鐘" },
        { time: "09:10 - 11:00", activity: "姬路城", transport: "步行", note: "建議早進場" },
        { time: "11:10 - 12:00", activity: "好古園", transport: "步行", note: "放鬆＋拍照" },
        { time: "12:10 - 13:00", activity: "午餐", transport: "步行", note: "穴子飯" },
        { time: "13:20", activity: "返回岡山", transport: "新幹線", note: "班次密集" },
        { time: "14:00", activity: "抵達", transport: "-", note: "結束" }
      ],
      dining: [
        {
          type: "午餐",
          name: "まねき食品 本店",
          note: "距離主要景點約 500m，主打穴子飯",
          mapsQuery: "まねき食品 姬路"
        }
      ],
      fit: ["文化＋建築", "補你行程缺口", "最穩、最不累"]
    },
    {
      id: "hiroshima-city-depth",
      title: "Day X-2｜廣島（城市深度＋完整體驗）",
      score: "5",
      summary: "岡山 -> 廣島 -> 市區深度 -> 返回。補你 Day 2 沒玩到的廣島本體。",
      highlights: ["新幹線 40 分鐘", "和平公園", "原爆圓頂館", "廣島城（可選）", "縮景園（可選）", "本通商店街＋晚餐"],
      timeline: [
        { time: "08:50", activity: "岡山 -> 廣島", transport: "新幹線", note: "約 40 分鐘" },
        { time: "09:40 - 11:30", activity: "和平公園＋原爆圓頂", transport: "路面電車", note: "必看" },
        { time: "11:40 - 12:30", activity: "午餐（廣島燒）", transport: "步行", note: "" },
        { time: "13:00 - 14:00", activity: "廣島城（選）", transport: "公車", note: "" },
        { time: "14:30 - 15:30", activity: "縮景園（選）", transport: "步行", note: "" },
        { time: "16:00 - 17:30", activity: "本通商店街", transport: "步行", note: "逛街" },
        { time: "18:00", activity: "返回岡山", transport: "新幹線", note: "" },
        { time: "18:40", activity: "抵達", transport: "-", note: "" }
      ],
      dining: [
        {
          type: "午餐",
          name: "麗ちゃん",
          note: "廣島燒",
          mapsQuery: "麗ちゃん 廣島"
        }
      ],
      fit: ["城市深度", "補 Day 2 沒玩到的廣島本體", "適合忽然想改成市區日"]
    },
    {
      id: "kure-naval-day",
      title: "Day X-3｜吳市（軍港＋戰艦體驗日）",
      score: "5",
      summary: "岡山 / 廣島 -> 吳市 -> 大和博物館＋潛艦 -> 港口散策 -> 返回。景點集中、移動少，屬於很有特色的替代方案。",
      highlights: ["軍事＋造船文化", "大和博物館", "海上自衛隊吳史料館", "港口散策", "景點高度集中"],
      routeOptions: [
        {
          title: "方案 A｜岡山出發（直衝型）",
          note: "岡山 -> 廣島（新幹線）-> 吳（JR 吳線），約 1 小時 20 至 30 分。適合專門去吳市的一天。"
        },
        {
          title: "方案 B｜廣島出發（順遊型）",
          note: "廣島 -> 吳（JR 吳線直達），約 40 分鐘。最輕鬆，也最適合和廣島市區併排。"
        }
      ],
      timeline: [
        { time: "08:40", activity: "岡山 -> 廣島", transport: "新幹線", note: "約 40 分鐘" },
        { time: "09:40", activity: "廣島 -> 吳", transport: "JR 吳線", note: "約 40 分鐘" },
        { time: "10:30 - 12:30", activity: "大和博物館", transport: "步行", note: "必看" },
        { time: "12:30 - 13:30", activity: "午餐", transport: "步行", note: "車站周邊" },
        { time: "13:30 - 14:30", activity: "海上自衛隊吳史料館", transport: "步行", note: "潛艦" },
        { time: "14:30 - 15:30", activity: "吳港散策", transport: "步行", note: "放鬆" },
        { time: "16:00", activity: "吳 -> 廣島", transport: "JR 吳線", note: "" },
        { time: "17:00", activity: "廣島 -> 岡山", transport: "新幹線", note: "" },
        { time: "17:40", activity: "抵達岡山", transport: "-", note: "" }
      ],
      dining: [
        {
          type: "午餐",
          name: "福住",
          note: "海軍咖哩，在地名物",
          mapsQuery: "福住 吳市"
        },
        {
          type: "午餐",
          name: "SEASIDE CAFE BEACON",
          note: "港口景觀＋西式餐，輕鬆吃",
          mapsQuery: "seaside cafe beacon kure"
        }
      ],
      fit: [
        "如果你想補一個和原本行程完全不同的主題日，這個很適合",
        "可取代廣島備案日，變成廣島＋吳市雙體驗",
        "也可在覺得宮島不夠時，補一個更有新鮮感的海港文化日"
      ],
      metrics: [
        { label: "體力", value: "⭐⭐" },
        { label: "交通", value: "⭐⭐⭐" },
        { label: "新鮮感", value: "⭐⭐⭐⭐⭐" },
        { label: "親子適合", value: "⭐⭐⭐⭐" }
      ]
    }
  ],
  itinerary: [
    {
      day: 1,
      date: "2026-06-27",
      title: "神戶入境日",
      area: "神戶 -> 岡山",
      theme: "入境、換 Pass、移動到岡山",
      summary: "神戶機場入境後前往三宮，兌換 JR Pass，再轉往新神戶搭新幹線去岡山。",
      highlights: ["Port Liner 進市區", "JR Pass 兌換", "新幹線前往岡山", "晚間可選倉敷點燈"],
      rainPlan: {
        summary: "如果 Day 1 下雨，重點改成順利入境、換票、入住，不特別加碼倉敷夜景。",
        items: ["三宮午餐以車站共構商場為主", "提早到岡山飯店休息", "晚上改逛岡山站周邊商場即可"]
      },
      attractions: [
        {
          id: "kobe-airport",
          name: "神戶機場",
          intro: "Port Liner 的終點站，落地後直接銜接市區，站內也有置物櫃與無障礙設施，對 Day 1 轉車很友善。",
          highlights: ["Port Liner P09", "有置物櫃", "轉乘三宮方便"],
          access: "地址：1 Kobe Kuko, Chuo-ku, Kobe-shi",
          mapsQuery: "Kobe Airport",
          source: {
            label: "神戶新交通官網",
            url: "https://www.knt-liner.co.jp/en/station/808/"
          }
        },
        {
          id: "sannomiya-station",
          name: "三之宮站",
          intro: "Day 1 最重要的中繼點，JR 官網列出中央口有綠色窗口，很適合在這裡處理 JR Pass 或其他票務。",
          highlights: ["中央口綠色窗口", "ICOCA 可用", "站內有置物櫃"],
          access: "地址：兵庫県神戸市中央区布引町4丁目1番-1",
          mapsQuery: "Sannomiya Station Kobe",
          source: {
            label: "JR 西日本 三ノ宮站",
            url: "https://eki.jr-odekake.net/top?id=0610143"
          }
        },
        {
          id: "shin-kobe-station",
          name: "新神戶站",
          intro: "銜接神戶市區與山陽新幹線的樞紐，從三宮過來後就能直接搭新幹線往岡山。",
          highlights: ["有綠色窗口", "可領 EX / 5489 車票", "新幹線轉乘站"],
          access: "地址：兵庫県神戸市中央区加納町1丁目3-1",
          mapsQuery: "Shin-Kobe Station",
          source: {
            label: "JR 西日本 新神戶站",
            url: "https://eki.jr-odekake.net/top?id=0610156"
          }
        },
        {
          id: "okayama-station",
          name: "岡山站",
          intro: "岡山的主要交通核心，綠色窗口與新幹線口服務都齊全，晚上回飯店和後續幾天出發都以這裡為中心。",
          highlights: ["新幹線轉乘方便", "綠色窗口齊全", "站區生活機能完整"],
          access: "新幹線乘換口綠色窗口 5:30 - 23:30。",
          mapsQuery: "Okayama Station",
          source: {
            label: "JR 西日本 岡山站",
            url: "https://eki.jr-odekake.net/top?id=0650608"
          }
        },
        {
          id: "kurashiki-bikan",
          name: "倉敷美觀地區",
          intro: "倉敷代表性的歷史街區，保留運河與舊町家氛圍，很適合 Day 1 晚上作為散步加碼行程。",
          highlights: ["運河景觀", "歷史街區", "夜晚散步氣氛好"],
          access: "如果抵達岡山後還有體力，可安排傍晚或夜間前往。",
          mapsQuery: "Kurashiki Bikan Historical Quarter",
          source: {
            label: "倉敷市官方介紹",
            url: "https://www.city.kurashiki.okayama.jp/6219.htm"
          }
        },
        {
          id: "via-inn-okayama",
          name: "Via Inn 岡山",
          intro: "官方主打 JR 岡山站直結，對晚到岡山的人很方便，早餐也有岡山在地特色菜色。",
          highlights: ["JR 岡山站直結", "移動方便", "早餐有岡山特色"],
          access: "地址：岡山県岡山市北区駅元町1-25",
          mapsQuery: "Via Inn Okayama",
          source: {
            label: "Via Inn 岡山官網",
            url: "https://www.viainn.com/okayama/"
          }
        }
      ],
      stay: {
        name: "Via Inn 岡山",
        note: "入住資料請以 Booking / 飯店官方紀錄為準",
        mapsQuery: "Via Inn Okayama"
      },
      timeline: [
        {
          time: "10:30",
          title: "抵達神戶機場",
          note: "JX0834 抵達，先出關與領行李。",
          mapsQuery: "Kobe Airport",
          attractionIds: ["kobe-airport"]
        },
        {
          time: "10:40 - 11:30",
          title: "神戶機場 -> 三之宮",
          note: "Port Liner 約 20 分鐘，車資 340 日圓。",
          mapsQuery: "Sannomiya Station Kobe",
          attractionIds: ["kobe-airport", "sannomiya-station"]
        },
        {
          time: "12:00 - 13:35",
          title: "兌換 JR Pass + 午餐 + 移動到新神戶",
          note: "JR 三之宮綠色窗口換票，之後搭地鐵到新神戶。",
          mapsQuery: "JR Sannomiya Station",
          attractionIds: ["sannomiya-station", "shin-kobe-station"]
        },
        {
          time: "14:15 - 15:10",
          title: "新神戶 -> 岡山",
          note: "可搭 Nozomi 29 或 Sakura 759，車程約 30 分鐘。",
          mapsQuery: "Shin-Kobe Station",
          attractionIds: ["shin-kobe-station", "okayama-station"]
        },
        {
          time: "傍晚",
          title: "岡山 Check-in 與晚餐",
          note: "飯店入住後可在岡山站周邊輕鬆晚餐，想走走可加倉敷夜景。",
          mapsQuery: "Okayama Station",
          attractionIds: ["okayama-station", "via-inn-okayama", "kurashiki-bikan"]
        }
      ],
      links: [
        { label: "新神戶 -> 岡山", url: "https://www.jorudan.co.jp/norikae/route/%E6%96%B0%E7%A5%9E%E6%88%B8_%E5%B2%A1%E5%B1%B1.html" },
        { label: "倉敷 -> 岡山", url: "https://www.jorudan.co.jp/norikae/route/%E5%80%89%E6%95%B7_%E5%B2%A1%E5%B1%B1.html" }
      ]
    },
    {
      day: 2,
      date: "2026-06-28",
      title: "宮島一日遊",
      area: "岡山 -> 廣島 -> 宮島",
      theme: "宮島散策、嚴島神社、廣島市區",
      summary: "從岡山搭新幹線到廣島，再轉 JR 與渡輪進宮島，下午回廣島市區散步與晚餐。",
      highlights: ["JR 渡輪看大鳥居", "宮島商店街", "嚴島神社", "和平公園 / 原爆圓頂館"],
      rainPlan: {
        summary: "如果宮島下雨，縮短戶外散步，把重點放在商店街、美食與提早回廣島站內活動。",
        items: ["宮島只保留商店街、嚴島神社主線", "取消大範圍海邊久留與長時間步行", "提早回廣島站逛 ekie、吃廣島燒"]
      },
      dining: [
        {
          area: "宮島區（中午）",
          items: [
            {
              type: "午餐",
              name: "牡蠣屋",
              note: "廣島牡蠣，熟食 OK",
              mapsQuery: "牡蠣屋 宮島"
            },
            {
              type: "午餐",
              name: "あなごめし うえの",
              note: "星鰻飯，超安全選擇",
              mapsQuery: "あなごめし うえの"
            },
            {
              type: "甜點",
              name: "紅葉堂",
              note: "現炸楓葉饅頭",
              mapsQuery: "紅葉堂 宮島"
            }
          ]
        },
        {
          area: "廣島市區（晚餐）",
          items: [
            {
              type: "晚餐",
              name: "麗ちゃん",
              note: "廣島燒名店，車站內",
              mapsQuery: "麗ちゃん 廣島"
            },
            {
              type: "甜點",
              name: "アンデルセン本店",
              note: "麵包＋甜點老店",
              mapsQuery: "アンデルセン 廣島"
            }
          ]
        }
      ],
      attractions: [
        {
          id: "hiroshima-station",
          name: "廣島站",
          intro: "廣島主要交通樞紐，新幹線必經站，也是 Day 2 去回程與市區轉乘的核心。",
          highlights: ["新幹線必經站", "交通樞紐", "回程方便"],
          access: "說明：廣島主要交通樞紐，新幹線必經站",
          mapsQuery: "Hiroshima Station",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Hiroshima+Station"
          }
        },
        {
          id: "miyajimaguchi-station",
          name: "宮島口",
          intro: "前往宮島的轉乘站，從廣島搭 JR 山陽本線到這裡，再步行接渡輪。",
          highlights: ["宮島轉乘站", "JR 山陽本線", "渡輪接續點"],
          access: "說明：前往宮島的轉乘站（JR山陽本線）",
          mapsQuery: "Miyajimaguchi Station",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Miyajimaguchi+Station"
          }
        },
        {
          id: "jr-miyajima-ferry",
          name: "JR Miyajima Ferry",
          intro: "從宮島口搭船約 10 分鐘抵達宮島，JR Pass 可搭，是 Day 2 的重要體驗路段。",
          highlights: ["航程約 10 分鐘", "JR Pass 可搭", "進宮島必經"],
          access: "說明：從宮島口搭船約10分鐘抵達宮島",
          mapsQuery: "JR Miyajima Ferry",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=JR+Miyajima+Ferry"
          }
        },
        {
          id: "miyajima-omotesando",
          name: "宮島商店街",
          intro: "宮島表參道商店街是必逛區域，牡蠣、楓葉饅頭和各種小吃都集中在這裡。",
          highlights: ["牡蠣美食", "楓葉饅頭", "表參道散步"],
          access: "說明：必逛美食街（牡蠣、楓葉饅頭）",
          mapsQuery: "Miyajima Omotesando Shopping Street",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Miyajima+Omotesando+Shopping+Street"
          }
        },
        {
          id: "itsukushima-shrine",
          name: "嚴島神社",
          intro: "世界遺產與海上神社，是宮島最重要的代表地標。",
          highlights: ["世界遺產", "海上神社", "宮島核心景點"],
          access: "說明：世界遺產、海上神社",
          mapsQuery: "Itsukushima Shrine",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Itsukushima+Shrine"
          }
        },
        {
          id: "floating-torii",
          name: "大鳥居",
          intro: "宮島最代表的海上鳥居景觀，渡輪上、神社旁與潮位不同時看法都不一樣。",
          highlights: ["海上鳥居", "宮島代表景觀", "拍照重點"],
          access: "說明：宮島最代表景觀（海上鳥居）",
          mapsQuery: "Itsukushima Floating Torii Gate",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Itsukushima+Floating+Torii+Gate"
          }
        },
        {
          id: "atomic-bomb-dome",
          name: "原爆圓頂館",
          intro: "廣島最重要的歷史遺跡之一，也是世界遺產，和和平紀念公園可一起安排步行參觀。",
          highlights: ["原爆遺跡", "世界遺產", "歷史景點"],
          access: "說明：原爆遺跡，世界遺產",
          mapsQuery: "Atomic Bomb Dome",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Atomic+Bomb+Dome"
          }
        },
        {
          id: "peace-memorial-park",
          name: "廣島和平紀念公園",
          intro: "紀念原爆的重要園區，和原爆圓頂館相連，適合安排傍晚散步。",
          highlights: ["紀念原爆", "與圓頂館相連", "步行散策適合"],
          access: "說明：紀念原爆的重要園區（與圓頂館相連）",
          mapsQuery: "Hiroshima Peace Memorial Park",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Hiroshima+Peace+Memorial+Park"
          }
        },
        {
          id: "hondori",
          name: "本通商店街",
          intro: "廣島最熱鬧的商店街之一，適合晚餐、藥妝與伴手禮採買。",
          highlights: ["市區逛街", "餐廳集中", "購物方便"],
          access: "說明：廣島最熱鬧商店街之一",
          mapsQuery: "Hondori Shopping Street Hiroshima",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Hondori+Shopping+Street+Hiroshima"
          }
        },
        {
          id: "ekie-hiroshima",
          name: "ekie 廣島站",
          intro: "廣島站內大型購物與美食商場，提早回站時很適合在這裡用餐與買伴手禮。",
          highlights: ["站內商場", "美食集中", "伴手禮方便"],
          access: "說明：廣島站內大型購物+美食商場",
          mapsQuery: "ekie Hiroshima",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=ekie+Hiroshima"
          }
        }
      ],
      timeline: [
        {
          time: "09:00 - 09:40",
          title: "岡山 -> 廣島",
          note: "21・22 番線，新幹線 Nozomi / Sakura 往博多方向。",
          mapsQuery: "Okayama Station",
          attractionIds: ["hiroshima-station"]
        },
        {
          time: "09:50 - 10:15",
          title: "廣島 -> 宮島口",
          note: "JR 山陽本線約 25 分鐘，往岩國方向。",
          mapsQuery: "Miyajimaguchi Station",
          attractionIds: ["hiroshima-station", "miyajimaguchi-station"]
        },
        {
          time: "10:20 - 10:30",
          title: "宮島口 -> 宮島",
          note: "搭 JR Miyajima Ferry，班距約 10 至 15 分鐘。",
          mapsQuery: "JR Miyajima Ferry",
          attractionIds: ["jr-miyajima-ferry"]
        },
        {
          time: "10:30 - 15:30",
          title: "宮島散策與午餐",
          note: "商店街 -> 嚴島神社 -> 大鳥居，另有 100 日圓訪問稅。",
          mapsQuery: "Itsukushima Shrine",
          attractionIds: ["miyajima-omotesando", "itsukushima-shrine", "floating-torii"]
        },
        {
          time: "15:30 - 16:30",
          title: "回廣島站",
          note: "JR Ferry 加 JR 山陽本線，約 40 分鐘。",
          mapsQuery: "Hiroshima Station",
          attractionIds: ["jr-miyajima-ferry", "miyajimaguchi-station", "hiroshima-station"]
        },
        {
          time: "16:40 - 19:20",
          title: "廣島市區散步與晚餐",
          note: "可去和平公園、原爆圓頂館、本通商店街，晚餐吃廣島燒。",
          mapsQuery: "Hiroshima Peace Memorial Park",
          attractionIds: ["atomic-bomb-dome", "peace-memorial-park", "hondori", "ekie-hiroshima"]
        },
        {
          time: "19:30 - 20:10",
          title: "廣島 -> 岡山",
          note: "搭 Nozomi / Sakura 回岡山。",
          mapsQuery: "Hiroshima Station",
          attractionIds: ["hiroshima-station"]
        }
      ],
      links: [
        { label: "岡山 -> 廣島", url: "https://www.jorudan.co.jp/norikae/route/%E5%B2%A1%E5%B1%B1_%E5%BA%83%E5%B3%B6.html" },
        { label: "廣島 -> 宮島口", url: "https://www.jorudan.co.jp/norikae/route/%E5%BA%83%E5%B3%B6_%E5%AE%AE%E5%B3%B6%E5%8F%A3.html" },
        { label: "宮島口 -> 廣島", url: "https://www.jorudan.co.jp/norikae/route/%E5%AE%AE%E5%B3%B6%E5%8F%A3_%E5%BA%83%E5%B3%B6.html" }
      ]
    },
    {
      day: 3,
      date: "2026-06-29",
      title: "尾道散策日",
      area: "岡山 -> 尾道",
      theme: "纜車上山、千光寺、慢慢散步下山",
      summary: "從岡山搭 JR 直達尾道，搭纜車上千光寺，走文學小路、貓之細道，再吃尾道拉麵回岡山。",
      highlights: ["千光寺纜車", "千光寺展望台", "文學小路", "貓之細道", "尾道拉麵"],
      rainPlan: {
        summary: "尾道遇雨時，把山坡散步量減到最低，保留纜車、單點觀景與商店街用餐。",
        items: ["文學小路與長時間下坡步行改為縮短版", "若雨勢大，直接停留商店街與咖啡店", "拉麵和甜點行程保留，提早回岡山"]
      },
      dining: [
        {
          area: "尾道",
          items: [
            {
              type: "午餐",
              name: "朱華園",
              note: "尾道拉麵代表",
              mapsQuery: "朱華園 尾道"
            },
            {
              type: "午餐",
              name: "つたふじ",
              note: "在地老店，備案",
              mapsQuery: "つたふじ 尾道"
            },
            {
              type: "甜點",
              name: "からさわ",
              note: "超人氣冰淇淋",
              mapsQuery: "からさわ 尾道"
            }
          ]
        }
      ],
      attractions: [
        {
          id: "senkoji-ropeway",
          name: "千光寺山纜車",
          intro: "上尾道山區最輕鬆的方式，幾分鐘內就能抵達山上視野區，適合 Day 3 先上後下的散步順序。",
          highlights: ["上山最快", "先上後下最順", "俯瞰尾道港景"],
          access: "說明：前往千光寺山最省力的方式。",
          mapsQuery: "Senkoji Ropeway",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Senkoji+Ropeway"
          }
        },
        {
          id: "senkoji-temple",
          name: "千光寺",
          intro: "尾道最具代表性的寺院之一，紅色建築與山城坡道景色都很有辨識度。",
          highlights: ["尾道代表寺院", "山城景色", "散步核心點"],
          access: "說明：尾道經典景點之一。",
          mapsQuery: "Senkoji Temple Onomichi",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Senkoji+Temple+Onomichi"
          }
        },
        {
          id: "senkoji-observatory",
          name: "千光寺展望台",
          intro: "看尾道水道與城市屋頂最有代表性的視角，通常是 Day 3 拍照重點。",
          highlights: ["尾道全景", "拍照重點", "山上海景視野"],
          access: "說明：千光寺山上最佳觀景點之一。",
          mapsQuery: "Senkoji Observatory Onomichi",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Senkoji+Observatory+Onomichi"
          }
        },
        {
          id: "literary-path",
          name: "文學小路",
          intro: "從山上慢慢往下走的尾道經典步道，沿途安靜、有坡度，也最能感受尾道山城氣氛。",
          highlights: ["散步路線", "尾道山城氛圍", "適合慢慢走"],
          access: "說明：尾道經典散步路線之一。",
          mapsQuery: "Onomichi Literary Path",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Onomichi+Literary+Path"
          }
        },
        {
          id: "cat-alley",
          name: "貓之細道",
          intro: "尾道很有個性的巷弄景點，充滿貓元素與小店氣氛，是 Day 3 最有記憶點的散步段落之一。",
          highlights: ["貓元素", "巷弄散步", "文青氛圍"],
          access: "說明：尾道人氣巷弄景點。",
          mapsQuery: "Cat Alley Onomichi",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Cat+Alley+Onomichi"
          }
        },
        {
          id: "tenneiji",
          name: "天寧寺",
          intro: "在尾道散步路線上常一起安排的寺院景點，和貓之細道動線相近。",
          highlights: ["寺院景點", "與貓之細道順路", "可搭配散步"],
          access: "說明：尾道散步路線上的寺院景點。",
          mapsQuery: "Tenneiji Temple Onomichi",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Tenneiji+Temple+Onomichi"
          }
        },
        {
          id: "onomichi-shopping-street",
          name: "尾道商店街",
          intro: "從車站到山麓、再回到市區都會經過的生活商店街，適合補飲料、買小點心與休息。",
          highlights: ["車站周邊動線", "生活商店街", "適合休息補給"],
          access: "說明：尾道站前到景點區的重要生活街道。",
          mapsQuery: "Onomichi Shopping Street",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Onomichi+Shopping+Street"
          }
        },
        {
          id: "shukaen-ramen",
          name: "尾道拉麵店（朱華園）",
          intro: "尾道拉麵是 Day 3 的收尾重點，朱華園是你目前列出的代表店名，可作為地圖定位點。",
          highlights: ["尾道拉麵", "在地代表味", "午餐 / 收尾都適合"],
          access: "說明：尾道拉麵代表店定位點。",
          mapsQuery: "Shukaen Onomichi Ramen",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Shukaen+Onomichi+Ramen"
          }
        }
      ],
      timeline: [
        {
          time: "09:21 - 10:36",
          title: "岡山 -> 尾道",
          note: "JR 山陽本線直達，約 1 小時 15 分。",
          mapsQuery: "Onomichi Station",
          attractionIds: ["onomichi-shopping-street"]
        },
        {
          time: "10:35 - 11:00",
          title: "尾道站 -> 纜車站",
          note: "經商店街步行約 15 分鐘。",
          mapsQuery: "Senkoji Ropeway",
          attractionIds: ["onomichi-shopping-street", "senkoji-ropeway"]
        },
        {
          time: "11:00 - 11:10",
          title: "搭纜車上山",
          note: "千光寺山纜車，班距約 10 至 15 分鐘。",
          mapsQuery: "Senkoji Ropeway",
          attractionIds: ["senkoji-ropeway"]
        },
        {
          time: "11:10 - 14:00",
          title: "千光寺與下山散策",
          note: "先看展望台，再沿文學小路慢慢走下來。",
          mapsQuery: "Senkoji Observatory Onomichi",
          attractionIds: ["senkoji-temple", "senkoji-observatory", "literary-path"]
        },
        {
          time: "14:00 - 16:00",
          title: "貓之細道 + 天寧寺 + 午餐",
          note: "可安排尾道拉麵或山頂景觀輕食。",
          mapsQuery: "Cat Alley Onomichi",
          attractionIds: ["cat-alley", "tenneiji", "shukaen-ramen"]
        },
        {
          time: "17:06 - 18:08",
          title: "尾道 -> 岡山",
          note: "JR 山陽本線直達回岡山。",
          attractionIds: ["onomichi-shopping-street"]
        }
      ],
      links: [
        { label: "岡山 -> 尾道", url: "https://japantravel.navitime.com/en/area/jp/depArrTimeList/00005353/00007740/00000070?direction=down&utm_source=chatgpt.com" }
      ]
    },
    {
      day: 4,
      date: "2026-06-30",
      title: "門司港一日遊",
      area: "岡山 -> 小倉 -> 門司港",
      theme: "港區散步、燒咖哩、小倉晚餐",
      summary: "早上從岡山搭 Nozomi 到小倉，再轉 JR 去門司港，白天散策，傍晚回小倉吃晚餐後返岡山。",
      highlights: ["門司港車站", "海峽廣場", "藍翼橋", "燒咖哩", "小倉晚餐"],
      rainPlan: {
        summary: "門司港下雨時，把重點放在懷舊區、商場與燒咖哩，取消太外圍的港邊步行。",
        items: ["保留海峽廣場、九州鐵道紀念館、燒咖哩", "關門隧道改成視雨勢決定", "提早回小倉逛魚町銀天街"]
      },
      dining: [
        {
          area: "門司港（午餐）",
          items: [
            {
              type: "午餐",
              name: "BEAR FRUITS",
              note: "燒咖哩第一名",
              mapsQuery: "BEAR FRUITS"
            },
            {
              type: "午餐",
              name: "伽哩本舖",
              note: "海景燒咖哩",
              mapsQuery: "伽哩本舖 門司港"
            },
            {
              type: "甜點",
              name: "門司港茶寮",
              note: "日式甜點＋休息",
              mapsQuery: "門司港茶寮"
            }
          ]
        },
        {
          area: "小倉（晚餐）",
          items: [
            {
              type: "晚餐",
              name: "鉄なべ",
              note: "鐵鍋餃子，小孩愛",
              mapsQuery: "鉄なべ 小倉"
            }
          ]
        }
      ],
      attractions: [
        {
          id: "mojiko-retro",
          name: "門司港懷舊區",
          intro: "門司港最核心的散步區域，整體氛圍就是 Day 4 想要的港邊復古感。",
          highlights: ["港區散步", "懷舊建築", "Day 4 主景區"],
          access: "說明：門司港最重要的懷舊港區範圍。",
          mapsQuery: "Mojiko Retro",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Mojiko+Retro" }
        },
        {
          id: "kaikyo-plaza",
          name: "海峽廣場",
          intro: "門司港懷舊區的商場與散步節點，適合安排休息、買點小東西或順路看海。",
          highlights: ["港邊商場", "休息補給", "順路散步點"],
          access: "說明：門司港港區主要商場與散步節點。",
          mapsQuery: "Kaikyo Plaza Mojiko",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Kaikyo+Plaza+Mojiko" }
        },
        {
          id: "blue-wing-moji",
          name: "藍翼橋",
          intro: "門司港很有代表性的橋景地標，拍照辨識度高，也很符合這天的港區散步節奏。",
          highlights: ["橋景地標", "拍照重點", "港區特色"],
          access: "說明：藍翼門司，門司港代表性橋景。",
          mapsQuery: "Blue Wing Moji",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Blue+Wing+Moji" }
        },
        {
          id: "railway-history-museum",
          name: "九州鐵道紀念館",
          intro: "很適合放進 Day 4 路線中的特色點，和門司港的交通歷史氛圍也很搭。",
          highlights: ["鐵道主題", "歷史感", "順路可逛"],
          access: "說明：門司港代表性鐵道主題景點。",
          mapsQuery: "Kyushu Railway History Museum",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Kyushu+Railway+History+Museum" }
        },
        {
          id: "kanmon-tunnel",
          name: "關門隧道（人行）",
          intro: "如果體力夠，這是 Day 4 很有話題感的加碼點，和一般港區散步不一樣。",
          highlights: ["人行隧道", "特色體驗", "加碼景點"],
          access: "說明：關門海峽的人行隧道體驗點。",
          mapsQuery: "Kanmon Tunnel Pedestrian",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Kanmon+Tunnel+Pedestrian" }
        },
        {
          id: "bear-fruits",
          name: "燒咖哩店（BEAR FRUITS）",
          intro: "門司港最有代表性的燒咖哩名店之一，很適合當 Day 4 午餐主角。",
          highlights: ["燒咖哩名店", "午餐重點", "門司港代表味"],
          access: "說明：門司港人氣燒咖哩店。",
          mapsQuery: "Bear Fruits Mojiko",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Bear+Fruits+Mojiko" }
        },
        {
          id: "uomachi-gintengai",
          name: "小倉晚餐區（魚町銀天街）",
          intro: "回到小倉後很適合安排晚餐與簡單逛街的區域，作為 Day 4 收尾很自然。",
          highlights: ["晚餐區", "商店街", "小倉市區"],
          access: "說明：小倉市區主要晚餐與逛街區。",
          mapsQuery: "Uomachi Gintengai Kokura",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Uomachi+Gintengai+Kokura" }
        }
      ],
      timeline: [
        {
          time: "09:10 - 10:35",
          title: "岡山 -> 小倉",
          note: "Nozomi 1 或同時段班次，車程約 1 小時 25 分。",
          mapsQuery: "Kokura Station"
        },
        {
          time: "10:45 - 11:05",
          title: "小倉 -> 門司港",
          note: "JR 鹿兒島本線約 15 分鐘。",
          mapsQuery: "Mojiko Station",
          attractionIds: ["mojiko-retro"]
        },
        {
          time: "11:05 - 15:30",
          title: "門司港散策與午餐",
          note: "車站 -> 海峽廣場 -> 藍翼橋 -> 燒咖哩 -> 九州鐵道紀念館。",
          mapsQuery: "Mojiko Retro",
          attractionIds: ["mojiko-retro", "kaikyo-plaza", "blue-wing-moji", "bear-fruits", "railway-history-museum", "kanmon-tunnel"]
        },
        {
          time: "15:30 - 16:00",
          title: "門司港 -> 小倉",
          note: "JR 班次密集，約 10 至 15 分鐘一班。",
          mapsQuery: "Kokura Station"
        },
        {
          time: "17:30 - 19:00",
          title: "小倉晚餐",
          note: "可吃鐵鍋餃子或拉麵街。",
          mapsQuery: "Uomachi Gintengai Kokura",
          attractionIds: ["uomachi-gintengai"]
        },
        {
          time: "17:36 - 19:36",
          title: "小倉 -> 岡山",
          note: "Nozomi 班次很多，可依晚餐時間彈性搭乘。"
        }
      ]
    },
    {
      day: 5,
      date: "2026-07-01",
      title: "高松療癒日",
      area: "岡山 -> 高松",
      theme: "跨海看海、庭園散步、港邊咖啡",
      summary: "先去吉備津神社，再搭 Marine Liner 到高松，逛栗林公園、商店街與高松港。",
      highlights: ["吉備津神社", "Marine Liner 展望席", "栗林公園", "北濱 Alley", "Symbol Tower"],
      rainPlan: {
        summary: "高松下雨時，主軸改成庭園短線、商店街和港區室內點，不勉強走港邊太久。",
        items: ["栗林公園縮成重點區域加茶屋休息", "北濱 Alley 與 umie 保留", "紅燈塔改為不去，改待 Symbol Tower 與商店街"]
      },
      dining: [
        {
          area: "高松",
          items: [
            {
              type: "午餐",
              name: "めりけんや",
              note: "讚岐烏龍麵，快速",
              mapsQuery: "めりけんや"
            },
            {
              type: "甜點",
              name: "umie",
              note: "海景咖啡，必去",
              mapsQuery: "umie 高松"
            },
            {
              type: "晚餐",
              name: "一鶴",
              note: "骨付雞，在地名店",
              mapsQuery: "一鶴 高松"
            }
          ]
        }
      ],
      attractions: [
        {
          id: "kibitsu-shrine",
          name: "吉備津神社",
          intro: "岡山代表性神社，以長長的木造迴廊最有辨識度，很適合當作高松日前半段的暖身行程。",
          highlights: ["木造大迴廊", "岡山代表神社", "上午散步適合"],
          access: "說明：岡山經典神社景點。",
          mapsQuery: "Kibitsu Shrine",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Kibitsu+Shrine" }
        },
        {
          id: "ritsurin-garden",
          name: "栗林公園",
          intro: "高松最知名的日式庭園，也是 Day 5 的主景點，適合慢慢走、拍湖景和樹景。",
          highlights: ["日式庭園", "高松代表景點", "慢活散步"],
          access: "說明：高松最經典的庭園景點。",
          mapsQuery: "Ritsurin Garden",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Ritsurin+Garden" }
        },
        {
          id: "ritsurin-boat",
          name: "南湖周遊船",
          intro: "在栗林公園裡最有儀式感的體驗之一，從水面看庭園會和步行視角完全不同。",
          highlights: ["湖上視角", "庭園體驗", "適合慢慢玩"],
          access: "說明：栗林公園內的經典體驗。",
          mapsQuery: "Ritsurin Garden Boat",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Ritsurin+Garden+Boat" }
        },
        {
          id: "kikugetsu-tei",
          name: "掬月亭",
          intro: "栗林公園內著名茶屋，適合坐下來喝茶、看庭園，讓 Day 5 節奏真正慢下來。",
          highlights: ["茶屋體驗", "庭園視角", "適合休息"],
          access: "說明：栗林公園內的代表茶屋。",
          mapsQuery: "Kikugetsu-tei Ritsurin Garden",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Kikugetsu-tei+Ritsurin+Garden" }
        },
        {
          id: "kitahama-alley",
          name: "北濱 Alley",
          intro: "高松港邊的舊倉庫改造區，氣氛很適合下午安排咖啡和散步。",
          highlights: ["舊倉庫改造", "港邊散步", "文青氣氛"],
          access: "說明：高松港區人氣文創聚落。",
          mapsQuery: "Kitahama Alley Takamatsu",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Kitahama+Alley+Takamatsu" }
        },
        {
          id: "umie",
          name: "umie",
          intro: "高松港區常被安排的咖啡休息點，適合在 Day 5 當下午的放空時間。",
          highlights: ["咖啡休息", "港區氣氛", "下午放空"],
          access: "說明：高松港區商場 / 咖啡定位點。",
          mapsQuery: "Takamatsu Symbol Tower Maritime Plaza",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Takamatsu+Symbol+Tower+Maritime+Plaza" }
        },
        {
          id: "marugamemachi",
          name: "丸龜町商店街",
          intro: "高松市區主要商店街之一，適合安排點心、伴手禮與短暫逛街。",
          highlights: ["商店街", "高松市區", "逛街採買"],
          access: "說明：高松市區主要商店街。",
          mapsQuery: "Marugamemachi Shopping Street Takamatsu",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Marugamemachi+Shopping+Street+Takamatsu" }
        },
        {
          id: "symbol-tower",
          name: "Symbol Tower",
          intro: "高松代表地標之一，高樓看港景和夕陽是 Day 5 很適合的收尾。",
          highlights: ["高松地標", "看港景", "夕陽視角"],
          access: "說明：高松代表高樓景點。",
          mapsQuery: "Takamatsu Symbol Tower",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Takamatsu+Symbol+Tower" }
        },
        {
          id: "takamatsu-port",
          name: "高松港",
          intro: "瀨戶內海門戶，Day 5 港邊散步和看海的核心地點。",
          highlights: ["港邊散步", "瀨戶內海景", "高松門戶"],
          access: "說明：高松港區主要散步地帶。",
          mapsQuery: "Takamatsu Port",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Takamatsu+Port" }
        },
        {
          id: "red-lighthouse",
          name: "紅燈塔",
          intro: "高松港邊經典拍照點，適合作為 Day 5 走到海邊的最後一站。",
          highlights: ["港邊地標", "拍照點", "海景延伸散步"],
          access: "說明：高松港燈塔景點。",
          mapsQuery: "Takamatsu Port Red Lighthouse",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Takamatsu+Port+Red+Lighthouse" }
        }
      ],
      timeline: [
        {
          time: "08:30 - 10:20",
          title: "吉備津神社",
          note: "JR 吉備線，吉備津站下車，可看 360 公尺木造迴廊。",
          mapsQuery: "Kibitsu Shrine",
          attractionIds: ["kibitsu-shrine"]
        },
        {
          time: "10:40 - 11:35",
          title: "岡山 -> 高松",
          note: "Marine Liner，推薦 1 號車 2 樓看海。",
          mapsQuery: "Takamatsu Station"
        },
        {
          time: "11:45 - 13:00",
          title: "高松站午餐",
          note: "可吃讚岐烏龍麵，推薦めりけんや。",
          mapsQuery: "Merikenya Takamatsu Station",
          attractionIds: ["marugamemachi"]
        },
        {
          time: "13:20 - 15:30",
          title: "栗林公園",
          note: "可安排南湖周遊船與掬月亭喝茶。",
          mapsQuery: "Ritsurin Garden",
          attractionIds: ["ritsurin-garden", "ritsurin-boat", "kikugetsu-tei"]
        },
        {
          time: "15:45 - 17:30",
          title: "丸龜町商店街 / 北濱 Alley",
          note: "下午茶、文青倉庫、港邊咖啡。",
          mapsQuery: "Kitahama Alley Takamatsu",
          attractionIds: ["marugamemachi", "kitahama-alley", "umie"]
        },
        {
          time: "17:45 - 20:05",
          title: "高松港散步後回岡山",
          note: "可上 Symbol Tower 看夕陽，再搭 Marine Liner 回岡山。",
          mapsQuery: "Takamatsu Symbol Tower",
          attractionIds: ["symbol-tower", "takamatsu-port", "red-lighthouse"]
        }
      ]
    },
    {
      day: 6,
      date: "2026-07-02",
      title: "神戶移動日",
      area: "岡山 -> 新神戶 -> 三宮",
      theme: "入住神戶、午餐、舞子與南京町",
      summary: "早上從岡山移動回神戶，寄放行李後在三宮午餐，下午安排舞子、新長田與南京町。",
      highlights: ["三宮午餐", "舞子海上步道", "新長田鐵人 28 號", "南京町"],
      rainPlan: {
        summary: "神戶 Day 6 遇雨時，減少海邊停留，把重點改成市區商店街、南京町與室內用餐。",
        items: ["舞子公園和海上 promenade 視雨勢取消", "保留三宮、元町、南京町室內外混合行程", "提早回飯店周邊活動也很合理"]
      },
      dining: [
        {
          area: "神戶（三宮＋南京町）",
          items: [
            {
              type: "午餐",
              name: "Kobe Beef WASSIA",
              note: "建議點：樓梯盛（2人份）、冷麵 ×1、拌飯 ×1（視情況加點）、烤蔬菜 ×1、上肩肉 ×1、特上肋條 ×1",
              mapsQuery: "Kobe Beef WASSIA"
            },
            {
              type: "晚餐",
              name: "老祥記",
              note: "豬肉包",
              mapsQuery: "老祥記"
            },
            {
              type: "甜點",
              name: "観音屋",
              note: "起司蛋糕",
              mapsQuery: "観音屋"
            }
          ]
        }
      ],
      attractions: [
        {
          id: "sannomiya-center-street",
          name: "三宮商店街",
          intro: "神戶市區最順手的散步與用餐區之一，從車站到飯店周邊都很方便。",
          highlights: ["市區散步", "餐廳多", "交通方便"],
          access: "說明：神戶三宮主要商店街。",
          mapsQuery: "Sannomiya Center Street",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Sannomiya+Center+Street" }
        },
        {
          id: "kobe-beef-wassia",
          name: "Kobe Beef WASSIA",
          intro: "Day 6 午餐核心點，適合把神戶牛安排在回到神戶的第一餐。",
          highlights: ["神戶牛", "Day 6 午餐", "三宮地區"],
          access: "說明：Day 6 已預定的午餐點。",
          mapsQuery: "Kobe Beef Wassia",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Kobe+Beef+Wassia" }
        },
        {
          id: "maiko-park",
          name: "舞子公園",
          intro: "靠近明石海峽大橋的海邊公園，適合看橋、散步和吹海風。",
          highlights: ["海邊散步", "看橋景", "節奏輕鬆"],
          access: "說明：明石海峽大橋周邊散步點。",
          mapsQuery: "Maiko Park",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Maiko+Park" }
        },
        {
          id: "akashi-kaikyo-bridge",
          name: "明石海峽大橋",
          intro: "世界級吊橋景觀，是 Day 6 下午最有視覺記憶點的地標。",
          highlights: ["世界級吊橋", "神戶代表海景", "視覺震撼"],
          access: "說明：舞子區域最重要地標。",
          mapsQuery: "Akashi Kaikyo Bridge",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Akashi+Kaikyo+Bridge" }
        },
        {
          id: "maiko-promenade",
          name: "舞子海上 promenade",
          intro: "可以近距離看橋體與海面的步道，是理解明石海峽大橋尺度感最直接的點。",
          highlights: ["橋體近距離", "海上步道", "透明地板體驗"],
          access: "說明：舞子海上步道體驗點。",
          mapsQuery: "Maiko Marine Promenade",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Maiko+Marine+Promenade" }
        },
        {
          id: "tetsujin-28",
          name: "新長田鐵人28號",
          intro: "非常好拍的巨型地標，停留時間不需要很長，但很有記憶點。",
          highlights: ["巨大地標", "快速拍照", "特色強"],
          access: "說明：新長田代表地標。",
          mapsQuery: "Tetsujin 28 Statue Kobe",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Tetsujin+28+Statue+Kobe" }
        },
        {
          id: "motomachi-shopping-street",
          name: "元町商店街",
          intro: "從元町到南京町一帶很適合一路邊走邊吃再慢慢回三宮。",
          highlights: ["商店街", "步行友善", "接南京町順路"],
          access: "說明：神戶元町主要商店街。",
          mapsQuery: "Motomachi Shopping Street Kobe",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Motomachi+Shopping+Street+Kobe" }
        },
        {
          id: "nankinmachi",
          name: "南京町",
          intro: "神戶最著名的中華街，適合排在傍晚一路吃小點收尾。",
          highlights: ["中華街", "邊走邊吃", "神戶人氣區"],
          access: "說明：神戶代表性中華街。",
          mapsQuery: "Nankinmachi Chinatown Kobe",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Nankinmachi+Chinatown+Kobe" }
        },
        {
          id: "remm-plus-kobe",
          name: "remm plus Kobe Sannomiya",
          intro: "Day 6 回到神戶後的住宿點，位置就在三宮核心區，之後晚餐與 Day 8 回機場都方便。",
          highlights: ["三宮核心位置", "回機場方便", "神戶住宿點"],
          access: "說明：7/2 到 7/4 的住宿飯店。",
          mapsQuery: "remm plus Kobe Sannomiya",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=remm+plus+Kobe+Sannomiya" }
        }
      ],
      stay: {
        name: "神戶三宮飯店",
        note: "目前先以 remm plus Kobe Sannomiya 為主，若要換飯店名稱可再改。",
        mapsQuery: "remm plus Kobe Sannomiya"
      },
      timeline: [
        {
          time: "09:30 - 10:10",
          title: "岡山 -> 新神戶",
          note: "Nozomi / Sakura 約 32 分鐘。",
          mapsQuery: "Shin-Kobe Station"
        },
        {
          time: "10:20 - 10:40",
          title: "新神戶 -> 三宮飯店寄放行李",
          note: "搭地鐵西神・山手線一站抵達。",
          mapsQuery: "remm plus Kobe Sannomiya",
          attractionIds: ["remm-plus-kobe"]
        },
        {
          time: "11:00 - 13:00",
          title: "三宮商店街與午餐",
          note: "可吃神戶牛或洋食，頁面有 Kobe Beef WASSIA 預定。",
          mapsQuery: "Kobe Beef Wassia",
          attractionIds: ["sannomiya-center-street", "kobe-beef-wassia"]
        },
        {
          time: "13:30 - 15:30",
          title: "舞子站與明石海峽大橋",
          note: "可進海上 promenade，看透明地板與橋體結構。",
          mapsQuery: "Maiko Marine Promenade",
          attractionIds: ["maiko-park", "akashi-kaikyo-bridge", "maiko-promenade"]
        },
        {
          time: "15:50 - 16:40",
          title: "新長田鐵人 28 號",
          note: "車站步行約 5 分鐘，可快速拍照。",
          mapsQuery: "Tetsujin 28 Statue Kobe",
          attractionIds: ["tetsujin-28"]
        },
        {
          time: "17:00 - 19:30",
          title: "元町 / 南京町 / 回飯店",
          note: "南京町邊走邊吃，再沿商店街回三宮。",
          mapsQuery: "Nankinmachi Chinatown Kobe",
          attractionIds: ["motomachi-shopping-street", "nankinmachi", "remm-plus-kobe"]
        }
      ]
    },
    {
      day: 7,
      date: "2026-07-03",
      title: "有馬溫泉放鬆日",
      area: "三宮 <-> 有馬溫泉",
      theme: "慢走、泡湯、甜點、早點回市區",
      summary: "這天主打完全放鬆，建議從三宮直達有馬溫泉，慢慢逛老街、泡金湯銀湯。",
      highlights: ["高速巴士直達", "溫泉街散步", "金之湯 / 銀之湯", "炭酸煎餅", "甜點收尾"],
      rainPlan: {
        summary: "有馬溫泉其實很適合雨天，重點只是把老街散步縮短，改成泡湯、午餐和甜點節奏。",
        items: ["金之湯 / 銀之湯照常保留", "老街改成短距離採買", "多留時間在午餐店、甜點店與湯屋"]
      },
      dining: [
        {
          area: "有馬溫泉",
          items: [
            {
              type: "午餐",
              name: "くつろぎ家",
              note: "釜飯，適合家庭",
              mapsQuery: "くつろぎ家"
            },
            {
              type: "小吃",
              name: "竹中肉店",
              note: "神戶牛可樂餅",
              mapsQuery: "竹中肉店"
            },
            {
              type: "甜點",
              name: "arima gelateria",
              note: "義式冰淇淋",
              mapsQuery: "arima gelateria"
            }
          ]
        }
      ],
      attractions: [
        {
          id: "arima-onsen",
          name: "有馬溫泉",
          intro: "關西最知名的溫泉地之一，Day 7 主打的就是放慢步調，在老街與湯屋之間慢慢走。",
          highlights: ["關西代表溫泉", "節奏放鬆", "老街氛圍濃"],
          access: "說明：Day 7 核心目的地。",
          mapsQuery: "Arima Onsen",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Arima+Onsen" }
        },
        {
          id: "arima-street",
          name: "溫泉老街",
          intro: "Day 7 最重要的散步區域，吃點小東西、逛伴手禮、感受溫泉小鎮氣氛都在這裡。",
          highlights: ["老街散步", "伴手禮", "邊走邊吃"],
          access: "說明：有馬溫泉主要老街區域。",
          mapsQuery: "Arima Onsen Street",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Arima+Onsen+Street" }
        },
        {
          id: "kin-no-yu",
          name: "金之湯",
          intro: "有馬最具代表性的湯屋之一，鐵質泉色澤很有記憶點。",
          highlights: ["有馬代表湯屋", "鐵質泉", "Day 7 核心體驗"],
          access: "說明：有馬最具代表性的泡湯點。",
          mapsQuery: "Kin no Yu Arima",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Kin+no+Yu+Arima" }
        },
        {
          id: "gin-no-yu",
          name: "銀之湯",
          intro: "和金之湯相比更安靜一點，適合想要放鬆感更強的泡湯安排。",
          highlights: ["較安靜", "可和金之湯搭配", "放鬆感強"],
          access: "說明：有馬另一個代表湯屋。",
          mapsQuery: "Gin no Yu Arima",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Gin+no+Yu+Arima" }
        },
        {
          id: "mitsumori-senbei",
          name: "炭酸煎餅店（三津森本舖）",
          intro: "有馬很經典的伴手禮店，Day 7 很適合順手買炭酸煎餅回去。",
          highlights: ["經典伴手禮", "炭酸煎餅", "有馬老店感"],
          access: "說明：有馬炭酸煎餅代表店。",
          mapsQuery: "Tansan Senbei Mitsumori Arima",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Tansan+Senbei+Mitsumori+Arima" }
        },
        {
          id: "takenaka-meat-shop",
          name: "神戶牛可樂餅店（竹中肉店）",
          intro: "很適合排進 Day 7 老街散步的邊走邊吃點，補一點神戶牛元素。",
          highlights: ["神戶牛可樂餅", "邊走邊吃", "老街人氣點"],
          access: "說明：有馬人氣小吃店。",
          mapsQuery: "Takenaka Meat Shop Arima",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Takenaka+Meat+Shop+Arima" }
        },
        {
          id: "stagione-gelato",
          name: "Gelato 店（ARIMA GELATERIA Stagione）",
          intro: "Day 7 很適合拿來做甜點收尾的一站，讓整天節奏維持在舒服的狀態。",
          highlights: ["甜點收尾", "Gelato", "休息感強"],
          access: "說明：有馬溫泉區甜點定位點。",
          mapsQuery: "Arima Gelateria Stagione",
          source: { label: "Google Maps", url: "https://maps.google.com/?q=Arima+Gelateria+Stagione" }
        }
      ],
      timeline: [
        {
          time: "09:30 - 10:00",
          title: "三宮 -> 有馬溫泉",
          note: "最推薦搭高速巴士從 MINT 神戶直達。",
          mapsQuery: "Arima Onsen",
          attractionIds: ["arima-onsen"]
        },
        {
          time: "10:00 - 12:30",
          title: "溫泉街主街散策",
          note: "可吃神戶牛可樂餅、有馬燒、關東煮。",
          mapsQuery: "Arima Onsen Street",
          attractionIds: ["arima-street", "takenaka-meat-shop"]
        },
        {
          time: "12:30 - 14:00",
          title: "午餐與甜點",
          note: "釜飯或蕎麥麵，甜點可吃 Gelato。",
          mapsQuery: "Arima Gelateria Stagione",
          attractionIds: ["stagione-gelato"]
        },
        {
          time: "14:00 - 16:00",
          title: "泡湯與採買",
          note: "安排金之湯 / 銀之湯，順便買炭酸煎餅。",
          mapsQuery: "Kin no Yu Arima",
          attractionIds: ["kin-no-yu", "gin-no-yu", "mitsumori-senbei"]
        },
        {
          time: "16:30 之後",
          title: "回三宮",
          note: "原路返回，這天不要排太滿。",
          mapsQuery: "Sannomiya Station Kobe",
          attractionIds: ["arima-onsen"]
        }
      ]
    },
    {
      day: 8,
      date: "2026-07-04",
      title: "回程日",
      area: "三宮 -> 神戶機場 -> 桃園",
      theme: "退房、前往機場、回台灣",
      summary: "早上從三宮搭 Port Liner 前往神戶機場，搭星宇航空回台，之後預約專車回台中。",
      highlights: ["remm plus 退房", "Port Liner", "JX0835 回程", "桃機接送"],
      rainPlan: {
        summary: "回程日下雨影響很小，重點是提早出門、把早餐和移動都留在站內或機場內完成。",
        items: ["早餐以 EKIZO 或車站周邊室內店家為主", "預留更多通勤緩衝", "到機場後再慢慢整理登機前事項"]
      },
      attractions: [
        {
          id: "remm-plus-kobe-day8",
          name: "remm plus Kobe Sannomiya",
          intro: "回程日前一晚住在三宮核心區，早上退房後移動到機場很順。",
          highlights: ["三宮住宿", "回程日出發點", "交通方便"],
          access: "說明：回程日前一晚的住宿點。",
          mapsQuery: "remm plus Kobe Sannomiya",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=remm+plus+Kobe+Sannomiya"
          }
        },
        {
          id: "ekizo-kobe",
          name: "EKIZO 神戶三宮",
          intro: "回程日上午如果要快速吃早餐，EKIZO 是最順手的選擇之一。",
          highlights: ["早餐方便", "車站共構", "回程日補給點"],
          access: "說明：神戶三宮站周邊商場，適合簡單早餐。",
          mapsQuery: "EKIZO Kobe Sannomiya",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=EKIZO+Kobe+Sannomiya"
          }
        },
        {
          id: "port-liner",
          name: "Port Liner",
          intro: "神戶機場與三宮之間最直接的大眾交通工具，回程日只要抓好月台就很輕鬆。",
          highlights: ["機場直達", "約 18 分鐘", "回程交通核心"],
          access: "說明：三宮往神戶機場時，注意搭乘往機場方向本線。",
          mapsQuery: "Port Liner Kobe Airport",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Port+Liner+Kobe+Airport"
          }
        },
        {
          id: "kobe-airport-day8",
          name: "神戶機場",
          intro: "這趟旅程的出入境機場，規模不大、動線短，回程壓力相對小。",
          highlights: ["動線短", "報到方便", "回程起點"],
          access: "說明：JX0835 回程報到機場。",
          mapsQuery: "Kobe Airport",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Kobe+Airport"
          }
        },
        {
          id: "taoyuan-t2",
          name: "桃園機場第二航廈",
          intro: "返台後的抵達點，接續預約接送回台中，作為旅程最後一站。",
          highlights: ["返台抵達點", "接送銜接", "旅程收尾"],
          access: "說明：抵達台灣後的主要銜接點。",
          mapsQuery: "Taoyuan International Airport Terminal 2",
          source: {
            label: "Google Maps",
            url: "https://maps.google.com/?q=Taoyuan+International+Airport+Terminal+2"
          }
        }
      ],
      timeline: [
        {
          time: "08:00 - 08:30",
          title: "退房與早餐",
          note: "remm plus 辦理退房，EKIZO 可簡單吃早餐。",
          mapsQuery: "remm plus Kobe Sannomiya",
          attractionIds: ["remm-plus-kobe-day8", "ekizo-kobe"]
        },
        {
          time: "08:40 - 09:00",
          title: "三宮 -> 神戶機場",
          note: "Port Liner 約 18 分鐘。",
          mapsQuery: "Kobe Airport",
          attractionIds: ["port-liner", "kobe-airport-day8"]
        },
        {
          time: "09:10 - 09:30",
          title: "機場報到",
          note: "神戶機場動線短，09:30 前到櫃檯很充裕。",
          mapsQuery: "Kobe Airport",
          attractionIds: ["kobe-airport-day8"]
        },
        {
          time: "11:40 - 13:40",
          title: "JX0835 起飛 -> 抵達桃園",
          note: "回程航班。",
          attractionIds: ["kobe-airport-day8", "taoyuan-t2"]
        },
        {
          time: "14:20 - 16:30",
          title: "桃園機場 -> 台中",
          note: "預約專車接送，傍晚回到家。",
          mapsQuery: "Taoyuan International Airport Terminal 2",
          attractionIds: ["taoyuan-t2"]
        }
      ]
    }
  ],
  flights: {
    airline: "星宇航空",
    tasks: [
      {
        label: "出發前完成線上 Check-in、選位、訂餐",
        done: false
      }
    ],
    segments: [
      {
        type: "去程",
        date: "2026-06-27",
        flightNo: "JX0834",
        route: "TPE -> KIX",
        departure: "06:50",
        arrival: "10:30"
      },
      {
        type: "回程",
        date: "2026-07-04",
        flightNo: "JX0835",
        route: "KIX -> TPE",
        departure: "11:40",
        arrival: "13:40"
      }
    ]
  },
  checklist: [
    {
      title: "住宿",
      items: [
        { label: "Booking 訂單確認", done: true },
        { label: "檢查入住時間 / 是否可寄放行李", done: false }
      ]
    },
    {
      title: "行程",
      items: [
        { label: "行程最終確認（交通＋餐廳）", done: false },
        { label: "熱門景點是否需預約（宮島 / 餐廳等）", done: false }
      ]
    },
    {
      title: "旅行用品",
      items: [
        { label: "常備藥品", done: false },
        { label: "個人用品（防曬、腸胃藥、暈車藥等）", done: false }
      ]
    },
    {
      title: "接送 / 交通",
      items: [
        { label: "接送服務", done: true },
        { label: "確認集合時間 / 地點", done: true }
      ]
    },
    {
      title: "入境日本（VJW）",
      items: [
        { label: "完成 Visit Japan Web 登錄", done: true }
      ],
      links: [
        {
          label: "Visit Japan Web",
          url: "https://www.vjw.digital.go.jp/main/#/vjwplo001"
        }
      ],
      privateNote: "帳號資訊已另外保存於 private/vjw-accounts.md"
    },
    {
      title: "網路",
      items: [
        { label: "決定 WIFI 機或 eSIM", done: false },
        { label: "如果選 WIFI 機，確認取件 / 寄送方式", done: false }
      ],
      links: [
        {
          label: "Jetfi",
          url: "https://www.jetfimobile.com/crosslandingpage?cid=KZK2C&&channelId=19"
        }
      ],
      privateNote: "eSIM 2GB / 8天約 300～400 元；飛買家 WIFI 機約 885 元。"
    },
    {
      title: "JR Pass",
      items: [
        { label: "確認瀨戶內地區鐵路周遊券已可兌換", done: true },
        { label: "熱門日先劃指定席", done: false }
      ],
      links: [
        {
          label: "JR West 官方說明",
          url: "https://www.westjr.co.jp/travel-information/tc/tickets-passes/other/setouchi/"
        },
        {
          label: "KKday 購買頁",
          url: "https://www.kkday.com/zh-tw/product/126027-emco-electronic-ticket-to-west-setouchi-jr-pass-japan"
        }
      ],
      privateNote: "價格：4,428 / 2,214；指定席需另外劃位。"
    }
  ],
  transport: {
    airportTransferConfirmed: true,
    portLiner: {
      duration: "神戶機場 <-> 三宮約 18 分鐘",
      payment: "刷交通卡即可",
      importantNote: "三宮回神戶機場時，要在第二月台搭乘往神戶機場的本線。"
    },
    jrPass: {
      name: "瀨戶內地區鐵路周遊券",
      purchased: true,
      prices: ["4,428", "2,214"],
      importantNote: "指定席需另外劃位",
      reserveMethods: ["綠色售票機", "JR窗口"],
      pickupLocation: "三之宮站兌換 / 領取",
      officialLink: "https://www.westjr.co.jp/travel-information/tc/tickets-passes/other/setouchi/",
      link: "https://www.kkday.com/zh-tw/product/126027-emco-electronic-ticket-to-west-setouchi-jr-pass-japan"
    },
    notes: [
      "三宮往神戶機場請搭第二月台，確認是往神戶機場方向的 Port Liner 本線。",
      "瀨戶內地區鐵路周遊券已購買，但指定席仍要另外劃位。",
      "Day 1 在三之宮站先處理 JR Pass 兌換，之後再移動到新神戶。",
      "Day 2、Day 4 長距離新幹線日，建議前一晚先確認回程班次彈性。",
      "Day 5 Marine Liner 想看海景的話，盡量提早排 1 號車 2 樓座位。",
      "Day 7 如果搭高速巴士去有馬溫泉，體力會比搭電車保留更多。"
    ]
  },
  connectivity: {
    task: "WIFI 機 / eSIM 決定",
    options: [
      {
        type: "WIFI機",
        choices: [
          { label: "飛買家 Traveltobuy", price: "885 元" },
          {
            label: "Jetfi",
            link: "https://www.jetfimobile.com/crosslandingpage?cid=KZK2C&&channelId=19"
          }
        ]
      },
      {
        type: "eSIM",
        choices: [
          { label: "2GB / 8天", price: "約 300～400 元" }
        ]
      }
    ]
  },
  weatherLinks: [
    {
      city: "神戶",
      url: "https://tenki.jp/forecast/6/31/6310/28100/10days.html",
      latitude: 34.6901,
      longitude: 135.1955
    },
    {
      city: "岡山",
      url: "https://tenki.jp/forecast/7/36/6610/33100/10days.html",
      latitude: 34.6551,
      longitude: 133.9195
    },
    {
      city: "尾道",
      url: "https://tenki.jp/forecast/7/37/6710/34205/10days.html",
      latitude: 34.4089,
      longitude: 133.2049
    },
    {
      city: "廣島",
      url: "https://tenki.jp/forecast/7/37/6710/34100/10days.html",
      latitude: 34.3853,
      longitude: 132.4553
    },
    {
      city: "門司港（北九州）",
      url: "https://tenki.jp/forecast/9/43/8220/40100/10days.html",
      latitude: 33.9459,
      longitude: 130.9619
    },
    {
      city: "高松",
      url: "https://tenki.jp/forecast/8/40/7200/37201/10days.html",
      latitude: 34.3428,
      longitude: 134.0466
    }
  ]
};
