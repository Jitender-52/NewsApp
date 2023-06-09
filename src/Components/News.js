import React, { Component } from "react";
import NewItem from "./NewsItem";

export class News extends Component {

  articles = [
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "Richard Morin",
        "title": "Men's NCAA Tournament updates: March Madness bracket reaches the Sweet 16 - USA TODAY",
        "description": "Following a three-day breather after a weekend of chaos, the men's NCAA Tournament returns to action with the start of the Sweet 16.",
        "url": "https://www.usatoday.com/story/sports/ncaab/2023/03/23/march-madness-live-bracket-updates-men-sweet-16/11520598002/",
        "urlToImage": "https://www.gannett-cdn.com/presto/2023/03/23/USAT/0a21a572-72ae-49b8-a759-0078b5cb0dba-USP_NCAA_Basketball__NCAA_Tournament_Second_Round-_7.jpg?crop=3929,2210,x1183,y173&width=3200&height=1800&format=pjpg&auto=webp",
        "publishedAt": "2023-03-24T00:11:15Z",
        "content": "Following a three-day breather after a weekend of chaos, the men's NCAA Tournament returns to action with the start of the Sweet 16.\r\nThe first of four games in the West and East regions tips off Thu… [+9461 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "WGME"
        },
        "author": "Aysia Reed, WGME",
        "title": "Mainers will be able to see five planets in the sky next week - WGME",
        "description": "Experts say more than half of the planets in the solar system will be visible in the sky from Saturday to Thursday.",
        "url": "https://wgme.com/news/local/more-than-half-of-the-planets-in-the-solar-system-will-be-visible-in-the-sky-saturday",
        "urlToImage": "https://wgme.com/resources/media/2421aa15-e8db-4bb3-8b76-549991ac8b95-large16x9_Planet.PNG?1679605952798",
        "publishedAt": "2023-03-23T23:33:52Z",
        "content": null
    },
    {
        "source": {
            "id": "bloomberg",
            "name": "Bloomberg"
        },
        "author": "Biz Carson",
        "title": "Jack Dorsey's Wealth Falls After Hindenburg's Block Short by $526 Million - Bloomberg",
        "description": "Block Inc. co-founder Jack Dorsey’s net worth was hammered after Hindenburg Research’s latest report, which alleged the payments company ignored widespread fraud.",
        "url": "https://www.bloomberg.com/news/articles/2023-03-23/jack-dorsey-s-wealth-tumbles-526-million-after-hindenburg-short",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iXGAvOoXsv7M/v1/1200x800.jpg",
        "publishedAt": "2023-03-23T23:08:40Z",
        "content": "Block Inc. co-founder Jack Dorsey’s net worth was hammered after Hindenburg Research’s latest report, which alleged the payments company ignored widespread fraud. \r\nDorsey’s fortune plunged by $526 m… [+155 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Lauren Feiner",
        "title": "TikTok CEO got grilled by lawmakers from both parties on whether the Chinese-owned app can protect American privacy - CNBC",
        "description": "Shou Zi Chew's testimony did not seem to quell many concerns that lawmakers had about its connections to China or the adequacy of its risk mitigation plan.",
        "url": "https://www.cnbc.com/2023/03/23/tiktok-ceo-grilled-by-lawmakers-from-both-parties-over-china-ties.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107214164-16795890162023-03-23t162204z_1183585422_rc2lzz9jlw9q_rtrmadp_0_usa-tiktok-congress.jpeg?v=1679611727&w=1920&h=1080",
        "publishedAt": "2023-03-23T22:48:47Z",
        "content": "\"Welcome to the most bipartisan committee in Congress,\" boomed Rep. Buddy Carter, R-Ga., speaking to the TikTok CEO Shou Zi Chew, a couple hours into a marathon hearing about the potential threat to … [+7915 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "Lamar Jackson update: NFL sends memo prohibiting teams from talking to QB representative; Ravens star responds - CBS Sports",
        "description": "Jackson continues to be stuck in contract purgatory",
        "url": "https://www.cbssports.com/nfl/news/lamar-jackson-update-nfl-sends-memo-prohibiting-teams-from-talking-to-qb-representative-ravens-star-responds/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/03/23/518e7bd0-17eb-4670-8563-8ba3f54dbefd/thumbnail/1200x675/a30ea1b323c9dd9687e3bfdb8b087cb5/lamar-jackson-2g.jpg",
        "publishedAt": "2023-03-23T22:30:00Z",
        "content": "As he often does on the football field, Lamar Jackson has tried to go on the offensive with regard to his ongoing contract situation. With Jackson and the Ravens still at a stalemate, a representativ… [+3181 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "FRANCE 24 English"
        },
        "author": "Benjamin DODMAN",
        "title": "'Democracy at stake': French protesters vent fury at Macron over pension push - FRANCE 24 English",
        "description": "French protesters downed their tools and marched once again in Paris and other cities on Thursday, galvanised by President Emmanuel Macron’s decision to ram his deeply unpopular pension reform through parliament without a vote, in what critics have branded a …",
        "url": "https://www.france24.com/en/france/20230323-democracy-at-stake-french-protesters-vent-fury-at-macron-over-pension-push",
        "urlToImage": "https://s.france24.com/media/display/5edeceac-c9bb-11ed-aad5-005056a90284/w:1280/p:16x9/WhatsApp%20Image%202023-03-23%20at%2019.14.04.jpeg",
        "publishedAt": "2023-03-23T21:44:05Z",
        "content": "French protesters downed their tools and marched once again in Paris and other cities on Thursday, galvanised by President Emmanuel Macrons decision to ram his deeply unpopular pension reform through… [+9909 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "KGO-TV"
        },
        "author": null,
        "title": "LISTEN: Heartbreaking moments on 'The JV Show' after news of Jeffrey Vandergrift's death confirmed - KGO-TV",
        "description": "\"The JV Show\" co-hosts shared their raw feelings on-air as news broke about the death of their beloved colleague and Wild 94.9 host. \"He was going through like absolute hell.\"",
        "url": "https://abc7news.com/jeffrey-vandergrift-wild-949-missing-dj-update-body-found-at-pier-39-949-jv/12998740/",
        "urlToImage": "https://cdn.abcotvs.com/dip/images/12998847_032323-kgo-jv-selena-quote-split-img.jpg?w=1600",
        "publishedAt": "2023-03-23T21:25:08Z",
        "content": "SAN FRANCISCO (KGO) -- \"The JV Show\" co-hosts shared their raw feelings on-air Thursday as news broke about the death of their beloved colleague and Wild 94.9 host, Jeffrey Vandergrift.\r\nA body that … [+2565 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Bryce Young's Highly Anticipated Pro Day Performance! - NFL",
        "description": "Check out our other channels:NFL Tuesday Night Gaming https://www.youtube.com/c/NFLTNGNFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtub...",
        "url": "https://www.youtube.com/watch?v=v-rceHC9wp0",
        "urlToImage": "https://i.ytimg.com/vi/v-rceHC9wp0/maxresdefault.jpg",
        "publishedAt": "2023-03-23T21:15:03Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Tornado in Montebello strongest to hit LA since 1983 - KCAL News",
        "description": "The National Weather Service classified the tornado as a \"EF-1\" and the twister reached winds up to 110 mph.",
        "url": "https://www.youtube.com/watch?v=39zv7sN0fYc",
        "urlToImage": "https://i.ytimg.com/vi/39zv7sN0fYc/maxresdefault.jpg",
        "publishedAt": "2023-03-23T20:56:26Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Eonline.com"
        },
        "author": "Gabrielle Chung",
        "title": "Tom Brady Shares Cryptic Quote About \"False Friends\" After Gisele Bündchen's Revealing Interview - E! NEWS",
        "description": "After Gisele Bündchen opened up about her divorce from Tom Brady in her Vanity Fair cover story, the retired quarterback shared a cryptic quote about \"the betrayal of false friends.\"",
        "url": "https://www.eonline.com/news/1369095/tom-brady-shares-cryptic-quote-about-false-friends-after-gisele-buendchens-revealing-interview",
        "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2022918/rs_1200x1200-221018142148-1200-Tom_Brady-The_2021_Sports_Illustrated_Awards-gj.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        "publishedAt": "2023-03-23T20:39:00Z",
        "content": "\"Listen, I have always cheered for him, and I would continue forever,\" the 42-year-old explained to the publication. \"If there's one person, I want to be the happiest in the world, it's him, believe … [+776 chars]"
    },
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Sarah Rumpf",
        "title": "Asteroid 2023 DZ2 to pass between Earth and moon this weekend - Fox News",
        "description": "A massive asteroid called '2023 DZ2' will come within 100,000 miles of Earth on Saturday, March 25. NASA says this event 'only happens once per decade'.",
        "url": "https://www.foxnews.com/science/asteroid-2023-dz2-pass-earth-moon-weekend",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/02/Asteroid.jpg",
        "publishedAt": "2023-03-23T19:58:00Z",
        "content": "A newly discovered asteroid will safely whiz by Earth this weekend, as NASA scientists estimate that the asteroid will be between 140 feet and 310 feet in diameter.\r\nThe asteroid, dubbed 2023 DZ2, wi… [+1719 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ESPN"
        },
        "author": null,
        "title": "Ezekiel Elliott eyeing Eagles, Jets, Bengals, sources say - ESPN",
        "description": "Ezekiel Elliott has narrowed down his options about where to play in 2023 to the Eagles, Jets and Bengals, sources told ESPN's Adam Schefter.",
        "url": "https://www.espn.com/nfl/story/_/id/35925944/ezekiel-elliott-eyeing-eagles-jets-bengals-sources-say",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0315%2Fr1144981_1296x729_16%2D9.jpg",
        "publishedAt": "2023-03-23T19:53:32Z",
        "content": "Former Dallas Cowboys running back Ezekiel Elliott has narrowed down his options about where to play in 2023 to the Philadelphia Eagles, New York Jets and Cincinnati Bengals, sources told ESPN's Adam… [+2451 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "John Rosevear, Michael Wayland",
        "title": "How Ford plans to turn a profit on EVs in under four years - CNBC",
        "description": "Ford forecast a drastic turnaround for its electric vehicle unit, reiterating that it expects its EV business to be solidly profitable by the end of 2026.",
        "url": "https://www.cnbc.com/2023/03/23/fords-plan-for-2026-ev-profitability.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107214155-1679588599087-Ford-OB-Photo-20230323-CC-PRESS-3.jpg?v=1679601531&w=1920&h=1080",
        "publishedAt": "2023-03-23T19:52:33Z",
        "content": "Ford Motor disclosed Thursday that its electric vehicle unit, called Ford Model e, lost $2.1 billion in 2022 and could lose as much as $3 billion in 2023.\r\nBut the company also forecast a drastic tur… [+5300 chars]"
    },
    {
        "source": {
            "id": "ign",
            "name": "IGN"
        },
        "author": "Tom Jorgensen",
        "title": "John Wick: Chapter 4 - End Credits Scene Check-In (No Spoilers) - IGN",
        "description": "Should you stay all the way through the credits for John Wick: Chapter 4? We've got the details on if there's an end credits scene (with no spoilers).",
        "url": "https://www.ign.com/articles/john-wick-chapter-4-ending-explained-end-credits-scene",
        "urlToImage": "https://assets-prd.ignimgs.com/2023/03/23/john-wick-chapter-4-ending-explained-post-credits-1679600855219.jpg?width=1280",
        "publishedAt": "2023-03-23T19:52:16Z",
        "content": "Are you wondering if theres an end-credits scene in the latest Keanu Reeves movie? Well, well tell you right here: There is one end-credits scene and no mid-credits scene.\r\nBe sure to check back this… [+1076 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Post"
        },
        "author": "Isabel Keane",
        "title": "Ukraine plans counter-offense on Russian troops 'losing steam' in Bakhmut - New York Post ",
        "description": "With Russia losing momentum in Bakhmut, the Ukrainian military will launch a highly-anticipated counter-attack “very soon,” one of the top ground forces commanders said Thursday.",
        "url": "https://nypost.com/2023/03/23/ukraine-plans-counter-offense-on-russian-troops-in-bakhmut/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/NYPICHPDPICT000008666787.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2023-03-23T19:28:00Z",
        "content": "The Ukrainian military will launch a highly anticipated counter-attack “very soon,” one of the top commanders said Thursday — as Russia loses momentum in Bakhmut.\r\nOleksandr Syrskyi, commander of the… [+2921 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Annie Grayer, Tierney Sneed",
        "title": "Manhattan DA's office slams House GOP inquiry, says it was motivated by Trump creating 'false expectation' of imminent arrest - CNN",
        "description": "The office of Manhattan District Attorney Alvin Bragg accused House Republicans of launching an \"an unprecedent inquiry into a pending local prosecution,\" while defending the investigation into former President Donald Trump's alleged hush money payments to an…",
        "url": "https://www.cnn.com/2023/03/23/politics/manhattan-da-house-gop-inquiry/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230322161646-congress-capitol-0315.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-03-23T19:27:00Z",
        "content": "The office of Manhattan District Attorney Alvin Bragg accused House Republicans of launching an an unprecedent inquiry into a pending local prosecution, while defending the investigation into former … [+3508 chars]"
    },
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "MICHAEL KUNZELMAN Associated Press",
        "title": "Rioter charged in Pelosi laptop theft sentenced to prison - ABC News",
        "description": "A Pennsylvania woman linked to a far-right extremist movement has been sentenced to three years in prison for storming the U.S. Capitol and invading then-House Speaker Nancy Pelosi’s office with other rioters",
        "url": "https://abcnews.go.com/Politics/wireStory/rioter-charged-pelosi-laptop-theft-sentenced-prison-98082303",
        "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
        "publishedAt": "2023-03-23T19:25:48Z",
        "content": "WASHINGTON -- A Pennsylvania woman linked to a far-right extremist movement was sentenced on Thursday to three years in prison for storming the U.S. Capitol, where she invaded then-House Speaker Nanc… [+5049 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deadline"
        },
        "author": "Lynette Rice",
        "title": "‘Vanderpump Rules’: Raquel Leviss And Scheana Shay Will Film Reunion Separately - Deadline",
        "description": "It looks like Bravo dodged a bullet with its planned Vanderpump Rules Season 10 reunion that’s taping today and whether it would run into problems by having stars Raquel Leviss and Scheana Sh…",
        "url": "https://deadline.com/2023/03/vanderpump-rules-raquel-leviss-scheana-shay-reunion-1235308557/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2023/01/vanderpump-rules-season-10.jpg?w=1000",
        "publishedAt": "2023-03-23T19:17:00Z",
        "content": "It looks like Bravo dodged a bullet with its planned Vanderpump Rules Season 10 reunion that’s taping today and whether it would run into problems by having stars Raquel Leviss and Scheana Shay in th… [+1469 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Parents of Michigan school shooter to stand trial for manslaughter - BBC",
        "description": "Ethan Crumbley shot and killed four students at Oxford High School in Michigan in November 2021.",
        "url": "https://www.bbc.com/news/world-us-canada-65058523",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16760/production/_129100029_gettyimages-1239416903.jpg",
        "publishedAt": "2023-03-23T18:58:38Z",
        "content": "The parents of a boy who shot and killed four high school classmates must stand trial for manslaughter, the Michigan Court of Appeals ruled. \r\nEthan Crumbley, 16, has pleaded guilty to terrorism and … [+2467 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The New Republic"
        },
        "author": "Alex Shephard",
        "title": "Ron DeSantis Looks Like a Loser - The New Republic",
        "description": "The Florida governor and presumptive presidential candidate is falling in the polls and making the same mistakes as Trump’s past rivals.",
        "url": "https://newrepublic.com/article/171344/ron-desantis-trump-loser",
        "urlToImage": "https://images.newrepublic.com/446b711214618d1b42914396580f869799d073d2.jpeg?w=1109&h=577&crop=faces&fit=crop&fm=jpg",
        "publishedAt": "2023-03-23T18:54:03Z",
        "content": "It's poorly written and has Trump's usual weird capitalization issues, but it is also a pretty compelling argument against a DeSantis presidential bid pic.twitter.com/9eVPZEYQhv\r\n Michael Cohen (@spe… [+2648 chars]"
    }
]

  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imgUrl={element.urlToImage} newsUrl={element.url} />
          </div>
          })}
        </div>
      </div>
    );
  }
}

export default News;
