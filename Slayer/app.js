const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner:null,
            logMessages:[]
        }
    },
    computed: {
        monsterBarStyle() {
            if(this.monsterHealth<0){
                return { width: '0%' }
            }
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyle() {
            if(this.playerHealth<0){
                return { width: '0%' }
            }
            return { width: this.playerHealth + '%' }
        },
        mayUseSpecialAttack() {
            return  this.currentRound % 3;
        }
    },
    watch:{
        playerHealth(value){
            if(value<=0){
                if(this.monsterHealth<=0){
                    this.winner = 'draw';
                }
                this.winner = 'Monster'
            }
        },
        monsterHealth(value){
            if(value<=0){
                if(this.monsterHealth<=0){
                    this.winner = 'draw';
                }
                this.winner = 'You'
            }
        }
    },
    methods: {
        startNewGame(){
            this.playerHealth= 100;
            this.monsterHealth= 100;
            this.currentRound= 0;
            this.winner=null;
        },
        surrender(){
            this.winner = 'Monster';
        },
        attackMonster(dmg) {
            this.currentRound++
            let damage = getRandom(dmg)
            this.monsterHealth -= damage;
            this.addLogMessage('Player', 'attack', damage)
            this.attackPlayer(10)
        },
        specialAttack(dmg) {
            this.currentRound++

            let damage = getRandom(dmg)
            this.monsterHealth -= damage;
            this.addLogMessage('Player', 'attack', damage)
            this.attackPlayer(10)

        },
        attackPlayer(dmg) {
            let damage = getRandom(dmg);
            this.playerHealth -= damage;
            this.addLogMessage('Monster', 'attack', damage)

        },
        healPlayer(amount){
            let healAmount = getRandom(amount);
            this.currentRound++;
            this.addLogMessage('Player', 'healed', healAmount)

            if(this.playerHealth+healAmount>100){
                this.playerHealth=100
                return;
            }
            this.playerHealth+=healAmount;
            this.attackPlayer(10)

        },
        addLogMessage(who,what, value){
            this.logMessages.unshift({
                actionBy:who,
                actionType:what,
                actionValue:value
            })
        }

    }
})

function getRandom(dmg){
    return Math.floor(Math.random() * 5) * dmg
}
app.mount('#game')