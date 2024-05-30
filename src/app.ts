class teglap_atlo {
    aSide?:HTMLInputElement | null;
    bSide?:HTMLInputElement | null;
    atlo?:HTMLInputElement | null;
    calcButton?:HTMLButtonElement | null;




    constructor() {
        this.bindHtml()
        this.handleEvent()

    }

    bindHtml() {
        this.aSide = document.querySelector('#aSide')
        this.bSide = document.querySelector('#bSide')
        this.atlo = document.querySelector('#atlo')
        this.calcButton = document.querySelector('#calcButton')
    }

    handleEvent() {
        this.calcButton?.addEventListener('click',()=>{
            this.startcalc()
        })
    }

    startcalc() {
        const aside = Number(this.aSide?.value)
        const bside = Number(this.bSide?.value)
        const atlo = this.calcperimeter(aside,bside)
        this.atlo!.value = String(atlo)
    }

    calcperimeter(aside:number,bside:number):number {
        const number1 = (aside * aside) + (bside * bside)
        return Math.sqrt(number1)
    }


}



new teglap_atlo()