const app = Vue.createApp({
    data() {
        return {
            currentNumber: 0,
            timer:null
        };
    },
    computed: {
        result() {
            window.clearTimeout(this.timer);
            this.setTimer()
            if (this.currentNumber > 37) {
                return 'Too much!'
            }
            if (this.currentNumber < 37) {
                return 'Not there yet'
            }
            return 37;
        }
    },
    methods: {
        addResult(addition) {
            this.currentNumber += addition;
        },
        setTimer(){
            this.timer = window.setTimeout(()=>{this.currentNumber=0;console.log('CLEARED NUMBER');},5000)

        }
    }
});

app.mount('#assignment');
