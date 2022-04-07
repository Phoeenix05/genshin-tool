const app = Vue.createApp({
  data() {
    return {
      data: null,
      icons: null
    }
  },
  async mounted() {
    const data = await axios.get('https://api.genshin.dev/characters')
      .then(res => res.data).catch(err => console.log(err))
    this.data = data
    
    const icons = {}
    data.forEach(character => {
      icons[character] = `https://api.genshin.dev/characters/${character}/icon`
    })
    this.icons = icons
  }
})

app.mount('.content .character_list')