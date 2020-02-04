var resultElement;
var webView ;
var x = document.getElementById("news_feed");
  let Api_key = "774e08e6e8fa4d13afff165ab05f60d4";
  let newsFeedUrl = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-30&sortBy=publishedAt&apiKey=774e08e6e8fa4d13afff165ab05f60d4";

  let news_feed_Json = {
    "status": "ok",
    "totalResults": 3359,
    "articles": [
      {
        "source": {
          "id": "rt",
          "name": "RT"
        },
        "author": "RT",
        "title": "China’s digital yuan will displace US dollar’s hegemony & bitcoin will join race, investor tells RT’s Keiser Report",
        "description": "US Treasury Secretary Steven Mnuchin recently rejected suggestions that the Trump administration is weaponizing the dollar through its trade-restricting policies with other countries. Read Full Article at RT.com",
        "url": "https://www.rt.com/business/479579-yuan-bitcoin-displace-dollar/",
        "urlToImage": "https://cdni.rt.com/files/2020.01/article/5e32c67885f5404d585ee106.jpg",
        "publishedAt": "2020-01-30T12:13:00Z",
        "content": "Max Keiser is joined by American investor and the CIO of Morgan Creek Capital Mark Yusko to discuss media reports that weaponizing the greenback could kill its status as the world reserve currency. They also examine alternatives to the US dollar.\r\n“We’ve been… [+1146 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Newsbtc.com"
        },
        "author": "Yashu Gola",
        "title": "Bitcoin Eyes Price Explosion as Traders Assess FOMC Policy Update",
        "description": "Bitcoin was catching a breath on Thursday after staying in a parabolic uptrend this week on the backs of favorable risk-off mood. The benchmark cryptocurrency stabilized near $9,300 during the Asian and European trading sessions, helped by persistent worries …",
        "url": "https://www.newsbtc.com/2020/01/30/bitcoin-eyes-price-explosion-as-traders-assess-fomc-policy-update/",
        "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/01/shutterstock_372777733-1200x780.jpg",
        "publishedAt": "2020-01-30T12:05:31Z",
        "content": "Bitcoin was catching a breath on Thursday after staying in a parabolic uptrend this week on the backs of favorable risk-off mood.\r\nThe benchmark cryptocurrency stabilized near $9,300 during the Asian and European trading sessions, helped by persistent worries… [+3119 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cointelegraph.com"
        },
        "author": "Cointelegraph By Marie Huillet",
        "title": "Bank of Japan Must Be Ready to Issue Digital Currency, Says Exec",
        "description": "The deputy governor of the Bank of Japan has said the institution must be ready to issue a CBDC should public demand surge in response to technical developments",
        "url": "https://cointelegraph.com/news/bank-of-japan-must-be-ready-to-issue-digital-currency-says-exec",
        "urlToImage": "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy8zNThiYWUzMTU1MTZjZDQ1YjZjYjUyYmUxMDJmM2U4Yi5qcGc=.jpg",
        "publishedAt": "2020-01-30T11:58:00Z",
        "content": "The deputy governor of the Bank of Japan has said the institution must be ready to issue a central bank digital currency (CBDC) should public demand surge in response to technical developments.\r\nIn a strong statement of a future-oriented vision for the bank, … [+2438 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo.com"
        },
        "author": "Zack Guzman",
        "title": "Bitcoin could more than double again in 2020 after 30% surge, says Tom Lee",
        "description": "Bitcoin surging 30% to top its 200-day moving average could signal another strong year to come for bitcoin, says Fundstrat's Tom Lee.",
        "url": "https://news.yahoo.com/bitcoin-could-more-than-double-again-in-2020-after-30-surge-says-tom-lee-115607548.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/s1XoDX0cO872dA_YcgJckg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyODA7aD04MDYuNA--/https://s.yimg.com/uu/api/res/1.2/XJe7SJJYROdJilWK3dYSjQ--~B/aD01MDgxO3c9ODA2MDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2020-01/e04b2eb0-4311-11ea-b87b-eaa37e33c039",
        "publishedAt": "2020-01-30T11:56:07Z",
        "content": "After beating the overall markets return in 2019, bitcoin (BTC-USD) is off to its hottest start to the year in nearly a decade.\r\nRising nearly 30% so far in January to top $9,000, the worlds largest cryptocurrency by market cap is now trading above its 200-da… [+2155 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Letstalkbitcoin.com"
        },
        "author": "adam@letstalkbitcoin.com (The LTB Network), The LTB Network",
        "title": "Chain Reaction - Blockchain Capital's Aleks Larsen: The Tsunami Of DeFi Innovation",
        "description": "Host Tom Shaughnessy talks to Aleks Larsen, part of the Investment team at Blockchain Capital. Aleks discusses issues with decentralization, DeFi growth and opportunities, what place security tokens hold in the DeFi space, and more. This episode builds on a r…",
        "url": "https://letstalkbitcoin.com/blog/post/chain-reaction-blockchain-capital-aleks-larsen-defi-tsunami?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+TheDailyBitcoinShow+%28Let%27s+Talk+Bitcoin+Network+Feed%29",
        "urlToImage": "https://letstalkbitcoin.com/files/blogs/8421-c55ff44bbefa62a60a3565242daf20991a0e215dfdfe67dee2816cc915f3493a.jpg",
        "publishedAt": "2020-01-30T11:48:00Z",
        "content": "Click to download audio version\r\nHost Tom Shaughnessy talks to Aleks Larsen, part of the Investment team at Blockchain Capital. Aleks discusses issues with decentralization, DeFi growth and opportunities, what place security tokens hold in the DeFi space, and… [+4302 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cointelegraph.com"
        },
        "author": "Cointelegraph By William Suberg",
        "title": "Tesla Stock Outperforms Bitcoin in 2020 as $10K Bull Run Continues",
        "description": "Elon Musk has revealed he is on the fence when it comes to BTC, as investors look on while $TSLA seals near 40% gains in 4 weeks",
        "url": "https://cointelegraph.com/news/tesla-stock-outperforms-bitcoin-in-2020-as-10k-bull-run-continues",
        "urlToImage": "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9kNzNjMDUyYWRjMDNjMGE4YmI3ZDg2NjJlZGIwOGU2Mi5qcGc=.jpg",
        "publishedAt": "2020-01-30T11:28:00Z",
        "content": "Bitcoin (BTC) investors face double disappointment from Elon Musk this month as data shows Tesla is the one investment outdoing BTC in 2020. \r\nFigures from Cboe tracking $TSLA stocks against Bitcoin confirm that while BTC/USD has sealed 30% gains since Jan. 1… [+1599 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Coindesk.com"
        },
        "author": "Omkar Godbole",
        "title": "Bitcoin Reinforces Latest Rally With Defense of $9,200 Price Support",
        "description": "Bitcoin's price rally is looking solid, with the bulls defending key price support earlier on Thursday.",
        "url": "https://www.coindesk.com/bitcoin-reinforces-latest-rally-with-defense-of-9200-price-support",
        "urlToImage": "https://static.coindesk.com/wp-content/uploads/2018/03/bouncing-ball.jpg",
        "publishedAt": "2020-01-30T11:26:05Z",
        "content": "<ul><li>Bitcoin's defense of the former hurdle-turned-support at near $9,190 has strengthened the case for a continued rally toward higher resistance levels. </li><li>Longer duration charts are aligned in favor of a move to $10,000.</li><li> A channel breakdo… [+2461 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cityam.com"
        },
        "author": "Bhavin Patel",
        "title": "DEBATE: Are technology companies a threat to central banks?",
        "description": "Are technology companies a threat to central banks? Bhavin Patel, head of fintech research at OMFIF, says YES. Tech companies [...] The post DEBATE: Are technology companies a threat to central banks? appeared first on CityAM.",
        "url": "https://www.cityam.com/debate-are-technology-companies-a-threat-to-central-banks/",
        "urlToImage": "https://www.cityam.com/wp-content/uploads/2019/10/GettyImages-1171309345.jpg",
        "publishedAt": "2020-01-30T11:24:41Z",
        "content": "Are technology companies a threat to central banks?\r\nBhavin Patel, head of fintech research at OMFIF, says YES.\r\nTech companies are rapidly developing solutions to overcome shortfalls in the monetary system and proving flexible in tailoring their services to … [+2239 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Moneycontrol.com"
        },
        "author": null,
        "title": "Bitcoin gains 28% so far in 2020 amid risk-off sentiment",
        "description": "Bitcoin managed to outperform other asset classes including gold",
        "url": "https://www.moneycontrol.com/news/business/cryptocurrency/bitcoin-gains-28-so-far-in-2020-amid-risk-off-sentiment-4881561.html",
        "urlToImage": "https://static-news.moneycontrol.com/static-mcnews/2019/04/bitcoin-blockchain-1-770x433.jpg",
        "publishedAt": "2020-01-30T11:00:58Z",
        "content": "Bitcoin has emerged as the top rising asset class so far in 2020 returning a whopping 28.45 percent in less than a month, data shows.\r\nAccording to data collected from Coindesk, the world's largest cryptocurrency closed at $9,277 on January 29 versus $7,222 o… [+2763 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Newsbtc.com"
        },
        "author": "Nick Chong",
        "title": "Bitcoin Is “Screaming” For a Massive Surge: Factors That Will Send Price Surging Past $20,000",
        "description": "Ever since Bitcoin investors got a taste of parabolic price action in early-2019, during which BTC surged from the low-$3,000s to $14,000 in a few weeks’ time, they have been craving more. Related Reading: Andrew Yang Just Mentioned Crypto, Again. He Says Bit…",
        "url": "https://www.newsbtc.com/2020/01/30/bitcoin-screaming-massive-surge-factors-send-price-past-20000/",
        "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/01/shutterstock_1053081902-1200x780.jpg",
        "publishedAt": "2020-01-30T11:00:53Z",
        "content": "Ever since Bitcoin investors got a taste of parabolic price action in early-2019, during which BTC surged from the low-$3,000s to $14,000 in a few weeks time, they have been craving more.\r\nFortunately for bulls, they soon might get more of this rapid upward m… [+4045 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Bitcoinist.com"
        },
        "author": "Christine Vasileva",
        "title": "Bitcoin Cash Stopped Producing Blocks For 5.5 Hours, Find Out Why",
        "description": "Bitcoin Cash (BCH) experienced a serious mining anomaly today. The network failed to produce a single block in a five-hour period and it didn’t even cause a significant transaction backlog. Bitcoin Cash Low Usage Revealed by Slow Block Anomaly Bitcoin Cash us…",
        "url": "https://bitcoinist.com/bitcoin-cash-stopped-producing-blocks-for-5-5-hours-find-out-why/",
        "urlToImage": "https://bitcoinist.com/wp-content/uploads/2020/01/shutterstock_481946590.jpg",
        "publishedAt": "2020-01-30T11:00:17Z",
        "content": "Bitcoin Cash (BCH) experienced a serious mining anomaly today. The network failed to produce a single block in a five-hour period and it didn’t even cause a significant transaction backlog.\r\nBitcoin Cash Low Usage Revealed by Slow Block Anomaly\r\nBitcoin Cash … [+2639 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cryptoninjas.net"
        },
        "author": null,
        "title": "Crypto exchange CoinJar releases major upgrade for Android app - CryptoNinjas",
        "description": "Australian bitcoin and crypto exchange company CoinJar, today released a major update to the CoinJar app for Android. The upgrade provides users a better",
        "url": "https://www.cryptoninjas.net/2020/01/30/crypto-exchange-coinjar-releases-major-upgrade-for-android-app/",
        "urlToImage": "https://www.cryptoninjas.net/wp-content/uploads/coinjarandroidappnow.jpg",
        "publishedAt": "2020-01-30T10:43:02Z",
        "content": "Australian bitcoin and crypto exchange company CoinJar, today released a major update to the CoinJar app for Android. The upgrade provides users a better experience with consolidated navigation, transaction capability, and fuller more detailed account informa… [+1252 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Finextra.com"
        },
        "author": "Editorial Team",
        "title": "Landmark lawsuit sees bitcoin from ransomware attack frozen",
        "description": "A ransom payout of nearly £1 million in bitcoin lodged with Bitfinex has been frozen by the UK High Court in is deemed a landmark case for the status of crypto assets.",
        "url": "https://www.finextra.com/newsarticle/35192/landmark-lawsuit-sees-bitcoin-from-ransomware-attack-frozen?utm_medium=rssfinextra&utm_source=finextrafeed",
        "urlToImage": "https://www.finextra.com/finextra-images/top_pics/xl/cryptoassets.png",
        "publishedAt": "2020-01-30T10:25:00Z",
        "content": "A ransom payout of nearly £1 million in bitcoin lodged with Bitfinex has been frozen by the UK High Court in is deemed a landmark case for the status of crypto assets.\r\n A group of hackers paralysed a Canadian insurance company in October 2019, demanding a su… [+1193 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Finextra.com"
        },
        "author": "Editorial Team",
        "title": "Boerse Stuttgart crypto trading app attracts 81,000 active users in first year",
        "description": "Uncomplicated and secure trading in cryptocurrencies on the smartphone: this is possible with BISON, Boerse Stuttgart Group’s crypto app.",
        "url": "https://www.finextra.com/pressarticle/81304/boerse-stuttgart-crypto-trading-app-attracts-81000-active-users-in-first-year?utm_medium=rssfinextra&utm_source=finextrafeed",
        "urlToImage": "https://www.finextra.com/about/finextra-logo-alt-16-9.jpg",
        "publishedAt": "2020-01-30T10:21:00Z",
        "content": "Uncomplicated and secure trading in cryptocurrencies on the smartphone: this is possible with BISON, Boerse Stuttgart Groups crypto app. \r\nOne year since its launch, BISON now has around 81,000 active users. We are very satisfied with the level of take-up for… [+1634 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cointelegraph.com"
        },
        "author": "Cointelegraph By Aaron Wood",
        "title": "Binance Poaches Huobi's European and Latin American Business Lead",
        "description": "Binance has hired on Josh Goodbody, a former Huobi exec, as its new director of European and Latin American growth and institutional business",
        "url": "https://cointelegraph.com/news/binance-poaches-huobis-european-and-latin-american-business-lead",
        "urlToImage": "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy83MjQ4NWQzZWE0OGJjODJkM2IxYjU4ZjM2MGJhMjc4Ny5qcGc=.jpg",
        "publishedAt": "2020-01-30T09:00:00Z",
        "content": "Binance, the second-largest cryptocurrency exchange by 24-hour volume, has hired an exec from one of its foremost competitor exchanges, Huobi.\r\nAccording to an announcement shared with Cointelegraph on Jan. 30, Binance has hired Josh Goodbody as its new direc… [+1787 chars]"
      },
      {
        "source": {
          "id": "cbc-news",
          "name": "CBC News"
        },
        "author": "Thomas Daigle",
        "title": "Hackers were paid ransom after attack on Canadian insurance firm, court documents reveal",
        "description": "A Canadian insurance company suffered a ransomware attack last fall that saw 1,000 of its computers infected, raising questions about what sensitive data may have been accessed by hackers and whether the firm disclosed the breach. The case has only now come t…",
        "url": "https://www.cbc.ca/news/technology/unnamed-insurance-company-cyberattack-1.5445326",
        "urlToImage": "https://i.cbc.ca/1.5445386.1580343614!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_620/computer-user.jpg",
        "publishedAt": "2020-01-30T09:00:00Z",
        "content": "A Canadian insurance company suffered a ransomware attack last fall that saw 1,000 of its computers infected, raising questions about what sensitive data may have been accessed by hackers and whether the firm disclosed the breach to its customers. The case ha… [+4335 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Newsbtc.com"
        },
        "author": "Nick Chong",
        "title": "Tesla is the Greatest Performing Asset In 2020. It Even Surpassed Bitcoin",
        "description": "Bitcoin has had a stellar start to 2020, though it isn’t the year’s top-performing asset. Tesla, which trades on the NASDAQ under the ticker TSLA, is the asset that can actually lay claim to this title. As pointed out by Quantum Economics’ Mati Greenspan, for…",
        "url": "https://www.newsbtc.com/2020/01/30/tesla-is-the-greatest-performing-asset-in-2020-it-even-surpassed-bitcoin/",
        "urlToImage": "https://www.newsbtc.com/wp-content/uploads/2020/01/shutterstock_1316299463-1200x780.jpg",
        "publishedAt": "2020-01-30T08:34:14Z",
        "content": "Bitcoin has had a stellar start to 2020, though it isn’t the year’s top-performing asset. Tesla, which trades on the NASDAQ under the ticker TSLA, is the asset that can actually lay claim to this title.\r\nAs pointed out by Quantum Economics’ Mati Greenspan, fo… [+2877 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Thisismoney.co.uk"
        },
        "author": "By Tanya Jefferies for Thisismoney.co.uk",
        "title": "I'm 32, want to retire at 60 and have invested with Nutmeg and in bitcoin",
        "description": "Tim is a 32-year-old marketing manager at a manufacturing firm who wants to retire at 60. Ray Black, of Money Minder Financial Services, offers an investing makeover in Money Pit Stop.",
        "url": "https://www.thisismoney.co.uk/money/wealthcheck/article-7934867/Im-32-want-retire-60-invested-Nutmeg-bitcoin.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2020/01/28/09/23972916-0-image-a-13_1580205404959.jpg",
        "publishedAt": "2020-01-30T08:27:17Z",
        "content": "Tim and Liz: Kent couple want to get finances on track for a comfortable retirement\r\nIn our Money Pit Stop series, we ask an investing expert to give This is Money readers a free portfolio makeover.\r\nTim and his wife Liz live in Kent and want to invest for a … [+12433 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Insidehighered.com"
        },
        "author": "Lindsay McKenzie",
        "title": "Regis Paid Ransom to Cyberattackers",
        "description": "Regis University suffered from a crippling cyberattack last year just as students returned to campus for the fall semester. IT leaders at the private university in Denver revealed for the first time this week that the attack was a ransomware attack and that t…",
        "url": "https://www.insidehighered.com/quicktakes/2020/01/30/regis-paid-ransom-cyberattackers",
        "urlToImage": "https://www.insidehighered.com/sites/all/themes/ihecustom/images/facebook_icon_large.jpg",
        "publishedAt": "2020-01-30T08:00:00Z",
        "content": "Regis University suffered from a crippling cyberattack last year just as students returned to campus for the fall semester. IT leaders at the private university in Denver revealed for the first time this week that the attack was a ransomware attack and that t… [+933 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Theecologist.org"
        },
        "author": "brendan",
        "title": "Creating a blockchain 'sharing economy'",
        "description": "Blockchain can help us create the infrastructure for efficient circular economies - reducing waste and tackling climate breakdown.",
        "url": "https://theecologist.org/2020/jan/30/creating-blockchain-sharing-economy",
        "urlToImage": "https://theecologist.org/sites/default/files/styles/facebook/public/2020-01/software-3682509_1280.jpg?h=2e4af638&itok=iXOsFoH2",
        "publishedAt": "2020-01-30T07:00:01Z",
        "content": "Every now and then a person or an idea grabs our attention so much that we physically sit up straight in our seat and take notice. That happened to me last week, while listening to Vinay Gupta, who I interviewed at an Oxford Media and Technology Network event… [+5392 chars]"
      }
    ]
  };

