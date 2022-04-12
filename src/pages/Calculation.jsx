let Calculate = (obj) => {
    let sum =0;
    let t=obj.length
    
    for(let i of obj){
        sum+=parseFloat(i.Amount)
    }

    let singleExpend = parseFloat(sum/t)

    let taker = []
    let giver = []

    for(let i of obj){
        if(i.Amount-singleExpend>0)
            taker.push({Name : i.Name,Amount :(i.Amount-singleExpend)})
        else
            giver.push({Name : i.Name,Amount :(singleExpend-i.Amount)})
    }    
    console.log(sum,sum/t,t,giver,taker)

    let results = []

    while(taker.size !==0 && giver.size !==0 ){
        // for(let i =0 ;i<Math.min(taker.size,giver.size);i++){
            if(giver[0].Amount<taker[0].Amount){
                results.push({
                    giver : giver[0].Name,
                    amount : giver[0].Amount,
                    taker : taker[0].Name
                })

                taker[0].Amount = taker[0].Amount-giver[0].Amount
                giver.shift()
            }
            else if(giver[0].Amount===taker[0].Amount){
                results.push({
                    giver : giver[0].Name,
                    amount : giver[0].Amount,
                    taker : taker[0].Name
                })

                giver.shift()
                taker.shift()
            }
            else{
                results.push({
                        giver : giver[0].Name,
                        amount : taker[0].Amount,
                        taker : taker[0].Name
                })
                giver[0].Amount=giver[0].Amount-taker[0].Amount
                taker.shift()
            }
        // }
    }

    taker[0].Amount = "6890"
    console.log("0000",taker[0].Amount);
    console.log(results)
}

export default Calculate