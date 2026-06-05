import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton } from "./styles"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { api } from "../../services/api"
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const navigate = useNavigate();

    const { search } = useLocation();

    const queryParams = new URLSearchParams(search);

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoria = Number(queryParams.get('categoria'));
        return categoria || 0;
    });

    useEffect(() => {
        const categoria = Number(queryParams.get('categoria'));

        setActiveCategory(categoria || 0);
    }, [search]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            const categoriesArray = Array.isArray(data)
                ? data
                : data.categories || data.rows || [];

            const newCategories = [{ id: 0, name: "Todas" }, ...categoriesArray];

            setCategories(newCategories);
        }
        async function loadProducts() {
            const { data } = await api.get('/products');

            const productsArray = Array.isArray(data)
                ? data
                : data.products || data.rows || [];

            const newProducts = productsArray.map((product) => ({
                currencyValue: formatPrice(product.price),
                ...product
            }));

            setProducts(newProducts);
        }

        loadCategories();
        loadProducts();
    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter(
                (product) => product.category_id == activeCategory
            );

            setFilteredProducts(newFilteredProducts);
        }
    }, [products, activeCategory]);

    return (
        <main>
            <Container>
                <Banner>
                    <h1>O MELHOR
                        <br />
                        HAMBÚRGUER
                        <br />
                        <span>Esse cardápio está irresistível!</span>
                        ESTÁ AQUI!</h1>
                </Banner>
                <CategoryMenu> {categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`
                                },
                                {
                                    replace: true
                                },
                            )
                            setActiveCategory(category.id)
                        }}> {category.name} </CategoryButton>
                ))}
                </CategoryMenu>

                <ProductsContainer>
                    {filteredProducts.map((product) => (
                        <CardProduct product={product} key={product.id} />
                    ))}
                </ProductsContainer>
            </Container>
        </main>
    )
}