function apiRequest() {
  fetch("https://cors-anywhere.herokuapp.com/"+newsFeedUrl)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        // issue with cors
      });
}
apiRequest();

 function feedNews(data) {
   // Reduce will iterate over all the array items and returns a single value.
    listItems = data.reduce((result, item) => {
     result += `<li class="focused" onclick="loadUrl('${item.url}')">
                   <a href="#">
                      <p>
                      <img class="image_thumbnail" src="${item.urlToImage}">
                      <b class="author">${item.author}</b></br>
                        ${item.title}
                        </p>
                      <span class="time">${item.publishedAt}</span>
                    </a>
                </li>`;
     return result;
   }, '');
   resultElement.innerHTML = listItems;
 }

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

function loadPage(){
  var inputVal = document.getElementById("myInput").value;
  if (validURL(inputVal)){
    $("#news_feed").hide();
    var webUrl = "https://"+inputVal;
    loadUrl(webUrl);
  }else {
    $("#news_feed").hide();
    $("#errorPage").show();
  }
}
 setTimeout(function () {
   resultElement = document.getElementById('myUl');
   webView = document.getElementById("webView1");
   feedNews(news_feed_Json.articles);
 },1000);
function loadUrl(url) {
  console.log(url);
  $.ajax({
    crossOrigin: true,
    url: "https://cors-anywhere.herokuapp.com/"+url,
    success: function(data) {
      $('#news_feed').hide();
      document.getElementById("myInput").value = url;
      $( '#bodyFrame').html(data);
    }
  });
}
window.addEventListener("keydown", ev => {
  if (ev.key == "Backspace"){
    document.getElementById("myInput").value = " ";
    location.reload();
  }
});

function taskDate(dateMilli) {
  var d = (new Date(dateMilli) + '').split(' ');
  d[2] = d[2] + ',';

  return [d[0], d[1], d[2], d[3]].join(' ');
}