import PropTypes from "prop-types"
import { Container, CardImage } from "./styles.js"
import { useCart } from "../../hooks/CartContext"
import { CardButton } from "../CardButton"
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
            <CardButton onClick={() => {putProductInCart(product)}}></CardButton>
        </Container>
    )
}

CardProduct.propTypes = {
    product: PropTypes.object,
}