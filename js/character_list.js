const app = Vue.createApp({
  data() {
    return {
      data: null,
      icons: null
    }
  },
  async mounted() {
    this.data = await axios.get('https://api.genshin.dev/characters')
      .then(res => res.data).catch(err => console.log(err))
  },
  methods: {
    getIconLink(character){
      return `https://api.genshin.dev/characters/${character}/icon`
    }
  }
})

app.mount('.content .character_list')