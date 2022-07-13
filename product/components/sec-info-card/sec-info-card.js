import './sec-info-card.css'

class SecInfoCard extends HTMLElement{
    constructor(){
        super()
        this.textArr
    }

    static get observedAttributes(){
        return ['text-arr']
    }

    attributeChangedCallback(attr, oldVal, newVal){
        switch (attr){
            case 'text-arr':
                this.textArr = newVal
        }
    }
    createContent(){
        const arr = []
        const items = JSON.parse(this.textArr)
        
        items.forEach( text => {
            let textElement = document.createElement('span')
            
            textElement.classList.add('sec-info')
            textElement.textContent = text
            
            arr.push(textElement)
        })
        return arr
    }
    connectedCallback(){
        const spanArr = this.createContent()
        this.append(...spanArr)
    }
}

customElements.define('sec-info-card', SecInfoCard)