import './cart-btn.css'

class CartBtn
{
    constructor(text)
    {
        this.text = text
    }
    get template()
    {
        return `
        <button class="btn" id="cart-btn">
            ${this.text}
        </button>
    `
    }
}

export default CartBtn