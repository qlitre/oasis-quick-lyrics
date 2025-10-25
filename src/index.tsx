import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

const songs = [
  {
    songName: "Fuckin in the Bushes",
    albumName: "Standing on the Shoulder of Giants",
    lyricsUrl: "fuckin-in-the-bushes"
  },
  {
    songName: "Hello",
    albumName: "(What's the Story) Morning Glory?",
    lyricsUrl: "hello-2"
  },
  {
    songName: "Acquiesce",
    albumName: "Some Might Say (B-side)",
    lyricsUrl: "acquiesce"
  },
  {
    songName: "Morning Glory",
    albumName: "(What's the Story) Morning Glory?",
    lyricsUrl: "morning-glory"
  },
  {
    songName: "Some Might Say",
    albumName: "(What's the Story) Morning Glory?",
    lyricsUrl: "some-might-say"
  },
  {
    songName: "Bring it on Down",
    albumName: "Definitely Maybe",
    lyricsUrl: "bring-it-on-down"
  },
  {
    songName: "Cigarettes & Alcohol",
    albumName: "Definitely Maybe",
    lyricsUrl: "cigarettes-and-alcohol"
  },
  {
    songName: "Fade Away",
    albumName: "Cigarettes & Alcohol (B-side)",
    lyricsUrl: "fade-away"
  },
  {
    songName: "Supersonic",
    albumName: "Definitely Maybe",
    lyricsUrl: "supersonic"
  },
  {
    songName: "Roll With It",
    albumName: "(What's the Story) Morning Glory?",
    lyricsUrl: "roll-with-it"
  },
  {
    songName: "Talk Tonight",
    albumName: "Some Might Say (B-side)",
    lyricsUrl: "talk-tonight"
  },
  {
    songName: "Half The World Away",
    albumName: "Whatever (B-side)",
    lyricsUrl: "half-the-world-away"
  },
  {
    songName: "Little by Little",
    albumName: "Heathen Chemistry",
    lyricsUrl: "little-by-little"
  },
  {
    songName: "D'you Know What I Mean?",
    albumName: "Be Here Now",
    lyricsUrl: "dyou-know-what-i-mean"
  },
  {
    songName: "Stand By Me",
    albumName: "Be Here Now",
    lyricsUrl: "stand-by-me"
  },
  {
    songName: "Cast No Shadow",
    albumName: "(What's the Story) Morning Glory?",
    lyricsUrl: "cast-no-shadow"
  },
  {
    songName: "Slide Away",
    albumName: "Definitely Maybe",
    lyricsUrl: "slide-away"
  },
  {
    songName: "Whatever",
    albumName: "Single",
    lyricsUrl: "whatever"
  },
  {
    songName: "Live Forever",
    albumName: "Definitely Maybe",
    lyricsUrl: "live-forever"
  },
  {
    songName: "Rock 'n' Roll Star",
    albumName: "Definitely Maybe",
    lyricsUrl: "rock-n-roll-star"
  },
  // Encore
  {
    songName: "The Masterplan",
    albumName: "Wonderwall (B-side)",
    lyricsUrl: "the-masterplan"
  },
  {
    songName: "Don't Look Back in Anger",
    albumName: "(What's the Story) Morning Glory?",
    lyricsUrl: "dont-look-back-in-anger"
  },
  {
    songName: "Wonderwall",
    albumName: "(What's the Story) Morning Glory?",
    lyricsUrl: "wonderwall"
  },
  {
    songName: "Champagne Supernova",
    albumName: "(What's the Story) Morning Glory?",
    lyricsUrl: "champagne-supernova"
  }
]


app.get('/', (c) => {
  const mainSongs = songs.slice(0, 20)
  const encoreSongs = songs.slice(20)
  
  return c.render(
    <div>
      <h1>🎸 OASIS LIVE '25 🎸</h1>

      <div class="description">
        歌詞リンクは<a href="https://oasisinet.com/" target="_blank" rel="noopener noreferrer">Oasisinet</a>より
      </div>

      <div class="song-grid">
        {mainSongs.map((song, index) => (
          <div key={index} class="song-item">
            <a
              href={`https://oasisinet.com/lyrics/${song.lyricsUrl}/`}
            >
              <span class="song-number">{index + 1}.</span>
              <span class="song-title">{song.songName}</span>
            </a>
          </div>
        ))}
      </div>

      <div class="encore-section">
        <div class="encore-title">🎉 ENCORE</div>
        <div class="song-grid">
          {encoreSongs.map((song, index) => (
            <div key={index} class="song-item">
              <a
                href={`https://oasisinet.com/lyrics/${song.lyricsUrl}/`}
              >
                <span class="song-number">E{index + 1}.</span>
                <span class="song-title">{song.songName}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default app
