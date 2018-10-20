export const initialState = {
  mids: [4, 5, 6],
  movies: {
    4: {
      id: 4,
      title: "Star Wars Episode IV",
      medias: [1,2],
      description: "The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 (Kenny Baker) and C-3PO (Anthony Daniels) to rescue the beautiful princess, help the Rebel Alliance, and restore freedom and justice to the Galaxy.",
      image: "StarWarsMedia/StarWarsMoviePoster1977.jpg"
    },
    5: {
      id: 5,
      title: "Star Wars Episode V",
      medias: [1,2],
      description: "The adventure continues in this \"Star Wars\" sequel. Luke Skywalker (Mark Hamill), Han Solo (Harrison Ford), Princess Leia (Carrie Fisher) and Chewbacca (Peter Mayhew) face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader (David Prowse).",
      image: "StarWarsMedia/SW_-_Empire_Strikes_Back.jpg"
    },
    6: {
      id: 6,
      title: "Star Wars Episode VI",
      medias: [1,2],
      description: "Luke Skywalker (Mark Hamill) battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo (Harrison Ford) and Princess Leia (Carrie Fisher) reaffirm their love and team with Chewbacca, Lando Calrissian (Billy Dee Williams), the Ewoks and the androids C-3PO and R2-D2 to aid in the disruption of the Dark Side and the defeat of the evil emperor.",
      image: "StarWarsMedia/ReturnOfTheJediPoster1983.jpg"
    }
  },

  mediaIds: [1, 2],
  media: {
    1: {
      type: "DVD",
      price: 20
    },
    2: {
      type: "Blu-Ray",
      price: 25
    },
  }

}

export const getMids = (state = initialState) => state.mids || initialState.mids
export const getMovies = (state = initialState) => state.movies || initialState.movies
export const getMediaIds = (state = initialState) => state.mediaIds || initialState.mediaIds
export const getMedia = (state = initialState) => state.media || initialState.media
