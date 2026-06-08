import PropTypes from "prop-types"
import { Container, CardImage } from "./styles.js"
import { CardButton } from "../CardButton"
import { useCart } from "../../hooks/CartContext"
import { formatPrice } from "../../utils/formatPrice.js"

export function CardProduct({product}){
    const { putProductInCart } = useCart()
    return(
        <Container>
            <CardImage src={product.url} alt={product.name}/>
            <div>
                <p>{product.name}</p>
                <strong>{formatPrice(product.price)}</strong>
            </div>
            <CardButton onClick={() => {putProductInCart(product)}} />
        </Container>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object,
}