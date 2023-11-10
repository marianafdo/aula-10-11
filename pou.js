const express = require('express');
const srv = express();
class Pou {
    higiene
    xp

    constructor(higiene, xp){
        this.higiene = higiene;
        this.xp = xp;
    }

    tomarBanho(){
        this.higiene+=25;
        this.higiene>=100? this.xp++: undefined;
    }

    ensaboar(){
        this.higiene+=25;
        this.higiene>=100? this.xp++: undefined;
    }

    secar(){
        this.higiene+=25;
        this.higiene>=100? this.xp++: undefined;
    }

    escovarDentes(){
        this.higiene+=25;
        this.higiene>=100? this.xp++: undefined;
    }
}

srv.get('/pou/ensaboar/:higiene/:xp', (req,res)=>{
    const umPou = new Pou(Number.parseInt(req.params.higiene), Number.parseInt(req.params.xp));
    umPou.ensaboar();
    res.json(umPou);
})


srv.listen(4040, ()=>{
    console.log(`Aguardando Pou...`);
});
